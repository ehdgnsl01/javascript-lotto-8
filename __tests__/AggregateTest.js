import Lotto from "../src/Lotto.js";
import { aggregateResults } from "../src/service/judge.js";
import { RANK } from "../src/constants.js";

describe("집계", () => {
  test("여러 장 결과를 랭크별로 집계한다", () => {
    const winning = [1, 2, 3, 4, 5, 6];
    const bonus = 7;

    const tickets = [
      new Lotto([1, 2, 3, 4, 5, 6]), // 1등
      new Lotto([1, 2, 3, 4, 5, 7]), // 2등(5+B)
      new Lotto([1, 2, 3, 4, 5, 8]), // 3등
      new Lotto([1, 2, 3, 4, 9, 10]), // 4등
      new Lotto([1, 2, 3, 11, 12, 13]), // 5등
      new Lotto([1, 2, 14, 15, 16, 17]), // MISS
    ];

    const counts = aggregateResults(tickets, winning, bonus);

    expect(counts[RANK.FIRST]).toBe(1);
    expect(counts[RANK.SECOND]).toBe(1);
    expect(counts[RANK.THIRD]).toBe(1);
    expect(counts[RANK.FOURTH]).toBe(1);
    expect(counts[RANK.FIFTH]).toBe(1);
    expect(counts[RANK.MISS]).toBe(1);
  });
});
