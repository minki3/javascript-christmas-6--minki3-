import { Console } from "@woowacourse/mission-utils";

const OutputView = {
  printMenu() {
    Console.print("<주문 메뉴>");
  },
  printError(error) {
    Console.print(`${error}`);
  },
  printMenuDetail(menu, quantity) {
    Console.print(`${menu} ${quantity}개`);
  },
};
export default OutputView;
