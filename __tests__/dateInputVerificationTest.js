import dateInputVerification from "../src/DateInputVerification";

describe("날짜 입력 예외 테스트", () => {
  it("정상 입력시 ", () => {
    const number = "20";
    const result = dateInputVerification(number);

    expect(result).toBe(20);
  }),
    it("1 미만 일시 ", () => {
      const number = 0;

      expect(() => {
        dateInputVerification(number);
      }).toThrow("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }),
    it("31 초과 일시 ", () => {
      const number = 32;

      expect(() => {
        dateInputVerification(number);
      }).toThrow("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    });
});
