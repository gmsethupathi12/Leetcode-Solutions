# 21. Merge Two Sorted Lists

![Easy](https://img.shields.io/badge/Difficulty-Easy-green)
![Topic](https://img.shields.io/badge/Topic-linked_lists-blue)

- **LeetCode Link:** [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)
- **Topic:** Linked List, Recursion
- **Date Solved:** 2026-09-28
- **Language:** Python3
- **Runtime:** 38 ms (Beats 87.9%)
- **Memory:** 16.5 MB (Beats 90.3%)

---

## 📝 Problem Statement

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return *the head of the merged linked list*.

### Example 1:
```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

### Example 2:
```
Input: list1 = [], list2 = []
Output: []
```

### Example 3:
```
Input: list1 = [], list2 = [0]
Output: [0]
```

---

## 💡 Solution

```python
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(-1)
        tail = dummy
        
        while list1 and list2:
            if list1.val <= list2.val:
                tail.next = list1
                list1 = list1.next
            else:
                tail.next = list2
                list2 = list2.next
            tail = tail.next
            
        tail.next = list1 if list1 else list2
        return dummy.next
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n + m)$ — Iterates through elements in `list1` and `list2`.
- **Space Complexity:** $O(1)$ — Only a dummy node and pointers are allocated.
