import styles from "./SearchForm.module.css";
import { useState } from "react";
import { HiSearch, HiOutlineLocationMarker } from "react-icons/hi";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Price from "../components/Price";
import {
  TypeOfRealEstate,
  TypeOfTransaction,
  PriceData,
} from "./SearchFormData";
import useActive from "./useActive";

function SearchForm() {
  const [isOpened, setIsOpened] = useActive(false);
  const [pupu, setpupu] = useState({});
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

const AreaPrice = ():JSX.Element => {
  return (
    <div className={styles.areaPrice} style={{ width: "320px" }}>
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
          name={"areaPrice"}
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
          name={"areaPrice"}
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
  );
};
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
        <div className={styles.form_div_wrapper}>
          <HiOutlineLocationMarker className={styles.svg} />
          <input
            type="text"
            placeholder="np. miasto"
            name="City"
            className={styles.inputText}
            onChange={handleChange}
          />
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
        <div className={styles.dropdown} style={{ width: "320px" }}>
          <label htmlFor="">Cena w zł</label>
          <Price data={PriceData} handleChange={handleDropdown} />
        </div>
        <AreaPrice />
        <div>
          <button onClick={() => setIsOpened(!isOpened)}>rozwiń</button>
        </div>
        <div className={styles.submitButton}>
          <Button>
            <HiSearch />
          </Button>
        </div>
        {isOpened ? (
          <section className={styles.sectionOpened}>
            <div style={{ width: "280px" }}>
              <input
                type="text"
                name={"liczbapokoi"}
                id={"liczba pokoi"}
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
            <div style={{ width: "280px" }}>
              <input
                type="text"
                name={"powierzchnia"}
                id={"powierzchnia"}
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
            <div style={{ width: "280px" }}>
              <input
                type="text"
                name={"rok budowy"}
                id={"rok budowy"}
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
