import dateInputRetry from "./dateInputRetry.js";
import menuInputRetry from "./menuInputRetry.js";
import menuOutput from "./menuOutput.js";
import regularPrice from "./regularPrice.js";
import regularPriceOutput from "./regularPriceOutput.js";
import presentationEvent from "./presentationEvent.js";
import presentationEventOutput from "./presentationEventOutput.js";
import christmasEvent from "./christmasEvent.js";
import weekDayEvent from "./weekDayEvent.js";

class App {
  async run() {
    const date = await dateInputRetry();
    const menu = await menuInputRetry();
    const regularPriceResult = regularPrice(menu);
    const presentation = presentationEvent(regularPriceResult);
    menuOutput(menu);
    regularPriceOutput(regularPriceResult);
    presentationEventOutput(presentation);

    console.log(christmasEvent(date, regularPriceResult));
    console.log(weekDayEvent(date, regularPriceResult, menu));
  }
}

const app = new App();
app.run();

export default App;
