import React from "react";
import styles from "./Navbar.module.css";
import { useEffect, useRef } from "react";
import {
  HiMail,
  HiHeart,
  HiCog,
  HiOfficeBuilding,
  HiSearch,
  HiUserCircle,
} from "react-icons/hi";
import { UserAuth } from "../../context/AuthContext";
import DarkThemeButton from "../Buttons/DarkThemeButton";
import DefaultProfilePicture from "../../assets/profile.jpg";
const UserProfilePicture = require("../../assets/profile.jpg");

type UserContextTypeTypes = {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
};

function SidebarMobile({ isOpened, setIsOpened }: UserContextTypeTypes) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const { userData, userLoggedIn } = UserAuth();

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (isOpened && sidebarRef.current === e.target) {
        setIsOpened(!isOpened);
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isOpened]);

  useEffect(() => {
    document.body.style.overflow = isOpened ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  const favoritesStorage = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ) as Array<string | number>;

  const Notification =
    favoritesStorage.length > 0 ? (
      <div className={styles.notification}>{favoritesStorage.length}</div>
    ) : null;

  return (
    <aside>
      <div className={styles.modal} ref={sidebarRef}>
        <section className={styles.sidebar}>
          <div className={styles.sidebarContainer}>
            <div className={styles.sidebarUser}>
              <div>
                {userLoggedIn ? (
                  <img
                    className={styles.profilePicture}
                    src={UserProfilePicture || DefaultProfilePicture}
                    alt="Profile of user"
                  />
                ) : (
                  <div className={styles.profilePicture}>
                    <HiUserCircle className={styles.profilePicture} />
                  </div>
                )}
              </div>
              <div>
                <h5
                  className={
                    userLoggedIn ? styles.profileNameLogged : styles.profileName
                  }
                >
                  {userLoggedIn ? userData.email : "Not logged in"}
                </h5>
              </div>
            </div>
            <div className={styles.sidebarListWrapper}>
              <ul className={styles.sidebarList}>
                <li>
                  <HiSearch className={styles.sidebarListSvg} />
                  <p>Browse Listings</p>
                </li>
                {userLoggedIn ? (
                  <>
                    <li>
                      <HiOfficeBuilding className={styles.sidebarListSvg} />
                      <p>My listings</p>
                    </li>
                    <li>
                      <HiMail className={styles.sidebarListSvg} />
                      <p>Messages</p>
                    </li>
                    <li>
                      <HiHeart
                        className={
                          favoritesStorage.length > 0
                            ? styles.sidebarListSvg_notification
                            : styles.sidebarListSvg
                        }
                      />
                      <p>Favorites</p>
                      {Notification}
                    </li>
                    <li>
                      <HiCog className={styles.sidebarListSvg} />
                      <p>Settings</p>
                    </li>
                  </>
                ) : null}
              </ul>
            </div>
            <div className={styles.dark_theme}>
              <DarkThemeButton />
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}

export default SidebarMobile;
