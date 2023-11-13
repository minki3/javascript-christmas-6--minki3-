import OutputView from "./OutputView.js";

export default function benefitDetailsOutput(
  christmasEventResult,
  weekDayEventResult,
  weekendEventResult,
  specialEventResult,
  presentation
) {
  OutputView.printMenu("혜택 내역");
  christmasEventResult !== 0
    ? OutputView.printEventPrice("크리스마스 디데이 할인", christmasEventResult)
    : OutputView.printNotThing();
  weekDayEventResult !== 0
    ? OutputView.printEventPrice("평일 할인", weekDayEventResult)
    : OutputView.printNotThing();
  weekendEventResult !== 0
    ? OutputView.printEventPrice("주말 할인", weekendEventResult)
    : OutputView.printNotThing();
  specialEventResult !== 0
    ? OutputView.printEventPrice("특별 할인", specialEventResult)
    : OutputView.printNotThing();
  presentation === true
    ? OutputView.printEventPrice("증정 이벤트", 25000)
    : OutputView.printNotThing();
}
