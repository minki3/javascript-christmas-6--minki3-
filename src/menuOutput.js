import OutputView from "./OutputView.js";

export default function menuOutput(menu) {
  for (let key in menu) {
    OutputView.printMenuDetail(key, menu[key]);
  }
}
