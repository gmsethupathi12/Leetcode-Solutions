# 104. Maximum Depth of Binary Tree

![Easy](https://img.shields.io/badge/Difficulty-Easy-green)
![Topic](https://img.shields.io/badge/Topic-trees-blue)

- **LeetCode Link:** [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- **Topic:** Tree, Depth-First Search, Breadth-First Search, Binary Tree
- **Date Solved:** 2026-09-28
- **Language:** Python3
- **Runtime:** 39 ms (Beats 88.7%)
- **Memory:** 17.8 MB (Beats 74.3%)

---

## 📝 Problem Statement

Given the `root` of a binary tree, return *its maximum depth*.

A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the farthest leaf node.

### Example 1:
```
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

### Example 2:
```
Input: root = [1,null,2]
Output: 2
```

---

## 💡 Solution

```python
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if not root:
            return 0
        return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$ — Traverses all $n$ nodes of the tree.
- **Space Complexity:** $O(h)$ — Call stack proportional to tree height $h$.
