import style from "./about.module.scss";

export default function index() {
  return (
    <div className={style.main}>
      <h1>About</h1>

      <div className={`row ${style.row}`}>
        <div className={`col-md-3 ${style.col}`}>
          <div>
            <h1>73</h1>
            <p>employees</p>
          </div>
        </div>
        <div className={`col-md-3 ${style.col}`}>
          <div>
            <h1>5</h1>
            <p>nations</p>
          </div>
        </div>
        <div className={`col-md-3 ${style.col}`}>
          <div>
            <h1>12</h1>
            <p>awards</p>
          </div>
        </div>
        <div className={`col-md-3 ${style.col}`}>
          <div>
            <h1>7</h1>
            <p>years</p>
          </div>
        </div>
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
