import style from "./clients.module.scss";
import { motion } from "framer-motion";

const images = [
  { url: "/Polystudio/logo.svg" },
  { url: "/Polystudio/logo.svg" },
  { url: "/Polystudio/logo.svg" },
  { url: "/Polystudio/logo.svg" },
  { url: "/Polystudio/logo.svg" },
  { url: "/Polystudio/logo.svg" },
  { url: "/Polystudio/logo.svg" },
  { url: "/Polystudio/logo.svg" },
];

export default function index({ rotate }) {
  return (
    <div className={style.main}>
      {images.map((image, index) => (
        <div key={index} className={style.card}>
          <motion.img
            style={{ rotate: rotate }}
            src={image.url}
            alt={image.url}
          />
        </div>
      ))}
    </div>
  );
}
