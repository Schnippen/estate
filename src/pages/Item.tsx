import React from "react";
import styles from "../styles/Item.module.css";
import useActive from "../utils/useActive";
import ItemPhotos from "../components/Item/ItemPhotos";
import ItemInfoDescription from "../components/Item/ItemInfoDescription";
import ItemSideArticle from "../components/Item/ItemSideArticle";
import GoogleMaps from "../components/GoogleMaps";
import BreadCrumbs from "../components/BreadCrumbs";
import { useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import MobileContext from "../context/MobileContext";
import { useAddToFavorites } from "../utils/useAddToFavorites";

function Item() {
  const location = useLocation();
  const prop = location.state;
  const [isActive, setIsActive] = useActive(true);
  const isMobile = useContext(MobileContext);

  const AddToFavorites = useAddToFavorites(prop.offerID, true);
  const AskForPrice = useRef<HTMLTextAreaElement | null>(null);

  const handleAskForPrice = () => {
    console.log("gwo");
    if (AskForPrice.current) {
      AskForPrice.current.focus();
    }
  };

  const { id } = useParams();
  useEffect(() => {
    console.log(`/Item/${id}`);
  }, []);

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
                      <li
                        className={styles.ask_for_price}
                        onClick={() => handleAskForPrice()}
                      >
                        <p>{prop.priceInfo}</p>
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
                      onClick={() => setIsActive(!isActive)}
                    >
                      Zdjęcia<span></span>
                    </li>
                    <li
                      className={
                        !isActive
                          ? `${styles.multimedia_categories} ${styles.multimedia_categories_active}`
                          : `${styles.multimedia_categories}`
                      }
                      onClick={() => setIsActive(!isActive)}
                    >
                      Mapa<span></span>
                    </li>
                    <div>
                      <span>{AddToFavorites}</span>
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
        <ItemSideArticle prop={prop} AskForPrice={AskForPrice} />
      </div>
    </>
  );
}

export default Item;
