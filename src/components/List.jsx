import Database from "../data/katowice_Nieruchomosci_Morizon_08.11.2022.json";
import ListItem from "./ListItem";
import { useState } from "react";
import Pagination from "./Pagination";
import OptionSelect from "./OptionSelect";
import styles from "./List.module.css";

function List() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [databaseState, setDatabaseState] = useState(Database);

  //prevstate => prevstate xx
  // Database bedzie łączyć sie z serverem useFetch
  //jest bug w paginacji, przy zmianie itemsPerPage pokazuje zakres wiekszy niz ostatina strona

  const pagesVisited = currentPage * itemsPerPage;

  let pages = [];

  for (let i = 1; i <= Math.floor(Database.length / itemsPerPage); i++) {
    pages.push(i);
  }

  //Sorting
  const handleSortingDatabaseState = (e) => {
    const sortBy = parseInt(e);
    console.log(sortBy, "jestem sort by");
    if (sortBy === 1) {
      console.log("domyslnie");
      setDatabaseState([...Database]);
    } else if (sortBy === 2) {
      console.log("cena od najnizszej");
      setDatabaseState(
        [...databaseState].sort(
          (firstItem, secondItem) =>
            parseFloat(firstItem.priceInfo.split(" ").slice(0, -1).join("")) -
            parseFloat(secondItem.priceInfo.split(" ").slice(0, -1).join(""))
        )
      );
    } else if (sortBy === 3) {
      console.log("cena od najwyzszej");
      setDatabaseState(
        [...databaseState].sort(
          (firstItem, secondItem) =>
            parseFloat(secondItem.priceInfo.split(" ").slice(0, -1).join("")) -
            parseFloat(firstItem.priceInfo.split(" ").slice(0, -1).join(""))
        )
      );
    } else if (sortBy === 4) {
      console.log("Najniższej ceny za m²");
      setDatabaseState(
        [...databaseState].sort(
          (firstItem, secondItem) =>
            parseFloat(
              firstItem.areaPriceInfo.replace(",", ".").split("zł").slice(0, -1)
            ) -
            parseFloat(
              secondItem.areaPriceInfo
                .replace(",", ".")
                .split("zł")
                .slice(0, -1)
            )
        )
      );
    } else if (sortBy === 5) {
      console.log("Najwyższej ceny za m²");
      setDatabaseState(
        [...databaseState].sort(
          (firstItem, secondItem) =>
            parseFloat(
              secondItem.areaPriceInfo
                .replace(",", ".")
                .split("zł")
                .slice(0, -1)
            ) -
            parseFloat(
              firstItem.areaPriceInfo.replace(",", ".").split("zł").slice(0, -1)
            )
        )
      );
    }
  };

  const items = [...databaseState]
    .slice(pagesVisited, itemsPerPage + pagesVisited)
    .map((item) => <ListItem key={item.offerID} item={item} />);

  return (
    <>
      <section className={styles.section__main}>
        <section className={styles.section__options}>
          <div style={{ width: "250px", textAlign:"center"}}>
            <OptionSelect
              placeholder={"Sortuj"}
              option={[
                "Domyślnie",
                "Cena od najniższej",
                "Cena od najwyższej",
                "Najniższej ceny za m²",
                "Najwyższej ceny za m²",
              ]}
              value={[1, 2, 3, 4, 5]}
              setState={handleSortingDatabaseState}
            />
          </div>
          <div style={{ width: "200px", position: "relative", textAlign:"center" }}>
            <OptionSelect
              placeholder={"Ilośc ofert na stronie"}
              option={[3, 5, 100]}
              value={[3, 5, 100]}
              setState={setItemsPerPage}
            />
          </div>
          <div>
            Liczba ogłoszeń: <strong>{Database.length}</strong>
          </div>
        </section>
        <ul className={styles.list__container}>{items}</ul>
        <Pagination
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </section>
    </>
  );
}

export default List;

/*          <div>
            <select onChange={handleSortingDatabaseState}>
              <option value={1}>Domyślnie</option>
              <option value={2}>Cena od najniższej</option>
              <option value={3}>Cena od najwyższej</option>
              <option value={4}>Najniższej ceny za m²</option>
              <option value={5}>Najwyższej ceny za m²</option>
            </select>
          </div>
          <div>
            Ilość ofert na stronie
            <select onChange={handleSetItemsPerPage}>
              <option value={5}>5</option>
              <option value={1}>1</option>
              <option value={3}>3</option>
            </select>
          </div>*/
