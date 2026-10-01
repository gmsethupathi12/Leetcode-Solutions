# 1108. Defanging an IP Address

![Easy](https://img.shields.io/badge/Difficulty-Easy-green)
![Topic](https://img.shields.io/badge/Topic-strings-blue)

- **LeetCode Link:** [Defanging an IP Address](https://leetcode.com/problems/defanging-an-ip-address/)
- **Topic:** String
- **Date Solved:** 2026-10-01
- **Language:** java
- **Runtime:** Accepted
- **Memory:** 

---

## 📝 Problem Statement

Given a valid (IPv4) IP `address`, return a defanged version of that IP address.



A *defanged IP address* replaces every period `"."` with `"[.]"`.



 


### Example 1:



```
**Input:** address = "1.1.1.1"
**Output:** "1[.]1[.]1[.]1"
```
### Example 2:



```
**Input:** address = "255.100.50.0"
**Output:** "255[.]100[.]50[.]0"
```

 


**Constraints:**




- The given `address` is a valid IPv4 address.

---

## 💡 Solution

```java
class Solution {
    public int strStr(String haystack, String needle) {
      return haystack. indexOf(needle);
    }
}
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$
- **Space Complexity:** $O(1)$
