import React from "react";
import ListItem from "./ListItem";
import { useState, useEffect, useMemo, useCallback } from "react";
import { HiChevronDown } from "react-icons/hi";
import Pagination from "./Pagination";
import Loading from "../Loading";
import styles from "./List.module.css";
import useActive from "../../utils/useActive";
import { TbMap2, TbListNumbers } from "react-icons/tb";
import Dropdown from "../Dropdown";
import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm";
type Item = {
  [key: string]: string;
};

type QueryDetails = {
  City: string;
  TypeOfRealEstate: string;
  TypeOfTransaction: string;
  PriceFrom: string;
  PriceTo: string;
  YearOfConstructionFrom: string;
  YearOfConstructionTo: string;
  numberOfRooms: string;
  AreaFrom: string;
  AreaTo: string;
  areaPriceFrom: string;
  areaPriceTo: string;
};

function List({ isMobile }: { isMobile: boolean }) {
  const [isOpened, setIsOpened] = useActive(false);
  const [isLoading, setIsLoading] = useActive(true);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [searchFormLength, setSearchFormLength] = useState<number>(0);
  const [databaseState, setDatabaseState] = useState<Item[]>([]);
  const [query, setQuery]: [
    QueryDetails,
    React.Dispatch<React.SetStateAction<QueryDetails>>
  ] = useState({
    City: "",
    TypeOfRealEstate: "",
    TypeOfTransaction: "",
    PriceFrom: "",
    PriceTo: "",
    YearOfConstructionFrom: "",
    YearOfConstructionTo: "",
    numberOfRooms: "",
    AreaFrom: "",
    AreaTo: "",
    areaPriceFrom: "",
    areaPriceTo: "",
  });
  const [querySearchForm, setQuerySearchForm]: [
    QueryDetails,
    React.Dispatch<React.SetStateAction<QueryDetails>>
  ] = useState(query);

  //sending query from LandingPage
  const location = useLocation();
  const queryDetails = location.state;
  useEffect(() => {
    console.log(queryDetails, "querydetails");
    setQuery(queryDetails);
  }, [queryDetails]);

  //Filters database for specific query
  const getSpecificQuery = (data: any, query: any) => {
    let filteredData = data;
    for (const key in query) {
      if (query[key].length > 0) {
        console.log(`${key}: ${query[key]}`);
        if (key === "TypeOfRealEstate") {
          filteredData = filteredData.filter(
            (object: any) =>
              object["titleKategoria"] === query["TypeOfRealEstate"]
          );
        }
        if (key === "TypeOfTransaction") {
          filteredData = filteredData.filter(
            (object: any) => object["marketInfo"] === query["TypeOfTransaction"]
          );
        }
        if (key === "PriceFrom") {
          filteredData = filteredData.filter((object: any) =>
            query["PriceFrom"] > 0
              ? object["priceInfo"] &&
                parseInt(
                  object["priceInfo"].slice(0, -2).split(" ").join("")
                ) >= query["PriceFrom"]
              : true
          );
        }
        if (key === "PriceTo") {
          filteredData = filteredData.filter((object: any) =>
            query["PriceTo"] > 0
              ? object["priceInfo"] &&
                parseInt(
                  object["priceInfo"].slice(0, -2).split(" ").join("")
                ) <= query["PriceTo"]
              : true
          );
        }
        if (key === "YearOfConstructionFrom") {
          filteredData = filteredData.filter((object: any) =>
            query["YearOfConstructionFrom"] > 0
              ? object["yearOfConstructionInfo"] &&
                parseInt(object["yearOfConstructionInfo"]) >=
                  query["YearOfConstructionFrom"]
              : true
          );
        }
        if (key === "YearOfConstructionTo") {
          filteredData = filteredData.filter((object: any) =>
            query["YearOfConstructionTo"] > 0
              ? object["yearOfConstructionInfo"] &&
                parseInt(object["yearOfConstructionInfo"]) <=
                  query["YearOfConstructionTo"]
              : true
          );
        }
        if (key === "AreaFrom") {
          filteredData = filteredData.filter((object: any) =>
            query["AreaFrom"] > 0
              ? object["areaInfo"] &&
                parseInt(
                  object["areaInfo"]?.slice(0, -3)?.split(" ").join("")
                ) >= query["AreaFrom"]
              : true
          );
        }
        if (key === "AreaTo") {
          filteredData = filteredData.filter((object: any) =>
            query["AreaTo"] > 0
              ? object["areaInfo"] &&
                parseInt(
                  object["areaInfo"]?.slice(0, -3)?.split(" ").join("")
                ) <= query["AreaTo"]
              : true
          );
        }
        if (key === "areaPriceFrom") {
          filteredData = filteredData.filter((object: any) =>
            query["areaPriceFrom"] > 0
              ? object["areaPriceInfo"] &&
                parseInt(
                  object["areaPriceInfo"].slice(0, -2).split(" ").join("")
                ) >= query["areaPriceFrom"]
              : true
          );
        }
        if (key === "areaPriceTo") {
          filteredData = filteredData.filter((object: any) =>
            query["areaPriceTo"] > 0
              ? object["areaPriceInfo"] &&
                parseInt(
                  object["areaPriceInfo"].slice(0, -2).split(" ").join("")
                ) <= query["areaPriceTo"]
              : true
          );
        }
      }
    }
    //console.log(filteredData);
    return filteredData;
  };

  const fetchDatabase = useCallback(async () => {
    const response = await fetch(`http://localhost:3100/items`);
    const data = await response.json();
    const specificData = getSpecificQuery(data, query);
    setDatabaseState(specificData);
    setIsLoading(false);
  }, [query]);

  //initialize database in to state
  useEffect(() => {
    fetchDatabase();
  }, [query]);

  console.log(querySearchForm, "querySearchForm");

  const fetchDatabaseSearchForm = useCallback(async () => {
    const response = await fetch(`http://localhost:3100/items`);
    const data = await response.json();
    const specificData = getSpecificQuery(data, querySearchForm);
    setDatabaseState(specificData);
    setIsLoading(false);
    console.log(specificData);
    console.log(specificData.length, "searchform odpowiedź");
  }, [querySearchForm]);

  //fetch for searchform result length
  const fetchDatabaseSearchFormResultLength = useCallback(async () => {
    const response = await fetch(`http://localhost:3100/items`);
    const data = await response.json();
    const specificData = getSpecificQuery(data, querySearchForm);
    return specificData.length;
  }, [querySearchForm]);

  useEffect(() => {
    fetchDatabaseSearchFormResultLength().then((result) => {
      setSearchFormLength(result);
    });
  }, [fetchDatabaseSearchFormResultLength]);

  //handleForm SearchForm
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(querySearchForm);
    fetchDatabaseSearchForm();
  };

  //jest bug w paginacji, przy zmianie itemsPerPage pokazuje zakres wiekszy niz ostatina strona
  const pagesVisited = currentPage * itemsPerPage;

  let pages = [];

  for (let i = 1; i <= Math.floor(databaseState.length / itemsPerPage); i++) {
    pages.push(i);
  }

  //Sorting
  const handleSortingDatabaseState = (
    ref: React.RefObject<HTMLInputElement>
  ) => {
    const sortBy = parseInt(ref.current!.value);
    if (sortBy === 1) {
      setDatabaseState([...databaseState]);
    } else if (sortBy === 2) {
      setDatabaseState(
        [...databaseState].sort(
          (firstItem, secondItem) =>
            parseInt(firstItem.priceInfo.split(" ").slice(0, -1).join("")) -
            parseInt(secondItem.priceInfo.split(" ").slice(0, -1).join(""))
        )
      );
    } else if (sortBy === 3) {
      setDatabaseState(
        [...databaseState].sort(
          (firstItem, secondItem) =>
            parseInt(secondItem.priceInfo.split(" ").slice(0, -1).join("")) -
            parseInt(firstItem.priceInfo.split(" ").slice(0, -1).join(""))
        )
      );
    } else if (sortBy === 4) {
      setDatabaseState(
        [...databaseState].sort(
          (firstItem, secondItem) =>
            parseInt(
              firstItem.areaPriceInfo?.replace(",", ".").split("zł").join("")
            ) -
            parseInt(
              secondItem.areaPriceInfo?.replace(",", ".").split("zł").join("")
            )
        )
      );
    } else if (sortBy === 5) {
      setDatabaseState(
        [...databaseState].sort(
          (firstItem, secondItem) =>
            parseInt(
              secondItem.areaPriceInfo?.replace(",", ".").split("zł").join("")
            ) -
            parseInt(
              firstItem.areaPriceInfo?.replace(",", ".").split("zł").join("")
            )
        )
      );
    }
  };

  const handleNumberOfOffers = (ref: React.RefObject<HTMLInputElement>) => {
    const Number = parseInt(ref.current!.value);
    if (isNaN(Number)) {
      setItemsPerPage(() => itemsPerPage);
    } else {
      setItemsPerPage(() => Number);
    }
  };

  const items = [...databaseState]
    .slice(pagesVisited, itemsPerPage + pagesVisited)
    .map((item) => (
      <ListItem key={item.offerID} item={item} isMobile={isMobile} />
    ));

  const SortPrice = [
    { value: 1, label: "Domyślnie" },
    { value: 2, label: "Cena od najniższej" },
    { value: 3, label: "Cena od najwyższej" },
    { value: 4, label: "Najniższej ceny za m²" },
    { value: 5, label: "Najwyższej ceny za m²" },
  ];
  const NumberOfOffers = [
    { value: 3, label: "3" },
    { value: 5, label: "5" },
    { value: 20, label: "20" },
    { value: 100, label: "100" },
  ];

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [currentPage]);

  const SectionOptions = (
    <section className={styles.section__options}>
      <div>
        <Dropdown
          data={SortPrice}
          placeholder={"Sortuj"}
          handleChange={handleSortingDatabaseState}
        ></Dropdown>
      </div>
      <div>
        <Dropdown
          data={NumberOfOffers}
          placeholder={"Ilość ofert na stronie"}
          handleChange={handleNumberOfOffers}
        ></Dropdown>
      </div>
      <div
        style={{
          color: "var(--primary-text-color)",
          textAlign: "center",
          userSelect: "none",
        }}
      >
        Liczba ogłoszeń: <strong>{databaseState.length}</strong>
      </div>
      <div style={{ color: "var(--primary-text-color)" }}>
        Zobacz na mapie
        <TbMap2 />
      </div>
    </section>
  );

  const SectionOptionsMobile = (
    <section
      className={
        isOpened
          ? styles.section__options_mobile_opened
          : styles.section__options_mobile_closed
      }
    >
      <button
        onClick={() => setIsOpened(!isOpened)}
        className={styles.small_button}
        style={{ color: isOpened ? "#daa520" : "#efe7e7" }}
      >
        <h3>Rozwiń</h3>
        <HiChevronDown
          className={
            isOpened
              ? styles.small_button_ArrowClosed
              : styles.small_button_ArrowOpened
          }
        />
        <TbListNumbers />
      </button>
      {isOpened ? (
        <aside>
          <div>
            <Dropdown
              data={SortPrice}
              placeholder={"Sortuj"}
              handleChange={handleSortingDatabaseState}
            ></Dropdown>
          </div>
          <div>
            <Dropdown
              data={NumberOfOffers}
              placeholder={"Ilość ofert na stronie"}
              handleChange={handleNumberOfOffers}
            ></Dropdown>
          </div>
          <div
            style={{
              color: "var(--primary-text-color)",
              textAlign: "center",
              userSelect: "none",
            }}
          >
            Liczba ogłoszeń: <strong>{databaseState.length}</strong>
          </div>
          <div style={{ color: "var(--primary-text-color)" }}>
            Zobacz na mapie
            <TbMap2 />
          </div>
        </aside>
      ) : null}
    </section>
  );

  return (
    <>
      {isMobile ? (
        <div style={{ marginTop: "100px" }}>jestem list mobile</div>
      ) : (
        <SearchForm
          query={querySearchForm}
          setQuery={setQuerySearchForm}
          handleForm={handleForm}
          searchFormLength={searchFormLength}
        />
      )}

      <section className={styles.section__main}>
        {isMobile ? SectionOptionsMobile : SectionOptions}
        {isLoading ? (
          <body style={{ height: "800px", width: "100%" }}>
            <Loading color={"#141212"} svgColor="#554971" top={58} left={47} />
          </body>
        ) : (
          <ul className={styles.list__container}>{items}</ul>
        )}
        <Pagination
        isLoading={isLoading}
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          isMobile={isMobile}
        />
      </section>
    </>
  );
}

export default List;
