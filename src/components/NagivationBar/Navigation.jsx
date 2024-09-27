/* eslint-disable react/prop-types */
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import style from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

const Navigation = ({ setQuery }) => {
  const cart = useSelector((store) => store.cart_reducer.cart);
  const navigate = useNavigate();

  // Create a ref to access the DOM element
  const openBar = useRef(null);

  const closeBar = useRef(null);

  const navlist = useRef(null);

  useEffect(() => {
    // Get the element from the ref
    const bar_element = openBar.current;
    const close_element = closeBar.current;
    const nav = navlist.current;

    // Add the click event listener to toggle the class
    const handleOpenNav = () => {
      nav.classList.add("open_nav");
      nav.style.left = "0rem";
    };
    const handleCloseNav = () => {
      nav.style.left = "-100rem";
    };

    bar_element.addEventListener("click", handleOpenNav);
    close_element.addEventListener("click", handleCloseNav);

    // Cleanup the event listener on component unmount
    return () => {
      bar_element.removeEventListener("click", handleOpenNav);
      close_element.removeEventListener("click", handleCloseNav);
    };
  }, []);

  return (
    <div className={style.navigation_section}>
      <div className={style.bar_section} id="open_bar" ref={openBar}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <ul
        className={` ${style.category_navlist} ${style.navlist}`}
        ref={navlist}
      >
        <div className={style.xmark} ref={closeBar}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <li
          onClick={() => {
            navigate("/");
            setQuery("men's clothing");
          }}
          className={`${style.nav_items} ${style.category_items}`}
        >
          Mens
        </li>

        <li
          onClick={() => {
            navigate("/");
            setQuery("women's clothing");
          }}
          className={`${style.nav_items} ${style.category_items}`}
        >
          Womens
        </li>
        <li
          onClick={() => {
            navigate("/");
            setQuery("jewelery");
          }}
          className={`${style.nav_items} ${style.category_items}`}
        >
          Jewelery
        </li>
        <li
          onClick={() => {
            navigate("/");
            setQuery("electronics");
          }}
          className={`${style.nav_items} ${style.category_items}`}
        >
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
          <p className={style.cart_item_count}>{cart.length && cart.length}</p>
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
