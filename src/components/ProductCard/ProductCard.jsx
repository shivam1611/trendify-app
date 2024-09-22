import style from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ title, rating, price, image_url, count }) => {
  const navigate = useNavigate();
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
          <button className={`${style.btn} ${style.btn_primary}`}>
            Add to Cart
          </button>
          <button
            onClick={() => navigate("/productPage")}
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
