import dateInputRetry from "./dateInputRetry.js";
import menuInputRetry from "./menuInputRetry.js";
import menuOutput from "./menuOutput.js";
import regularPrice from "./regularPrice.js";

class App {
  async run() {
    const date = await dateInputRetry();
    const menu = await menuInputRetry();
    menuOutput(menu);
    regularPrice(menu);
  }
}

const app = new App();
app.run();

export default App;
