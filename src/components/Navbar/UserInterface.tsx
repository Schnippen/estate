import React from "react";
import {
  HiDotsHorizontal,
  HiMail,
  HiHeart,
  HiCog,
  HiOfficeBuilding,
  HiUserCircle,
} from "react-icons/hi";
import { BsPersonXFill } from "react-icons/bs";
import styles from "./UserInterface.module.css";
import useActive from "../../utils/useActive";
import { useRef, useEffect, useState } from "react";
import Loading from "../Loading";
import UserSignIn from "./UserSignIn";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

interface UserLoginTypes {
  email: string;
  password: string;
}

function UserInterface() {
  const [isActiveBig, setIsActiveBig] = useActive(false);
  const [isActiveSmall, setIsActive] = useActive(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userLogin, setUserLogin] = useState<UserLoginTypes>({
    email: "",
    password: "",
  });

  const handleLogin = (e: { target: { name: string; value?: string } }) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  const ref = useRef<HTMLDivElement | null>(null);

  //Opening tabs
  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      const targetNode = e.target as Node;
      if (isActiveSmall && ref.current && !ref.current?.contains(targetNode)) {
        setIsActive(!isActiveSmall);
      } else if (
        isActiveBig &&
        ref.current &&
        !ref.current?.contains(targetNode)
      ) {
        setIsActiveBig(!isActiveBig);
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isActiveSmall, isActiveBig]);

  const openBtn1Big = () => {
    if (isActiveSmall) {
      setIsActive(!isActiveSmall);
      setIsActiveBig(!isActiveBig);
    } else {
      setIsActiveBig(!isActiveBig);
    }
  };
  const openBtn2 = () => {
    if (isActiveBig) {
      setIsActiveBig(!isActiveBig);
      setIsActive(!isActiveSmall);
    } else {
      setIsActive(!isActiveSmall);
    }
  };

  //Signing In
  const { signIn, userData, logOut, userLoggedIn } = UserAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
  //Favorites from local storage for notifications
  const favoritesStorage = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ) as Array<string | number>;

  const Notification =
    favoritesStorage.length > 0 ? (
      <div className={styles.notification}>{favoritesStorage.length}</div>
    ) : null;

  const ListItem = ({
    icon: Icon,
    text,
  }: {
    icon: React.ElementType;
    text: string;
  }) => (
    <li className={styles.menu_list_item}>
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
      <Link to={"/*"}>
        <ListItem icon={HiOfficeBuilding} text="Ogłoszenia" />
      </Link>
      <Link to={"/*"}>
        <ListItem icon={HiMail} text="Wiadomosci" />
      </Link>
      <Link to={"/Favorites"} style={{ position: "relative" }}>
        <ListItem icon={HiHeart} text="Ulubione" />
        {Notification}
      </Link>
      <Link to={"/*"}>
        <ListItem icon={HiCog} text="Ustawienia" />
      </Link>
    </ul>
  );

  const BtnSmallNotLoggedIn = () => (
    <div onClick={openBtn1Big} className={styles.notLoggedIn_cointainer}>
      <BsPersonXFill className={styles.notLoggedIn_svg} />
      <h3>You must be logged in</h3>
    </div>
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
        {userLoggedIn ? <HiUserCircle /> : "Sign In"}
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
      <div className={isActiveBig ? styles.menu_btnBig_Opened : undefined}>
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
      <div className={isActiveSmall ? styles.menu_btnSmall_Opened : undefined}>
        {isActiveSmall ? (
          userLoggedIn ? (
            <List />
          ) : (
            <BtnSmallNotLoggedIn />
          )
        ) : null}
      </div>
    </div>
  );
}

export default UserInterface;
