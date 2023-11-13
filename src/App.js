import OutputView from "./OutputView.js";
import dateInputRetry from "./dateInputRetry.js";
import menuInputRetry from "./menuInputRetry.js";
import menuOutput from "./menuOutput.js";

class App {
  async run() {
    const date = await dateInputRetry();
    const menu = await menuInputRetry();
    OutputView.printMenu();
    menuOutput(menu);
  }
}

const app = new App();
app.run();

export default App;
