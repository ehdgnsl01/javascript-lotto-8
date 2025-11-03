import { RANK, PRIZE } from "../constants.js";
import { formatCurrency } from "../utils/format.js";

export function buildResultLines(counts) {
  const lines = [];

  const c5 = counts[RANK.FIFTH] ?? 0;
  lines.push(`3개 일치 (${formatCurrency(PRIZE[RANK.FIFTH])}) - ${c5}개`);

  const c4 = counts[RANK.FOURTH] ?? 0;
  lines.push(`4개 일치 (${formatCurrency(PRIZE[RANK.FOURTH])}) - ${c4}개`);

  const c3 = counts[RANK.THIRD] ?? 0;
  lines.push(`5개 일치 (${formatCurrency(PRIZE[RANK.THIRD])}) - ${c3}개`);

  const c2 = counts[RANK.SECOND] ?? 0;
  lines.push(
    `5개 일치, 보너스 볼 일치 (${formatCurrency(PRIZE[RANK.SECOND])}) - ${c2}개`
  );

  const c1 = counts[RANK.FIRST] ?? 0;
  lines.push(`6개 일치 (${formatCurrency(PRIZE[RANK.FIRST])}) - ${c1}개`);

  return lines;
}
