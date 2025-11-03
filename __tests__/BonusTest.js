import { parseBonusNumber } from "../src/validators/bonus.js";

describe("D단계 - 보너스 번호 파싱/검증", () => {
  const winning = [1, 2, 3, 4, 5, 6];

  test.each(["7", "  7  "])("정상 입력: %p", (line) => {
    expect(parseBonusNumber(line, winning)).toBe(7);
  });

  test.each(["a", "7.5", "7,"])("정수가 아니면 에러: %p", (line) => {
    expect(() => parseBonusNumber(line, winning)).toThrow("[ERROR]");
  });

  test.each(["0", "46"])("1~45 범위를 벗어나면 에러: %p", (line) => {
    expect(() => parseBonusNumber(line, winning)).toThrow("[ERROR]");
  });

  test("당첨 번호와 중복이면 에러", () => {
    expect(() => parseBonusNumber("6", winning)).toThrow("[ERROR]");
  });
});
