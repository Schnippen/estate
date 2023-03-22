import React from "react";
import styles from "./Footer.module.css";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
import { HiPhone } from "react-icons/hi";
import Button from "./Buttons/Button";
import { Link } from "react-router-dom";

type ListItemTypes = {
  icon: React.ElementType;
  text: string;
};

function Footer() {
  const ListItem = ({ icon: Icon, text }: ListItemTypes) => (
    <Link to={text}>
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
  const options = [
    "Inne",
    "Kredyty",
    "Blog",
    "Zapytaj eksperta",
    "Wersja mobilna",
    "Regulamin",
    "Polityka prywatności",
    "Ochrona danych",
  ];
  const others = [
    " Usługi Dla agencji nieruchomości",
    "Dla deweloperów",
    "Dla reklamodawców",
    "Kup baner do wywieszenia",
    "Zamów wnętrze w 3D",
    "Dodaj ogłoszenie Cennik",
  ];

  const OptionsList = ({ options }: { options: string[] }) => (
    <ul>
      {options.map((item) => (
        <li className={styles.options_li} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.container_social}>
          <article className={styles.social}>
            <h4 className={styles.title}>Bądźmy w kontakcie:</h4>
            <List></List>
          </article>
          <article className={styles.social}>
            <h4 className={styles.title}>Centrum pomocy klienta</h4>
            <div className={styles.social_contact}>
              <h3>
                <HiPhone style={{ verticalAlign: "middle" }} />
                (525) 829-3410
              </h3>
            </div>
          </article>
        </section>
        <section className={styles.container_options}>
          <h4 className={styles.title}>Inne</h4>
          <article className={styles.article}>
            <OptionsList options={options} />
          </article>
        </section>
        <section className={styles.container_navigation}>
          <h4 className={styles.title}>Usługi</h4>
          <article className={styles.article}>
            <OptionsList options={others} />
          </article>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
