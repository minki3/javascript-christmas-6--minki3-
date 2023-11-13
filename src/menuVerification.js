import compareMenu from "./compareMenu.js";

export default function menuVerification(menu) {
  let result = {};
  const array = menu.split(",");
  array
    .map((item) => item.split("-"))
    .forEach((item) => {
      result[item[0]] = Number(item[1]);
    });

  compareMenu(result);
}
