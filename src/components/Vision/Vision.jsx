"use client";
import { useEffect, useRef } from "react";
import style from "./vision.module.scss";

export default function Vision() {
  const videoRef = useRef(null);

  useEffect(() => {
    const setVideoHeight = () => {
      if (videoRef.current) {
        videoRef.current.style.height = `${window.innerHeight}px`;
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
    <div className={style.vision}>
      <video
        ref={videoRef}
        playsInline
        loop
        autoPlay
        muted
        width={"100%"}
        height={"auto"}
      >
        <source src="./video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
