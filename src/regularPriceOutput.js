import OutputView from "./OutputView.js";

export default function regularPriceOutput(price) {
  OutputView.printMenu("할인 전 총주문 금액");
  OutputView.printPrice(price);
}
