# 28. Find the Index of the First Occurrence in a String

![Easy](https://img.shields.io/badge/Difficulty-Easy-green)
![Topic](https://img.shields.io/badge/Topic-strings-blue)

- **LeetCode Link:** [Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)
- **Topic:** Two Pointers, String, String Matching, Z Algorithm, Knuth–Morris–Pratt Algorithm, Boyer–Moore String-Search Algorithm
- **Date Solved:** 2026-10-01
- **Language:** python3
- **Runtime:** Accepted
- **Memory:** 

---

## 📝 Problem Statement

Given two strings `needle` and `haystack`, return the index of the first occurrence of `needle` in `haystack`, or `-1` if `needle` is not part of `haystack`.

 

### Example 1:

```
**Input:** haystack = "sadbutsad", needle = "sad"
**Output:** 0
**Explanation:** "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
```

### Example 2:

```
**Input:** haystack = "leetcode", needle = "leeto"
**Output:** -1
**Explanation:** "leeto" did not occur in "leetcode", so we return -1.
```

 

**Constraints:**

- `1 4`

	- `haystack` and `needle` consist of only lowercase English characters.

---

## 💡 Solution

```python
class Solution {
    public int strStr(String haystack, String needle) {
      return haystack. indexOf(needle);
    }
}

```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
