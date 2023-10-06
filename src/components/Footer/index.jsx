import style from "./footer.module.scss";

export default function index() {
  return (
    <footer className={style.footer}>
      <div>
        <h2>General</h2>
        <p>
          info@polystudio.com <br /> +12 3456 7890
        </p>
      </div>

      <div>
        <h2>New Business</h2>
        <p>projects@polystudio.com</p>
      </div>

      <div>
        <h2>Find Us</h2>
        <p>
          Polystudio <br /> Via Roma 21, Milano MI <br /> 31289, Italy
        </p>
      </div>

      <div>
        <h2>Follow Us</h2>
        <a className="d-block">Twitter</a>
        <a className="d-block">Instagram</a>
        <a className="d-block">LindedIn</a>
      </div>

      <div className={style.bottom}>
        <p className={style.small}>
          © 2023 Polystudio. All rights reserved. Polystudio and the Polystudio
          logo are registered trademarks of Polystudio Ltd.
        </p>
        <h1 className="m-0">POLYSTUDIO</h1>
      </div>
    </footer>
  );
}
