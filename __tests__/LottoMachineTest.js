import { jest } from "@jest/globals";

jest.unstable_mockModule("@woowacourse/mission-utils", () => ({
  Random: { pickUniqueNumbersInRange: jest.fn() },
  Console: { print: jest.fn(), readLineAsync: jest.fn() },
}));

const { Random } = await import("@woowacourse/mission-utils");
const { generate } = await import("../src/service/LottoMachine.js");
const Lotto = (await import("../src/Lotto.js")).default;

describe("발행 서비스 - LottoMachine", () => {
  test("요청 개수만큼 Lotto 인스턴스 생성", () => {
    Random.pickUniqueNumbersInRange
      .mockReturnValueOnce([8, 21, 23, 41, 42, 43])
      .mockReturnValueOnce([3, 5, 11, 16, 32, 38])
      .mockReturnValueOnce([7, 11, 16, 35, 36, 44]);

    const tickets = generate(3);
    expect(tickets).toHaveLength(3);
    tickets.forEach((t) => expect(t).toBeInstanceOf(Lotto));
  });

  test("정렬 결과 제공(getNumbersSorted)", () => {
    Random.pickUniqueNumbersInRange
      .mockReturnValueOnce([11, 3, 45, 14, 22, 5])
      .mockReturnValueOnce([40, 43, 7, 11, 30, 42]);

    const [a, b] = generate(2);
    expect(a.getNumbersSorted()).toEqual([3, 5, 11, 14, 22, 45]);
    expect(b.getNumbersSorted()).toEqual([7, 11, 30, 40, 42, 43]);
  });

  test("매 발행마다 Random.pickUniqueNumbersInRange(1,45,6) 호출", () => {
    Random.pickUniqueNumbersInRange
      .mockReturnValueOnce([1, 2, 3, 4, 5, 6])
      .mockReturnValueOnce([7, 8, 9, 10, 11, 12]);

    generate(2);
    expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledTimes(2);
    expect(Random.pickUniqueNumbersInRange).toHaveBeenCalledWith(1, 45, 6);
  });
});
