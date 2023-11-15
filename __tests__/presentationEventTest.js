import presentationEvent from "../src/presentationEvent.js";

describe("증정 메뉴 여부 테스트", () => {
  it("12만원 이상일 때", () => {
    const price = 120000;
    const result = presentationEvent(price);

    expect(result).toBe(true);
  });
  it("12만원 미만일 때", () => {
    const price = 119999;
    const result = presentationEvent(price);

    expect(result).toBe(false);
  });
});
