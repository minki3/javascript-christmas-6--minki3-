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
  printEventPrice(input, price) {
    Console.print(`${input} : -${price}원`);
  },
  printBadge(badge) {
    Console.print(`${badge}`);
  },
};
export default OutputView;
