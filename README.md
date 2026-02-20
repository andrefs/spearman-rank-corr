# spearman-rank-corr

Spearman's rank correlation coefficient in TypeScript.

This is a port of [spearman-rho](https://github.com/ericrange/spearman-rho), adding types.
Also, I removed all the promises and the `lodash` dependency.

In statistics, Spearman's rank correlation coefficient (or Spearman's rho) is a nonparametric measure of statistical dependence between two variables.

It assesses how well the relationship between two variables can be described using a monotonic function. If there are no repeated data values, a perfect Spearman correlation of +1 or −1 occurs when each of the variables is a perfect monotone function of the other. (Wikipedia)

## Installation

```shell
npm install spearman-rank-corr
```

## Usage

```typescript
import rho from 'spearman-rank-corr';

const x = [2.0, 3.0, 3.0, 5.0, 5.5, 8.0, 10.0, 10.0];
const y = [1.5, 1.5, 4.0, 3.0, 1.0, 5.0, 5.0, 9.5];

const value = rho(x, y);
console.log(value);
```
