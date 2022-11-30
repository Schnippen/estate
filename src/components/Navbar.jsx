import styles from "./Navbar.module.css";
import UserInterface from "./UserInterface";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.nav}>
      <Link to="/">
        <div className={styles.logo}>Anytown Real Estate</div>
      </Link>
      <ul className={styles.nav__links}>
        <li>
          <Link to="/Offers">Buy</Link>
        </li>
        <li>
          <a href="*">rent</a>
        </li>
        <li>
          <a href="*">kredyty</a>
        </li>
        <li>
          <a href="*">overseas</a>
        </li>
        <li>
          <a href="*">blog</a>
        </li>
      </ul>
      <UserInterface />
    </div>
  );
}

export default Navbar;
