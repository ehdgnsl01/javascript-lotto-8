import { parseWinningNumbers } from "../src/validators/winning.js";

describe("C단계 - 당첨 번호 파싱/검증", () => {
  test.each(["1,2,3,4,5,6", " 1, 2,3 ,4,5 ,6 "])(
    "쉼표로 구분된 6개의 정수 입력을 파싱한다: %p",
    (line) => {
      expect(parseWinningNumbers(line)).toEqual([1, 2, 3, 4, 5, 6]);
    }
  );

  test.each(["1,2,3,4,5", "1,2,3,4,5,6,7"])(
    "정확히 6개가 아니면 에러: %p",
    (line) => {
      expect(() => parseWinningNumbers(line)).toThrow("[ERROR]");
    }
  );

  test.each(["1,2,3,4,5,a", "1,2,3,4,5,1.5"])(
    "정수가 아니면 에러: %p",
    (line) => {
      expect(() => parseWinningNumbers(line)).toThrow("[ERROR]");
    }
  );

  test.each(["0,2,3,4,5,6", "46,2,3,4,5,6"])(
    "1~45 범위를 벗어나면 에러: %p",
    (line) => {
      expect(() => parseWinningNumbers(line)).toThrow("[ERROR]");
    }
  );

  test("중복이 있으면 에러", () => {
    expect(() => parseWinningNumbers("1,2,3,4,5,5")).toThrow("[ERROR]");
  });

  test.each(["1;2,3,4,5,6", "1|2|3|4|5|6"])(
    "쉼표(,) 이외 구분자는 에러: %p",
    (line) => {
      expect(() => parseWinningNumbers(line)).toThrow("[ERROR]");
    }
  );
});
