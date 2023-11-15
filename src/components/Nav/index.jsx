import { useEffect, useState } from "react";
import style from "./nav.module.scss";
import { menu } from "./animation";
import { AnimatePresence, motion } from "framer-motion";

export default function () {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const displayHeight = document.getElementById("displayHeight");
    const setVideoHeight = () => {
      if (displayHeight) {
        displayHeight.style.height = `${window.innerHeight}px`;
      }
    };

    // Set initial height
    setVideoHeight();

    // Update height on window resize
    window.addEventListener("resize", setVideoHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", setVideoHeight);
    };
  }, []);

  return (
    <nav className={style.main}>
      <div className={style.nav}>
        <h2>KUIZ</h2>
        <button
          onClick={() => {
            setOpen(!open);
          }}
        >
          Menu
        </button>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="nav"
            variants={menu}
            initial="initial"
            animate="enter"
            exit="exit"
            className={style.offset}
            id="displayHeight"
          >
            <button
              onClick={() => {
                setOpen(!open);
                const navElement = document.getElementById("nav");
                navElement.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Close
            </button>

            <div className={style.links}>
              <h1>projects,</h1>
              <h1>news,</h1>
              <h1>about,</h1>
              <h1>contact</h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
