import React from "react";
import styles from "./Pagination.module.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import stylesMobile from "./PaginationMobile.module.css";

type PaginationTypes={
  pages:number[]; currentPage:number; setCurrentPage: React.Dispatch<React.SetStateAction<number>>; isMobile:boolean; 
}

function Pagination({ pages, currentPage, setCurrentPage, isMobile }:PaginationTypes) {
  const handlePrevButton = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  const handleFirstButton = () => {
    setCurrentPage((currentPage) => pages[0] - 1);
  };
  const handlePrevMinusOneButton = () => {
    setCurrentPage((currentPage) => currentPage - 2);
  };
  const handleNextButton = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  const handleNextPlusOneButton = () => {
    setCurrentPage((currentPage) => currentPage + 2);
  };
  const handleLastButton = () => {
    setCurrentPage((currentPage) => pages.length - 0);
  };

  const PaginationMobile = (
    <nav className={stylesMobile.pagination}>
      <ul className={stylesMobile.pagination__list}>
        <li>
          <button
            className={stylesMobile.pagination__mobile_list_btn}
            disabled={currentPage < pages[0]}
            onClick={handlePrevButton}
          >
            <HiArrowLeft />
          </button>
        </li>
        <li>
          <button className={stylesMobile.pagination__mobile_list_btn}>
            {currentPage + 1 + "/" + pages.length}
          </button>
        </li>
        <li>
          <button
            className={stylesMobile.pagination__mobile_list_btn}
            disabled={currentPage === pages.length}
            onClick={handleNextButton}
          >
            <HiArrowRight />
          </button>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      {isMobile ? (
        PaginationMobile
      ) : (
        <nav className={styles.pagination}>
          <ul className={styles.pagination__list}>
            <li>
              <button
                className={styles.pagination__list_btn}
                disabled={currentPage < pages[0]}
                onClick={handlePrevButton}
              >
                <HiArrowLeft />
              </button>
              <button
                className={styles.pagination__list_btn}
                onClick={handleFirstButton}
              >
                {pages[0]}
              </button>
            </li>
            <li>...</li>
            <li>
              <button
                className={styles.pagination__list_btn}
                disabled={currentPage < pages[1]}
                onClick={handlePrevMinusOneButton}
              >
                {currentPage < pages[1] ? <span> </span> : currentPage - 1}
              </button>
              <button
                className={styles.pagination__list_btn}
                disabled={currentPage < pages[0]}
                onClick={handlePrevButton}
              >
                {currentPage < pages[0] ? <span> </span> : currentPage}
              </button>
              <button className={styles.pagination__list_btn}>
                {currentPage + 1}
              </button>
              <button
                className={styles.pagination__list_btn}
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
                className={styles.pagination__list_btn}
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
                className={styles.pagination__list_btn}
                onClick={handleLastButton}
              >
                {pages.length + 1}
              </button>
              <button
                className={styles.pagination__list_btn}
                disabled={currentPage === pages.length}
                onClick={handleNextButton}
              >
                <HiArrowRight />
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Pagination;
