import Navigation from "../../components/NagivationBar/Navigation";
import style from "./HomePage.module.css";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <motion.div
      className={style.homepage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <Navigation />
    </motion.div>
  );
};

export default HomePage;
