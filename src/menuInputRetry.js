import menuVerification from "./menuVerification.js";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

export default async function menuInputRetry() {
  let data = null;
  while (data === null) {
    try {
      const input = await InputView.MenuInput();
      data = menuVerification(input);
    } catch (error) {
      OutputView.printError(error);
    }
  }
  return data;
}
