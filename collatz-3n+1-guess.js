function collatzSteps(strN) {
    let n;
    try {
        n = BigInt(strN)
    } catch (error) {
        console.log(error)
        return 0
    }
    let max = n;

    // 记录步数
    let steps = 0;

    // 循环直到 n 变为 1
    while (n !== 1n) {
        if (n % 2n === 0n) {
            n /= 2n;
        } else {
            n = 3n * n + 1n;
            if (n > max) max = n;
        }
        steps++;
    }

    return { steps, max };
}

let StartTime = new Date()
console.log(StartTime);
let forend = process.argv[2] || 10 ** 7;
let maxSteps = 0n, thatN = 0n, maxN = 0n;
for (let i = 1n; i < forend; i++) {
    let { steps, max } = collatzSteps(i);
    if (steps > maxSteps) {
        maxSteps = steps;
        thatN = i;
        console.log(`N: ${thatN}, new Steps: ${maxSteps}, Max: ${maxN}`);
    }
    if (max > maxN) {
        maxN = max;
        console.log(`N: ${i}, Steps: ${steps}, new Max: ${maxN}`);
    }
    if (i % 10n ** 6n === 0n) {
        console.log(`N: ${i}, Steps: ${steps}`);
    }
}
let EndTime = new Date()
console.log(`Start: ${StartTime}, End: ${EndTime}, Time: ${(EndTime - StartTime) / 1000} seconds`);