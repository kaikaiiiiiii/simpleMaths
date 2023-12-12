/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle == "") {
    return 0;
  }
  return haystack.indexOf(needle);
};

var haystack = "hello",
  needle = "ll";
console.log(strStr(haystack, needle));
