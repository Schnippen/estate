import Navbar from "../components/Navbar";
import styles from "../styles/Item.module.css";
import { HiHeart } from "react-icons/hi";
import useActive from "../components/useActive";
import Button from "../components/Button";
import ItemPhotos from "../components/ItemPhotos";
import ItemInfoDescription from "../components/ItemInfoDescription";
import ItemSideArticle from "../components/ItemSideArticle";
import GoogleMaps from "../components/GoogleMaps";
import { useLocation } from "react-router-dom";

//import Database from "../data/katowice_Nieruchomosci_Morizon_08.11.2022.json";
//import React, { useState } from "react";

function Item() {
  //console.log(item)
  //console.log(props.location.state)
  //console.log(location.state);
  //const [Intiger, setIntiger] = useState(0);
  //Database[Intiger];

  /*        <button
          onClick={() => setIntiger((Intiger) => Intiger + 1)}
          style={{
            height: "50px",
            width: "50px",
            position: "fixed",
            left: "50px",
          }}
        >
          +
        </button>
        <button
          onClick={() => setIntiger((Intiger) => Intiger - 1)}
          style={{ height: "50px", width: "50px", position: "fixed" }}
        >
          -
        </button>*/

  const location = useLocation();
  const prop = location.state;
  const [isActive, setIsActive] = useActive(true);

  return (
    <>
      <Navbar />
      <div className={styles.breadcrumbs}>
        <div>wróć</div>
        Bread crumbs?
      </div>
      <div className={styles.container}>
        <article className={styles.container_article_main}>
          <section className={styles.section_item}>
            <div className={styles.section_item_div}>
              <header>
                <div>
                  <h1>
                    {prop.offerTitle
                      .split(" ")
                      .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
                      .join(" ")}
                  </h1>
                  <h3>{prop.titleKategoria}</h3>
                </div>
                <div className={styles.container_article_main_categories}>
                  <ul>
                    {prop.priceInfo === "Zapytaj o cenę" ? (
                      <li>
                        <a href="*">{prop.priceInfo}</a>
                      </li>
                    ) : (
                      <li>
                        Cena<em>{prop.priceInfo}</em>
                      </li>
                    )}
                    <li>
                      Cena za m²<em>{prop.areaPriceInfo}</em>
                    </li>
                    {typeof prop.numberOfRoomsInfo === "string" ? (
                      <li>
                        Powierzchnia<em>{prop.areaInfo}</em>
                      </li>
                    ) : null}
                    {typeof prop.numberOfRoomsInfo === "string" ? (
                      <li>
                        Pokoje<em>{prop.numberOfRoomsInfo}</em>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </header>
              <div className={styles.container_article_multimedia_categories}>
                <ul>
                  <li
                    className={
                      isActive
                        ? `${styles.multimedia_categories} ${styles.multimedia_categories_active}`
                        : `${styles.multimedia_categories}`
                    }
                    onClick={setIsActive}
                  >
                    Zdjęcia<span></span>
                  </li>
                  <li
                    className={
                      !isActive
                        ? `${styles.multimedia_categories} ${styles.multimedia_categories_active}`
                        : `${styles.multimedia_categories}`
                    }
                    onClick={setIsActive}
                  >
                    Mapa<span></span>
                  </li>
                  <div>
                    <span>dodaj do ulubionych </span>
                    <Button>
                      <HiHeart />
                    </Button>
                  </div>
                </ul>
              </div>
              <div className={styles.multimedia_container}>
                {isActive ? <ItemPhotos /> : <GoogleMaps prop={prop} />}
              </div>
            </div>
          </section>
          <section className={styles.section_information}>
            <ItemInfoDescription prop={prop} />
          </section>
        </article>
        <ItemSideArticle prop={prop} />
      </div>
    </>
  );
}

export default Item;
