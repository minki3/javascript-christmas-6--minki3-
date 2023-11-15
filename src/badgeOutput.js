import OutputView from "./OutputView.js";

export default function badgeOutput(result) {
  OutputView.printMenu("12월 이벤트 배지");
  OutputView.printBadge(result);
}
