import React from "react";
import styles from "../styles/LandingPage.module.css";
import Card from "../components/Card";
import { TbMap2 } from "react-icons/tb";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { BsCashCoin } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import MobileContext from "../context/MobileContext";

import LandingPageSearchForm from "../components/LandingPageSearchForm";
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
    PriceFrom: "",
    PriceTo: "",
  });

  const handleChange = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      setQueryDetails({
        ...queryDetails,
        [ref.current.name]: ref.current.value,
      });
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQueryDetails({
      ...queryDetails,
      [e.target.name]: e.target.value,
    });
  };

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

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitting!");
    console.table(queryDetails);
    navigate("/Offers", { state: queryDetails });
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
        <LandingPageSearchForm
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          queryDetails={queryDetails}
          setQueryDetails={setQueryDetails}
          handleChange={handleChange}
          renderError={renderError}
        />
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
            <Link to="/Leaflet">
              <Card
                title="Sprzedaj Nieruchomość"
                description={Lorem}
                buttonDescription="Zobacz swoje możliwości"
                alt="Sprzedaj Nieruchomość"
                svg={<BsCashCoin />}
              ></Card>
            </Link>
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
