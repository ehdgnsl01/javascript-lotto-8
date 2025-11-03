import { readMoney } from './src/view/InputView.js';
import { countTickets } from './src/validators/money.js';

class App {
  async run() {
    const money = await readMoney();
    this.money = money;
    this.ticketCount = countTickets(money);
  }
}

export default App;
