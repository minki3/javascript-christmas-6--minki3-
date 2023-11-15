import OutputView from "./OutputView.js";

export default function actualAmountOutput(price) {
  OutputView.printMenu("할인 후 예상 결제 금액");
  OutputView.printPrice(price);
}
