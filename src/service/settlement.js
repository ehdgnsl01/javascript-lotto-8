import { PRIZE, RANK } from "../constants.js";

export function calcTotalPrize(counts) {
  let sum = 0;
  sum += (counts[RANK.FIRST] ?? 0) * PRIZE[RANK.FIRST];
  sum += (counts[RANK.SECOND] ?? 0) * PRIZE[RANK.SECOND];
  sum += (counts[RANK.THIRD] ?? 0) * PRIZE[RANK.THIRD];
  sum += (counts[RANK.FOURTH] ?? 0) * PRIZE[RANK.FOURTH];
  sum += (counts[RANK.FIFTH] ?? 0) * PRIZE[RANK.FIFTH];
  return sum;
}

export function calcYield(totalPrize, spent) {
  if (!spent || spent <= 0) return 0;
  const rate = (totalPrize / spent) * 100;
  return Math.round(rate * 10) / 10;
}
