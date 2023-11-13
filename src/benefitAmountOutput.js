import OutputView from "./OutputView.js";

export default function benefitAmountOutput(price) {
  OutputView.printMenu("총혜택 금액");
  OutputView.printPrice(`-${price}`);
}
