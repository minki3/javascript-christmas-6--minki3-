import dateInputRetry from "./dateInputRetry.js";
import menuInputRetry from "./menuInputRetry.js";
import menuOutput from "./menuOutput.js";
import regularPrice from "./regularPrice.js";
import regularPriceOutput from "./regularPriceOutput.js";
import presentationEvent from "./presentationEvent.js";
import presentationEventOutput from "./presentationEventOutput.js";
import christmasEvent from "./christmasEvent.js";
import weekDayEvent from "./weekDayEvent.js";
import weekendEvent from "./weekendEvent.js";
import specialEvent from "./specialEvent.js";
import eventDiscount from "./eventDiscount.js";
import lastPrice from "./lastPrice.js";
import benefitDetailsOutput from "./benefitDetailsOutput.js";
import benefitAmountOutput from "./benefitAmountOutput.js";

class App {
  async run() {
    const date = await dateInputRetry();
    const menu = await menuInputRetry();
    const regularPriceResult = regularPrice(menu);
    const presentation = presentationEvent(regularPriceResult);
    const christmasEventResult = christmasEvent(date, regularPriceResult);
    const weekDayEventResult = weekDayEvent(date, regularPriceResult, menu);
    const weekendEventResult = weekendEvent(date, regularPriceResult, menu);
    const specialEventResult = specialEvent(date, regularPriceResult);
    const eventDiscountResult = eventDiscount(
      christmasEventResult,
      weekDayEventResult,
      weekendEventResult,
      specialEventResult,
      presentation
    );
    const lastPriceResult = lastPrice(
      regularPriceResult,
      christmasEventResult,
      weekDayEventResult,
      weekendEventResult,
      specialEventResult
    );

    menuOutput(menu);
    regularPriceOutput(regularPriceResult);
    presentationEventOutput(presentation);
    benefitDetailsOutput(
      christmasEventResult,
      weekDayEventResult,
      weekendEventResult,
      specialEventResult,
      presentation
    );
    benefitAmountOutput();
  }
}

const app = new App();
app.run();

export default App;

// console.log(christmasEventResult);
// console.log(weekDayEventResult);
// console.log(weekendEventResult);
// console.log(specialEventResult);
// console.log(christmasEvent(date, regularPriceResult));
// console.log(weekDayEvent(date, regularPriceResult, menu));
// console.log(weekendEvent(date, regularPriceResult, menu));
// console.log(specialEvent(date, regularPriceResult));
