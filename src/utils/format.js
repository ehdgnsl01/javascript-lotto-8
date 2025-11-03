function formatNumber(n, fractionDigits = 0) {
  return Number(n).toLocaleString("ko-KR", {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  });
}

export function formatCurrency(amount) {
  return `${formatNumber(amount)}원`;
}

export function formatPercent(percentNumber) {
  return `${formatNumber(percentNumber, 1)}%`;
}
