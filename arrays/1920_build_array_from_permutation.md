# 1920. Build Array from Permutation

![Easy](https://img.shields.io/badge/Difficulty-Easy-green)
![Topic](https://img.shields.io/badge/Topic-arrays-blue)

- **LeetCode Link:** [Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation/)
- **Topic:** Array, Simulation
- **Date Solved:** 2026-09-28
- **Author:** [Sethupathi_1228](https://leetcode.com/u/Sethupathi_1228/)

---

## 📝 Problem Statement

Given a **zero-based permutation** `nums` (**0-indexed**), build an array `ans` of the **same length** where `ans[i] = nums[nums[i]]` for each `0 
Explanation: The array ans is built as follows: 
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
    = [0,1,2,4,5,3]
```

### Example 2:

```
**Input:** nums = [5,0,1,2,3,4]
**Output:** [4,5,0,1,2,3]
**Explanation:** The array ans is built as follows:
ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
    = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]
    = [4,5,0,1,2,3]
```

 

**Constraints:**

- `1 <= nums.length <= 1000`

	- `0 <= nums[i] < nums.length`

	- The elements in `nums` are **distinct**.

 

**Follow-up:** Can you solve it without using an extra space (i.e., `O(1)` memory)?

---

## 💡 Solution

```python
# Optimal Solution for Build Array from Permutation
# LeetCode Problem #1920
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
