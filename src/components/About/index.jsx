import { useMotionValue, useTransform, motion, animate } from "framer-motion";
import style from "./about.module.scss";
import { useEffect, useState } from "react";

export default function index() {
  const categories = [
    { name: "employees", number: 76 },
    { name: "nations", number: 5 },
    { name: "awards", number: 12 },
    { name: "years", number: 7 },
  ];

  return (
    <div className={style.main}>
      <h1>About</h1>

      <div className={`row ${style.row}`}>
        {categories.map((category, index) => (
          <div key={index} className={`col-md-3 ${style.col}`}>
            <div>
              <motion.h1>{category.number}</motion.h1>
              <p>{category.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p>
          At our art museum, we take pride in our dedicated team of 73
          passionate employees who come together from 5 different nations, each
          bringing their unique perspectives and talents to the museum's
          mission. Our commitment to excellence has been recognized with an
          impressive collection of 12 prestigious awards over the past 7 years.
          These accolades serve as a testament to our unwavering dedication to
          the world of art and culture. We are honored to have the opportunity
          to share our passion with visitors from all corners of the globe and
          look forward to continuing our journey of artistic exploration and
          innovation.
        </p>
      </div>
    </div>
  );
}
