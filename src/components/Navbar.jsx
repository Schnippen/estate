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
        <Link to="/Offers">
          <li>
            Buy
          </li>
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
      <UserInterface />
    </div>
  );
}

export default Navbar;
