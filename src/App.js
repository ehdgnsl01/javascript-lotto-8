import { readMoney } from "./src/view/InputView.js";
import { countTickets } from "./src/validators/money.js";
import { generate } from "./src/service/LottoMachine.js";
import { printPurchaseCount, printTickets } from "./src/view/OutputView.js";

class App {
  async run() {
    const money = await readMoney();
    const ticketCount = countTickets(money);
    const tickets = generate(ticketCount);

    printPurchaseCount(ticketCount);
    printTickets(tickets);
  }
}

export default App;
