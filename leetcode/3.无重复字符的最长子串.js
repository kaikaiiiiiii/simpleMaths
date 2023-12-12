/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var i = 0, n = s.length;
    if (n < 2) return n;
    var max = 0
    var sub = '';
    for (let j = 1; j <= n; j++) {
        sub = s.substr(i, j);
        var add = s[j];
        var cut = sub.indexOf(add);
        if (cut == -1) { continue } else {
            i = i + cut + 1;
            max = max > sub.length ? max : sub.length;
        }
    }
    return max;
};

// @lc code=end

