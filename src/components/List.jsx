import Database from "../data/rybnik_Nieruchomosci_Morizon_21.09.2022.json";
import ListItem from "./ListItem";
import './List.css'
import {useState} from 'react'

function List() {

  const [currentPage,setCurrentPage] = useState(126)
  const [itemsPerPage, setItemsPerPage] = useState(2)


  
  const handlePrevButton = () => {
    setCurrentPage(currentPage-1);
  };
  const handleNextButton = () => {
  setCurrentPage(currentPage+1);
  };

  const pagesVisited = currentPage * itemsPerPage;

  let pages =[]

  for(let i = 1; i <= Math.floor(Database.length/itemsPerPage); i++){pages.push(i)}
  console.log(pages)
  const items = Database.slice(pagesVisited,itemsPerPage+pagesVisited).map((item) => 
    <ListItem item={item}/>
  )

  return (
    <>
      <ul className="list__container">{items}</ul>
      <nav className="pagination">
        <ul className="pagination__list">
          <li>
            <button
              disabled={currentPage < pages[0]}
              onClick={handlePrevButton}
            >
              Backward
            </button>
          </li>
          <li>
            <button> {currentPage}</button>
            <button> {0}</button>
          </li>
          <li>
            <button
              disabled={currentPage === pages}
              onClick={handleNextButton}
            >
              Forward
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default List;