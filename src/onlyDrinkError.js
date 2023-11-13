import { MENU_LIST } from "./MENU_LIST.js";

export default function onlyDrinkError(menuList) {
  const onlyDrinkFilter = Object.keys(MENU_LIST).filter(
    (menu) => !["제로콜라", "레드와인", "샴페인"].includes(menu)
  );

  const onlyDrink = onlyDrinkFilter.some((menu) => menuList[menu] > 0);

  if (!onlyDrink)
    throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
}
