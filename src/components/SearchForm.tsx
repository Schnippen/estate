import styles from "./SearchForm.module.css";
import { useState, useEffect } from "react";
import {
  HiSearch,
  HiOutlineLocationMarker,
  HiChevronDown,
} from "react-icons/hi";
import Button from "./Buttons/Button";
import Dropdown from "./Dropdown";
import Price from "../components/Price";
import {
  TypeOfRealEstate,
  TypeOfTransaction,
  PriceData,
} from "./SearchFormData";
import useActive from "./useActive";

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
  searchFormLength:number;
}) {
  const [isOpened, setIsOpened] = useActive(false);
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

  const handleReset=()=>{
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
  }

  //div zamienić na <form>
  return (
    <form
      className={styles.search_form}
      style={{
        height: isOpened ? "400px" : "200px",
        transition: "height 0.3s ease-in-out",
        overflow: "hidden",
        maxHeight: isOpened ? "400px" : "200px",
      }}
      onSubmit={(e) => handleForm(e)}
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
          <h4 onClick={handleReset}>reset!</h4>
          {searchFormLength}
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
                    border: "solid #554971",
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
                boxShadow: renderErrorAreaPrice
                  ? "0px 0px 11px 4px red"
                  : "none",
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
    </form>
  );
}

export default SearchForm;
