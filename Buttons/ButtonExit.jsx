import React from 'react'
import { HiOutlineX } from "react-icons/hi";
import styles from "./ButtonExit.module.css"

function ButtonExit({ setIsActive }) {
  return (
    <button
      className={styles.buttonExit}
      onClick={setIsActive}
      style={{ right: "100px", marginTop: "3rem", top: "0" }}
    >
      <HiOutlineX />
    </button>
  );
}

export default ButtonExit