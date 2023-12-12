const fs = require('fs')

function random() {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)
}

let content = new Array(10000).fill(0).map(() => random()).join('\n')
fs.writeFileSync('test.csv', content, 'utf-8');