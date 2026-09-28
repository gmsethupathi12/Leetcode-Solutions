document.addEventListener("DOMContentLoaded", async () => {
  const ghRepoInput = document.getElementById("ghRepo");
  const ghTokenInput = document.getElementById("ghToken");
  const ghBranchInput = document.getElementById("ghBranch");
  const autoSyncToggle = document.getElementById("autoSyncToggle");
  const saveBtn = document.getElementById("saveBtn");
  const testBtn = document.getElementById("testBtn");
  const messageEl = document.getElementById("message");
  const statusCard = document.getElementById("status-card");
  const statusText = document.getElementById("status-text");

  function showMessage(text, type = "success") {
    messageEl.className = `message ${type}`;
    messageEl.textContent = text;
    messageEl.classList.remove("hidden");
    setTimeout(() => {
      messageEl.classList.add("hidden");
    }, 4000);
  }

  function updateStatus(connected, name = "") {
    if (connected) {
      statusCard.className = "status-card connected";
      statusText.textContent = `Connected: ${name}`;
    } else {
      statusCard.className = "status-card disconnected";
      statusText.textContent = "Not Connected";
    }
  }

  // Load existing settings
  const stored = await chrome.storage.sync.get(["ghRepo", "ghToken", "ghBranch", "autoSyncEnabled"]);
  if (stored.ghRepo) ghRepoInput.value = stored.ghRepo;
  if (stored.ghToken) ghTokenInput.value = stored.ghToken;
  if (stored.ghBranch) ghBranchInput.value = stored.ghBranch;
  if (typeof stored.autoSyncEnabled !== "undefined") {
    autoSyncToggle.checked = stored.autoSyncEnabled;
  }

  if (stored.ghRepo && stored.ghToken) {
    updateStatus(true, stored.ghRepo);
  }

  // Save Settings
  saveBtn.addEventListener("click", async () => {
    const repo = ghRepoInput.value.trim();
    const token = ghTokenInput.value.trim();
    const branch = ghBranchInput.value.trim() || "main";
    const autoSync = autoSyncToggle.checked;

    if (!repo) {
      showMessage("Please enter your GitHub repository.", "error");
      return;
    }
    if (!repo.includes("/")) {
      showMessage("Repository must be in format 'owner/repo'.", "error");
      return;
    }
    if (!token) {
      showMessage("Please enter your GitHub Personal Access Token.", "error");
      return;
    }

    await chrome.storage.sync.set({
      ghRepo: repo,
      ghToken: token,
      ghBranch: branch,
      autoSyncEnabled: autoSync
    });

    updateStatus(true, repo);
    showMessage("Settings saved successfully! ✨", "success");
  });

  // Test Connection
  testBtn.addEventListener("click", () => {
    const repo = ghRepoInput.value.trim();
    const token = ghTokenInput.value.trim();

    if (!repo || !token) {
      showMessage("Enter repository and token to test.", "error");
      return;
    }

    testBtn.textContent = "Testing...";
    testBtn.disabled = true;

    chrome.runtime.sendMessage(
      { action: "TEST_CONNECTION", repo, token },
      response => {
        testBtn.textContent = "Test Connection";
        testBtn.disabled = false;

        if (response && response.success) {
          updateStatus(true, response.name);
          showMessage(`Connected to ${response.name}! Branch: ${response.defaultBranch}`, "success");
        } else {
          updateStatus(false);
          showMessage(response?.error || "Connection failed. Check permissions.", "error");
        }
      }
    );
  });
});
