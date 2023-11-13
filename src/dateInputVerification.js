export default function dateInputVerification(date) {
  const numberDate = Number(date);

  if (isNaN(numberDate)) {
    throw new Error("[ERROR] : 숫자를 입력해주세요");
  }
  if ((numberDate < 1) | (numberDate > 31)) {
    throw new Error("[ERROR] : 숫자의 범위는 1 ~ 31까지 입니다.");
  }

  return numberDate;
}
