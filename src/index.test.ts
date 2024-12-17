import { describe, it, expect } from 'vitest';
import rho from './index.ts';

describe('spearman-rank-corr', function() {
  it('#1: 0.6829', function() {
    let x = [2, 3, 3, 5, 5.5, 8, 10, 10];
    let y = [1.5, 1.5, 4, 3, 1, 5, 5, 9.5];

    const value = rho(x, y);
    expect(value).toBeCloseTo(0.6829268292682927, 6);
  });

  it('#2: -0.1758', function() {
    let x = [106, 86, 100, 101, 99, 103, 97, 113, 112, 110];
    let y = [7, 0, 27, 50, 28, 29, 20, 12, 6, 17];

    const value = rho(x, y);
    expect(value).toBeCloseTo(-0.17575757575757575, 6);
  });

  it('#3 -0.104867', function() {
    let x = [5, 3, 1, 1, 1, 2, 4, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    let y = [4, 2, 1, 3, 1, 1, 1, 4, 3, 2, 1, 1, 3, 5, 5, 5, 2, 3, 3, 3];

    const value = rho(x, y);
    expect(value).toBeCloseTo(-0.104867417651148, 6);
  });
  it('#3 0.370554', function() {
    let y = [4, 2, 1, 3, 1, 1, 1, 4, 3, 2, 1, 1, 3, 5, 5, 5, 2, 3, 3, 3];
    let z = [5, 3, 1, 1, 1, 1, 4, 3, 2, 1, 1, 1, 1, 1, 2, 4, 4, 3, 2, 2];

    const value = rho(y, z);
    expect(value).toBeCloseTo(0.37055425196656755, 6);
  });
  it('#3 0.365896', function() {
    let x = [5, 3, 1, 1, 1, 2, 4, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    let z = [5, 3, 1, 1, 1, 1, 4, 3, 2, 1, 1, 1, 1, 1, 2, 4, 4, 3, 2, 2];

    const value = rho(x, z);
    expect(value).toBeCloseTo(0.3658959519697062, 6);
  });
});
