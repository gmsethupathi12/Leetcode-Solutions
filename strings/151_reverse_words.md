# 151. Reverse Words in a String

![Medium](https://img.shields.io/badge/Difficulty-Medium-orange)
![Topic](https://img.shields.io/badge/Topic-strings-blue)

- **LeetCode Link:** [Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)
- **Topic:** Two Pointers, String
- **Date Solved:** 2026-09-28
- **Language:** Python3
- **Runtime:** 35 ms (Beats 89.4%)
- **Memory:** 16.7 MB (Beats 76.2%)

---

## 📝 Problem Statement

Given an input string `s`, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The **words** in `s` will be separated by at least one space.

Return *a string of the words in reverse order concatenated by a single space*.

**Note** that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

### Example 1:
```
Input: s = "the sky is blue"
Output: "blue is sky the"
```

### Example 2:
```
Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
```

### Example 3:
```
Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
```

---

## 💡 Solution

```python
class Solution:
    def reverseWords(self, s: str) -> str:
        words = s.split()
        return " ".join(reversed(words))
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$ — Splitting and joining tokens traverses the string of length $n$.
- **Space Complexity:** $O(n)$ — List storing individual parsed words.
