import React from "react";
import ListItem from "./ListItem";
import { useState, useEffect, useMemo } from "react";
import Pagination from "./Pagination";
import Loading from "./Loading";
import styles from "./List.module.css";
import useActive from "./useActive";
import { TbMap2 } from "react-icons/tb";
import Dropdown from "./Dropdown";
import { useLocation } from "react-router-dom";
import SearchForm from "../components/SearchForm";
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
              ? parseFloat(
                  object["priceInfo"].slice(0, -2).split(" ").join("")
                ) >= query["PriceFrom"]
              : true
          );
        }
        if (key === "PriceTo") {
          filteredData = filteredData.filter((object: any) =>
            query["PriceTo"] > 0
              ? parseFloat(
                  object["priceInfo"].slice(0, -2).split(" ").join("")
                ) <= query["PriceTo"]
              : true
          );
        }
      }
    }
    console.log(filteredData);
    return filteredData;
  };

  const fetchDatabase = useMemo(
    () => async () => {
      const response = await fetch(`http://localhost:3100/items`);
      const data = await response.json();
      const specificData = getSpecificQuery(data, query);
      setDatabaseState(specificData);
      setIsLoading(false);
      console.log(specificData);
    },
    [databaseState, query]
  );

  //initialize database in to state
  useEffect(() => {
    fetchDatabase();
  }, [query]);

  console.log(querySearchForm, "querySearchForm");

  const fetchDatabaseSearchForm = useMemo(
    () => async () => {
      const response = await fetch(`http://localhost:3100/items`);
      const data = await response.json();
      const specificData = getSpecificQuery(data, querySearchForm);
      setDatabaseState(specificData);
      setIsLoading(false);
      console.log(specificData);
      console.log(specificData.length, "searchform odpowiedź");
    },
    [databaseState, querySearchForm]
  );

  //fetch for searchform result length
  const fetchDatabaseSearchFormResultLength = useMemo(
    () => async () => {
      const response = await fetch(`http://localhost:3100/items`);
      const data = await response.json();
      const specificData = getSpecificQuery(data, querySearchForm);
      return specificData.length;
    },
    [databaseState, querySearchForm]
  );

  useEffect(() => {
    fetchDatabaseSearchFormResultLength().then((result) => {
      setSearchFormLength(result);
    });
  }, [querySearchForm]);

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
            parseFloat(firstItem.priceInfo.split(" ").slice(0, -1).join("")) -
            parseFloat(secondItem.priceInfo.split(" ").slice(0, -1).join(""))
        )
      );
    } else if (sortBy === 3) {
      setDatabaseState(
        [...databaseState].sort(
          (firstItem, secondItem) =>
            parseFloat(secondItem.priceInfo.split(" ").slice(0, -1).join("")) -
            parseFloat(firstItem.priceInfo.split(" ").slice(0, -1).join(""))
        )
      );
    } else if (sortBy === 4) {
      setDatabaseState(
        [...databaseState].sort(
          (firstItem, secondItem) =>
            parseFloat(
              firstItem.areaPriceInfo.replace(",", ".").split("zł").join("")
            ) -
            parseFloat(
              secondItem.areaPriceInfo.replace(",", ".").split("zł").join("")
            )
        )
      );
    } else if (sortBy === 5) {
      setDatabaseState(
        [...databaseState].sort(
          (firstItem, secondItem) =>
            parseFloat(
              secondItem.areaPriceInfo.replace(",", ".").split("zł").join("")
            ) -
            parseFloat(
              firstItem.areaPriceInfo.replace(",", ".").split("zł").join("")
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

  return (
    <>
      <SearchForm
        query={querySearchForm}
        setQuery={setQuerySearchForm}
        handleForm={handleForm}
        searchFormLength={searchFormLength}
      />
      <section className={styles.section__main}>
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
              color: "#fff",
              textAlign: "center",
            }}
          >
            Liczba ogłoszeń: <strong>{databaseState.length}</strong>
          </div>
          <div>
            zobacz na mapie
            <TbMap2 />
          </div>
        </section>
        {isLoading ? (
          <body style={{ height: "800px" }}>
            <Loading color={"#141212"} svgColor="#554971" top={58} left={47} />
          </body>
        ) : (
          <ul className={styles.list__container}>{items}</ul>
        )}
        <Pagination
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
