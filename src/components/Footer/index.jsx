import style from "./footer.module.scss";

export default function index() {
  return (
    <footer className={style.footer}>
      <div className="text-center">
        <h1>SAY HELLO</h1>
        <a href="#">Get in touch.</a>
      </div>

      <div className={style.social}>
        <div>
          <a href="#">@2017 - 2023</a>
          <a href="#">PRIVACY</a>
        </div>
        <div>
          <a href="#">INSTAGRAM</a>
          <a href="#">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
}
