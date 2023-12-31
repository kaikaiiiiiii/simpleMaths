const puzzle = {
    "row":[ //行
        [2,1,2,1],
        [2,2,1,2,1],
        [1,1,2,1],
        [1,1,1,2,1],
        [1,1,2,1,2,1],
        [2,2,1],
        [7,1],
        [2],
        [1,2,2,1,1],
        [1,4,1],
        [1,1,7],
        [1,1,2,2],
        [1,9],
        [1,2],
        [1,2,2,2]
    ],
    "col":[ //列
        [1,1,1,7],
        [2,1],
        [4,1],
        [1],
        [1,2,1,1,1],
        [1,1,1,1,3,1],
        [2,1],
        [6,2,1],
        [3,3],
        [6,7],
        [6,4],
        [2,1,1,1],
        [1,1,1,1],
        [5],
        [7,1]
    ],
    "size":[15,15] // 宽，即每 row 的总长度；高，即每 col 的总长度；
}

module.exports = puzzle;