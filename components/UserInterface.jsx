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
import { useRef, useEffect, useState } from "react";
import Loading from "./Loading";
import UserSignIn from "./UserSignIn";
import { UserAuth } from "../context/AuthContext";

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
  //Opening tabs
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

  //Signing In
  const { signIn, userData, logOut, userLoggedIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Signing In!");
    setIsLoading(true);
    console.table(userLogin);
    console.log("Proceed login");
    try {
      await signIn(userLogin.email, userLogin.password);
    } catch (error) {
      console.log(error);
      console.log("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
        {userLoggedIn ? <HiUserCircle/> : "Sign In"}
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
              <UserSignIn
                handleSubmit={handleSubmit}
                handleLogin={handleLogin}
                userLogin={userLogin}
                userLoggedIn={userLoggedIn}
                logOut={logOut}
                userData={userData}
              />
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