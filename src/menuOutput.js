import OutputView from "./OutputView.js";

export default function menuOutput(menu) {
  OutputView.printMenu("주문 메뉴");
  for (let key in menu) {
    OutputView.printMenuDetail(key, menu[key]);
  }
}
