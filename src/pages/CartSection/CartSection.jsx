import Navigation from "../../components/NagivationBar/Navigation";
import style from "./CartSection.module.css";
import { motion } from "framer-motion";

const CartSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Navigation />
    </motion.div>
  );
};

export default CartSection;
