"use client";
import style from "./nav.module.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { menu, enterlink } from "./animation";

const links = [
  { name: "Performance" },
  { name: "About Us" },
  { name: "Contact" },
];

export default function Index() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={style.offcanvas}>
      <div className={style.menu}>
        <h2>POLYSTUDIO</h2>
        <a
          onClick={() => {
            setOpen(!open);
          }}
          className={style.menubtn}
        >
          Menu
        </a>
      </div>
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            variants={menu}
            initial="initial"
            animate="enter"
            exit="exit"
            className={style.offbody}
          >
            <a
              className={style.closebtn}
              onClick={() => {
                setOpen(!open);
              }}
            >
              Close
            </a>
            {links.map((link, index) => (
              <div
                key={index}
                className="d-flex justify-content-between align-items-center"
              >
                <a href="#">{link.name}</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="white"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </div>
            ))}

            <div className={style.card}>
              <img src="/Polystudio/logo.svg" alt="thumbnail" />
              <div>
                <h2>Podcast</h2>
                <p className="m-0">Listen to our latest podcast.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
