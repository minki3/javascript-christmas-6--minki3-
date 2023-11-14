import specialEvent from "../src/specialEvent.js";

describe("특별 할인 이벤트 테스트", () => {
  it("정상 작동", () => {
    const date = 3;
    const price = 10000;
    const menu = { 티본스테이크: 1, 아이스크림: 3 };

    const result = specialEvent(date, price, menu);
    expect(result).toBe(1000);
  });
  it("특별 할인 날이 아닌 경우", () => {
    const date = 4;
    const price = 10000;
    const menu = { 티본스테이크: 1, 아이스크림: 3 };

    const result = specialEvent(date, price, menu);
    expect(result).toBe(0);
  });
  it("만원을 못 넘었을 경우", () => {
    const date = 4;
    const price = 9999;
    const menu = { 티본스테이크: 1, 아이스크림: 3 };

    const result = specialEvent(date, price, menu);
    expect(result).toBe(0);
  });
});
