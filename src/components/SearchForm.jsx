import './SearchForm.css'
import {useState} from 'react'
import { HiSearch } from "react-icons/hi";

function SearchForm() {
      const [selects, setSelects] = useState();

  return (
    <div className="search__form">
      <div>
        <label className="search__form-label">Rodzaj nieruchomości</label>
        <select className="search__form-select">
          <option value="mieszkania">mieszkania</option>
          <option value="domy">domy</option>
          <option value="komercyjne">komercyjne</option>
          <option value="działki">działki</option>
          <option value="garaże">garaże</option>
          <option value="pokoje">pokoje</option>
          <option value="dowolne">dowolne</option>
        </select>
        <select className="search__form-select">
          <option value="volvo">typ ogłoszeniodawcy</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div>
        <label className="search__form-label">Cena w zł</label>
        <input
          className="search__form-input"
          type="number"
          placeholder="cena minimalna"
        ></input>
        <input
          className="search__form-input"
          type="number"
          placeholder="cena maksymalna"
        ></input>
      </div>
      <div>
        <input
          className="search__form-input"
          type="number"
          placeholder="powierzchnia minimalna"
        ></input>
        <input
          className="search__form-input"
          type="number"
          placeholder="powierzchnia maksymalna"
        ></input>
      </div>
      <button className="search__form-btn">
        <HiSearch />
      </button>
    </div>
  );
}

export default SearchForm