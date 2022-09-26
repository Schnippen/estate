import './SearchForm.css'
import {useState} from 'react'

function SearchForm() {
      const [selects, setSelects] = useState();

  return (
    <div className="search__form">
      <div>
        <select>
          <option value="volvo">pierwotny</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select>
          <option value="volvo">typ ogłoszeniodawcy</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div>
        <input type="number" placeholder="cena minimalna"></input>
        <input type="number" placeholder="cena maksymalna"></input>
      </div>
      <div>
        <input type="number" placeholder="powierzchnia minimalna"></input>
        <input type="number" placeholder="powierzchnia maksymalna"></input>
      </div>
    </div>
  );
}

export default SearchForm