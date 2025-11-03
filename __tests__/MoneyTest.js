import { parseMoney, countTickets } from "../src/validators/money.js";
import { LOTTO, ERROR } from "../src/constants.js";

describe("구입 금액 입력/검증", () => {
  test.each(["1000", "8000", "  3000  "])("정상 입력: %p", (value) => {
    const n = Number(String(value).trim());
    expect(parseMoney(value)).toBe(n);
  });

  test("매수 계산: 금액/1000", () => {
    expect(countTickets(8000)).toBe(8);
    expect(countTickets(LOTTO.PRICE)).toBe(1);
  });

  test.each(["0", "-1000", "999", "1001", "1000.5", "abc", "", " "])(
    "예외 입력: %p",
    (value) => {
      expect(() => parseMoney(value)).toThrow(ERROR.MONEY_UNIT);
    }
  );
});
