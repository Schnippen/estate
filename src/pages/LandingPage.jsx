import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/LandingPage.module.css";
import backgroundImg from "../assets/backgroundPhoto2.jpg";
import Card from "../components/Card";
import SimpleSelect from "../components/SimpleSelect";
import NumberSelect from "../components/NumberSelect";

function LandingPage() {
  let Lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo! Voluptatibus soluta numquam rerum sint nisi voluptatem enim totam asperiores!";

  return (
    <>
      <Navbar />
      <section className={styles.landing__page_section}>
        <div className={styles.landing__page_photo}>
          <img src={backgroundImg} alt="Violet house" />
        </div>
        <div className={styles.landing__page_section_searchbar}>
          <div>
            <SimpleSelect title="Rodzaj nieruchomości" />
          </div>
          <div>
            <SimpleSelect title="Rodzaj Transakcji" />
          </div>
          <div className={styles.landing__page_number_select}>
            <label>Cena w zł</label>
            <NumberSelect
              placeholder="Od"
              number={[
                "100 000",
                "150 000",
                "200 000",
                "250 000",
                "300 000",
                "350 000",
                "400 000",
                "450 000",
                "500 000",
                "600 000",
                "800 000",
                "1 000 000",
                "2 000 000",
                "4 000 000",
              ]}
            />
          </div>
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

export default LandingPage;
