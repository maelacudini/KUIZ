import { animateimg } from "@/utils/animate";
import style from "./hero.module.scss";
import { motion } from "framer-motion";

export default function index() {
  return (
    <div className={style.main}>
      <h1>
        Polystudio creates products, brands, and content that push things
        forward.
      </h1>

      <div className="row">
        <div className="col-md-8">
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            src="/Polystudio/img1.jpg"
            alt="img"
            className={`cursorWrapper ${style.img}`}
          />
          <h2>GreenPack Revolution</h2>
          <p>
            Join the eco-friendly movement with Polystudio GreenPack, where
            sustainability meets hydration for a greener planet.{" "}
          </p>
        </div>
        <div className="col-md-4">
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            src="/Polystudio/img2.jpg"
            alt="img"
            className={`cursorWrapper ${style.img}`}
          />
          <h2>OceanGuard Initiative</h2>
          <p>
            Our commitment to the oceans is embodied in OceanGuard—pure water, a
            clean ocean, a better world.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <p>
            Introducing Polystudio, a visionary brand committed to redefining
            the way we consume water. With an unwavering dedication to
            sustainability and the environment, Polystudio brings you pure,
            refreshing water in carton boxes, revolutionizing the way you stay
            hydrated. Our commitment to eco-friendliness extends beyond the
            product itself, as every carton is thoughtfully designed to minimize
            its environmental footprint. With Polystudio, you're not just
            hydrating; you're making a conscious choice for a greener, cleaner
            future.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            src="/Polystudio/img3.jpg"
            alt="img"
            className={`cursorWrapper ${style.img}`}
          />

          <h2>CartonCraft Innovation</h2>
          <p>
            Discover the art of sustainable packaging with CartonCraft—a
            revolution in eco-conscious design and functionality.
          </p>
        </div>
        <div className="col-md-4">
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            src="/Polystudio/img4.jpg"
            alt="img"
            className={`cursorWrapper ${style.img}`}
          />

          <h2>Community Wellspring</h2>
          <p>
            Empower communities and quench their thirst for change with our
            Community Wellspring initiative.
          </p>
        </div>
      </div>

      <div className="row" style={{ marginTop: "80px" }}>
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <h2> Who we work with</h2>
          <p>
            At Polystudio, we believe in making sustainability effortlessly
            accessible. Our premium water, packaged in carton boxes, is the
            epitome of eco-friendliness and purity. From source to packaging, we
            prioritize the environment, ensuring that every drop of water you
            enjoy is a testament to our commitment to nature. With Polystudio,
            you're not just drinking water; you're embracing a lifestyle that
            champions sustainability, without compromising on quality. Welcome
            to a world where refreshment meets responsibility, where every sip
            contributes to a brighter, more sustainable tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
}
