import dateInputRetry from "../src/dateInputRetry";
import InputView from "../src/InputView.js";
import dateInputVerification from "../src/DateInputVerification.js";
import OutputView from "../src/OutputView.js";

jest.mock("../src/InputView.js", () => ({
  DateInput: jest.fn(),
}));

jest.mock("../src/DateInputVerification.js", () => jest.fn());

jest.mock("../src/OutputView.js", () => ({
  printError: jest.fn(),
}));

describe("날짜 잘못 입력시 함수 input 호출 테스트", () => {
  it("호출 테스트", async () => {
    InputView.DateInput.mockReturnValueOnce("invalid date").mockReturnValueOnce(
      10
    );
    dateInputVerification
      .mockImplementationOnce(() => {
        throw new Error("[ERROR] : 숫자를 입력해주세요");
      })
      .mockImplementationOnce(() => 10);

    await dateInputRetry();

    expect(InputView.DateInput).toHaveBeenCalledTimes(2);
    expect(dateInputVerification).toHaveBeenCalledTimes(2);
    expect(OutputView.printError).toHaveBeenCalledWith(
      new Error("[ERROR] : 숫자를 입력해주세요")
    );
  });
});
