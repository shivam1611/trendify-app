import Navigation from "../../components/NagivationBar/Navigation";
import { motion } from "framer-motion";

const WishList = () => {
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

export default WishList;
