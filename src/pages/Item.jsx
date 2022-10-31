import React from 'react'
import Navbar from '../components/Navbar';
import '../styles/Item.css'
import { HiHeart } from "react-icons/hi";
import Button from "../components/Button";
import interiorImg from "../assets/interior1.jpg";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import ItemInfoDescription from '../components/ItemInfoDescription';
import Database from "../data/rybnik_Nieruchomosci_Morizon_21.09.2022.json";


function Item(props) {
  let intiger = 1
  const prop = Database[intiger]
  console.dir(prop)

  return (
    <>
      <Navbar />
      <div className="item__breadcrumbs">
        <div>wróć</div>
        Bread crumbs?
      </div>
      <div className="item__container">
        <article className="item__container-article-main">
          <section className="item__section-photos">
            <div className="item__section-photos-div">
              <header>
                <div>
                  <h1>{prop.offerTitle}</h1>
                  <h3>{prop.titleKategoria}</h3>
                </div>
                <div className="item__container-article-main-ul">
                  <ul>
                    <li>
                      cena<em>{prop.priceInfo}</em>
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
              <div className="item__container-article-main-categories">
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
              <div className="item__container-article-main-bigImage">
                <button className="item__container-article-main-bigImage-arrowPrev">
                  <HiArrowLeft />
                </button>
                <img src={interiorImg}></img>
                <button className="item__container-article-main-bigImage-arrowNext">
                  <HiArrowRight />
                </button>
              </div>
              <div className="item__container-article-main-thumbnail">
                image list
              </div>
            </div>
          </section>
          <section className="item__section-information">
          <ItemInfoDescription />
          </section>
        </article>
        <article className="item__container-article-side">
          <section className="item__section-sidebar">
            <div>skontakuj się</div>
            <div>kredyt</div>
          </section>
        </article>
      </div>
    </>
  );
}

export default Item