import React from "react";
import styles from "./Pagination.module.css";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import stylesMobile from "./PaginationMobile.module.css";

type PaginationTypes = {
  pages: number[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  isMobile: boolean;
  isLoading: boolean;
};

function Pagination({
  isLoading,
  pages,
  currentPage,
  setCurrentPage,
  isMobile,
}: PaginationTypes) {
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
            disabled={isLoading || currentPage < pages[0]}
            onClick={handlePrevButton}
          >
            <HiArrowLeft />
          </button>
        </li>
        <li>
          <button
            className={stylesMobile.pagination__mobile_list_btn}
            disabled={isLoading}
          >
            {isLoading ? null : currentPage + 1 + "/" + pages.length}
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
  console.log(isLoading || currentPage < pages[1]);
  console.log(pages[1])
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
                disabled={
                  isLoading || currentPage <= 0 || currentPage < pages[0]
                }
                onClick={handlePrevButton}
              >
                <HiArrowLeft />
              </button>
              <button
                className={styles.pagination__list_btn}
                onClick={handleFirstButton}
                disabled={isLoading || pages[0] === undefined}
              >
                {pages[0] === undefined ? null : pages[0]}
              </button>
            </li>
            <li>...</li>
            <li>
              <button
                className={styles.pagination__list_btn}
                disabled={isLoading || currentPage < pages[1] ||pages[1]===undefined }
                onClick={handlePrevMinusOneButton}
              >
                {currentPage < pages[1] || pages[1] === undefined
                  ? null
                  : currentPage - 1}
              </button>
              <button
                className={styles.pagination__list_btn}
                disabled={
                  isLoading || pages[0] === undefined || currentPage < pages[0]
                }
                onClick={handlePrevButton}
              >
                {currentPage < pages[0] || pages[0] === undefined
                  ? null
                  : currentPage}
              </button>
              <button className={styles.pagination__list_btn}>
                {currentPage + 1}
              </button>
              <button
                className={styles.pagination__list_btn}
                disabled={isLoading || currentPage >= pages.length - 0}
                onClick={handleNextButton}
              >
                {currentPage >= pages.length - 0 ? null : currentPage + 2}
              </button>
              <button
                className={styles.pagination__list_btn}
                disabled={isLoading || currentPage > pages.length - 2}
                onClick={handleNextPlusOneButton}
              >
                {currentPage > pages.length - 2 ? null : currentPage + 3}
              </button>
            </li>
            <li>...</li>
            <li>
              <button
                className={styles.pagination__list_btn}
                onClick={handleLastButton}
                style={{ fontSize: pages.length > 3 ? "0.7em" : "600" }}
                disabled={isLoading || pages.length === 0}
              >
                {pages.length > 0 ? pages.length + 1 : null}
              </button>
              <button
                className={styles.pagination__list_btn}
                disabled={isLoading || currentPage === pages.length}
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
