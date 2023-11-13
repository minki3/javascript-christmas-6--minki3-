import compareMenu from "./compareMenu.js";
import menuObject from "./menuObject.js";
import numberOfMenus from "./numberOfMenus.js";
import onlyDrinkError from "./onlyDrinkError.js";

export default function menuVerification(menu) {
  const menuList = menuObject(menu);
  onlyDrinkError(menuList);
  compareMenu(menuList);
  numberOfMenus(menuList);
  return menuList;
}
