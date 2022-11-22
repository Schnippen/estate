import {
  HiDotsHorizontal,
  HiMail,
  HiHeart,
  HiCog,
  HiOfficeBuilding,
} from "react-icons/hi";
import styles from './UserInterface.module.css'
import useActive from './useActive';

function UserInterface() {
  const [Active,setActive] = useActive(false)

  return (
    <div className={styles.btn__group}>
      <button
        type="button"
        className={
          Active
            ? `${styles.btn} ${styles.btn1_btn2_Opened}`
            : `${styles.btn} ${styles.btn1}`
        }
      >
        Sign In
      </button>
      <button
        type="button"
        className={
          Active
            ? `${styles.btn} ${styles.btn2_Opened}`
            : `${styles.btn} ${styles.btn2}`
        }
        onClick={setActive}
      >
        <HiDotsHorizontal />
      </button>
      <div
        className={Active ? styles.modal_Opened : styles.modal}
        onClick={(e) => console.log(e)}
      >
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
      </div>
    </div>
  );
}

export default UserInterface