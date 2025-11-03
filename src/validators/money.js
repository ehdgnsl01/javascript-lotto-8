import { LOTTO, ERROR } from "../constants.js";

export function parseMoney(input) {
  const n = Number(String(input ?? "").trim());
  if (!Number.isInteger(n) || n <= 0) throw new Error(ERROR.MONEY_UNIT);
  if (n % LOTTO.PRICE !== 0) throw new Error(ERROR.MONEY_UNIT);
  return n;
}

export function countTickets(money) {
  return Math.floor(money / LOTTO.PRICE);
}
