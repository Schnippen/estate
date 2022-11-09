import Database from "../data/rybnik_Nieruchomosci_Morizon_08.11.2022.json";
import ListItem from "./ListItem";
import "./List.css";
import { useState } from "react";
import Pagination from "./Pagination";

function List() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [databaseState, setDatabaseState] = useState(Database);

  //prevstate => prevstate xx

  const pagesVisited = currentPage * itemsPerPage;

  let pages = [];

  for (let i = 1; i <= Math.floor(Database.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleSetItemsPerPage = (e) => {
    setItemsPerPage((itemsPerPage) => parseInt(e.target.value));
  };

  const handleDatabaseState = (e) => {
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
      <section className="section__main">
        <div>
          <select onChange={handleDatabaseState}>
            <option value={1}>Domyślnie</option>
            <option value={2}>cena od najniższej</option>
            <option value={3}>cena od najwyższej</option>
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
        <ul className="list__container">{items}</ul>
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
