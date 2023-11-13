export default function menuObject(menu) {
  let result = {};
  const array = menu.split(",");

  array.forEach((item) => {
    const [key, value] = item.split("-");

    if (result.hasOwnProperty(key)) {
      throw new Error(`[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`);
    }

    result[key] = Number(value);
  });

  return result;
}
