import InputView from "./InputView.js";
import dateInputVerification from "./DateInputVerification.js";

class App {
  async run() {
    const date = await InputView.DateInput();
    dateInputVerification(date);
  }
}

const app = new App();
app.run();

export default App;
