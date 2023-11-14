import eventDiscount from "../src/eventDiscount.js";

describe("총 할인 금액 테스트", () => {
  it("증정품이 있는 경우", () => {
    const christmasEvent = 1000;
    const weekDayEvent = 1000;
    const weekendEvent = 1000;
    const specialEvent = 1000;
    const presentation = true;

    const result = eventDiscount(
      christmasEvent,
      weekDayEvent,
      weekendEvent,
      specialEvent,
      presentation
    );
    expect(result).toBe(29000);
  });
  it("증정품이 없는 경우", () => {
    const christmasEvent = 1000;
    const weekDayEvent = 1000;
    const weekendEvent = 1000;
    const specialEvent = 1000;
    const presentation = false;

    const result = eventDiscount(
      christmasEvent,
      weekDayEvent,
      weekendEvent,
      specialEvent,
      presentation
    );
    expect(result).toBe(4000);
  });
});
