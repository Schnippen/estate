import React from "react";
import styles from "./Loading.module.css";
import { AiOutlineLoading } from "react-icons/ai";
import { useState, useEffect } from "react";

type LoadingTypes = {
  color: string;
  svgColor: string;
  top: number;
  left: number;
};

function Loading({ color, svgColor, top, left }: LoadingTypes) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === "...") {
        setTime("");
      } else {
        setTime((time) => time + ".");
      }
    }, 930);
    return () => {
      clearInterval(interval);
    };
  }, [time]);
  const loadingText = "Loading";

  return (
    <div className={styles.loading_container}>
      <AiOutlineLoading
        className={styles.svg}
        style={{ color: `${svgColor}` }}
      />
      <div style={{ color: `${color}`, top: `${top}%`, left: `${left}%` }}>
        {loadingText.split("").map((char, index) => (
          <span
            key={index}
            style={{
              color: "black",
              animationDelay: `calc(.1s * ${index + 1})`,
            }}
          >
            {char}
          </span>
        ))}
        {time}
      </div>
    </div>
  );
}

export default Loading;
