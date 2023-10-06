import { useEffect, useState } from "react";
import style from "./style.module.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smooth = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const [showCursor, setShowCursor] = useState(false);

  const manageMouseMove = (e) => {
    const { clientX, clientY, target } = e;

    if (target.classList.contains("cursorWrapper")) {
      setShowCursor(true);
    } else {
      setShowCursor(false);
    }

    mouse.x.set(clientX);
    mouse.y.set(clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return showCursor ? (
    <motion.div
      style={{
        left: smooth.x,
        top: smooth.y,
      }}
      className={style.cursor}
    >
      <p>View Case Study</p>
    </motion.div>
  ) : null;
}
