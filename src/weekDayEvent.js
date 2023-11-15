import { WEEK_DAY_DISCOUNT } from "./WEEK_DAY_DISCOUNT.js";

export default function weekDayEvent(date, price, menu) {
  let result = 0;
  if (price >= 10000 && WEEK_DAY_DISCOUNT.includes(date)) {
    for (const menuItem in menu) {
      const quantity = menu[menuItem];
      result +=
        (menuItem === "초코케이크" || menuItem === "아이스크림") &&
        quantity * 2023;
    }
  }
  return result;
}
