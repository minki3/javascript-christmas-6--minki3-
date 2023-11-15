import { SPECIAL_DISCOUNT } from "./SPECIAL_DISCOUNT.js";

export default function specialEvent(date, price) {
  let result = 0;
  if (price >= 10000 && SPECIAL_DISCOUNT.includes(date)) {
    result += 1000;
  }
  return result;
}
