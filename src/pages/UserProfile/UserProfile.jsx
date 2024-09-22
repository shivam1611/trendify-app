import Navigation from "../../components/NagivationBar/Navigation";
import style from "./UserProfile.module.css";
import { motion } from "framer-motion";
const UserProfile = () => {
  return (
    <div className={style.container}>
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .6, delay: 0.5 }}
        className={style.main_container}
      >
        <main className={style.profile_header}>

        </main>
      </motion.div>
    </div>
  );
};

export default UserProfile;
