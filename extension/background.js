// Background Service Worker for LeetCode GitHub Auto-Sync

// UTF-8 safe Base64 encoder
function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

// UTF-8 safe Base64 decoder
function base64ToUtf8(b64) {
  const binary = atob(b64.replace(/\s/g, ""));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

// GitHub API helper
async function getFileSha(owner, repo, path, branch, token) {
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}?ref=${branch}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json"
    }
  });
  if (res.status === 200) {
    const data = await res.json();
    return { sha: data.sha, content: data.content ? base64ToUtf8(data.content) : null };
  }
  return { sha: null, content: null };
}

async function commitFileToGitHub({ owner, repo, path, branch, content, message, token }) {
  const { sha } = await getFileSha(owner, repo, path, branch, token);
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  const body = {
    message: message || `Auto-sync: ${path}`,
    content: utf8ToBase64(content),
    branch: branch || "main"
  };

  if (sha) {
    body.sha = sha;
  }

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`GitHub API Error (${res.status}): ${errText}`);
  }

  return await res.json();
}

// Update or append row to README.md
async function updateReadmeIndex({ owner, repo, branch, token, problem, filePath, category }) {
  try {
    const { sha, content } = await getFileSha(owner, repo, "README.md", branch, token);
    let readmeText = content;

    const row = `| ${problem.qid} | [${problem.title}](${filePath}) | \`${problem.difficulty}\` | [View Solution](${filePath}) |`;

    if (!readmeText) {
      // Create initial README
      readmeText = `# 🚀 LeetCode Solutions Archive\n\nAuto-synced repository containing solved LeetCode problems organized strictly by data structure topics.\n\n### 📁 ${category.toUpperCase()}\n\n| # | Problem Title | Difficulty | Solution |\n|:---:|:---|:---:|:---:|\n${row}\n`;
    } else {
      // Check if problem already listed
      if (readmeText.includes(`| ${problem.qid} |`)) {
        return; // Already in table
      }

      const catHeader = `### 📁 ${category.toUpperCase()}`;
      if (readmeText.includes(catHeader)) {
        readmeText = readmeText.replace(catHeader, `${catHeader}\n${row}`);
      } else {
        readmeText += `\n\n${catHeader}\n\n| # | Problem Title | Difficulty | Solution |\n|:---:|:---|:---:|:---:|\n${row}\n`;
      }
    }

    await commitFileToGitHub({
      owner,
      repo,
      path: "README.md",
      branch,
      content: readmeText,
      message: `Update README: Add [${problem.qid}] ${problem.title}`,
      token
    });
  } catch (err) {
    console.warn("Could not update README.md automatically:", err);
  }
}

// Message Listener
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "TEST_CONNECTION") {
    const { repo, token } = request;
    const [owner, repoName] = (repo || "").split("/").map(s => s.trim());
    if (!owner || !repoName || !token) {
      sendResponse({ success: false, error: "Please provide both Repository (owner/repo) and Token." });
      return false;
    }

    fetch(`https://api.github.com/repos/${owner}/${repoName}`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" }
    })
      .then(res => res.json())
      .then(data => {
        if (data.id) {
          sendResponse({ success: true, name: data.full_name, defaultBranch: data.default_branch });
        } else {
          sendResponse({ success: false, error: data.message || "Repository not found or token lacks permissions." });
        }
      })
      .catch(err => {
        sendResponse({ success: false, error: err.message });
      });

    return true; // Keep message port open for async response
  }

  if (request.action === "SYNC_SOLUTION") {
    (async () => {
      try {
        const stored = await chrome.storage.sync.get(["ghRepo", "ghToken", "ghBranch", "autoSyncEnabled"]);
        if (stored.autoSyncEnabled === false) {
          sendResponse({ success: false, error: "Auto-sync is disabled in extension settings." });
          return;
        }

        const { ghRepo, ghToken, ghBranch = "main" } = stored;
        if (!ghRepo || !ghToken) {
          sendResponse({ success: false, error: "GitHub repository or Personal Access Token not configured." });
          return;
        }

        const [owner, repo] = ghRepo.split("/").map(s => s.trim());
        const { problem, code, lang, category, filename, markdown } = request.data;
        const filePath = `${category}/${filename}`;

        console.log(`[Auto-Sync] Committing ${filePath} to ${ghRepo}...`);

        const commitResult = await commitFileToGitHub({
          owner,
          repo,
          path: filePath,
          branch: ghBranch,
          content: markdown,
          message: `Solve: [${problem.qid}] ${problem.title} (${category}) [skip ci]`,
          token: ghToken
        });

        // Background update index
        updateReadmeIndex({
          owner,
          repo,
          branch: ghBranch,
          token: ghToken,
          problem,
          filePath,
          category
        });

        sendResponse({
          success: true,
          filePath,
          commitUrl: commitResult.commit?.html_url || `https://github.com/${owner}/${repo}/blob/${ghBranch}/${filePath}`
        });
      } catch (err) {
        console.error("[Auto-Sync Error]", err);
        sendResponse({ success: false, error: err.message });
      }
    })();

    return true; // Keep message channel open for async response
  }
});
