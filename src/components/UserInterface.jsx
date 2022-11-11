import React, { useState } from 'react'
import { HiDotsHorizontal } from "react-icons/hi";
import styles from './UserInterface.module.css'

function UserInterface() {

const [isOpened,setIsOpened] = useState(false)
    console.log(isOpened);

  return (
    <div className={styles.btn__group}>
      <button type="button" className={`${styles.btn} ${styles.btn1}`}>
        Sign In
      </button>
      <button
        type="button"
        className={`${styles.btn} ${styles.btn2}`}
        onClick={() => setIsOpened((isOpened) => !isOpened)}
      >
        <HiDotsHorizontal />
      </button>
      <div
        className={isOpened ? styles.modal_Opened : styles.modal}
        onClick={(e) => console.log(e) }
      >
        <ul className={styles.modal_list}>
          <li>ogłoszenia </li>
          <li>wiadomosci</li>
          <li>obserwowane</li>
          <li>ustawienia</li>
        </ul>
      </div>
    </div>
  );
}

export default UserInterface