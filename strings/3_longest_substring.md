# 3. Longest Substring Without Repeating Characters

![Medium](https://img.shields.io/badge/Difficulty-Medium-orange)
![Topic](https://img.shields.io/badge/Topic-strings-blue)

- **LeetCode Link:** [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
- **Topic:** Hash Table, String, Sliding Window
- **Date Solved:** 2026-09-28
- **Language:** Python3
- **Runtime:** 51 ms (Beats 87.3%)
- **Memory:** 16.8 MB (Beats 79.5%)

---

## 📝 Problem Statement

Given a string `s`, find the length of the **longest substring** without repeating characters.

### Example 1:
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

### Example 2:
```
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

### Example 3:
```
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

---

## 💡 Solution

```python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_index_map = {}
        left = 0
        max_length = 0
        
        for right, ch in enumerate(s):
            if ch in char_index_map and char_index_map[ch] >= left:
                left = char_index_map[ch] + 1
                
            char_index_map[ch] = right
            max_length = max(max_length, right - left + 1)
            
        return max_length
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$ — Sliding window where right pointer visits each character once.
- **Space Complexity:** $O(\min(m, n))$ — Size of the charset or string length in dictionary.
