// 把数字转为字符串以压缩总长度
// for (let i = 0; i < 128; i++) { console.log(`${i} : ${String.fromCharCode(i)}`) }
// 当转换数组时，必然需要对数值进行分隔，需要占用一个字符。或者将分隔字符本身作为字符串，类似于 Base64 将其一同进行编码。
// 另外一种方法是不使用分隔符，而是根据固定长度进行分割来还原数值，这样不需要分隔符但仍需要在较小数字前补 0 以保证长度一致。
// 例如当 number < 93 ^ 4 = 74805201 时，可以使用 4 个字符来表示，但此时对于 number = 996 时，转换后为 d+，需要补 0 为 00d+。
// 从压缩长度的目的考虑，固定长度位下的分隔符占用空间略大于 1/93，数值范围有确定限时浪费更少。
// 而 csv 式的分隔符占用空间则需要在每个数值前后都加上分隔符，需要在 number 高达 93 ^ 92 以上时，占用空间才会小于固定分隔。
// 由于 js 最大安全数字为 2^53 < 64^9 < 93^9，因此可以在文本文件首位添加一个分隔长度标记。

const fs = require('fs')

const s = `!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`
    .split('_').join('') // 去掉 _ 字符作为分隔符
const base = s.length

function encode(number) {
    let input = number
    if (typeof input !== 'number') {
        let input = parseInt(number)
        if (isNaN(input)) {
            throw new Error('Input is not a number')
        }
    }
    let string = ''
    while (input > 0) {
        string += s[input % base]
        input = Math.floor(input / base)
    }
    return string
}

let csvfile = process.argv[2] || 'test.csv'

console.log('Reading', csvfile, '...')

let content = fs.readFileSync(csvfile, 'utf-8')
let numbers = content.split('\n').map(e => parseInt(e))
let arr = numbers.map(encode)
let maxlength = 1;
arr.forEach(e => {
    if (e.length > maxlength) {
        maxlength = e.length
    }
})
arr = arr.map(e => e.padStart(maxlength, '_'))
let result = maxlength + arr.join('')
fs.writeFileSync('encode.txt', result, 'utf-8')

console.log('Done.')