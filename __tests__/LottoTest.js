import Lotto from "../src/Lotto";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  test.each([
    [0, 2, 3, 4, 5, 6],
    [46, 2, 3, 4, 5, 6],
    [1.1, 2, 3, 4, 5, 6],
  ])("1~45 범위/정수 아니면 예외: %p", (arr) => {
    expect(() => new Lotto(arr)).toThrow("[ERROR]");
  });

  test("정렬 결과 제공(getNumbersSorted)", () => {
    const lotto = new Lotto([11, 3, 45, 14, 22, 5]);
    expect(lotto.getNumbersSorted()).toEqual([3, 5, 11, 14, 22, 45]);
  });
});
