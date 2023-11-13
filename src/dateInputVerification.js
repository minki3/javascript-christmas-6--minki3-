export default function dateInputVerification(date) {
  const numberDate = Number(date);

  if (isNaN(numberDate)) {
    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  }
  if ((numberDate < 1) | (numberDate > 31)) {
    throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
  }

  return numberDate;
}
