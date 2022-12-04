import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/LandingPage.module.css";
import backgroundImg from "../assets/backgroundPhoto2.jpg";
import Card from "../components/Card";
import NumberSelect from "../components/NumberSelect";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbMap2 } from "react-icons/tb";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";

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
            <label htmlFor="TypeOfRealRstate">Rodzaj Nieruchomości</label>
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
              name={"TypeOfRealRstate"}
              checkMark={true}
            />
          </div>
          <div>
            <label htmlFor="TypeOfTransaction">Rodzaj Transakcji</label>
            <NumberSelect
              placeholder={"Rodzaj Transakscji"}
              number={["Dowolny", "Pierwotny", "Wtórny"]}
              name={"TypeOfTransaction"}
              checkMark={true}
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
                name={"PriceFrom"}
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
                name={"PriceTo"}
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
            svg={<MdOutlineMapsHomeWork />}
          ></Card>
          <Card
            title="Sprzedaj Nieruchomość"
            description={Lorem}
            buttonDescription="Zobacz swoje możliwości"
            alt="Sprzedaj Nieruchomość"
            svg={<BsCashCoin />}
          ></Card>
          <Card
            title="Srawdź Mapę"
            description={Lorem}
            buttonDescription="Przyjżyj się dokładnie"
            alt="Srawdź Mapę"
            svg={<TbMap2 />}
          ></Card>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
