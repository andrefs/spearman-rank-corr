interface RankedValue {
  value: number;
  index: number;
  rank: number;
}

export default function spearman(X: number[], Y: number[]) {
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

  const numerator =
    Math.pow(n, 3) - n - 0.5 * Tx - 0.5 * Ty - 6 * Ed_2(rankX, rankY);
  const denominator = (Math.pow(n, 3) - n - Tx) * (Math.pow(n, 3) - n - Ty);

  return denominator <= 0 ? 0 : numerator / Math.sqrt(denominator);
}

function prepare(values: number[]) {
  return values.map((v, i) => ({
    index: i,
    value: v,
    rank: 0,
  }));
}

function addRank(values: RankedValue[]): RankedValue[] {
  return values
    .sort((a, b) => a.value - b.value)
    .map((v, i) => ({
      ...v,
      rank: i,
    }));
}

function standardizeRank(values: RankedValue[]) {
  const groups: { [rank: string]: RankedValue[] } = {};
  for (let i = 0; i < values.length; i++) {
    const v = values[i]!.value;
    groups[v] = groups[v] || [];
    groups[v]!.push(values[i]!);
  }

  for (const [_, values] of Object.entries(groups)) {
    const groupMean = values.reduce((a, b) => a + b.rank, 0) / values.length;
    for (const value of values) {
      value.rank = groupMean;
    }
  }

  return values.sort((a, b) => a.index - b.index);
}

function Ed_2(X: RankedValue[], Y: RankedValue[]) {
  return X.map((x, i) => Math.pow(x.rank - Y[i]!.rank, 2)).reduce(
    (a, b) => a + b,
    0,
  );
}

function T_(values: RankedValue[]) {
  const groups: { [rank: number]: RankedValue[] } = {};
  for (let i = 0; i < values.length; i++) {
    const r = values[i]!.rank;
    groups[r] = groups[r] || [];
    groups[r]!.push(values[i]!);
  }
  return Object.entries(groups)
    .map(([_, values]) => Math.pow(values.length, 3) - values.length)
    .reduce((a, b) => a + b, 0);
}
