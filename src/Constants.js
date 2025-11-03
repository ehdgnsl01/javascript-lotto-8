export const LOTTO = Object.freeze({
  PRICE: 1000,
  MIN: 1,
  MAX: 45,
  PICK: 6,
});

export const ERROR = Object.freeze({
  MONEY_UNIT: "[ERROR] 구입 금액은 1,000원 단위의 양의 정수여야 합니다.",
});

export const RANK = Object.freeze({
  FIRST: "FIRST",
  SECOND: "SECOND",
  THIRD: "THIRD",
  FOURTH: "FOURTH",
  FIFTH: "FIFTH",
  MISS: "MISS",
});

export const PRIZE = Object.freeze({
  [RANK.FIRST]: 2000000000,
  [RANK.SECOND]: 30000000,
  [RANK.THIRD]: 1500000,
  [RANK.FOURTH]: 50000,
  [RANK.FIFTH]: 5000,
  [RANK.MISS]: 0,
});
