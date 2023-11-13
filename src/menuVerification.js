import compareMenu from "./compareMenu.js";
import menuObject from "./menuObject.js";
import numberOfMenus from "./numberOfMenus.js";

export default function menuVerification(menu) {
  const menuList = menuObject(menu);
  compareMenu(menuList);
  numberOfMenus(menuList);
}
