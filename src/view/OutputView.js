import { Console } from "@woowacourse/mission-utils";
import { formatPercent } from "../utils/format.js";

export function printPurchaseCount(count) {
  Console.print(`${count}개를 구매했습니다.`);
}

export function printTickets(tickets) {
  tickets.forEach((ticket) => {
    const line = `[${ticket.getNumbersSorted().join(", ")}]`;
    Console.print(line);
  });
}

export function printStats(lines) {
  Console.print("당첨 통계");
  Console.print("---");
  for (const line of lines) {
    Console.print(line);
  }
}

export function printYield(percentNumber) {
  Console.print(`총 수익률은 ${formatPercent(percentNumber)}입니다.`);
}
