import React from "react";
import styles from "../styles/LandingPage.module.css";
import Card from "../components/Card";
import Button from "../components/Button";
import { HiOutlineLocationMarker, HiSearch } from "react-icons/hi";
import { TbMap2 } from "react-icons/tb";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Price from "../components/Price";
import MobileContext from "../context/MobileContext";
const backgroundImg = require("../assets/backgroundPhoto2.jpg") as string;

function LandingPage() {
  const isMobile = useContext(MobileContext);

  interface QueryDetails {
    [key: string]: string;
  }

  const [renderError, setRenderError] = useState(false);
  const [queryDetails, setQueryDetails] = useState<QueryDetails>({
    City: "",
    TypeOfRealEstate: "",
    TypeOfTransaction: "",
    PriceFrom: "0",
    PriceTo: "",
  });
  //console.log(queryDetails);

  const handleChange = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      setQueryDetails({
        ...queryDetails,
        [ref.current.name]: ref.current.value,
      });
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryDetails({ ...queryDetails, [e.target.name]: e.target.value });
  };

  const TypeOfRealEstate = [
    { value: "Mieszkanie na sprzedaż", label: "Mieszkania" },
    { value: "Dom na sprzedaż", label: "Domy" },
    { value: "Komercyjne na sprzedaż", label: "Komercyjne" },
    { value: "Działka na sprzedaż", label: "Działki" },
    { value: "Garaż na sprzedaż", label: "Garaże" },
    { value: "", label: "Dowolny" },
  ];

  const TypeOfTransaction = [
    { value: "pierwotny", label: "Pierwotny" },
    { value: "wtórny", label: "Wtórny" },
    { value: "", label: "Dowolny" },
  ];

  const PriceData = [
    { value: 0, label: "Dowolna" },
    { value: 100000, label: "100 000" },
    { value: 150000, label: "150 000" },
    { value: 200000, label: "200 000" },
    { value: 250000, label: "250 000" },
    { value: 300000, label: "300 000" },
    { value: 350000, label: "350 000" },
    { value: 400000, label: "400 000" },
    { value: 450000, label: "450 000" },
    { value: 500000, label: "500 000" },
    { value: 600000, label: "600 000" },
    { value: 800000, label: "800 000" },
    { value: 1000000, label: "1 000 000" },
    { value: 2000000, label: "2 000 000" },
    { value: 4000000, label: "4 000 000" },
  ];

  //renderError
  useEffect(() => {
    let x = parseInt(queryDetails.PriceFrom);
    let y = parseInt(queryDetails.PriceTo);
    if (x === 0 && y === 0) {
      setRenderError(false);
    } else if (x > y && y === 0) {
      setRenderError(() => false);
    } else if (x > y && y > 0) {
      setRenderError(() => true);
    } else if (x === y) {
      setRenderError(() => true);
    } else {
      setRenderError(() => false);
    }
  }, [queryDetails.PriceFrom, queryDetails.PriceTo]);

  let Lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nemo! Voluptatibus soluta numquam rerum sint nisi voluptatem enim totam asperiores!";

  let query = "http://localhost:3100/items?";
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitting!");
    console.table(queryDetails);
    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        //console.log(query);
        // update the state with the filtered data
        //this.setState({ products: data });
      })
      .catch((err) => {
        console.log(query);
        // handle any errors
      });
  };

  const errorMessage = {
    message1: "Błąd: Wartość 1 jest większa od Warości 2",
  };

  return (
    <>
      <section className={styles.landing__page_section}>
        <div className={styles.landing__page_photo}>
          <img src={backgroundImg} alt="Violet house" />
        </div>
        {renderError ? (
          <div className={styles.errorDiv}>{errorMessage.message1}</div>
        ) : null}
        {isMobile ? null : (
          <form className={styles.section_searchbar} onSubmit={handleSubmit}>
            <div className={styles.form_div_wrapper}>
              <HiOutlineLocationMarker className={styles.svg} />
              <input
                type="text"
                placeholder="np. miasto"
                name="City"
                className={styles.inputText}
                onChange={handleInput}
              />
            </div>
            <div className={styles.dropdown}>
              <Dropdown
                data={TypeOfRealEstate}
                name={"TypeOfRealEstate"}
                handleChange={handleChange}
                placeholder={"Rodzaj Nieruchomości"}
                label={"Rodzaj Nieruchomości"}
              ></Dropdown>
            </div>
            <div className={styles.dropdown}>
              <Dropdown
                data={TypeOfTransaction}
                name={"TypeOfTransaction"}
                handleChange={handleChange}
                placeholder={"Rodzaj Transakscji"}
                label={"Rodzaj Transakscji"}
              ></Dropdown>
            </div>
            <div className={styles.dropdown} style={{ width: "320px" }}>
              <label htmlFor="">Cena w zł</label>
              <Price data={PriceData} handleChange={handleChange} />
            </div>
            <Button
              type={"submit"}
              onClick={handleSubmit}
              disabled={renderError}
            >
              <HiSearch />
            </Button>
          </form>
        )}
      </section>
      <section className={styles.landing__page_card_section}>
        {isMobile ? (
          <div className={styles.landing__page_card_section_wrapper}>
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
          </div>
        ) : (
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
        )}
      </section>
    </>
  );
}

export default LandingPage;
