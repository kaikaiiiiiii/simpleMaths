const fs = require('fs')
const [B0, T0, N0, L] = [50, 4, 7, 300]

function formula(T, N, S) {
    let P1 = 1 - 10 ** (-T / T0)
    let P2 = 1 + Math.sqrt(2) * (10 ** ((1 - N) / (N0 - 1)))
    let A = P1 * S * P2
    let result = B0 * 2 / Math.PI * Math.atan(A / L)
    return result.toFixed(3)
}

function findEdge(S) {

    function TEdge(N, S) {
        let curve = []
        for (let t = 4; t < 100; t++) {
            if (formula(t, N, S) != formula(t + 1, N, S)) {
                curve.push(t)
            }
        }
        return curve[curve.length - 1]
    }

    function NEdge(S) {
        let curve = []
        for (let n = 200; n > 5; n--) {
            let t = TEdge(n, S)
            if (t != TEdge(n + 1, S)) {
                curve.push({ n, t })
            }
        }
        return curve[curve.length - 1]
    }

    let { n, t } = NEdge(S)

    return { n, t, S, manaPoint: formula(t, n, S) }

}

for (let s = 100; s < 9000; s += 100) {
    console.log(findEdge(s))
}