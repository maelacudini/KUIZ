import { animateimg } from "@/utils/animate";
import style from "./prefooter.module.scss";
import { motion } from "framer-motion";

export default function index() {
  return (
    <div className={style.main}>
      <div className="row">
        <div className="col-md-8">
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            src="/Polystudio/img5.jpg"
            alt="img"
            className={`cursorWrapper ${style.img}`}
          />
          <h2>EcoWave Future</h2>
          <p>
            Elevate your sustainability journey with Polystudio EcoWave—a ripple
            effect of positive change through eco-conscious choices.
          </p>
        </div>
        <div className="col-md-4">
          <motion.img
            variants={animateimg}
            initial="initial"
            whileInView="animate"
            src="/Polystudio/img1.jpg"
            alt="img"
            className={`cursorWrapper ${style.img}`}
          />
          <h2>Future Water</h2>
          <p>A global brand for the future of water</p>
        </div>
      </div>

      <div className={style.card}>
        <div className="row">
          <div className={`col-md-6 ${style.cardcoldesc}`}>
            <h2>Our own podcast studio: W.A.T.E.R. Stories</h2>
            <br />
            <p>
              We also run W.A.T.E.R. Stories, an award-winning studio for
              original podcasts with a focus on audio documentaries and news
              shows.
            </p>
            <button>Lear more</button>
          </div>
          <div className="col-md-6">
            <motion.img
              variants={animateimg}
              initial="initial"
              whileInView="animate"
              src="/Polystudio/group.jpg"
              alt="group"
              width={"100%"}
              height={"300px"}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
