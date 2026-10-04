# Chrome Web Store Listing — LeetCode to GitHub Auto-Sync

> Last Updated: 2026-10-04

---

## 📋 Store Listing

**Extension Name** [REQUIRED]
```text
LeetCode to GitHub Auto-Sync
```
*(30 characters — Max 75 allowed)*

**Short Description** [REQUIRED]
```text
Instantly auto-sync your accepted LeetCode solutions directly to your personal GitHub repository, organized by topic in 1 second.
```
*(130 characters — Max 132 allowed)*

**Detailed Description** [REQUIRED]
```text
⚡ Automatically sync, organize, and archive your LeetCode problem solutions directly to your personal GitHub repository in 1 second!

Whenever you solve a problem on LeetCode and receive a green "Accepted" verdict, this extension captures your solution code, runtime, memory, topic tags, and problem statement, automatically commits it to your GitHub repository, and updates your repository's overview statistics.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ KEY FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• 🚀 1-Second Instant Commit
No manual copy-pasting. As soon as your solution is Accepted, it is pushed directly to your repository in ~1 second.

• 📊 Smart Folder Organization
Organize your solutions automatically by:
  - Data Structure & Topic (arrays/, strings/, trees/, linked-lists/, dynamic-programming/, etc.)
  - Difficulty (easy/, medium/, hard/)
  - Single flat directory

• 📝 Rich Markdown Documentation
Every problem committed to your repository includes:
  - Difficulty & Topic Badges
  - LeetCode Problem Link
  - Runtime & Memory benchmarks (% beaten)
  - Full problem description with examples and constraints
  - Formatted, syntax-highlighted solution code
  - Time & Space complexity analysis

• 📈 Auto-Generated Repository README
Automatically creates and updates a categorized table of contents and progress tracker on your repository's homepage.

• ➕ 1-Click Repository Creator
Don't have a repository yet? Create and link a new Public or Private repository directly from the extension in 1 click.

• 🔒 100% Client-Side & Private
Your GitHub Personal Access Token and data are stored locally in your browser. No third-party servers, no analytics, no tracking.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛠️ HOW TO USE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Install the extension.
2. Click the extension icon and paste your GitHub Personal Access Token (classic token with 'repo' scope).
3. Select an existing repository or click "➕ Create New Repo".
4. Solve any problem on LeetCode and click Submit.
5. Watch your solution instantly commit to GitHub!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛡️ PRIVACY & PERMISSIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This extension runs completely on your machine:
• Storage: Saves your repository name and Personal Access Token locally in your browser.
• Host Permissions: Connects to leetcode.com to capture submission results and api.github.com to commit your code.
• No data is ever shared with external third-party servers.

Support & Open Source: https://github.com/gmsethupathi12/Leetcode-Solutions
```

**Category** [REQUIRED]
```text
Developer Tools
```

**Single Purpose** [REQUIRED]
```text
Automatically commits accepted LeetCode solutions to a user's GitHub repository.
```

**Primary Language** [REQUIRED]
```text
English
```

---

## 🛡️ Permissions Justification (For Review Team)

| Permission | Type | Justification |
|---|---|---|
| `storage` | permissions | Required to store user settings (target repository name, branch, folder structure preference, and GitHub Personal Access Token) locally in the browser. |
| `activeTab` | permissions | Required to allow the user to trigger a manual one-click sync of their currently open LeetCode problem tab. |
| `https://leetcode.com/*` | host_permissions | Required to detect when a problem is submitted on LeetCode, retrieve the problem statement metadata, and extract the accepted solution code. |
| `https://leetcode.cn/*` | host_permissions | Required to support LeetCode China users submitting solutions on leetcode.cn. |
| `https://api.github.com/*` | host_permissions | Required to make authenticated GitHub REST API requests to create repositories, check file SHAs, commit markdown files, and update the repository index. |

---

## 🔒 Privacy & Data Use Disclosures

### Single Purpose Compliance
- **Declared Purpose:** Automatically commit accepted LeetCode solutions to the user's personal GitHub repository.
- **Does the extension collect personal data?** NO.
- **Does the extension transmit data to third-party servers?** NO (only directly between user's browser and GitHub REST API).

### Data Collection Declarations (Form in CWS)
- **Personally identifiable information:** None collected.
- **Health / Financial information:** None collected.
- **Authentication information:** Token is stored locally in browser `chrome.storage.sync` and used solely to communicate with `api.github.com`.
- **Personal communications:** None collected.
- **Location:** None collected.
- **Web history:** None collected.
- **User activity:** Only reads LeetCode submission status on leetcode.com problem pages.
- **Website content:** Only reads Monaco editor code on leetcode.com.

### Privacy Policy URL [REQUIRED]
```text
https://github.com/gmsethupathi12/Leetcode-Solutions/blob/main/PRIVACY.md
```

---

## 🎨 Graphics & Store Assets

| Asset | Dimensions | Status | Location |
|---|---|---|---|
| **Store Icon** | 128×128 PNG | ✅ Ready | `store_assets/icon128.png` |
| **Small Promo Tile** | 440×280 PNG | ✅ Ready | `store_assets/promo_small_440x280.png` |
| **Marquee Promo Tile**| 1400×560 PNG| ✅ Ready | `store_assets/promo_marquee_1400x560.png` |
| **Screenshot 1** | 1280×800 PNG | ✅ Ready | `store_assets/screenshot1_dashboard_1280x800.png` |
| **Screenshot 2** | 1280×800 PNG | ✅ Ready | `store_assets/screenshot2_leetcode_sync_1280x800.png` |
| **Screenshot 3** | 1280×800 PNG | ✅ Ready | `store_assets/screenshot3_github_repo_1280x800.png` |

---

## 📦 Package to Upload

- **Upload ZIP:** `leetcode-sync-cws.zip`
- **Version:** `1.2.0`
- **Manifest Version:** `3`
