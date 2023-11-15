import menuObject from "../src/menuObject.js";

describe("메뉴 객체 변경 테스트", () => {
  it("정상 작동", () => {
    const menu = "양송이수프-1,제로콜라-1";
    const result = menuObject(menu);
    expect(result).toEqual({ 양송이수프: 1, 제로콜라: 1 });
  });
  it("중복된 메뉴가 있을 경우", () => {
    const menu = "양송이수프-1,양송이수프-1";
    expect(() => {
      menuObject(menu).toThrow(
        "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
      );
    });
  });
});
