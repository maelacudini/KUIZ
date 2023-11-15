import { generals } from "@/utils/animate";
import style from "./projects.module.scss";
import { motion } from "framer-motion";

const projects = [
  {
    title: "The Enchanted Garden",
    description:
      "Step into the enchanting world of 'The Enchanted Garden,' a mesmerizing multimedia installation that blurs the line between reality and imagination. This immersive experience invites you to wander through a lush, otherworldly landscape, where art and nature converge. Let the interplay of light, sound, and vibrant flora transport you to a realm of wonder and contemplation, where the boundaries of artistry are stretched to their limits.",
    url: "/img4.jpg",
  },
  {
    title: "Resonance: A Journey Through Time",
    description:
      "Embark on a journey through the annals of history with 'Resonance,' an exhibition that bridges the past and the present. This project takes you on a captivating exploration of art's enduring impact on culture and society. Through a diverse collection of artifacts, paintings, and interactive installations, 'Resonance' reveals the timeless connections that bind humanity and art, inviting you to reflect on the rich tapestry of our shared heritage.",
    url: "/img5.jpg",
  },
];

export default function index() {
  return (
    <div className={style.main}>
      <h1>our projects</h1>
      <div className={style.intro}>
        <p className={style.projectitle}>KUIZ ART MUSEUM</p>
        <p>
          Welcome to the heart of creativity at our art museum. Our projects
          represent the embodiment of innovation and artistic expression. With
          each endeavor, we push the boundaries of artistic exploration,
          striving to create meaningful and captivating experiences for art
          enthusiasts and the broader community. Join us on a journey through
          two of our remarkable projects that showcase the power of art to
          inspire, provoke, and connect.
        </p>
      </div>

      {projects.map((project, index) => (
        <div key={index} className={style.project}>
          <motion.img
            variants={generals}
            initial="initial"
            whileInView="animate"
            custom={index}
            width={300}
            height={300}
            alt={project.title}
            src={project.url}
          />
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6" style={{ paddingLeft: "40px" }}>
              <p className={style.projectitle}>{project.title}</p>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
