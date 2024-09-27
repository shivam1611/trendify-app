import style from "./ProductCard.module.css";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addproduct } from "../../Features/cart_section/Cart_slice";
import store from "../../store";
import { useState } from "react";

const ProductCard = ({
  title,
  rating,
  price,
  image_url,
  count,
  product_id,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);

  const products = useSelector((store) => store.product_list.product_list);
  const cart = useSelector((store) => store.cart_reducer.cart);

  function handleAddCart(product_id) {
    const isInCart = cart.some((item) => item.id === product_id);
    if (!isInCart) {
      const item = products.filter((item) => item.id == product_id);
      item.forEach((item) => dispatch(addproduct(item)));
      setInCart(true);
    } else {
      alert("Already Carted");
    }
  }

  function handleViewProduct(product_ID) {
    const product_arr = products.filter((items) => items.id == product_ID);
    // setItem(product_arr[0]);
  }

  return (
    <div className={style.container}>
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
            className={`${style.btn} ${
              inCart == false ? style.btn_primary : style.btn_primary_carted
            }`}
            onClick={() => handleAddCart(product_id)}
          >
            {inCart ? `Added to cart` : "Add to cart"}
          </button>
          <button
            onClick={() => handleViewProduct(product_id)}
            className={`${style.btn} ${style.btn_secondary}`}
          >
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image_url: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  product_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
