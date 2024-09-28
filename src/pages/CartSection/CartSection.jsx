import { useSelector } from "react-redux";
import Navigation from "../../components/NagivationBar/Navigation";
import style from "./CartSection.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { motion } from "framer-motion";
import CartedProduct from "../../components/CartedProduct/CartedProduct";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import { useState } from "react";

const CartSection = () => {
  const cart = useSelector((store) => store.cart_reducer.cart);
  const [showWarning, setShowWarning] = useState(false);
  return (
    <div className={style.main_container}>
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={style.cart_container}
      >
        {cart.length == 0 ? (
          <EmptyCart />
        ) : (
          cart.map((card) => (
            <CartedProduct
              showWarning={showWarning}
              title={card.title}
              key={card.id}
              product_id={card.id}
              rating={card.rating.rate}
              count={card.rating.count}
              price={card.price}
              image_url={card.image}
            />
          ))
        )}
      </motion.div>
    </div>
  );
};

export default CartSection;
