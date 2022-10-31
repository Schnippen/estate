import styles from './SearchForm.module.css'
import {useState} from 'react'
import { HiSearch } from "react-icons/hi";

function SearchForm() {
      const [selects, setSelects] = useState();

      //Dopisać Inne Kategorie
      const category = {
        1: "Mieszkanie na sprzedaż",
        2: "Kawalerka na sprzedaż",
        3: "Dom na sprzedaż",
        4: "Działka na sprzedaż",
        5: ""
      };

      const handleChange=(e)=>{
        const parsedValue = parseInt(e.target.value);
        if(parsedValue === 1){
          console.log('chuj');
          setSelects([...selects.titleKategoria].filter(n=>n === category[1] || category[2]));
        }else if (parsedValue === 2) {
          console.log("pipi");
          setSelects(
            [...selects.titleKategoria].filter(
              (n) => n === category[3])
          );
        } else {
          console.log("siusiu", typeof e.target.value,);
        }
        
      }

  return (
    <div className={styles.search__form}>
      <div>
        <ul>
          <li>
            <label className={styles.search__form_label}>
              Rodzaj nieruchomości
            </label>
            <select className={styles.search__form_select} onChange={handleChange}>
              <option value={1}>Mieszkania</option>
              <option value={3}>Domy</option>
              <option value={4}>Działki</option>
              <option value={5}>dowolne</option>
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
          className={styles.search__form_input}
          type="number"
          placeholder="cena minimalna"
        ></input>
        <input
          className={styles.search__form_input}
          type="number"
          placeholder="cena maksymalna"
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

export default SearchForm