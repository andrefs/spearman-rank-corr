export default function spearman(X: number[], Y: number[]): number;
/**
 * Returns the tie-adjusted (average) ranks of `values`, in original input order.
 *
 * Ranks are 0-based; tied values receive the mean of their positions.
 * The result is suitable for computing Spearman's rho as the Pearson
 * correlation of the ranks.
 *
 * @param values - array of numbers
 * @returns ranks aligned with the input order (empty array for empty input)
 */
export declare function rank(values: number[]): number[];
