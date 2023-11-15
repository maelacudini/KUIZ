import style from "./footer.module.scss";
import { motion } from "framer-motion";

export default function index({ y }) {
  return (
    <motion.footer style={{ y: y }} className={style.footer}>
      <div className="text-center">
        <h1>SAY HELLO</h1>
        <a href="#">Get in touch.</a>
      </div>

      <div className={style.social}>
        <div className={style.col}>
          <h3>sayhellokuiz@museum.com</h3>
          <a>Kuiz copiright statement © - 2023</a>
          <a>Black Street, 21</a>
          <a>Berlin, EU</a>
        </div>
        <div className={style.col}>
          <a href="#"> Instagram</a>
          <a href="#"> Facebook</a>
          <a href="#"> LinkedIn</a>
          <a href="#"> TripAdvisor</a>
        </div>
      </div>
    </motion.footer>
  );
}
