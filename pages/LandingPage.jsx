import React from "react";
import styles from "../styles/LandingPage.module.css";
import backgroundImg from "../assets/backgroundPhoto2.jpg";
import Card from "../components/Card";
import Button from "../components/Button";
import { HiOutlineLocationMarker, HiSearch } from "react-icons/hi";
import { TbMap2 } from "react-icons/tb";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import Price from "../components/Price";
import { useEffect } from "react";

function LandingPage() {
  const [renderError, setRenderError] = useState(false);
  const [queryDetails, setQueryDetails] = useState({
    City: "",
    TypeOfRealEstate: "",
    TypeOfTransaction: "",
    PriceFrom: "",
    PriceTo: "",
  });

  const handleChange = (ref) => {
    setQueryDetails({ ...queryDetails, [ref.current.name]: ref.current.value });
  };

  const handleInput = (e) => {
    setQueryDetails({ ...queryDetails, [e.target.name]: e.target.value });
  };

  const TypeOfRealEstate = [
    { value: "Mieszkanie%20na%20sprzedaż", label: "Mieszkania" },
    { value: "Dom%20na%20sprzedaż", label: "Domy" },
    { value: "Komercyjne%20na%20sprzedaż", label: "Komercyjne" },
    { value: "Działka%20na%20sprzedaż", label: "Działki" },
    { value: "Garaż%20na%20sprzedaż", label: "Garaże" },
    { value: "option6", label: "Dowolny" },
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
  //useSearchParams()
  let query = "http://localhost:3100/items?";
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitting!");
    console.table(queryDetails);
    const props = [
      "City",
      "TypeOfRealEstate",
      "TypeOfTransaction",
      "PriceFrom",
      "PriceTo",
    ];
    props.forEach((prop) => {
      if (queryDetails[prop].length > 0) {
        switch (prop) {
          case "City":
            break;
          case "TypeOfRealEstate":
            query += "&titleKategoria=" + queryDetails[prop];
            break;
          case "TypeOfTransaction":
            query += "&marketInfo=" + queryDetails[prop];
            break;
          case "PriceFrom":
            query += "&priceInfo_gt=" + queryDetails[prop];
            break;
          case "PriceTo":
            query += "&priceInfo_lt=" + queryDetails[prop];
            break;
        }
      }
    });
    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        console.log(query);
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
          <div className={styles.dropdown} style={{width:"320px"}}>
            <label htmlFor="">Cena w zł</label>
            <Price data={PriceData} handleChange={handleChange} />
          </div>
          <Button type="submit" onClick={handleSubmit} disabled={renderError}>
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
    </>
  );
}

export default LandingPage;
//GET /products?price_gte=50&price_lte=100
///items?titleKategoria=Mieszkanie%20na%20sprzedaż
