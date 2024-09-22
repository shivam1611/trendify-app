import style from "./Loader.module.css";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: .3, stiffness: 300 }}
      className={style.container}
    >
      <div className={style.loader}></div>
    </motion.div>
  );
};

export default Loader;
