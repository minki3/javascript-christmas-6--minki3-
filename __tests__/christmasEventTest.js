import christmasEvent from "../src/christmasEvent.js";

describe("크리스마스 이벤트 테스트", () => {
  it("정상 작동", () => {
    const date = 25;
    const price = 10000;

    const result = christmasEvent(date, price);

    expect(result).toBe(3400);
  });
  it("만원 이상이 아닐 경우", () => {
    const date = 25;
    const price = 9999;

    const result = christmasEvent(date, price);

    expect(result).toBe(0);
  });
  it("25일이 초과한 경우", () => {
    const date = 26;
    const price = 1000000;

    const result = christmasEvent(date, price);

    expect(result).toBe(0);
  });
});
