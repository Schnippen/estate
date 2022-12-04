import Database from "../data/katowice_Nieruchomosci_Morizon_08.11.2022.json";
import ListItem from "./ListItem";
import { useState } from "react";
import Pagination from "./Pagination";
import NumberSelect from "./NumberSelect";
import styles from "./List.module.css";

function List() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [databaseState, setDatabaseState] = useState(Database);

  //prevstate => prevstate xx
  // Database bedzie łączyć sie z serverem useFetch

  const pagesVisited = currentPage * itemsPerPage;

  let pages = [];

  for (let i = 1; i <= Math.floor(Database.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleSetItemsPerPage = (e) => {
    setItemsPerPage((itemsPerPage) => parseInt(e.target.value));
  };

  //Sorting
  const handleSortingDatabaseState = (e) => {
    const sortBy = parseInt(e.target.value);
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
          <div>
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
          </div>
          <div style={{ width: "200px" }}>
            <NumberSelect
              placeholder={"Sortuj"}
              number={[
                "Domyślnie",
                "Cena od najniższej",
                "Cena od najwyższej",
                "Najniższej ceny za m²",
                "Najwyższej ceny za m²",
              ]}
            />
          </div>
          <div style={{ width: "200px", position: "relative" }}>
            <NumberSelect
              placeholder={"Ilośc ofert na stronie"}
              number={["5", "1", "3"]}
              value={[5,1,3]}
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
          handleSetItemsPerPage={handleSetItemsPerPage}
        />
      </section>
    </>
  );
}

export default List;
