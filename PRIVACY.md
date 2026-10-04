# Privacy Policy for LeetCode to GitHub Auto-Sync

> Last Updated: October 4, 2026

This Privacy Policy explains how the **LeetCode to GitHub Auto-Sync** Chrome Extension ("the Extension", "we", "us") handles user information.

---

## 1. Single Purpose & Core Functionality

The sole purpose of the Extension is to allow users to automatically commit and synchronize their accepted LeetCode problem solutions to their personal GitHub repositories.

---

## 2. Information Collection and Storage

### Personal Data
We do **not** collect, store, sell, or transmit any personally identifiable information (PII).

### GitHub Personal Access Tokens & Settings
- Your GitHub Personal Access Token (PAT), target repository name, branch, and configuration settings are saved **exclusively in your local browser storage** using the standard `chrome.storage.sync` API.
- Your token is **never** sent to any third-party server, database, or analytics platform.
- Your token is used solely to authenticate direct HTTPS requests from your browser to the official **GitHub REST API** (`https://api.github.com/`) to create repositories, check file statuses, and commit your code.

### LeetCode Solution Data
- The Extension accesses `leetcode.com` and `leetcode.cn` solely to extract the problem title, description, difficulty, topic tags, and your submitted solution code when an "Accepted" verdict occurs.
- This information is formatted locally in your browser and pushed directly to your specified GitHub repository.

---

## 3. Third-Party Services

The Extension communicates directly and exclusively with:
1. **LeetCode** (`https://leetcode.com`, `https://leetcode.cn`): To retrieve public problem metadata and detect submission verdicts.
2. **GitHub** (`https://api.github.com`): To perform user authentication and Git commit actions on behalf of the user.

No external tracking libraries, advertising networks, telemetry engines, or remote servers are included in this Extension.

---

## 4. Permissions Disclosure

- **`storage`**: Used exclusively to store user configuration and credentials locally on the user's browser.
- **`activeTab`**: Used only when the user clicks "Sync Active Tab Now" in the extension popup to read the current LeetCode problem URL.
- **`host_permissions` (`leetcode.com`, `leetcode.cn`, `api.github.com`)**: Required to observe solution submission status on LeetCode and commit files to GitHub.

---

## 5. Security

All network communications with LeetCode and GitHub are conducted strictly over encrypted HTTPS channels. We recommend creating a GitHub Personal Access Token with only the minimal necessary permissions (`repo` scope).

---

## 6. Open Source & Contact

The Extension is open-source. You can review the full source code or report issues on GitHub:
- **Repository:** [https://github.com/gmsethupathi12/Leetcode-Solutions](https://github.com/gmsethupathi12/Leetcode-Solutions)
- **Developer:** [gmsethupathi12](https://github.com/gmsethupathi12)
