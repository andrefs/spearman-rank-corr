"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = spearman;
function spearman(X, Y) {
    if (X.length !== Y.length) {
        throw new Error('Input arrays do not have the same length.');
    }
    const n = X.length;
    if (n === 0) {
        throw new Error('Input arrays are empty.');
    }
    const rankX = standardizeRank(addRank(prepare(X)));
    const rankY = standardizeRank(addRank(prepare(Y)));
    const Tx = T_(rankX);
    const Ty = T_(rankY);
    const numerator = Math.pow(n, 3) - n - 0.5 * Tx - 0.5 * Ty - 6 * Ed_2(rankX, rankY);
    const denominator = (Math.pow(n, 3) - n - Tx) * (Math.pow(n, 3) - n - Ty);
    return denominator <= 0 ? 0 : (numerator / Math.sqrt(denominator));
}
function prepare(values) {
    return values.map((v, i) => ({
        index: i,
        value: v,
        rank: 0,
    }));
}
function addRank(values) {
    return values
        .sort((a, b) => a.value - b.value)
        .map((v, i) => (Object.assign(Object.assign({}, v), { rank: i })));
}
function standardizeRank(timeSeries) {
    const groups = {};
    for (let i = 0; i < timeSeries.length; i++) {
        groups[timeSeries[i].value] = groups[timeSeries[i].value] || [];
        groups[timeSeries[i].value].push(timeSeries[i]);
    }
    for (const [_, values] of Object.entries(groups)) {
        const groupMean = values.reduce((a, b) => a + b.rank, 0) / values.length;
        for (const value of values) {
            value.rank = groupMean;
        }
    }
    return timeSeries.sort((a, b) => a.index - b.index);
}
function Ed_2(X, Y) {
    return X.map((x, i) => Math.pow(x.rank - Y[i].rank, 2)).reduce((a, b) => a + b, 0);
}
function T_(values) {
    const groups = {};
    for (let i = 0; i < values.length; i++) {
        groups[values[i].rank] = groups[values[i].rank] || [];
        groups[values[i].rank].push(values[i]);
    }
    return Object.entries(groups)
        .map(([_, values]) => Math.pow(values.length, 3) - values.length)
        .reduce((a, b) => a + b, 0);
}
//# sourceMappingURL=index.js.map