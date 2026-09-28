# 5. Longest Palindromic Substring

![Medium](https://img.shields.io/badge/Difficulty-Medium-orange)
![Topic](https://img.shields.io/badge/Topic-strings-blue)

- **LeetCode Link:** [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)
- **Topic:** Two Pointers, String, Dynamic Programming
- **Date Solved:** 2026-09-28
- **Language:** Python3
- **Runtime:** 320 ms (Beats 82.6%)
- **Memory:** 16.6 MB (Beats 88.1%)

---

## 📝 Problem Statement

Given a string `s`, return *the longest palindromic substring* in `s`.

### Example 1:
```
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
```

### Example 2:
```
Input: s = "cbbd"
Output: "bb"
```

---

## 💡 Solution

```python
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if not s:
            return ""
        
        start, end = 0, 0
        
        def expand_around_center(left: int, right: int) -> tuple[int, int]:
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return left + 1, right - 1

        for i in range(len(s)):
            # Odd length palindromes
            l1, r1 = expand_around_center(i, i)
            if r1 - l1 > end - start:
                start, end = l1, r1
                
            # Even length palindromes
            l2, r2 = expand_around_center(i, i + 1)
            if r2 - l2 > end - start:
                start, end = l2, r2
                
        return s[start : end + 1]
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n^2)$ — Expanding around $2n - 1$ centers takes $O(n)$ each.
- **Space Complexity:** $O(1)$ — Only indices tracked.
