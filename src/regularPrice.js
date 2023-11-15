import { MENU_LIST } from "./MENU_LIST.js";

export default function regularPrice(menu) {
  let totalPrice = 0;
  for (const menuItem in menu) {
    const quantity = menu[menuItem];
    const price = MENU_LIST[menuItem];

    totalPrice += quantity * price;
  }
  return totalPrice;
}
