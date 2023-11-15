export default function numberOfMenus(menuList) {
  const value = Object.values(menuList);
  let orderQuantity = 0;
  for (let i = 0; i < value.length; i += 1) {
    orderQuantity += value[i];
    if (value[i] < 1 || isNaN(value[i]) || orderQuantity > 20)
      throw new Error("[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.");
  }
}
