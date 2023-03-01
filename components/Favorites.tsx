import React from "react";
import ListItem from "./ListItem";
import { useState, useEffect, useContext } from "react";
import useActive from "./useActive";
import MobileContext from "../context/MobileContext";
import Loading from "./Loading";
import styles from "./Favorites.module.css";

type Item = {
  [key: string]: string;
};

function Favorites() {
  const [isLoading, setIsLoading] = useActive(true);
  const [databaseState, setDatabaseState] = useState<Item[]>([]);

  const isMobile = useContext(MobileContext);

  const favoritesStorage = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  ) as Array<string | number>;

  //Filters database for favorites
  const getFavorite = (data: any) => {
    return data.filter((object: any) =>
      favoritesStorage.includes(object["offerID"])
    );
  };

  // Database fetching
  const fetchDatabase: () => Promise<void> = async () => {
    const response = await fetch(`http://localhost:3100/items`);
    const data = await response.json();
    const filteredData = await getFavorite(data);
    setDatabaseState(filteredData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDatabase();
  }, []);

  const ItemsList = databaseState.map((item, index) => (
    <ListItem key={index} item={item} isMobile={isMobile} />
  ));

  const noItems =
    ItemsList.length === 0 ? (
      <h3 className={styles.noItems}>Brak ulubionych ogłoszeń</h3>
    ) : null;
  /*console.log(
    console.time("getFavorite"),
    getFavorite(databaseState),
    console.timeEnd("getFavorite")
  );*/

  return (
    <body className={styles.body}>
      <header className={styles.header}>
        <h1
          style={{
            padding: "20px 0",
          }}
        >
          Ulubione ogłoszenia
        </h1>
      </header>
      {isLoading ? (
        <div
          style={{
            height: "80vh",
          }}
        >
          <Loading color={"#141212"} svgColor="#554971" top={60} left={35} />
        </div>
      ) : (
        noItems
      )}
      <section className={styles.section_items}>{ItemsList}</section>
    </body>
  );
}

export default Favorites;
