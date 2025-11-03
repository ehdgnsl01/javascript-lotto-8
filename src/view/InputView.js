import { Console } from '@woowacourse/mission-utils';
import { parseMoney } from '../validators/money.js';

const PROMPT_MONEY = '구입금액을 입력해 주세요.\n';

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
