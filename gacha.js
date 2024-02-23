// function round(a, n) {
//     let p = a, q = n;
//     let count = 0;

//     while (p > 0) {
//         let rand = Math.floor(Math.random() * q) + 1;
//         if (rand <= p) { p-- }
//         q--;
//         count++;
//     }

//     return count;
// }


// function repeat(r, func) {
//     let result = [];
//     for (let i = 0; i < r; i++) {
//         result.push(func());
//     }
//     let avg = result.reduce((a, b) => a + b, 0) / r;
//     let dist = result.reduce((base, add) => {

//         if (base[add]) {
//             base[add]++;
//         } else {
//             base[add] = 1;
//         }

//         return base
//     }, {});

//     return { avg };
// }

// console.log(repeat(10000000, () => round(99, 199)))



function calc(a, n) {
    return a * (n + 1) / (a + 1)
}

