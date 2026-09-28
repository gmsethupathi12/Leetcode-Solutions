# 217. Contains Duplicate

![Easy](https://img.shields.io/badge/Difficulty-Easy-green)
![Topic](https://img.shields.io/badge/Topic-arrays-blue)

- **LeetCode Link:** [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)
- **Topic:** Array, Hash Table
- **Date Solved:** 2026-09-28
- **Language:** Python3
- **Runtime:** 398 ms (Beats 85.7%)
- **Memory:** 31.2 MB (Beats 68.9%)

---

## 📝 Problem Statement

Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

### Example 1:
```
Input: nums = [1,2,3,1]
Output: true
```

### Example 2:
```
Input: nums = [1,2,3,4]
Output: false
```

### Example 3:
```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

---

## 💡 Solution

```python
class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        seen = set()
        for num in nums:
            if num in seen:
                return True
            seen.add(num)
        return False
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$ — Single pass through array, set insertions and lookups are $O(1)$ on average.
- **Space Complexity:** $O(n)$ — Set contains up to $n$ unique elements.
