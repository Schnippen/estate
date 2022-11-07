import React from 'react'
import Navbar from '../components/Navbar';
import styles from '../styles/Item.module.css'
import { HiHeart } from "react-icons/hi";
import Button from "../components/Button";
import interiorImg1 from "../assets/interior1.jpg";
import interiorImg2 from "../assets/interior2.jpg";
import interiorImg3 from "../assets/interior3.jpg";
import interiorImg4 from "../assets/interior4.jpg";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ItemInfoDescription from '../components/ItemInfoDescription';
import Database from "../data/rybnik_Nieruchomosci_Morizon_21.09.2022.json";
import ItemSideArticle from '../components/ItemSideArticle';


function Item(props) {
  let intiger = 1
  const prop = Database[intiger]
  console.dir(prop)

  return (
    <>
      <Navbar />
      <div className={styles.breadcrumbs}>
        <div>wróć</div>
        Bread crumbs?
      </div>
      <div className={styles.container}>
        <article className={styles.container_article_main}>
          <section className={styles.section_photos}>
            <div className={styles.section_photos_div}>
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
              <div className={styles.container_article_main_bigImage}>
                <button
                  className={styles.container_article_main_bigImage_arrowPrev}
                >
                  <HiArrowLeft />
                </button>
                <img src={interiorImg1} alt="Big Thumbnail"></img>
                <button
                  className={styles.container_article_main_bigImage_arrowNext}
                >
                  <HiArrowRight />
                </button>
              </div>
              <div className={styles.container_article_main_thumbnail}>
                <button
                  className={styles.container_article_main_bigImage_arrowPrev}
                >
                  <HiArrowLeft />
                </button>
                <ul className={styles.thumbnails}>
                  <li>
                    <img src={interiorImg2} alt="thumbnail"></img>
                  </li>
                  <li>
                    <img src={interiorImg3} alt="thumbnail"></img>
                  </li>
                  <li>
                    <img src={interiorImg4} alt="thumbnail"></img>
                  </li>
                  <li>
                    <img src={interiorImg1} alt="thumbnail"></img>
                  </li>
                  <li>
                    <img src={interiorImg3} alt="thumbnail"></img>
                  </li>
                  <li>
                    <img src={interiorImg4} alt="thumbnail"></img>
                  </li>
                </ul>
                <button
                  className={styles.container_article_main_bigImage_arrowNext}
                >
                  <HiArrowRight />
                </button>
              </div>
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