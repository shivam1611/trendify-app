import { useNavigate } from "react-router-dom";
import cart from "../../assets/empty_cart.png";
import style from "./EmptyCart.module.css";
import { motion } from "framer-motion";
const EmptyCart = () => {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ stiffness: 200, duration: 0.5 }}
      className={style.empty_cartpage}
    >
      <div className={style.img_section}>
        <img src={cart} alt="" />
      </div>
      <div className={style.body}>
        <p className={style.head}>Your cart is currently empty!</p>
        <p className={style.body_text}>
          It looks like you haven't added anything yet. Let's change that!
        </p>
        <button onClick={() => goToHome()} className={style.call_to_action_btn}>
          Start Shopping Now
        </button>
      </div>
    </motion.div>
  );
};

export default EmptyCart;
