import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from'../styles/LandingPage.module.css'
import backgroundImg from "../assets/backgroundPhoto2.jpg";
import Card from '../components/Card';
import SimpleSelect from '../components/SimpleSelect';
import NumberSelect from '../components/NumberSelect';

function LandingPage() {
  let Lorem= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo! Voluptatibus soluta numquam rerum sint nisi voluptatem enim totam asperiores!'

  return (
    <>
      <Navbar />
      <section className={styles.landing__page_section}>
        <div className={styles.landing__page_photo}>
          <img src={backgroundImg} alt="Violet house" />
        </div>
        <div className={styles.landing__page_section_searchbar}>
          <SimpleSelect title="Rodzaj nieruchomości" />
          <SimpleSelect title="Rodzaj Transakcji" />
          <NumberSelect />
        </div>
      </section>
      <section className={styles.landing__page_card_section}>
        <ul className={styles.landing__page_card_section_list}>
          <Card
            title="Kup Nieruchomość"
            description={Lorem}
            buttonDescription="Srawdź Nieruchomości"
          ></Card>
          <Card
            title="Sprzedaj Nieruchomość"
            description={Lorem}
            buttonDescription="Zobacz swoje możliwości"
          ></Card>
          <Card
            title="Srawdź Mapę"
            description={Lorem}
            buttonDescription="Przyjżyj się dokładnie"
          ></Card>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage