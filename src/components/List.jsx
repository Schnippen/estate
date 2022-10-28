import Database from "../data/rybnik_Nieruchomosci_Morizon_21.09.2022.json";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ListItem from "./ListItem";
import "./List.css";
import { useState } from "react";

function List() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [state, setState] = useState();

  const handlePrevButton = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleFirstButton = () => {
    setCurrentPage(pages[0] - 1);
  };
  const handlePrevMinusOneButton = () => {
    setCurrentPage(currentPage - 2);
  };
  const handleNextButton = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleNextPlusOneButton = () => {
    setCurrentPage(currentPage + 2);
  };
  const handleLastButton = () => {
    setCurrentPage(pages.length - 0);
  };

  const pagesVisited = currentPage * itemsPerPage;

  let pages = [];

  for (let i = 1; i <= Math.floor(Database.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleSetItemsPerPage = (e) => {
    setItemsPerPage((itemsPerPage) => parseInt(e.target.value));
  };

  const sortedItems = Database;

  /*const sortLowToHigh = Database.sort(
    (firstItem, secondItem) =>
      parseFloat(firstItem.priceInfo.split(" ").slice(0, -1).join("")) -
      parseFloat(secondItem.priceInfo.split(" ").slice(0, -1).join(""))
  );*/

  const handleState = (e) => {
    const sortBy = parseInt(e.target.value);
    if (sortBy === 1) {
      console.log("domyslnie");
      setState(sortedItems);
    } else if (sortBy === 2) {
      console.log("cena od najnizszej");
      setState(
        sortedItems.sort(
          (firstItem, secondItem) =>
            parseFloat(firstItem.priceInfo.split(" ").slice(0, -1).join("")) -
            parseFloat(secondItem.priceInfo.split(" ").slice(0, -1).join(""))
        )
      );
    } else if (sortBy === 3) {
      console.log("cena od najwyzszej");
      setState(
        sortedItems.sort(
          (firstItem, secondItem) =>
            parseFloat(secondItem.priceInfo.split(" ").slice(0, -1).join("")) -
            parseFloat(firstItem.priceInfo.split(" ").slice(0, -1).join(""))
        )
      );
    }
  };

  const items = sortedItems
    .slice(pagesVisited, itemsPerPage + pagesVisited)
    .map((item) => <ListItem item={item} />);

  return (
    <>
      <section className="section__main">
        <div>
          <select onChange={handleState}>
            <option value={1}>Domyślnie</option>
            <option value={2}>cena od najniższej</option>
            <option value={3}>cena od najwyższej</option>
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
        <nav className="pagination">
          <ul className="pagination__list">
            <li>
              <button
                className="pagination__list-btn"
                disabled={currentPage < pages[0]}
                onClick={handlePrevButton}
              >
                <HiArrowLeft />
              </button>
              <button
                className="pagination__list-btn"
                onClick={handleFirstButton}
              >
                {pages[0]}
              </button>
            </li>
            <li>...</li>
            <li>
              <button
                className="pagination__list-btn"
                disabled={currentPage < pages[1]}
                onClick={handlePrevMinusOneButton}
              >
                {currentPage < pages[1] ? <span> </span> : currentPage - 1}
              </button>
              <button
                className="pagination__list-btn"
                disabled={currentPage < pages[0]}
                onClick={handlePrevButton}
              >
                {currentPage < pages[0] ? <span> </span> : currentPage}
              </button>
              <button className="pagination__list-btn">
                {currentPage + 1}
              </button>
              <button
                className="pagination__list-btn"
                disabled={currentPage >= pages.length - 0}
                onClick={handleNextButton}
              >
                {currentPage >= pages.length - 0 ? (
                  <span></span>
                ) : (
                  currentPage + 2
                )}
              </button>
              <button
                className="pagination__list-btn"
                disabled={currentPage > pages.length - 2}
                onClick={handleNextPlusOneButton}
              >
                {currentPage > pages.length - 2 ? (
                  <span></span>
                ) : (
                  currentPage + 3
                )}
              </button>
            </li>
            <li>...</li>
            <li>
              <button
                className="pagination__list-btn"
                onClick={handleLastButton}
              >
                {pages.length + 1}
              </button>
              <button
                className="pagination__list-btn"
                disabled={currentPage === pages.length}
                onClick={handleNextButton}
              >
                <HiArrowRight />
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}

export default List;
