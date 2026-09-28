# 25. Reverse Nodes in k-Group

![Hard](https://img.shields.io/badge/Difficulty-Hard-red)
![Topic](https://img.shields.io/badge/Topic-linked_lists-blue)

- **LeetCode Link:** [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
- **Topic:** Linked List, Recursion
- **Date Solved:** 2025-11-20
- **Author:** [Sethupathi_1228](https://leetcode.com/u/Sethupathi_1228/)

---

## 📝 Problem Statement

Given the `head` of a linked list, reverse the nodes of the list `k` at a time, and return *the modified list*.

`k` is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of `k` then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list&#39;s nodes, only nodes themselves may be changed.

 

### Example 1:

```
**Input:** head = [1,2,3,4,5], k = 2
**Output:** [2,1,4,3,5]
```

### Example 2:

```
**Input:** head = [1,2,3,4,5], k = 3
**Output:** [3,2,1,4,5]
```

 

**Constraints:**

- The number of nodes in the list is `n`.

	- `1 <= k <= n <= 5000`

	- `0 <= Node.val <= 1000`

 

**Follow-up:** Can you solve the problem in `O(1)` extra memory space?

---

## 💡 Solution

```python
# Optimal Solution for Reverse Nodes in k-Group
# LeetCode Problem #25
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
