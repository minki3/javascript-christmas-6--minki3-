import lastPrice from "../src/lastPrice.js";

describe("정산 금액 테스트", () => {
  it("합계 테스트", () => {
    const regularPrice = 10000;
    const christmasEvent = 1000;
    const weekDayEvent = 1000;
    const weekendEvent = 1000;
    const specialEvent = 1000;

    const result = lastPrice(
      regularPrice,
      christmasEvent,
      weekDayEvent,
      weekendEvent,
      specialEvent
    );
    expect(result).toBe(6000);
  });
});
