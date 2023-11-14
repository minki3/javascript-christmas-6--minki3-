import weekDayEvent from "../src/weekDayEvent.js";

describe("평일 할인 이벤트 테스트", () => {
  it("정상 작동", () => {
    const date = 3;
    const price = 20000;
    const menu = { 초코케이크: 3 };

    const result = weekDayEvent(date, price, menu);
    expect(result).toBe(6069);
  });
  it("디저트 메뉴 주문 안할 시 ", () => {
    const date = 3;
    const price = 20000;
    const menu = { 양송이수프: 5 };

    const result = weekDayEvent(date, price, menu);
    expect(result).toBe(0);
  });
  it("평일이 아닐 시 ", () => {
    const date = 9;
    const price = 20000;
    const menu = { 양송이수프: 5 };

    const result = weekDayEvent(date, price, menu);
    expect(result).toBe(0);
  });
  it("가격이 만원이 안 넘을 시 ", () => {
    const date = 3;
    const price = 5000;
    const menu = { 아이스크림: 1 };

    const result = weekDayEvent(date, price, menu);
    expect(result).toBe(0);
  });
});
