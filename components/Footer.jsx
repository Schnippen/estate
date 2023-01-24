import styles from "./Footer.module.css";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import Button from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.container_social}>
          <label>Bądźmy w kontakcie:</label>
          <div className={styles.container_social_links}>
            <Link to="*">
              <Button>
                <FiFacebook />
              </Button>
            </Link>
            <Link to="*">
              <Button>
                <FiTwitter />
              </Button>
            </Link>
            <Link to="*">
              <Button>
                <FiFacebook />
              </Button>
            </Link>
            <Link to="*">
              <Button>
                <FiInstagram />
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.container_opinions}>opinie klientów</div>
        <div className={styles.container_navigation}>nawigacja strony</div>
      </div>
      <div> contact support adress</div>
      <div>copyright privacy policy etc</div>
    </footer>
  );
}

export default Footer;
