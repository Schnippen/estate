import styles from "./Footer.module.css";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { HiPhone } from "react-icons/hi";
import Button from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  const ListItem = ({ icon: Icon, linkTo }) => (
    <Link to={linkTo}>
      <Button>
        <Icon />
      </Button>
    </Link>
  );
  const List = () => (
    <ul className={styles.social_links}>
      <ListItem icon={FiFacebook} text="*" />
      <ListItem icon={FiTwitter} text="*" />
      <ListItem icon={FiFacebook} text="*" />
      <ListItem icon={FiInstagram} text="*" />
    </ul>
  );
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.container_social}>
          <article className={styles.social}>
            <label>Bądźmy w kontakcie:</label>
            <List></List>
          </article>
          <article className={styles.social}>
            <label>Centrum pomocy klienta</label>
            <div className={styles.social_contact}>
              <h3>
                <HiPhone style={{ verticalAlign: "middle" }} />
                (525) 829-3410
              </h3>
            </div>
          </article>
        </section>
        <div className={styles.container_opinions}>opinie klientów</div>
        <div className={styles.container_navigation}>nawigacja strony</div>
      </div>
    </footer>
  );
}

export default Footer;
