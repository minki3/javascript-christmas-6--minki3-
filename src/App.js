import dateInputRetry from "./dateInputRetry.js";
import menuInputRetry from "./menuInputRetry.js";
import menuOutput from "./menuOutput.js";
import regularPrice from "./regularPrice.js";
import regularPriceOutput from "./regularPriceOutput.js";

class App {
  async run() {
    const date = await dateInputRetry();
    const menu = await menuInputRetry();
    const regularPriceResult = regularPrice(menu);
    menuOutput(menu);
    regularPriceOutput(regularPriceResult);
  }
}

const app = new App();
app.run();

export default App;
