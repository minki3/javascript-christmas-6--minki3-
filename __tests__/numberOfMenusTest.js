import numberOfMenus from "../src/numberOfMenus.js";

describe("입력 갯수 테스트", () => {
  it("1미만 일 때", () => {
    const menuList = { 양송이수프: 0 };

    expect(() => numberOfMenus(menuList)).toThrow(
      "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
    );
  });

  it("숫자가 아닐 경우", () => {
    const menuList = { 양송이수프: "ㅁ" };

    expect(() => numberOfMenus(menuList)).toThrow(
      "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
    );
  });

  it("20개를 초과할 경우", () => {
    const menuList = { 양송이수프: 21 };

    expect(() => numberOfMenus(menuList)).toThrow(
      "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
    );
  });

  it("정상 작동", () => {
    const menuList = { 양송이수프: 20 };

    expect(() => numberOfMenus(menuList)).not.toThrow();
  });
});
