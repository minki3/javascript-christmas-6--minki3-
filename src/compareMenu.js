import { MENU_LIST } from "./MENU_LIST.js";

export default function compareMenu(result) {
  const orderMenus = Object.keys(result);
  const menuList = Object.keys(MENU_LIST);

  for (const orderMenu of orderMenus) {
    if (!menuList.includes(orderMenu)) {
      throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
    }
  }
}
