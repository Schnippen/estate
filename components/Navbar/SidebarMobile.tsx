import React from "react";
import styles from "./Navbar.module.css";
import { useEffect, useRef } from "react";
import { HiMail, HiHeart, HiCog, HiOfficeBuilding } from "react-icons/hi";
const profilePicture = require("../../assets/profile.jpg");

type UserContextTypeTypes = {
  isOpened: boolean;
  setIsOpened: (value: boolean) => void;
};

function SidebarMobile({ isOpened, setIsOpened }: UserContextTypeTypes) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

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
                <img
                  className={styles.profilePicture}
                  src={profilePicture}
                  alt="Profile of user"
                />
              </div>
              <div>
                <h5> user email</h5>
              </div>
            </div>
            <div className={styles.sidebarListWrapper}>
              <ul className={styles.sidebarList}>
                <li>
                  <HiOfficeBuilding className={styles.sidebarListSvg} />
                  <p>Ogłoszenia</p>
                </li>
                <li>
                  <HiMail className={styles.sidebarListSvg} />
                  <p>Wiadomosci</p>
                </li>
                <li>
                  <HiHeart className={styles.sidebarListSvg} />
                  <p>Obserwowane</p>
                  {Notification}
                </li>
                <li>
                  <HiCog className={styles.sidebarListSvg} />
                  <p>Ustawienia</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}

export default SidebarMobile;
