import dateInputVerification from "./DateInputVerification.js";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

export default async function dateINputRetry() {
  let date = null;
  while (date === null) {
    try {
      const input = await InputView.DateInput();
      date = dateInputVerification(input);
    } catch (error) {
      OutputView.printError(error);
    }
  }
  return date;
}
