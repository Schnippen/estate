import React from "react";
import styles from "./Loading.module.css";
import { AiOutlineLoading } from "react-icons/ai";
import { useState, useEffect } from "react";

type LoadingTypes = {
  color:string;
  svgColor:string;
  top:number;
  left:number;
};

function Loading({color,svgColor,top,left}:LoadingTypes) {
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
      <AiOutlineLoading className={styles.svg} style={{color:`${svgColor}`}}/>
      <div style={{color:`${color}`, top:`${top}%`,left:`${left}%`,}}>{`Loading${time}`}</div>
    </div>
  );
}

export default Loading;
