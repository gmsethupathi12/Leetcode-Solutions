# 23. Merge k Sorted Lists

![Hard](https://img.shields.io/badge/Difficulty-Hard-red)
![Topic](https://img.shields.io/badge/Topic-linked_lists-blue)

- **LeetCode Link:** [Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
- **Topic:** Linked List, Divide and Conquer, Heap (Priority Queue), Merge Sort
- **Date Solved:** 2026-09-28
- **Language:** Python3
- **Runtime:** 72 ms (Beats 94.5%)
- **Memory:** 19.8 MB (Beats 68.4%)

---

## 📝 Problem Statement

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

*Merge all the linked-lists into one sorted linked-list and return it.*

### Example 1:
```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
```

### Example 2:
```
Input: lists = []
Output: []
```

### Example 3:
```
Input: lists = [[]]
Output: []
```

---

## 💡 Solution

```python
import heapq

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def mergeKLists(self, lists: list[Optional[ListNode]]) -> Optional[ListNode]:
        heap = []
        
        # Push initial heads to min-heap with unique counter for tie-breaking
        for i, node in enumerate(lists):
            if node:
                heapq.heappush(heap, (node.val, i, node))
                
        dummy = ListNode(0)
        curr = dummy
        count = len(lists)
        
        while heap:
            val, _, node = heapq.heappop(heap)
            curr.next = node
            curr = curr.next
            
            if node.next:
                heapq.heappush(heap, (node.next.val, count, node.next))
                count += 1
                
        return dummy.next
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(N \log k)$ — Where $k$ is the number of linked lists and $N$ is total nodes across all lists. Heap comparison takes $O(\log k)$.
- **Space Complexity:** $O(k)$ — Min-heap contains at most $k$ elements at any given time.
