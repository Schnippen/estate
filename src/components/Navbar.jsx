import styles from "./Navbar.module.css";
import UserInterface from "./UserInterface";

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>Anytown Real Estate</div>
      <ul className={styles.nav__links}>
        <li>
          <a href="*">buy</a>
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
