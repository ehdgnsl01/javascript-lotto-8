import { buildResultLines } from "../src/service/result-builder.js";
import { RANK } from "../src/constants.js";

describe("결과 라인 빌더", () => {
  test("예시와 동일한 순서/문구로 라인을 만든다", () => {
    const counts = {
      [RANK.FIRST]: 0,
      [RANK.SECOND]: 0,
      [RANK.THIRD]: 0,
      [RANK.FOURTH]: 0,
      [RANK.FIFTH]: 1,
      [RANK.MISS]: 0,
    };
    const lines = buildResultLines(counts);
    expect(lines).toEqual([
      "3개 일치 (5,000원) - 1개",
      "4개 일치 (50,000원) - 0개",
      "5개 일치 (1,500,000원) - 0개",
      "5개 일치, 보너스 볼 일치 (30,000,000원) - 0개",
      "6개 일치 (2,000,000,000원) - 0개",
    ]);
  });
});
