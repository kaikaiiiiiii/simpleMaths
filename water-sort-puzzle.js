var puzzle = `
黄橙紫灰
红红青橙
紫黄粉橙
青红红灰
黄橙灰青
粉紫紫粉
粉青黄灰
空
空
`

puzzle = puzzle.split('\n').filter(l => l.length > 0);
puzzle = puzzle.map(l => { if (l == '空') { return '' } else { return l } });

// check puzzle is valid
var o = {};
puzzle.forEach(l => {
    l.split('').forEach(c => {
        if (o[c]) { o[c]++ } else { o[c] = 1 }
    });
});
if (Object.keys(o).every(k => o[k] == 4)) {
    console.log('4 of each color checked.');
} else {
    console.log('puzzle is invalid', o);
    process.exit();
}


var total = puzzle.length;
var empty = puzzle.filter(l => l.length == 0).length;

var puzzleToSolve = puzzle.map(l => l.split(''));

function pour(puzzle, from, to) {
    var putout = puzzle[from].slice();
    var getin = puzzle[to].slice();
    var color = putout[0];
    while (putout[0] == color) {
        getin.unshift(putout.shift());
    }
    if (getin.length > 4) {
        return false
    } else {
        var newPuzzle = puzzle.slice();
        newPuzzle[from] = putout;
        newPuzzle[to] = getin;
        return newPuzzle;
    }
}

function solve(puzzle, route, round) {
    var route = route || [];
    var round = round || 0;
    var lock = puzzle.map(l => l.length == 4 && l.every((c, i, a) => c == a[0]));
    var same = puzzle.map(l => l.length < 4 && l.every((c, i, a) => c == a[0]));
    if (lock.filter(l => l).length == total - empty) {
        return route
    }

    for (let i = 0; i < puzzle.length; i++) {
        for (let j = 0; j < puzzle.length; j++) {
            if (i == j) continue; // 不允许自己到自己
            if (puzzle[i].length == 0 || puzzle[j].length == 4) continue; // 转出不为空，转入不满
            if (puzzle[j].length > 0 && puzzle[i][0] != puzzle[j][0]) continue; // 颜色不同不能转
            if (lock[i] || lock[j]) continue; // 锁定杯子不能转
            if (same[i] && puzzle[j].length == 0) continue; // 单色颜色的杯子不能倒到空杯子里
            var newPuzzle = pour(puzzle, i, j);
            if (newPuzzle == false) continue;
            var newRoute = route.slice();
            newRoute.push([i + 1, '->', j + 1].join(''));
            var subroute = solve(newPuzzle, newRoute, round + 1);
            if (subroute) { return subroute } else continue;
        }
    }
    return false;
}


console.log(solve(puzzleToSolve));