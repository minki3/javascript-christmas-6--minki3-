import OutputView from "./OutputView.js";

export default function presentationEventOutput(presentation) {
  OutputView.printMenu("증정 메뉴");
  {
    presentation
      ? OutputView.printMenuDetail("샴페인", 1)
      : OutputView.printNotThing();
  }
}
