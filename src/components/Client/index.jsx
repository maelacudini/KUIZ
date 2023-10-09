import { animateimg } from "@/utils/animate";
import style from "./client.module.scss";
import { motion } from "framer-motion";

export default function index() {
  return (
    <div className={style.main}>
      <h1>Clients</h1>

      <div className={style.container}>
        <div className={style.clients}>
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            custom={1}
            width={100}
            height={100}
            alt="image"
            src="/KUIZ/logo.svg"
          />
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            custom={2}
            width={100}
            height={100}
            alt="image"
            src="/KUIZ/logo.svg"
          />
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            custom={3}
            width={100}
            height={100}
            alt="image"
            src="/KUIZ/logo.svg"
          />
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            custom={4}
            width={100}
            height={100}
            alt="image"
            src="/KUIZ/logo.svg"
          />
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            custom={5}
            width={100}
            height={100}
            alt="image"
            src="/KUIZ/logo.svg"
          />
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            custom={6}
            width={100}
            height={100}
            alt="image"
            src="/KUIZ/logo.svg"
          />
        </div>
      </div>
    </div>
  );
}
