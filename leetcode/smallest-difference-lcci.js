var smallestDifference = function(a, b) {
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    var i = j = 0;
    var max = Infinity;
    while (i < a.length && j < b.length) {
        var cur = Math.abs(a[i] - b[j]);
        max = max > cur ? cur : max;
        if (a[i] > b[j]) { j++ } else { i++ };
    }
    return max
};

var a = [1, 3, 15, 11, 2];
var b = [23, 127, 235, 19, 8];
console.log(smallestDifference(a, b));