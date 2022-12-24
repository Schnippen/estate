import React from "react";
import styles from "./Loading.module.css";
import { AiOutlineLoading } from "react-icons/ai";
import { useState, useEffect } from "react";

function Loading() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === "...") {
        setTime("");
      } else {
        setTime((time) => time + ".");
      }
    }, 800);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className={styles.loading_container}>
      <AiOutlineLoading className={styles.svg} />
      <div>{`Loading${time}`}</div>
    </div>
  );
}

export default Loading;
