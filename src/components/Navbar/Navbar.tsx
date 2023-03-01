import React from "react";
import styles from "./Navbar.module.css";
import UserInterface from "./UserInterface";
import { Link } from "react-router-dom";
import { useContext } from "react";
import useActive from "../useActive";
import SidebarMobile from "./SidebarMobile";
import MobileContext from "../../context/MobileContext";
import { TbArrowBarRight, TbArrowBarToLeft } from "react-icons/tb";

function Navbar() {
  const isMobile = useContext(MobileContext);

  const [isOpened, setIsOpened] = useActive(false);

  const Logo = (
    <Link to="/">
      <div>Anytown Real Estate</div>
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
            {isOpened ? (
              <TbArrowBarToLeft className={styles.svg} />
            ) : (
              <TbArrowBarRight className={styles.svg} />
            )}
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
          <Link to="/Offers">
            <li>Buy</li>
          </Link>
          <li>
            <a href="*">Rent</a>
          </li>
          <li>
            <a href="*">Kredyty</a>
          </li>
          <li>
            <a href="*">Overseas</a>
          </li>
          <Link to="/Blog">
            <li>Blog</li>
          </Link>
        </ul>
      )}

      {isMobile ? null : <UserInterface />}
    </nav>
  );
}

export default Navbar;