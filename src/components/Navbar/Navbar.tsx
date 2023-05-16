import React from "react";
import styles from "./Navbar.module.css";
import UserInterface from "./UserInterface";
import { Link } from "react-router-dom";
import { useContext } from "react";
import useActive from "../../utils/useActive";
import SidebarMobile from "./SidebarMobile";
import MobileContext from "../../context/MobileContext";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import DarkThemeButton from "../Buttons/DarkThemeButton";

function Navbar() {
  const isMobile = useContext(MobileContext);

  const [isOpened, setIsOpened] = useActive(false);

  const Logo = (
    <Link to="/">
      <div className={styles.logo_container}>
        <MdOutlineRealEstateAgent />
        Anytown Real Estate
      </div>
    </Link>
  );

  return (
    <nav className={styles.nav}>
      {isMobile ? (
        <>
          <div className={styles.logo}>{Logo}</div>

          <div
            onClick={() => setIsOpened(!isOpened)}
            className={styles.showSidebar}
          >
            <div
              style={{ transform: isOpened ? "rotate(45deg)" : "rotate(0)" }}
            ></div>
            <div
              style={{
                opacity: isOpened ? "0" : "1",
                transform: isOpened ? "translateX(20px)" : "translateX(0)",
              }}
            ></div>
            <div
              style={{ transform: isOpened ? "rotate(-45deg)" : "rotate(0)" }}
            ></div>
          </div>
        </>
      ) : (
        Logo
      )}

      {isOpened ? (
        <SidebarMobile isOpened={isOpened} setIsOpened={setIsOpened} />
      ) : null}

      {isMobile ? null : (
        <ul className={styles.nav__links}>
          <Link to="/Offers" className={styles.nav__link}>
            <li>Buy</li>
          </Link>
          <Link to="*" className={styles.nav__link}>
            <li>TBA</li>
          </Link>
          <Link to="*" className={styles.nav__link}>
            <li>TBA</li>
          </Link>
          <Link to="/Analitics" className={styles.nav__link}>
            <li>Analitics</li>
          </Link>
          <Link to="/*" className={styles.nav__link}>
            <li>TBA</li>
          </Link>
        </ul>
      )}
      {isMobile ? null : <UserInterface />}
      {isMobile ? null : <DarkThemeButton />}
    </nav>
  );
}

export default Navbar;
