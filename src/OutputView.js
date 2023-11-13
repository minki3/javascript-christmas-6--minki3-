import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMenu(output) {
    Console.print(`<${output}>`);
  },
  printError(error) {
    Console.print(`${error}`);
  },
  printMenuDetail(menu, quantity) {
    Console.print(`${menu} ${quantity}개`);
  },
  printPrice(price) {
    Console.print(`${price}원`);
  },
  printNotThing() {
    Console.print("없음");
  },
};
export default OutputView;
