import { Console } from "@woowacourse/mission-utils";

export function printPurchaseCount(count) {
  Console.print(`${count}개를 구매했습니다.`);
}

export function printTickets(tickets) {
  tickets.forEach((ticket) => {
    const line = `[${ticket.getNumbersSorted().join(", ")}]`;
    Console.print(line);
  });
}
