import { WEEKEND_DISCOUNT } from "./WEEKEND__DISCOUNT.js";

export default function weekendEvent(date, price, menu) {
  let result = 0;
  if (price >= 10000 && WEEKEND_DISCOUNT.includes(date)) {
    for (const menuItem in menu) {
      const quantity = menu[menuItem];
      result +=
        (menuItem === "티본스테이크" ||
          menuItem === "바비큐립" ||
          menuItem === "해산물파스타" ||
          menuItem === "크리스마스파스타") &&
        quantity * 2023;
    }
  }
  return result;
}
