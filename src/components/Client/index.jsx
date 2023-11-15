import { animateimg } from "@/utils/animate";
import style from "./client.module.scss";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Magnetic from "../Magnetic/Magnetic";

export default function index() {
  const clients = [
    { name: "one", img: "/logo.svg" },
    { name: "one", img: "/logo.svg" },
    { name: "one", img: "/logo.svg" },
    { name: "one", img: "/logo.svg" },
    { name: "one", img: "/logo.svg" },
    { name: "one", img: "/logo.svg" },
  ];

  return (
    <div className={style.main}>
      <h1>Clients</h1>

      <div className={style.container}>
        <div className={style.clients}>
          {clients.map((client, index) => (
            <Magnetic key={index}>
              <motion.img
                variants={animateimg}
                initial="initial"
                whileInView="animate"
                width={100}
                height={100}
                alt="image"
                custom={index}
                src={client.img}
              />
            </Magnetic>
          ))}
        </div>
      </div>
    </div>
  );
}
