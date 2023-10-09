import { useRef } from "react";
import style from "./hero.module.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import Nav from "../Nav";

export default function index() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  return (
    <div ref={ref} className={style.main}>
      <Nav />
      <div className={style.intro}>
        <div>
          <h1>Discover Our Artistic Endeavors</h1>

          <motion.img
            className={style.logo}
            src="/KUIZ/logo.svg"
            alt="logo"
            style={{ borderRadius: 0, rotate: rotate }}
            width={"150px"}
            height={"150px"}
          />
        </div>
      </div>

      <div className={style.link}>
        <a href="#">See how we can help.</a>
        <a href="#">Learn more about the museum.</a>
      </div>

      <div className={`row ${style.row}`}>
        <div className={`col-md-8 ${style.col}`}>
          <img width={300} height={300} alt="image" src="/KUIZ/img2.jpg" />
          <p>Ephemeral Expressions</p>
          <p>
            Delve into the world of fleeting beauty and emotions in a series of
            time-sensitive installations that capture the essence of
            impermanence.
          </p>
        </div>
        <div className={`col-md-4 ${style.col}`}>
          <img width={300} height={300} alt="image" src="/KUIZ/img3.jpg" />
          <p>Cultural Kaleidoscope</p>
          <p>
            Celebrate global diversity through a curated collection of artifacts
            and artworks that showcase the vibrant colors, textures, and
            narratives of our interconnected human heritage.
          </p>
        </div>
      </div>
    </div>
  );
}
