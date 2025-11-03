import { RANK } from "../constants.js";

export function decideRank(hitCount, bonusMatched) {
  if (hitCount === 6) return RANK.FIRST;
  if (hitCount === 5 && bonusMatched) return RANK.SECOND;
  if (hitCount === 5) return RANK.THIRD;
  if (hitCount === 4) return RANK.FOURTH;
  if (hitCount === 3) return RANK.FIFTH;
  return RANK.MISS;
}

function countHits(nums, winningSet) {
  let c = 0;
  for (const n of nums) {
    if (winningSet.has(n)) c += 1;
  }
  return c;
}

function judgeTicket(ticket, winningSet, bonus) {
  const nums = ticket.getNumbersSorted();
  const hit = countHits(nums, winningSet);
  const bonusMatched = nums.includes(bonus);
  return decideRank(hit, bonusMatched);
}

function initCounts() {
  return {
    [RANK.FIRST]: 0,
    [RANK.SECOND]: 0,
    [RANK.THIRD]: 0,
    [RANK.FOURTH]: 0,
    [RANK.FIFTH]: 0,
    [RANK.MISS]: 0,
  };
}

export function aggregateResults(tickets, winning, bonus) {
  const winningSet = new Set(winning);
  const counts = initCounts();
  for (const t of tickets) {
    const r = judgeTicket(t, winningSet, bonus);
    counts[r] += 1;
  }
  return counts;
}
