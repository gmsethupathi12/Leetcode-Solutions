# 2. Add Two Numbers

![Medium](https://img.shields.io/badge/Difficulty-Medium-orange)
![Topic](https://img.shields.io/badge/Topic-linked_lists-blue)

- **LeetCode Link:** [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)
- **Topic:** Linked List, Math, Recursion
- **Date Solved:** 2026-09-28
- **Language:** Python3
- **Runtime:** 56 ms (Beats 86.8%)
- **Memory:** 16.6 MB (Beats 84.1%)

---

## 📝 Problem Statement

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

### Example 1:
```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
```

### Example 2:
```
Input: l1 = [0], l2 = [0]
Output: [0]
```

### Example 3:
```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
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
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        curr = dummy
        carry = 0
        
        while l1 or l2 or carry:
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            
            total = val1 + val2 + carry
            carry = total // 10
            curr.next = ListNode(total % 10)
            curr = curr.next
            
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next
                
        return dummy.next
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(\max(m, n))$ — Where $m$ and $n$ represent the length of `l1` and `l2` respectively.
- **Space Complexity:** $O(\max(m, n))$ — The length of the new list is at most $\max(m, n) + 1$.
