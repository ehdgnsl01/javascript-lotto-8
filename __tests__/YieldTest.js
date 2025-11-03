import { calcTotalPrize, calcYield } from "../src/service/settlement.js";
import { formatCurrency, formatPercent } from "../src/utils/format.js";
import { RANK, PRIZE } from "../src/constants.js";

describe("수익 계산/포맷", () => {
  test("랭크별 집계를 총 당첨금으로 환산한다", () => {
    const counts = {
      [RANK.FIRST]: 1,
      [RANK.SECOND]: 0,
      [RANK.THIRD]: 2,
      [RANK.FOURTH]: 0,
      [RANK.FIFTH]: 3,
      [RANK.MISS]: 4,
    };
    const expected =
      1 * PRIZE[RANK.FIRST] +
      0 * PRIZE[RANK.SECOND] +
      2 * PRIZE[RANK.THIRD] +
      0 * PRIZE[RANK.FOURTH] +
      3 * PRIZE[RANK.FIFTH];
    expect(calcTotalPrize(counts)).toBe(expected);
  });

  test("수익률(%)은 소수점 한 자리까지, 둘째 자리에서 반올림", () => {
    // 5,000 / 8,000 = 62.5%
    expect(calcYield(5000, 8000)).toBe(62.5);
  });

  test("통화와 퍼센트 포맷", () => {
    expect(formatCurrency(1500000)).toBe("1,500,000원");
    expect(formatPercent(62.5)).toBe("62.5%");
    expect(formatPercent(1000000)).toBe("1,000,000.0%"); // 큰 값도 콤마/소수 1자리
  });
});
