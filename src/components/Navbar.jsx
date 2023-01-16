import styles from "./Navbar.module.css";
import UserInterface from "./UserInterface";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { TbArrowBarRight, TbArrowBarToLeft } from "react-icons/tb";

function Navbar() {
  //media query
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 800px)");
    if (query.matches) {
      setIsMobile(true);
      console.log("mobile");
    } else setIsMobile(false);
  }, []);

  return (
    <div className={styles.nav}>
      <TbArrowBarRight />
      <TbArrowBarToLeft />
      <Link to="/">
        <div className={styles.logo}>Anytown Real Estate</div>
      </Link>
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
