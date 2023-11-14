import weekendEvent from "../src/weekendEvent.js";

descirbe("주말 할인 이벤트 테스트", () => {
  it("정상작동", () => {
    const date = 1;
    const price = 20000;
    const menu = {
      티본스테이크: 1,
      바비큐립: 1,
      해산물파스타: 1,
      크리스마스파스타: 1,
      아이스크림: 1,
    };
    const result = weekendEvent(date, price, menu);
    expect(result).toBe();
  });
});
