import {
  HiDotsHorizontal,
  HiMail,
  HiHeart,
  HiCog,
  HiOfficeBuilding,
  HiUserCircle,
} from "react-icons/hi";
import styles from "./UserInterface.module.css";
import useActive from "./useActive";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function UserInterface() {
  const [isActiveBig, setIsActiveBig] = useActive(false);
  const [isActiveSmall, setIsActive] = useActive(false);

  const ref = useRef();

  useEffect(() => {
    const handleClose = (e) => {
      if (isActiveSmall && ref.current && !ref.current?.contains(e.target)) {
        setIsActive();
      } else if (
        isActiveBig &&
        ref.current &&
        !ref.current?.contains(e.target)
      ) {
        setIsActiveBig();
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isActiveSmall, isActiveBig]);

  const openBtn1Big = () => {
    if (isActiveSmall) {
      setIsActive();
      setIsActiveBig();
    } else {
      setIsActiveBig();
    }
  };
  const openBtn2 = () => {
    if (isActiveBig) {
      setIsActiveBig();
      setIsActive();
    } else {
      setIsActive();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Loging In!");
  };

  return (
    <div className={styles.btn__group} ref={ref}>
      <button
        type="button"
        className={
          //isActive
          //  ? `${styles.btn} ${styles.btnBig_btnSmall_Opened}`
          //  : `${styles.btn} ${styles.btnBig}`
          isActiveBig
            ? `${styles.btn} ${styles.btnBig_Opened} `
            : isActiveSmall
            ? `${styles.btn} ${styles.btnBig_btnSmall_Opened}`
            : `${styles.btn} ${styles.btnBig}`
        }
        onClick={openBtn1Big}
      >
        Sign In
      </button>
      <button
        type="button"
        className={
          isActiveSmall
            ? `${styles.btn} ${styles.btnSmall_Opened}`
            : isActiveBig
            ? `${styles.btn} ${styles.btnBig_Opened_btnSmall}`
            : `${styles.btn} ${styles.btnSmall}`
        }
        onClick={openBtn2}
      >
        <HiDotsHorizontal />
      </button>
      <div className={isActiveBig ? styles.menu_btnBig_Opened : null}>
        {isActiveBig ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.form_div_wrapper}>
              <label for="email" className={styles.form_div_label}>
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                className={styles.inputText}
                onChange={(e) => console.log(e.target.value)}
                required
              />
            </div>
            <div className={styles.form_div_wrapper}>
              <label for="password" className={styles.form_div_label}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className={styles.inputText}
                onChange={(e) => console.log(e.target.value)}
                required
              />
            </div>

            <input value="Sign In" type="submit" className={styles.submit} />

            <p>Forgot your password?</p>
            <div className={styles.form_div_actions}>
              <p>Dont have Account?</p>
              <Link to="/SignUp">
                <p>Sign Up!</p>
              </Link>
            </div>
          </form>
        ) : null}
      </div>
      <div
        className={isActiveSmall ? styles.menu_btnSmall_Opened : null}
        onClick={(e) => console.log(e)}
        //Modal dla button 2
      >
        {isActiveSmall ? (
          <ul className={styles.menu_list}>
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
