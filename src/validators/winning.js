import { LOTTO } from "../constants.js";

const MSG = Object.freeze({
  FORMAT: "[ERROR] 당첨 번호는 쉼표(,)로 구분된 6개의 정수여야 합니다.",
  RANGE: "[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.",
  DUP: "[ERROR] 번호는 중복될 수 없습니다.",
});

export function parseWinningNumbers(input) {
  const raw = String(input ?? "");

  // 쉼표만 허용하는 형태(숫자 + 쉼표 + 숫자 ×5), 공백은 앞뒤/사이에 허용
  if (!/^\s*\d+(?:\s*,\s*\d+){5}\s*$/.test(raw)) {
    throw new Error(MSG.FORMAT);
  }

  const tokens = raw.split(",").map((s) => s.trim());
  const nums = tokens.map((s) => Number(s));

  if (nums.some((n) => !Number.isInteger(n))) {
    throw new Error(MSG.FORMAT);
  }
  if (nums.some((n) => n < LOTTO.MIN || n > LOTTO.MAX)) {
    throw new Error(MSG.RANGE);
  }
  if (new Set(nums).size !== LOTTO.PICK) {
    throw new Error(MSG.DUP);
  }
  return nums;
}
