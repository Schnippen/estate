import {
  HiDotsHorizontal,
  HiMail,
  HiHeart,
  HiCog,
  HiOfficeBuilding,
} from "react-icons/hi";
import styles from "./UserInterface.module.css";
import useActive from "./useActive";
import { useRef, useEffect } from "react";

function UserInterface() {
  const [isActive, setIsActive] = useActive(false);

  const ref = useRef();
  console.log(ref, isActive);

  useEffect(() => {
    const handleClose = (e) => {
      if (isActive && ref.current && !ref.current?.contains(e.target)) {
        setIsActive();
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isActive]);

  return (
    <div className={styles.btn__group}>
      <button
        type="button"
        className={
          isActive
            ? `${styles.btn} ${styles.btn1_btn2_Opened}`
            : `${styles.btn} ${styles.btn1}`
        }
      >
        Sign In
      </button>
      <button
        ref={ref}
        type="button"
        className={
          isActive
            ? `${styles.btn} ${styles.btn2_Opened}`
            : `${styles.btn} ${styles.btn2}`
        }
        onClick={setIsActive}
      >
        <HiDotsHorizontal />
      </button>
      <div
        className={isActive ? styles.modal_Opened : styles.modal}
        onClick={(e) => console.log(e)}
      >
        {isActive ? (
          <ul className={styles.modal_list}>
            <li>
              <HiOfficeBuilding />
              Ogłoszenia{" "}
            </li>
            <li>
              <HiMail />
              Wiadomosci
            </li>
            <li>
              <HiHeart />
              Obserwowane
            </li>
            <li>
              <HiCog />
              Ustawienia
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default UserInterface;
