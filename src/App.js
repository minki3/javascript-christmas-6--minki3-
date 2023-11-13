import dateInputRetry from "./dateInputRetry.js";
import menuInputRetry from "./menuInputRetry.js";

class App {
  async run() {
    const date = await dateInputRetry();
    const menu = await menuInputRetry();
    console.log(menu);
  }
}

const app = new App();
app.run();

export default App;
