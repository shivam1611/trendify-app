import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";


const Navigation = () => {
  return (
    <div className={style.navigation_section}>
      <ul className={` ${style.category_navlist} ${style.navlist}`}>
        <li className={`${style.nav_items} ${style.category_items}`}> Mens</li>
        
        <li className={`${style.nav_items} ${style.category_items}`}>Womens</li>
        <li className={`${style.nav_items} ${style.category_items}`}>
          Jwellery
        </li>
        <li className={`${style.nav_items} ${style.category_items}`}>
          Electronics
        </li>
      </ul>
      <div className={style.logo_container}>
        <h1 className={style.logo}>Trendify</h1>
      </div>
      <ul className={`${style.navlist} ${style.option_navlist}`}>
        <li className={`${style.nav_items} ${style.option_items}`}>
        <NavLink className={style.nav_icon} to={"/wishlist"}>
          <i className={`fa-regular fa-heart ${style.option_icon}`}></i>
          </NavLink>
        </li>
        <li className={`${style.nav_items} ${style.option_items}`}>
          <NavLink className={style.nav_icon} to={"/cartsection"}>
          <i className={`fa-solid fa-cart-shopping ${style.option_icon}`}></i>
          </NavLink>
        </li>
        <li className={`${style.nav_items} ${style.option_items}`}>
        <NavLink className={style.nav_icon} to={"/user"}>
          <i className={`fa-regular fa-user ${style.option_icon}`}></i>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
