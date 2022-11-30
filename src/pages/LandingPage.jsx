import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/LandingPage.module.css";
import backgroundImg from "../assets/backgroundPhoto2.jpg";
import Card from "../components/Card";
import NumberSelect from "../components/NumberSelect";
import { HiOutlineLocationMarker } from "react-icons/hi";

function LandingPage() {
  let Lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo! Voluptatibus soluta numquam rerum sint nisi voluptatem enim totam asperiores!";
  //useSearchParams()
  return (
    <>
      <Navbar />
      <section className={styles.landing__page_section}>
        <div className={styles.landing__page_photo}>
          <img src={backgroundImg} alt="Violet house" />
        </div>
        <form className={styles.section_searchbar}>
          <div className={styles.form_div_wrapper}>
            <HiOutlineLocationMarker className={styles.svg} />
            <input
              type="text"
              placeholder="np. miasto"
              className={styles.inputText}
            />
          </div>
          <div>
            <label>Rodzaj Nieruchomości</label>
            <NumberSelect
              placeholder={"Rodzaj Nieruchomości"}
              number={[
                "Mieszkania",
                "Domy",
                "Komercyjne",
                "Działki",
                "Garaże",
                "Dowolny",
              ]}
              value={[1, 2, 3, 4, 5, -1]}
            />
          </div>
          <div>
            <label>Rodzaj Transakcji</label>
            <NumberSelect
              placeholder={"Rodzaj Transakscji"}
              number={["Dowolny", "Pierwotny", "Wtórny"]}
              value={[1, 2, 3]}
            />
          </div>
          <div className={styles.number_select}>
            <label>Cena w zł</label>
            <div>
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
                value={[
                  100000, 150000, 200000, 250000, 300000, 350000, 400000,
                  450000, 500000, 600000, 800000, 1000000, 2000000, 4000000,
                ]}
              />
              <NumberSelect
                placeholder="Do"
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
                value={[
                  100000, 150000, 200000, 250000, 300000, 350000, 400000,
                  450000, 500000, 600000, 800000, 1000000, 2000000, 4000000,
                ]}
              />
            </div>
          </div>
        </form>
      </section>
      <section className={styles.landing__page_card_section}>
        <ul className={styles.landing__page_card_section_list}>
          <Card
            title="Kup Nieruchomość"
            description={Lorem}
            buttonDescription="Srawdź Nieruchomości"
            alt="Kup Nieruchomość"
          ></Card>
          <Card
            title="Sprzedaj Nieruchomość"
            description={Lorem}
            buttonDescription="Zobacz swoje możliwości"
            alt="Sprzedaj Nieruchomość"
          ></Card>
          <Card
            title="Srawdź Mapę"
            description={Lorem}
            buttonDescription="Przyjżyj się dokładnie"
            alt="Srawdź Mapę"
          ></Card>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
