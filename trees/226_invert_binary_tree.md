# 226. Invert Binary Tree

![Easy](https://img.shields.io/badge/Difficulty-Easy-green)
![Topic](https://img.shields.io/badge/Topic-trees-blue)

- **LeetCode Link:** [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
- **Topic:** Tree, Depth-First Search, Breadth-First Search, Binary Tree
- **Date Solved:** 2026-09-28
- **Language:** Python3
- **Runtime:** 31 ms (Beats 92.1%)
- **Memory:** 16.5 MB (Beats 85.3%)

---

## 📝 Problem Statement

Given the `root` of a binary tree, invert the tree, and return *its root*.

### Example 1:
```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

### Example 2:
```
Input: root = [2,1,3]
Output: [2,3,1]
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
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if not root:
            return None
            
        root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
        return root
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$ — Since each node in the tree is visited exactly once.
- **Space Complexity:** $O(h)$ — Where $h$ is the height of the tree ($O(\log n)$ balanced, $O(n)$ worst-case).
