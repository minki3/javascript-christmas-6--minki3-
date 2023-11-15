import OutputView from "./OutputView.js";

export default function benefitAmountOutput(price) {
  OutputView.printMenu("총혜택 금액");
  price !== 0
    ? OutputView.printPrice(`-${price}`)
    : OutputView.printPrice(price);
}
