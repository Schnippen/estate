import styles from "./SearchForm.module.css";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import Database from "../data/rybnik_Nieruchomosci_Morizon_21.09.2022.json";

function SearchForm() {
  const [selects, setSelects] = useState(Database);

  //Dopisać Inne Kategorie
  const category = {
    1: "Mieszkanie na sprzedaż",
    2: "Kawalerka na sprzedaż",
    3: "Dom na sprzedaż",
    4: "Działka na sprzedaż",
    5: "",
  };
  //console.log(selects)
  const handleChange = (e) => {
    const parsedValue = parseInt(e.target.value);
    if (parsedValue === 0) {
      console.log("dowolne qwe");
      setSelects([...selects]);
    } else if (parsedValue === 1) {
      console.log("chuj mam mieszkania na sprzedaż");
      setSelects(
        [...selects].filter(
          (n) => n.titleKategoria === category[1] || category[2]
        )
      );
    } else if (parsedValue === 3) {
      console.log("pipi mam dom na sprzedaż");
      setSelects([...selects].filter((n) => n.titleKategoria === category[3]));
    } else if (parsedValue === 4) {
      console.log("huhu działki na sprzedaż");
      setSelects([...selects].filter((n) => n.titleKategoria === category[4]));
    } else {
      console.log("siusiu", typeof e.target.value);
    }
  };

  const handleNumberChange = (e) => {
    const NumberChange = e.target.value;
  };

  return (
    <div className={styles.search__form}>
      <div>
        <ul>
          <li>
            <label className={styles.search__form_label}>
              Rodzaj nieruchomości
            </label>
            <select
              className={styles.search__form_select}
              onChange={handleChange}
            >
              <option value={0}>Dowolne</option>
              <option value={1}>Mieszkania</option>
              <option value={3}>Domy</option>
              <option value={4}>Działki</option>
            </select>
          </li>
          <li>
            <label className={styles.search__form_label}>
              Typ ogłoszeniodawcy
            </label>
            <select className={styles.search__form_select}>
              <option value="volvo">typ ogłoszeniodawcy</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
          </li>
        </ul>
      </div>
      <div>
        <label className={styles.search__form_label}>Cena w zł</label>
        <input
          onChange={handleNumberChange}
          className={styles.search__form_input}
          type="number"
          placeholder="Cena Minimalna"
          min="1000"
          step={1000}
          list="defaultNumbers"
        ></input>
        <datalist id="defaultNumbers">
          <option value={50000}></option>
          <option value="100 000"></option>
          <option value="150 000"></option>
          <option value="200 000"></option>
          <option value="250 000"></option>
          <option value="300 000"></option>
        </datalist>
        <input
          className={styles.search__form_input}
          type="number"
          placeholder="Cena Maksymalna"
        ></input>
      </div>
      <div>
        <input
          className={styles.search__form_input}
          type="number"
          placeholder="powierzchnia minimalna"
        ></input>
        <input
          className={styles.search__form_input}
          type="number"
          placeholder="powierzchnia maksymalna"
        ></input>
      </div>
      <button className={styles.search__form_btn}>
        <HiSearch />
      </button>
    </div>
  );
}

export default SearchForm;
