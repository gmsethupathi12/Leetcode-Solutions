# 1. Two Sum

![Easy](https://img.shields.io/badge/Difficulty-Easy-green)
![Topic](https://img.shields.io/badge/Topic-arrays-blue)

- **LeetCode Link:** [Two Sum](https://leetcode.com/problems/two-sum/)
- **Topic:** Array, Hash Table
- **Date Solved:** 2026-09-28
- **Language:** Python3
- **Runtime:** 48 ms (Beats 88.4%)
- **Memory:** 17.5 MB (Beats 65.2%)

---

## 📝 Problem Statement

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

### Example 1:
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

### Example 2:
```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints:
- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists.

---

## 💡 Solution

```python
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        seen = {}
        for i, num in enumerate(nums):
            complement = target - num
            if complement in seen:
                return [seen[complement], i]
            seen[num] = i
        return []
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$ — We traverse the list containing $n$ elements only once. Each look-up in the hash table takes $O(1)$ time on average.
- **Space Complexity:** $O(n)$ — The extra space required depends on the number of items stored in the hash table, which stores up to $n$ elements.
