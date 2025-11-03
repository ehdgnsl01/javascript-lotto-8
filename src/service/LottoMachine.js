import { Random } from "@woowacourse/mission-utils";
import { LOTTO } from "../constants.js";
import Lotto from "../Lotto.js";

export function generate(count) {
  const tickets = [];
  for (let i = 0; i < count; i += 1) {
    const nums = Random.pickUniqueNumbersInRange(
      LOTTO.MIN,
      LOTTO.MAX,
      LOTTO.PICK
    );
    tickets.push(new Lotto(nums));
  }
  return tickets;
}
