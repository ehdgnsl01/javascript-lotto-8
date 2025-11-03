import {
  readMoney,
  readWinningNumbers,
  readBonusNumber,
} from "./view/InputView.js";
import { countTickets } from "./validators/money.js";
import { generate } from "./service/LottoMachine.js";
import {
  printPurchaseCount,
  printTickets,
  printStats,
  printYield,
} from "./view/OutputView.js";
import { aggregateResults } from "./service/judge.js";
import { buildResultLines } from "./service/resultBuilder.js";
import { calcTotalPrize, calcYield } from "./service/settlement.js";

class App {
  async run() {
    const money = await readMoney();
    const ticketCount = countTickets(money);
    const tickets = generate(ticketCount);

    printPurchaseCount(ticketCount);
    printTickets(tickets);

    const winning = await readWinningNumbers();
    const bonus = await readBonusNumber(winning);

    const counts = aggregateResults(tickets, winning, bonus);
    const lines = buildResultLines(counts);
    printStats(lines);

    const totalPrize = calcTotalPrize(counts);
    const yieldPercent = calcYield(totalPrize, money);
    printYield(yieldPercent);
  }
}

export default App;
