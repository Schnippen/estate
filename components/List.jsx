import ListItem from "./ListItem";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Loading from "./Loading";
import styles from "./List.module.css";
import useActive from "./useActive";
import { TbMap2 } from "react-icons/tb";
import Dropdown from "./Dropdown";

function List({ isMobile }) {
  const [isLoading, setIsLoading] = useActive(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [databaseState, setDatabaseState] = useState([]);

  // Database bedzie łączyć sie z serverem useFetch
  useEffect(() => {
    fetchDatabase();
  }, []);

  const fetchDatabase = async () => {
    const response = await fetch(`http://localhost:3100/items`);
    const data = await response.json();
    setDatabaseState(data);
    setIsLoading(false);
  };

  //jest bug w paginacji, przy zmianie itemsPerPage pokazuje zakres wiekszy niz ostatina strona
  const pagesVisited = currentPage * itemsPerPage;

  let pages = [];

  for (let i = 1; i <= Math.floor(databaseState.length / itemsPerPage); i++) {
    pages.push(i);
  }

  //Sorting
  const handleSortingDatabaseState = (ref) => {
    const sortBy = parseInt(ref.current.value);
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

  const handleNumberOfOffers = (ref) => {
    const Number = parseInt(ref.current.value);
    if (isNaN(Number)) {
      setItemsPerPage(() => itemsPerPage);
    } else {
      setItemsPerPage(() => Number);
    }
  };

  const items = [...databaseState]
    .slice(pagesVisited, itemsPerPage + pagesVisited)
    .map((item) => <ListItem key={item.offerID} item={item} isMobile={isMobile} />);

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
        />
      </section>
    </>
  );
}

export default List;
