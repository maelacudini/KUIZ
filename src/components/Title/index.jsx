import { useEffect, useRef } from "react";
import style from "./title.module.scss";

export default function Index() {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.8;
  const targetMaskSize = 30;
  const easing = 0.15;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  //get height of display
  useEffect(() => {
    const displayHeight = document.getElementById("displayHeight");
    const setVideoHeight = () => {
      if (displayHeight) {
        displayHeight.style.height = `${window.innerHeight}px`;
      }
    };

    // Set initial height
    setVideoHeight();

    // Update height on window resize
    window.addEventListener("resize", setVideoHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", setVideoHeight);
    };
  }, []);

  return (
    <main className={style.main}>
      <div ref={container} className={style.container}>
        <div id="displayHeight" ref={stickyMask} className={style.stickyMask}>
          <img src="/img.jpg" alt="img" />
        </div>
      </div>
    </main>
  );
}
