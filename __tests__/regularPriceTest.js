import regularPrice from "../src/regularPrice.js";

describe("할인 전 금액 테스트", () => {
  it("합산 테스트", () => {
    const menu = { 양송이수프: 2 };
    const result = regularPrice(menu);
    expect(result).toBe(12000);
  });
});
