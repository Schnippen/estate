import styles from "./Navbar.module.css";
import UserInterface from "./UserInterface";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useActive from "./useActive";
import Sidebar from "./Sidebar";

import { TbArrowBarRight, TbArrowBarToLeft } from "react-icons/tb";

function Navbar() {
  //media query
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 800px)");
    if (query.matches) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, []);

  const [isOpened, setIsOpened] = useActive(false);

  const Logo = (
    <Link to="/">
      <div>Anytown Real Estate</div>
    </Link>
  );
  //console.log(isMobile)

  return (
    <nav className={styles.nav}>
      {isMobile ? (
        <>
          <div className={styles.logo}>{Logo}</div>

          <div onClick={setIsOpened} className={styles.showSidebar}>
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
        <Sidebar isOpened={isOpened} setIsOpened={setIsOpened} />
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
          <li>
            <a href="*">Blog</a>
          </li>
        </ul>
      )}
      {isMobile ? null : <UserInterface />}
    </nav>
  );
}

export default Navbar;
//
//{isOpened ? <section className={styles.sidebar}>sidebar</section> : null}
