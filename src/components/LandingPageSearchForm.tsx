import React from "react";
import styles from "../styles/LandingPage.module.css";
import CityDropdown from "./CityDropdown";
import Dropdown from "./Dropdown";
import Price from "./Price";
import {
  TypeOfRealEstate,
  TypeOfTransaction,
  PriceData,
} from "../pages/LandingPageData";
import Button from "./Buttons/Button";
import { HiSearch } from "react-icons/hi";

interface QueryDetails {
  [key: string]: string;
}
type LandingPageSearchFormTypes = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  queryDetails: QueryDetails;
  setQueryDetails: React.Dispatch<React.SetStateAction<QueryDetails>>;
  handleChange: (ref: React.RefObject<HTMLInputElement>) => void;
  renderError: boolean;
};

function LandingPageSearchForm({
  handleSubmit,
  handleInput,
  queryDetails,
  setQueryDetails,
  handleChange,
  renderError,
}: LandingPageSearchFormTypes) {
  return (
    <form
      className={styles.section_searchbar}
      onSubmit={(e) => handleSubmit(e)}
    >
      <CityDropdown
        handleInput={handleInput}
        queryDetails={queryDetails}
        setQueryDetails={setQueryDetails}
      />
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
      <div
        className={styles.dropdown}
        style={{
          width: "320px",
          boxShadow: renderError ? "0px 0px 11px 4px red" : "none",
        }}
      >
        <label htmlFor="">Cena w zł</label>
        <Price data={PriceData} handleChange={handleChange} />
      </div>
      <Button type={"submit"} onClick={handleSubmit} disabled={renderError}>
        <HiSearch />
      </Button>
    </form>
  );
}

export default LandingPageSearchForm;
