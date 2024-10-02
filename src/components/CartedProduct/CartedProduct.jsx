import { useDispatch } from "react-redux";
import style from "./CartedProduct.module.css";
import { removeProduct } from "../../Features/cart_section/Cart_slice";
import { useState } from "react";
import Warning from "../Warning/Warning";
const CartedProduct = ({
  title,
  rating,
  price,
  image_url,
  count,
  product_id,
  showWarning,
}) => {
  const dispatch = useDispatch();
  function handleRemoveCart(product_id) {
    dispatch(removeProduct(product_id));
  }

  return (
    <div className={style.container}>
      {showWarning && <Warning />}
      <div className={style.special_tag}>
        <p className={style.text_very_sm}>BestSeller</p>
        <i className={`fa-solid fa-star ${style.icon_very_sm}`}></i>
      </div>
      <div className={style.image_container}>
        <img src={image_url} alt="Product Image" />
      </div>

      <div className={style.body_container}>
        <h3 className={style.product_title}>{title}</h3>
        <div className={style.review_text_sm}>
          <p className={style.review}>
            {rating}
            <span className={style.star_icon}>
              <i className="fa-solid fa-star"></i>
            </span>
          </p>
          <div>|</div>
          <p> {count} Reviews</p>
        </div>
        <div className={style.price_container}>
          <p className={style.price}>
            <i className="fa-solid fa-indian-rupee-sign"></i> {price}
          </p>
        </div>
        <div className={style.button_container}>
          <button
            className={`${style.btn} ${style.btn_secondary}`}
            onClick={() => handleRemoveCart(product_id)}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
          <button className={`${style.btn} ${style.btn_primary}`}>
            Buy Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartedProduct;
