import styles from "./SearchForm.module.css";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import Button from "./Button";

function SearchForm() {
  const [selects, setSelects] = useState();

  //Dopisać Inne Kategorie
  /*
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
  */
  return (
    <div className={styles.search__form}>
      <Button>
        <HiSearch />
      </Button>
    </div>
  );
}

export default SearchForm;
