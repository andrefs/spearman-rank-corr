"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_1 = __importDefault(require("./index"));
(0, vitest_1.describe)('spearman-rank-corr', function () {
    (0, vitest_1.it)('#1: 0.6829', function () {
        let x = [2, 3, 3, 5, 5.5, 8, 10, 10];
        let y = [1.5, 1.5, 4, 3, 1, 5, 5, 9.5];
        const value = (0, index_1.default)(x, y);
        (0, vitest_1.expect)(value).toBeCloseTo(0.6829268292682927, 6);
    });
    (0, vitest_1.it)('#2: -0.1758', function () {
        let x = [106, 86, 100, 101, 99, 103, 97, 113, 112, 110];
        let y = [7, 0, 27, 50, 28, 29, 20, 12, 6, 17];
        const value = (0, index_1.default)(x, y);
        (0, vitest_1.expect)(value).toBeCloseTo(-0.17575757575757575, 6);
    });
    (0, vitest_1.it)('#3 -0.104867', function () {
        let x = [5, 3, 1, 1, 1, 2, 4, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        let y = [4, 2, 1, 3, 1, 1, 1, 4, 3, 2, 1, 1, 3, 5, 5, 5, 2, 3, 3, 3];
        const value = (0, index_1.default)(x, y);
        (0, vitest_1.expect)(value).toBeCloseTo(-0.1048674176511480, 6);
    });
    (0, vitest_1.it)('#3 0.370554', function () {
        let y = [4, 2, 1, 3, 1, 1, 1, 4, 3, 2, 1, 1, 3, 5, 5, 5, 2, 3, 3, 3];
        let z = [5, 3, 1, 1, 1, 1, 4, 3, 2, 1, 1, 1, 1, 1, 2, 4, 4, 3, 2, 2];
        const value = (0, index_1.default)(y, z);
        (0, vitest_1.expect)(value).toBeCloseTo(0.37055425196656755, 6);
    });
    (0, vitest_1.it)('#3 0.365896', function () {
        let x = [5, 3, 1, 1, 1, 2, 4, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        let z = [5, 3, 1, 1, 1, 1, 4, 3, 2, 1, 1, 1, 1, 1, 2, 4, 4, 3, 2, 2];
        const value = (0, index_1.default)(x, z);
        (0, vitest_1.expect)(value).toBeCloseTo(0.3658959519697062, 6);
    });
});
//# sourceMappingURL=index.test.js.map