import { Console } from "@woowacourse/mission-utils";
import { parseMoney } from "../validators/money.js";
import { parseWinningNumbers } from "../validators/winning.js";
import { parseBonusNumber } from "../validators/bonus.js";

const PROMPT_MONEY = "구입금액을 입력해 주세요.\n";
const PROMPT_WINNING = "당첨 번호를 입력해 주세요.\n";
const PROMPT_BONUS = "보너스 번호를 입력해 주세요.\n";

export async function readMoney() {
  while (true) {
    const input = await Console.readLineAsync(PROMPT_MONEY);
    try {
      return parseMoney(input);
    } catch (e) {
      Console.print(e.message);
    }
  }
}

export async function readWinningNumbers() {
  while (true) {
    const input = await Console.readLineAsync(PROMPT_WINNING);
    try {
      return parseWinningNumbers(input);
    } catch (e) {
      Console.print(e.message);
    }
  }
}

export async function readBonusNumber(winningNumbers) {
  while (true) {
    const input = await Console.readLineAsync(PROMPT_BONUS);
    try {
      return parseBonusNumber(input, winningNumbers);
    } catch (e) {
      Console.print(e.message);
    }
  }
}
