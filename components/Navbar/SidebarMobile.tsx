import React from "react";
import styles from "./Navbar.module.css";
import { useEffect, useRef } from "react";
const profilePicture =require("../../assets/profile.jpg");
import { HiMail, HiHeart, HiCog, HiOfficeBuilding } from "react-icons/hi";

function SidebarMobile({ isOpened, setIsOpened }) {
  const sidebarRef = useRef();

  useEffect(() => {
    const handleClose = (e) => {
      if (isOpened && sidebarRef.current === e.target) {
        setIsOpened();
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isOpened]);

  const Notification = (
    <div
      style={{
        backgroundColor: "red",
        height: "30px",
        width: "30px",
        right: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        verticalAlign: "middle",
        gridColumn: "3",
        justifySelf: "center",
      }}
    >
      1
    </div>
  );

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
