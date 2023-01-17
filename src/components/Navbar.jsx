import styles from "./Navbar.module.css";
import UserInterface from "./UserInterface";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useActive from "./useActive";

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

  const [isOpened, setIsOpened] = useActive(true);

  const Logo = (
    <Link to="/">
      <div className={styles.logo}>Anytown Real Estate</div>
    </Link>
  );
  //console.log(isMobile)
  return (
    <div className={styles.nav}>
      {isMobile ? (
        <div onClick={setIsOpened}>
          {isOpened ? (
            <TbArrowBarToLeft />
          ) : (
            <TbArrowBarRight className={styles.svg} />
          )}
        </div>
      ) : (
        Logo
      )}

      {isOpened?<section className={styles.sidebarOpened}> sidebar </section>:null}
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
    </div>
  );
}

export default Navbar;
//<UserInterface />
//{isOpened ? <section className={styles.sidebar}>sidebar</section> : null}
