import InputView from "./InputView.js";
class App {
  async run() {
    console.log(await InputView.readDate());
    // await inputView.readDate();
  }
}

const app = new App();
app.run();

export default App;
