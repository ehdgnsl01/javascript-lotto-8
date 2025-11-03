import { decideRank } from "../src/service/judge.js";
import { RANK } from "../src/constants.js";

describe("E단계 - 등수 판정", () => {
  test("6개 일치 → 1등", () => {
    expect(decideRank(6, false)).toBe(RANK.FIRST);
  });

  test("5개+보너스 → 2등", () => {
    expect(decideRank(5, true)).toBe(RANK.SECOND);
  });

  test("5개만 → 3등", () => {
    expect(decideRank(5, false)).toBe(RANK.THIRD);
  });

  test("4개 → 4등", () => {
    expect(decideRank(4, false)).toBe(RANK.FOURTH);
  });

  test("3개 → 5등", () => {
    expect(decideRank(3, false)).toBe(RANK.FIFTH);
  });

  test("그 외 → MISS", () => {
    expect(decideRank(2, true)).toBe(RANK.MISS);
    expect(decideRank(0, false)).toBe(RANK.MISS);
  });
});
