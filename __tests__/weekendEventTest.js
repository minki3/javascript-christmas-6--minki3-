import weekendEvent from "../src/weekendEvent.js";

describe("주말 할인 이벤트 테스트", () => {
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
    expect(result).toBe(8092);
  });
  it("주말이 아닌 경우", () => {
    const date = 3;
    const price = 20000;
    const menu = {
      티본스테이크: 1,
      바비큐립: 1,
      해산물파스타: 1,
      크리스마스파스타: 1,
      아이스크림: 1,
    };
    const result = weekendEvent(date, price, menu);
    expect(result).toBe(0);
  });
  it("메인 메뉴가 없는 경우", () => {
    const date = 3;
    const price = 20000;
    const menu = {
      아이스크림: 1,
    };
    const result = weekendEvent(date, price, menu);
    expect(result).toBe(0);
  });

  it("가격이 만원을 못 넘을 경우", () => {
    const date = 3;
    const price = 9999;
    const menu = {
      티본스테이크: 1,
      바비큐립: 1,
      해산물파스타: 1,
      크리스마스파스타: 1,
      아이스크림: 1,
    };
    const result = weekendEvent(date, price, menu);
    expect(result).toBe(0);
  });
});
