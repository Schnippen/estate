import styles from "./SearchForm.module.css";
import { useState, useEffect } from "react";
import {
  HiSearch,
  HiOutlineLocationMarker,
  HiChevronDown,
} from "react-icons/hi";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Price from "../components/Price";
import {
  TypeOfRealEstate,
  TypeOfTransaction,
  PriceData,
} from "./SearchFormData";
import useActive from "./useActive";

interface QueryDetails {
  [key: string]: string;
}

function SearchForm() {
  const [isOpened, setIsOpened] = useActive(false);
  const [renderErrorPrice, setRenderErrorPrice] = useState(false);
  const [renderErrorArea, setRenderErrorArea] = useState(false);
  const [renderErrorConstruction, setRenderErrorConstruction] = useState(false);
  const [pupu, setpupu] = useState({
    City: "",
    TypeOfRealEstate: "",
    TypeOfTransaction: "",
    PriceFrom: "",
    PriceTo: "",
    areaPriceFrom: "",
    areaPriceTo: "",
    numberOfRooms: "",
    Area: "",
    YearOfConstructionFrom: "",
    YearOfConstructionTo: "",
  });
  console.table(pupu);
  //zmienic nazwy state i handlechange
  const handleDropdown = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      setpupu({
        ...pupu,
        [ref.current.name]: ref.current.value,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setpupu({ ...pupu, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
    ) {
      return;
    }
    if (e.key < "0" || e.key > "9") {
      e.preventDefault();
    }
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>, limit: number) => {
    setpupu({
      ...pupu,
      [e.target.name]: e.target.value.slice(0, limit),
    });
  };

  //renderErrorPrice
  useEffect(() => {
    let x = parseInt(pupu.PriceFrom);
    let y = parseInt(pupu.PriceTo);
    if (x === 0 && y === 0) {
      setRenderErrorPrice(false);
    } else if (x > y && y === 0) {
      setRenderErrorPrice(() => false);
    } else if (x > y && y > 0) {
      setRenderErrorPrice(() => true);
    } else if (x === y) {
      setRenderErrorPrice(() => true);
    } else {
      setRenderErrorPrice(() => false);
    }
  }, [pupu.PriceFrom, pupu.PriceTo]);

  //renderErrorArea
  useEffect(() => {
    let x = parseInt(pupu.areaPriceFrom);
    let y = parseInt(pupu.areaPriceTo);
    if (x === 0 && y === 0) {
      setRenderErrorArea(false);
    } else if (x > y && y === 0) {
      setRenderErrorArea(() => false);
    } else if (x > y && y > 0) {
      setRenderErrorArea(() => true);
    } else if (x === y) {
      setRenderErrorArea(() => true);
    } else {
      setRenderErrorArea(() => false);
    }
  }, [pupu.areaPriceFrom, pupu.areaPriceTo]);
  //renderErrorYearOfConstruction
  useEffect(() => {
    let x = parseInt(pupu.YearOfConstructionFrom);
    let y = parseInt(pupu.YearOfConstructionTo);
    if (x === 0 && y === 0) {
      setRenderErrorConstruction(false);
    } else if (x > y && y === 0) {
      setRenderErrorConstruction(() => false);
    } else if (x > y && y > 0) {
      setRenderErrorConstruction(() => true);
    } else if (x === y) {
      setRenderErrorConstruction(() => true);
    } else {
      setRenderErrorConstruction(() => false);
    }
  }, [pupu.YearOfConstructionFrom, pupu.YearOfConstructionTo]);

  //div zamienić na <form>
  return (
    <div
      className={styles.search_form}
      style={{
        height: isOpened ? "400px" : "200px",
        transition: "height 0.3s ease-in-out",
        overflow: "hidden",
        maxHeight: isOpened ? "400px" : "200px",
      }}
    >
      <section className={styles.section}>
        <div className={styles.form_input_container}>
          <label htmlFor="City">City</label>
          <div className={styles.form_div_wrapper}>
            <HiOutlineLocationMarker className={styles.svg} />
            <input
              type="text"
              placeholder="np. miasto"
              name="City"
              id="City"
              className={styles.inputCity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.dropdown}>
          <Dropdown
            data={TypeOfRealEstate}
            name={"TypeOfRealEstate"}
            handleChange={handleDropdown}
            placeholder={"Rodzaj Nieruchomości"}
            label={"Rodzaj Nieruchomości"}
          ></Dropdown>
        </div>
        <div className={styles.dropdown}>
          <Dropdown
            data={TypeOfTransaction}
            name={"TypeOfTransaction"}
            handleChange={handleDropdown}
            placeholder={"Rodzaj Transakscji"}
            label={"Rodzaj Transakscji"}
          ></Dropdown>
        </div>
        <div
          className={styles.dropdown}
          style={{
            width: "320px",
            boxShadow: renderErrorPrice ? "0px 0px 11px 4px red" : "none",
          }}
        >
          <label htmlFor="">Cena w zł</label>
          <Price data={PriceData} handleChange={handleDropdown} />
        </div>
        <div
          className={styles.areaPrice}
          style={{
            width: "320px",
            boxShadow: renderErrorConstruction
              ? "0px 0px 11px 4px red"
              : "none",
          }}
        >
          <label htmlFor="">Rok Budowy</label>
          <div
            style={{
              display: "flex",
              width: "300px",
              borderRadius: "5px",
            }}
          >
            <input
              type="text"
              name={"YearOfConstructionFrom"}
              id={"rok_budowy"}
              placeholder={"Rok od..."}
              onChange={(e) => {
                handleChange(e);
                handleMax(e, 4);
              }}
              maxLength={4}
              onKeyDown={handleKeyDown}
              className={styles.form_input}
            />
            <div
              style={{
                height: "40px",
                border: "solid #554971",
                margin: "0 5px",
              }}
            ></div>
            <input
              type="text"
              name={"YearOfConstructionTo"}
              id={"rok_budowy"}
              placeholder={"Rok do..."}
              onChange={(e) => {
                handleChange(e);
                handleMax(e, 4);
              }}
              maxLength={4}
              onKeyDown={handleKeyDown}
              className={styles.form_input}
            />
          </div>
        </div>
        <div>
          <button
            onClick={() => setIsOpened(!isOpened)}
            className={styles.small_button}
            style={{ color: isOpened ? "#daa520" : "#efe7e7" }}
          >
            <h3>Rozwiń</h3>
            <HiChevronDown
              className={
                isOpened
                  ? styles.small_button_ArrowClosed
                  : styles.small_button_ArrowOpened
              }
            />
          </button>
        </div>
        <div className={styles.submitButton}>
          <Button>
            <HiSearch />
          </Button>
        </div>
        {isOpened ? (
          <section className={styles.sectionOpened}>
            <div
              className={styles.form_input_container}
              style={{ width: "200px" }}
            >
              <label htmlFor="numberOfRooms">Liczba pokoi</label>
              <input
                type="text"
                name={"numberOfRooms"}
                id={"numberOfRooms"}
                placeholder={"Liczba pokoi"}
                onChange={(e) => {
                  handleChange(e);
                  handleMax(e, 2);
                }}
                maxLength={2}
                onKeyDown={handleKeyDown}
                className={styles.form_input}
              />
            </div>
            <div
              className={styles.form_input_container}
              style={{ width: "200px" }}
            >
              <label htmlFor="area">Powierzchnia</label>
              <input
                type="text"
                name={"Area"}
                id={"area"}
                placeholder={"Powierzchnia"}
                onChange={(e) => {
                  handleChange(e);
                  handleMax(e, 6);
                }}
                maxLength={6}
                onKeyDown={handleKeyDown}
                className={styles.form_input}
              />
            </div>
            <div
              className={styles.form_input_container}
              style={{ width: "200px" }}
            >
              <label htmlFor="yearOfConstruction">Rok Budowy</label>
              <input
                type="text"
                name={"YearOfConstruction"}
                id={"yearOfConstruction"}
                placeholder={"Rok budowy"}
                onChange={(e) => {
                  handleChange(e);
                  handleMax(e, 4);
                }}
                maxLength={4}
                onKeyDown={handleKeyDown}
                className={styles.form_input}
              />
            </div>
            <div
              className={styles.areaPrice}
              style={{
                width: "320px",
                boxShadow: renderErrorArea ? "0px 0px 11px 4px red" : "none",
              }}
            >
              <label htmlFor="">Cena za m²</label>
              <div
                style={{
                  display: "flex",
                  width: "300px",
                  borderRadius: "5px",
                }}
              >
                <input
                  type="text"
                  name={"areaPriceFrom"}
                  id={"cena za metr"}
                  placeholder={"Cena od..."}
                  onChange={(e) => {
                    handleChange(e);
                    handleMax(e, 7);
                  }}
                  maxLength={7}
                  onKeyDown={handleKeyDown}
                  className={styles.form_input}
                />
                <div
                  style={{
                    height: "40px",
                    border: "solid #554971",
                    margin: "0 5px",
                  }}
                ></div>
                <input
                  type="text"
                  name={"areaPriceTo"}
                  id={"cena za metr"}
                  placeholder={"Cena do..."}
                  onChange={(e) => {
                    handleChange(e);
                    handleMax(e, 7);
                  }}
                  maxLength={7}
                  onKeyDown={handleKeyDown}
                  className={styles.form_input}
                />
              </div>
            </div>
            <div>piętro</div>
          </section>
        ) : null}
      </section>
    </div>
  );
}

export default SearchForm;

/*      <span>tutaj rozwijamy</span>
      <div>liczba pokoi</div>
      <div>powierzchnia m2</div>
      <div>rok budowy</div>
      <div>piętro</div>
      <div>
        <Button>
          <HiSearch />
        </Button>
      </div>*/
