/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    var left = [];
    var star = [];
    // 不需要 right 数组;
    for (let i = 0; i < s.length; i++){
        if (s[i] == '(') {
            left.push(i);
        }
        if (s[i] == '*') {
            star.push(i);
        }
        if (s[i] == ')') {
            // 消栈并判断组合数
            if (left.length == 0 && star.length == 0) {
                return false
            };
            if (left.length > 0) {
                left.pop()
            } else {
                star.pop()
            }
        }
    }
    if (left.length > star.length) {
        return false
    } else {
        //每一个 left 都有一个比它靠后的 star 才能消
        while (left.length>0) {
            if (star[star.length - 1] > left[left.length - 1]) {
                star.pop();
                left.pop();
            } else {
                return false
            }
        }
        return true;
    }
};

var test = "(())((())()()(*)(*()(())())())()()((()())((()))(*"
console.log(checkValidString(test))