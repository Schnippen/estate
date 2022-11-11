import React from 'react'
import Navbar from '../components/Navbar';
import styles from '../styles/Item.module.css'
import { HiHeart } from "react-icons/hi";
import Button from "../components/Button";
import ItemPhotos from '../components/ItemPhotos';
import ItemInfoDescription from '../components/ItemInfoDescription';
import Database from "../data/rybnik_Nieruchomosci_Morizon_08.11.2022.json";
import ItemSideArticle from '../components/ItemSideArticle';


function Item(props) {
  let intiger = 1
  const prop = Database[intiger]
  
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
              <div className={styles.container_article_main_categories}>
                <ul>
                  <li>zdjęcia</li>
                  <li>mapy</li>
                  <li>
                    <span>dodaj do ulubionych </span>
                    <Button>
                      <HiHeart />
                    </Button>
                  </li>
                </ul>
              </div>
              <ItemPhotos />
            </div>
          </section>
          <section className={styles.section_information}>
            <ItemInfoDescription />
          </section>
        </article>
        <ItemSideArticle />
      </div>
    </>
  );
}

export default Item