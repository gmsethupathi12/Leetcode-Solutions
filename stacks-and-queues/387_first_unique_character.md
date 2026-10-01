# 387. First Unique Character in a String

![Easy](https://img.shields.io/badge/Difficulty-Easy-green)
![Topic](https://img.shields.io/badge/Topic-stacks_and_queues-blue)

- **LeetCode Link:** [First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)
- **Topic:** Hash Table, String, Queue, Counting
- **Date Solved:** 2026-10-01
- **Language:** python3
- **Runtime:** Accepted
- **Memory:** 

---

## 📝 Problem Statement

Given a string `s`, find the **first** non-repeating character in it and return its index. If it **does not** exist, return `-1`.

 

### Example 1:

**Input:** s = "leetcode"

**Output:** 0

**Explanation:**

The character `&#39;l&#39;` at index 0 is the first character that does not occur at any other index.

### Example 2:

**Input:** s = "loveleetcode"

**Output:** 2

### Example 3:

**Input:** s = "aabb"

**Output:** -1

 

**Constraints:**

- `1 5`

	- `s` consists of only lowercase English letters.

---

## 💡 Solution

```python
class Solution {
    public int firstUniqChar(String s) {
        for(int i=0;i<s.length();i++){
            char ch=s.charAt(i);
        if(s.indexOf(ch)==s.lastIndexOf(ch)){
            return i;
        }    
        }
            return -1;
        
    }
}

```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
