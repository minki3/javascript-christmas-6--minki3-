import dateInputRetry from "./dateInputRetry.js";

class App {
  async run() {
    dateInputRetry();
    // const menue = await InputView.MenuInput();
  }
}

const app = new App();
app.run();

export default App;
