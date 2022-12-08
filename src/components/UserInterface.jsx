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
  const [isActiveBig, setIsActiveBig] = useActive(false);
  const [isActive, setIsActive] = useActive(false);

  const ref = useRef();

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

  const openBtn1Big =()=>{
    if(isActive){
      setIsActive();
      setIsActiveBig();
    }else{setIsActiveBig();}
  }
  const openBtn2 = () => {
    if (isActiveBig) {
      setIsActiveBig();
      setIsActive();
    } else {
      setIsActive();
    }
  };

  return (
    <div className={styles.btn__group} ref={ref}>
      <button
        type="button"
        className={
          //isActive
          //  ? `${styles.btn} ${styles.btn1_btn2_Opened}`
          //  : `${styles.btn} ${styles.btn1}`
          isActiveBig
            ? `${styles.btn} ${styles.btn1_btn2_Opened}  `
            : `${styles.btn} ${styles.btn1}`
        }
        onClick={openBtn1Big}
      >
        Sign In
      </button>
      <button
        type="button"
        className={
          isActive
            ? `${styles.btn} ${styles.btn2_Opened}`
            : `${styles.btn} ${styles.btn2}`
        }
        onClick={openBtn2}
      >
        <HiDotsHorizontal />
      </button>
      <div className={isActiveBig ? styles.modal_btn1_Opened : null}></div>
      <div
        className={isActive ? styles.modal_btn2_Opened : null}
        onClick={(e) => console.log(e)}
        //Modal dla button 2
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
