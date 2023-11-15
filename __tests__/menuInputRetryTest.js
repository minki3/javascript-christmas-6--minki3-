import menuInputRetry from "../src/menuInputRetry";
import menuVerification from "../src/menuVerification";
import InputView from "../src/InputView";
import OutputView from "../src/OutputView";

jest.mock("../src/InputView.js", () => ({
  MenuInput: jest.fn(),
}));

jest.mock("../src/menuVerification.js", () => jest.fn());

jest.mock("../src/OutputView.js", () => ({
  printError: jest.fn(),
}));

describe("메뉴 입력시 input 호출 테스트", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("호출 테스트", async () => {
    InputView.MenuInput.mockReturnValueOnce("invalid date").mockReturnValueOnce(
      "양송이수프-1"
    );
    menuVerification
      .mockImplementationOnce(() => {
        throw new Error(
          "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."
        );
      })
      .mockImplementationOnce(() => {
        "양송이수프-1";
      });
    await menuInputRetry();

    expect(InputView.MenuInput).toHaveBeenCalledTimes(2);
    expect(menuVerification).toHaveBeenCalledTimes(2);
    expect(OutputView.printError).toHaveBeenCalledWith(
      new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.")
    );
  });
});
