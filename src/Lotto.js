import { LOTTO } from "./constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
    if (new Set(numbers).size !== 6) {
      throw new Error("[ERROR] 번호는 중복될 수 없습니다.");
    }
    for (const n of numbers) {
      if (!Number.isInteger(n) || n < LOTTO.MIN || n > LOTTO.MAX) {
        throw new Error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
      }
    }
  }

  getNumbersSorted() {
    return [...this.#numbers].sort((a, b) => a - b);
  }
}

export default Lotto;
