import InputView from "./InputView.js";
class App {
  async run() {
    console.log(await InputView.DateInput());
    // await inputView.readDate();
  }
}

const app = new App();
app.run();

export default App;
