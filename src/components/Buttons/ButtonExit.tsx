import React from "react";
import { HiOutlineX } from "react-icons/hi";
import styles from "./ButtonExit.module.css";

type ButtonExitTypes = {
  setIsActive?: (value: boolean) => void;
};

function ButtonExit({ setIsActive }: ButtonExitTypes) {
  return (
    <button
      className={styles.buttonExit}
      onClick={() => setIsActive && setIsActive(false)}
      style={{ right: "100px", marginTop: "3rem", top: "0" }}
    >
      <HiOutlineX />
    </button>
  );
}

export default ButtonExit;
