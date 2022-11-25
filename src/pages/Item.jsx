import React, { useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Item.module.css";
import { HiHeart } from "react-icons/hi";
import useActive from "../components/useActive";
import Button from "../components/Button";
import ItemPhotos from "../components/ItemPhotos";
import ItemInfoDescription from "../components/ItemInfoDescription";
import Database from "../data/rybnik_Nieruchomosci_Morizon_08.11.2022.json";
import ItemSideArticle from "../components/ItemSideArticle";
import GoogleMaps from "../components/GoogleMaps";

function Item(props) {

  const [Intiger, setIntiger] = useState(0);
  const prop = Database[Intiger];
  
  const [isActive, setIsActive] = useActive(true);

  return (
    <>
      <Navbar />
      <div className={styles.breadcrumbs}>
        <div>wróć</div>
        Bread crumbs?
        <button
          onClick={() => setIntiger((Intiger) => Intiger + 1)}
          style={{ height: "50px", width: "50px", position: "fixed",left:'50px' }}
        >
          +
        </button>
        <button
          onClick={() => setIntiger((Intiger) => Intiger - 1)}
          style={{ height: "50px", width: "50px", position: "fixed" }}
        >
          -
        </button>
      </div>
      <div className={styles.container}>
        <article className={styles.container_article_main}>
          <section className={styles.section_item}>
            <div className={styles.section_item_div}>
              <header>
                <div>
                  <h1>{prop.offerTitle}</h1>
                  <h3>{prop.titleKategoria}</h3>
                </div>
                <div className={styles.container_article_main_categories}>
                  <ul>
                    <li>
                      Cena<em>{prop.priceInfo}</em>
                    </li>
                    <li>
                      Cena za m²<em>{prop.areaPriceInfo}</em>
                    </li>
                    <li>
                      Powierzchnia<em>{prop.areaInfo}</em>
                    </li>
                    <li>
                      Pokoje<em>{prop.numberOfRoomsInfo}</em>
                    </li>
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
                {isActive ? <ItemPhotos /> : <GoogleMaps prop={prop}/>}
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
