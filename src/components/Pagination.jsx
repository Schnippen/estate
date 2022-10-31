import React from 'react'
import styles from './Pagination.module.css'
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

function Pagination({currentPage,pages,handleFirstButton,handleLastButton,handleNextButton,handleNextPlusOneButton,handlePrevButton,handlePrevMinusOneButton}) {

// wrzuc funkcje
  
  return (
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
          <button className={styles.pagination__list_btn} onClick={handleFirstButton}>
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
          <button className={styles.pagination__list_btn}>{currentPage + 1}</button>
          <button
            className={styles.pagination__list_btn}
            disabled={currentPage >= pages.length - 0}
            onClick={handleNextButton}
          >
            {currentPage >= pages.length - 0 ? <span></span> : currentPage + 2}
          </button>
          <button
            className={styles.pagination__list_btn}
            disabled={currentPage > pages.length - 2}
            onClick={handleNextPlusOneButton}
          >
            {currentPage > pages.length - 2 ? <span></span> : currentPage + 3}
          </button>
        </li>
        <li>...</li>
        <li>
          <button className={styles.pagination__list_btn} onClick={handleLastButton}>
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
  );
}

export default Pagination 