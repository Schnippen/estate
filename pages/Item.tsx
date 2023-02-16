import styles from "../styles/Item.module.css";
import { HiHeart } from "react-icons/hi";
import useActive from "../components/useActive";
import Button from "../components/Button";
import ItemPhotos from "../components/Item/ItemPhotos";
import ItemInfoDescription from "../components/Item/ItemInfoDescription";
import ItemSideArticle from "../components/Item/ItemSideArticle";
import GoogleMaps from "../components/GoogleMaps";
import BreadCrumbs from "../components/BreadCrumbs";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

function Item() {
  const location = useLocation();
  const prop = location.state;
  const [isActive, setIsActive] = useActive(true);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 800px)");
    if (query.matches) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, []);

  const AddToFavorites = (
    <div className={styles.addToFavorites}>
      <label htmlFor="addToFavorites">Dodaj do ulubionych </label>
      <Button id={"addToFavorites"}>
        <HiHeart />
      </Button>
    </div>
  );

  return (
    <>
      <BreadCrumbs />
      <div className={styles.container}>
        <article className={styles.container_article_main}>
          <section className={styles.section_item}>
            <div className={styles.section_item_div}>
              <header>
                <div>
                  <h1>
                    {prop.offerTitle
                      .split(" ")
                      .map(
                        (n: string) => n.charAt(0).toUpperCase() + n.slice(1)
                      )
                      .join(" ")}
                  </h1>
                  <h3>{prop.titleKategoria}</h3>
                </div>
                <div className={styles.container_article_main_categories}>
                  <ul className={styles.container_article_main_categories_list}>
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
                        {prop.numberOfRoomsInfo === 1
                          ? " Pokój"
                          : prop.numberOfRoomsInfo > 1 &&
                            prop.numberOfRoomsInfo < 5
                          ? " Pokoje"
                          : " Pokoi"}
                        <em>{prop.numberOfRoomsInfo}</em>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </header>
              {isMobile ? (
                AddToFavorites
              ) : (
                <div className={styles.container_article_multimedia_categories}>
                  <ul>
                    <li
                      className={
                        isActive
                          ? `${styles.multimedia_categories} ${styles.multimedia_categories_active}`
                          : `${styles.multimedia_categories}`
                      }
                      onClick={(e) => setIsActive}
                    >
                      Zdjęcia<span></span>
                    </li>
                    <li
                      className={
                        !isActive
                          ? `${styles.multimedia_categories} ${styles.multimedia_categories_active}`
                          : `${styles.multimedia_categories}`
                      }
                      onClick={(e) => setIsActive}
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
              )}
              <div className={styles.multimedia_container}>
                {isActive ? (
                  <ItemPhotos isMobile={isMobile} />
                ) : (
                  <GoogleMaps prop={prop} />
                )}
              </div>
            </div>
          </section>
          <section className={styles.section_information}>
            <ItemInfoDescription prop={prop} isMobile={isMobile} />
          </section>
        </article>
        <ItemSideArticle prop={prop} />
      </div>
    </>
  );
}

export default Item;
