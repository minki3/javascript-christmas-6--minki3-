import onlyDrinkError from "../src/onlyDrinkError";

describe("메뉴선택에서 음료만 있을 경우 테스트", () => {
  it("음료만 있을 경우 예외 처리", () => {
    const drinkOnly = {
      제로콜라: 2,
      레드와인: 1,
    };
    expect(() => {
      onlyDrinkError(drinkOnly).toThrow(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
      );
    });
  }),
    it("다른 음식도 있을 경우", () => {
      const food = {
        양송이수프: 1,
        제로콜라: 2,
      };

      expect(() => onlyDrinkError(food)).not.toThrow();
    });
});
