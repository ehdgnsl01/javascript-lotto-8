import { LOTTO } from "../constants.js";

const MSG = Object.freeze({
  FORMAT: "[ERROR] 보너스 번호는 정수여야 합니다.",
  RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  DUP_WITH_WINNING: "[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.",
});

export function parseBonusNumber(input, winningNumbers) {
  const raw = String(input ?? "").trim();

  // 정수 형태만 허용(앞뒤 공백 허용)
  if (!/^\d+$/.test(raw)) {
    throw new Error(MSG.FORMAT);
  }

  const n = Number(raw);
  if (n < LOTTO.MIN || n > LOTTO.MAX) {
    throw new Error(MSG.RANGE);
  }

  const set = new Set(winningNumbers ?? []);
  if (set.has(n)) {
    throw new Error(MSG.DUP_WITH_WINNING);
  }

  return n;
}
