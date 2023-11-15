import OutputView from "./OutputView.js";

export default function benefitDetailsOutput(
  christmasEventResult,
  weekDayEventResult,
  weekendEventResult,
  specialEventResult,
  presentation
) {
  OutputView.printMenu("혜택 내역");
  christmasEventResult !== 0 &&
    OutputView.printEventPrice("크리스마스 디데이 할인", christmasEventResult);

  weekDayEventResult !== 0 &&
    OutputView.printEventPrice("평일 할인", weekDayEventResult);

  weekendEventResult !== 0 &&
    OutputView.printEventPrice("주말 할인", weekendEventResult);

  specialEventResult !== 0 &&
    OutputView.printEventPrice("특별 할인", specialEventResult);

  presentation === true && OutputView.printEventPrice("증정 이벤트", 25000);

  if (
    christmasEventResult === 0 &&
    weekDayEventResult === 0 &&
    weekendEventResult === 0 &&
    specialEventResult === 0 &&
    !presentation
  )
    return OutputView.printNotThing();
}
