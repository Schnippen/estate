import styles from "./SearchForm.module.css";
import { useState, useEffect } from "react";
import { HiSearch } from "react-icons/hi";
import Button from "../Buttons/Button";
import Dropdown from "../Dropdown";
import Price from "../Price";
import {
  TypeOfRealEstate,
  TypeOfTransaction,
  PriceData,
} from "./SearchFormData";
import CityDropdown from "../CityDropdown";

type QueryDetails = {
  City: string;
  TypeOfRealEstate: string;
  TypeOfTransaction: string;
  PriceFrom: string;
  PriceTo: string;
  YearOfConstructionFrom: string;
  YearOfConstructionTo: string;
  numberOfRooms: string;
  AreaFrom: string;
  AreaTo: string;
  areaPriceFrom: string;
  areaPriceTo: string;
};

function SearchForm({
  query,
  setQuery,
  handleForm,
  searchFormLength,
}: {
  query: QueryDetails;
  setQuery: React.Dispatch<React.SetStateAction<QueryDetails>>;
  handleForm: (e: React.FormEvent<HTMLFormElement>) => void;
  searchFormLength: number;
}) {
  const [renderErrorPrice, setRenderErrorPrice] = useState(false);
  const [renderErrorAreaPrice, setRenderErrorAreaPrice] = useState(false);
  const [renderErrorConstruction, setRenderErrorConstruction] = useState(false);
  const [renderErrorArea, setRenderErrorArea] = useState(false);

  const handleDropdown = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      setQuery({
        ...query,
        [ref.current.name]: ref.current.value,
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
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
    setQuery({
      ...query,
      [e.target.name]: e.target.value.slice(0, limit),
    });
  };

  const calculateError = (fromValue: string, toValue: string) => {
    const x = parseInt(fromValue);
    const y = parseInt(toValue);
    if (x === 0 && y === 0) {
      return false;
    } else if (x > y && y === 0) {
      return false;
    } else if (x > y && y > 0) {
      return true;
    } else if (x === y) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    setRenderErrorPrice(calculateError(query.PriceFrom, query.PriceTo));
  }, [query.PriceFrom, query.PriceTo]);

  useEffect(() => {
    setRenderErrorAreaPrice(
      calculateError(query.areaPriceFrom, query.areaPriceTo)
    );
  }, [query.areaPriceFrom, query.areaPriceTo]);

  useEffect(() => {
    setRenderErrorConstruction(
      calculateError(query.YearOfConstructionFrom, query.YearOfConstructionTo)
    );
  }, [query.YearOfConstructionFrom, query.YearOfConstructionTo]);

  useEffect(() => {
    setRenderErrorArea(calculateError(query.AreaFrom, query.AreaTo));
  }, [query.AreaFrom, query.AreaTo]);

  const handleReset = () => {
    setQuery({
      City: "",
      TypeOfRealEstate: "",
      TypeOfTransaction: "",
      PriceFrom: "",
      PriceTo: "",
      YearOfConstructionFrom: "",
      YearOfConstructionTo: "",
      numberOfRooms: "",
      AreaFrom: "",
      AreaTo: "",
      areaPriceFrom: "",
      areaPriceTo: "",
    });
  };

  return (
    <form className={styles.search_form} onSubmit={(e) => handleForm(e)}>
      <section className={styles.section}>
        <div className={styles.form_input_container}>
          <CityDropdown
            handleInput={handleChange}
            queryDetails={query}
            setQueryDetails={setQuery}
            scroll={true}
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
        <div className={styles.section_submit}>
          <div>
            <div className={styles.submitButton}>
              <Button>
                <HiSearch />
              </Button>
            </div>
          </div>
          <h5 onClick={handleReset}>
            Liczba ogłoszeń:
            {searchFormLength > 0 ? searchFormLength : null}
          </h5>
        </div>

        <div className={styles.form_input_container} style={{ width: "200px" }}>
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
          className={styles.areaPrice}
          style={{
            width: "320px",
            boxShadow: renderErrorArea ? "0px 0px 11px 4px red" : "none",
          }}
        >
          <label htmlFor="Area">Powierzchnia m²</label>
          <div
            style={{
              display: "flex",
              width: "300px",
              borderRadius: "5px",
            }}
          >
            <input
              type="text"
              name={"AreaFrom"}
              id={"Area"}
              placeholder={"od..."}
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
                border: "solid var(--secondary-color)",
                margin: "0 5px",
              }}
            ></div>
            <input
              type="text"
              name={"AreaTo"}
              id={"powierzchnia"}
              placeholder={"do..."}
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
        <div
          className={styles.areaPrice}
          style={{
            width: "320px",
            boxShadow: renderErrorAreaPrice ? "0px 0px 11px 4px red" : "none",
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
                border: "solid var(--secondary-color)",
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
                border: "solid var(--secondary-color)",
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
      </section>
    </form>
  );
}

export default SearchForm;
