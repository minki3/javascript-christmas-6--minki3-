import compareMenu from "../src/compareMenu";

describe("메뉴판에 없는 메뉴를 주문했을 경우 테스트", () => {
  it("메뉴판에 없는 메뉴를 주문했을 경우 예외 테스트", () => {
    const result = { 라면: 2 };

    expect(() => {
      compareMenu(result).toThrow(
        `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`
      );
    });
  });
  it("정상 주문 했을 경우", () => {
    const result = { 양송이수프: 1 };

    expect(() => compareMenu(result)).not.toThrow();
  });
});
