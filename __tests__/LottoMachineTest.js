import { generate } from "../src/service/LottoMachine.js";
import Lotto from "../src/Lotto.js";

describe("발행 서비스 - LottoMachine", () => {
  test("요청 개수만큼 Lotto 인스턴스 생성", () => {
    const rng = { pickUniqueNumbersInRange: jest.fn() };
    rng.pickUniqueNumbersInRange
      .mockReturnValueOnce([8, 21, 23, 41, 42, 43])
      .mockReturnValueOnce([3, 5, 11, 16, 32, 38]);

    const tickets = generate(2, rng);

    expect(tickets).toHaveLength(2);
    tickets.forEach((t) => expect(t).toBeInstanceOf(Lotto));
    expect(rng.pickUniqueNumbersInRange).toHaveBeenCalledTimes(2);
    expect(rng.pickUniqueNumbersInRange).toHaveBeenCalledWith(1, 45, 6);
  });
});
