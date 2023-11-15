import badge from "../src/badge.js";

describe("배지 증정 테스트", () => {
  it("할인금액이 2만원 이상일 경우", () => {
    const price = 20000;
    const result = badge(price);

    expect(result).toBe("산타");
  });
  it("할인금액이 1만원 이상일 경우", () => {
    const price = 10000;
    const result = badge(price);

    expect(result).toBe("트리");
  });
  it("할인금액이 5000원 이상일 경우", () => {
    const price = 5000;
    const result = badge(price);

    expect(result).toBe("별");
  });
  it("할인금액이 5000원 미만일 경우", () => {
    const price = 4999;
    const result = badge(price);

    expect(result).toBe("없음");
  });
});
