import dateInputRetry from "./dateInputRetry.js";
import InputView from "./InputView.js";
import menuVerification from "./menuVerification.js";

class App {
  async run() {
    await dateInputRetry();
    const menu = await InputView.MenuInput();
    menuVerification(menu);
  }
}

const app = new App();
app.run();

export default App;
