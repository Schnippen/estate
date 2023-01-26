import {
  HiDotsHorizontal,
  HiMail,
  HiHeart,
  HiCog,
  HiOfficeBuilding,
  HiLockClosed,
} from "react-icons/hi";
import styles from "./UserInterface.module.css";
import useActive from "./useActive";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

function UserInterface() {
  const [isActiveBig, setIsActiveBig] = useActive(false);
  const [isActiveSmall, setIsActive] = useActive(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Loging In!");
    setIsLoading(true);
    console.table(userLogin);
    console.log("Proceed login");
    try {
      const res = await fetch("http://localhost:3200/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userLogin),
      });
      const data = await res.json();
      if (data.error) {
        console.log(data.error);
      } else {
        // update the state to indicate that the user is logged in
        
      }
    } catch (err) {
      console.log("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const Form = (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.form_div_wrapper}>
        <label htmlFor="email" className={styles.form_div_label}>
          E-mail
        </label>
        <div className={styles.inputWrapper}>
          <HiMail className={styles.svg} />
          <input
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            className={styles.inputText}
            onChange={handleLogin}
            required
          />
        </div>
      </div>
      <div className={styles.form_div_wrapper}>
        <label htmlFor="password" className={styles.form_div_label}>
          Password
        </label>
        <div className={styles.inputWrapper}>
          <HiLockClosed className={styles.svg} />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className={styles.inputText}
            onChange={handleLogin}
            required
          />
        </div>
      </div>
      <input
        value="Sign In"
        type="submit"
        className={styles.submit}
        disabled={userLogin.email && userLogin.password ? false : true}
      />
      <p>Forgot your password?</p>
      <div className={styles.form_div_actions}>
        <p>Don't have an Account?</p>
        <Link to="/SignUp" className={styles.signup}>
          <p>Sign Up!</p>
        </Link>
      </div>
    </form>
  );
  const ListItem = ({ icon: Icon, text }) => (
    <li>
      <div>
        <Icon />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </li>
  );
  const List = () => (
    <ul className={styles.menu_list}>
      <ListItem icon={HiOfficeBuilding} text="Ogłoszenia" />
      <ListItem icon={HiMail} text="Wiadomosci" />
      <ListItem icon={HiHeart} text="Obserwowane" />
      <ListItem icon={HiCog} text="Ustawienia" />
    </ul>
  );

  return (
    <div className={styles.btn__group} ref={ref}>
      <button
        type="button"
        className={
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
          <>
            {isLoading ? (
              <Loading
                color={"#efe7e7"}
                svgColor={"#daa520"}
                top={69}
                left={28}
              />
            ) : (
              Form
            )}
          </>
        ) : null}
      </div>
      <div className={isActiveSmall ? styles.menu_btnSmall_Opened : null}>
        {isActiveSmall ? <List></List> : null}
      </div>
    </div>
  );
}

export default UserInterface;
