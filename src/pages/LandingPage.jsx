import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/LandingPage.module.css";
import backgroundImg from "../assets/backgroundPhoto2.jpg";
import Card from "../components/Card";
import OptionSelect from "../components/OptionSelect";
import Button from "../components/Button";
import { HiOutlineLocationMarker, HiSearch } from "react-icons/hi";
import { TbMap2 } from "react-icons/tb";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "../components/Select";

function LandingPage() {
  const [queryDetails, setQueryDetails] = useState({
    city: "",
    TypeOfRealRstate: "",
    TypeOfTransaction: "",
    PriceFrom: "",
    PriceTo: "",
  });

  const handleChange = (e) => {
    setQueryDetails({ ...queryDetails, [e.target.name]: e.target.value });
  };

  const TypeOfRealRstate = [
    { value: "option1", label: "Mieszkania" },
    { value: "option2", label: "Domy" },
    { value: "option3", label: "Komercyjne" },
    { value: "option4", label: "Działki" },
    { value: "option5", label: "Garaże" },
    { value: "option6", label: "Dowolny" },
  ];

  console.table(queryDetails);

  let Lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo! Voluptatibus soluta numquam rerum sint nisi voluptatem enim totam asperiores!";
  //useSearchParams()

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitting!");
  };

  return (
    <>
      <Navbar />
      <section className={styles.landing__page_section}>
        <div className={styles.landing__page_photo}>
          <img src={backgroundImg} alt="Violet house" />
        </div>
        <form className={styles.section_searchbar} onSubmit={handleSubmit}>
          <div className={styles.form_div_wrapper}>
            <HiOutlineLocationMarker className={styles.svg} />
            <input
              type="text"
              placeholder="np. miasto"
              name="city"
              className={styles.inputText}
            />
          </div>
          <Select
            data={TypeOfRealRstate}
            handleChange={handleChange}
            name={"TypeOfRealRstate"}
            label={"TypeOfRealRstate"}
            labelText={"Rodzaj Nieruchomości"}
            placeholder={"Wybierz rodzaj nieruchomości"}
          ></Select>
          <div>
            <label htmlFor="TypeOfRealRstate">Rodzaj Nieruchomości</label>
            <OptionSelect
              placeholder={"Rodzaj Nieruchomości"}
              option={[
                "Mieszkania",
                "Domy",
                "Komercyjne",
                "Działki",
                "Garaże",
                "Dowolny",
              ]}
              name={"TypeOfRealRstate"}
              checkMark={true}
              value={["Mieszkanie", 2, 3, 4, 5, 6]}
              setState={handleChange}
            />
          </div>
          <div>
            <label htmlFor="TypeOfTransaction">Rodzaj Transakcji</label>
            <OptionSelect
              placeholder={"Rodzaj Transakscji"}
              option={["Dowolny", "Pierwotny", "Wtórny"]}
              name={"TypeOfTransaction"}
              checkMark={true}
              value={[1, 2, 3]}
              onChangeActive={false}
            />
          </div>
          <div className={styles.number_select}>
            <label>Cena w zł</label>
            <div>
              <OptionSelect
                placeholder="Od"
                option={[
                  "Dowolna",
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
                value={[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                ]}
                onChangeActive={true}
              />
              <OptionSelect
                placeholder="Do"
                option={[
                  "Dowolna",
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
                value={[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                ]}
                onChangeActive={true}
              />
            </div>
          </div>
          <Button type="submit" onClick={handleSubmit}>
            <HiSearch />
          </Button>
        </form>
      </section>
      <section className={styles.landing__page_card_section}>
        <ul className={styles.landing__page_card_section_list}>
          <Link to="/Offers">
            <Card
              title="Kup Nieruchomość"
              description={Lorem}
              buttonDescription="Srawdź Nieruchomości"
              alt="Kup Nieruchomość"
              svg={<MdOutlineMapsHomeWork />}
            ></Card>
          </Link>
          <Card
            title="Sprzedaj Nieruchomość"
            description={Lorem}
            buttonDescription="Zobacz swoje możliwości"
            alt="Sprzedaj Nieruchomość"
            svg={<BsCashCoin />}
          ></Card>
          <Link to="/Leaflet">
            <Card
              title="Srawdź Mapę"
              description={Lorem}
              buttonDescription="Przyjżyj się dokładnie"
              alt="Srawdź Mapę"
              svg={<TbMap2 />}
            ></Card>
          </Link>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
