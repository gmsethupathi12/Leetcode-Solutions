# 121. Best Time to Buy and Sell Stock

![Easy](https://img.shields.io/badge/Difficulty-Easy-green)
![Topic](https://img.shields.io/badge/Topic-arrays-blue)

- **LeetCode Link:** [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
- **Topic:** Array, Dynamic Programming
- **Date Solved:** 2026-09-28
- **Language:** Python3
- **Runtime:** 612 ms (Beats 91.2%)
- **Memory:** 27.4 MB (Beats 73.1%)

---

## 📝 Problem Statement

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

### Example 1:
```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
```

### Example 2:
```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
```

---

## 💡 Solution

```python
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        min_price = float('inf')
        max_profit = 0
        
        for price in prices:
            if price < min_price:
                min_price = price
            elif price - min_price > max_profit:
                max_profit = price - min_price
                
        return max_profit
```

---

## ⏱️ Complexity Analysis

- **Time Complexity:** $O(n)$ — Single traversal of prices array.
- **Space Complexity:** $O(1)$ — Only `min_price` and `max_profit` variables used.
