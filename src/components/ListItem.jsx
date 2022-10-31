import styles from './ListItem.module.css'
import { HiHeart } from "react-icons/hi";
import Button from './Button';
import { Link, Route, Routes } from "react-router-dom";
import Item from '../pages/Item';

function ListItem({item}) {



  return (
    <li className={styles.listing__item} key={item.offerID}>
      <div className={styles.listing__photos}>
        <img src="." alt="listing" loading="lazy"></img>
      </div>
      <section className={styles.listing__section}>
        <header className={styles.listing__section_header}>
          <div>
              <h2>{item.offerTitle}</h2>
            <h3>{item.titleKategoria}</h3>
          </div>
          <div className={styles.listing__section_price}>
            <p>{item.priceInfo}</p>
            <p>
              {item.areaPriceInfo} m<sup>2</sup>
            </p>
          </div>
        </header>
        <div>
          <ul className={styles.listing__list_info}>
            <li>{item.numberOfRoomsInfo}pokoje</li>
            <li>{item.areaInfo}</li>
            <li>{item.floorInfo}</li>
          </ul>
        </div>
        <div className={styles.listing__list_contact}>
          <div>napisz maila</div>
          <Button>
            <HiHeart />
          </Button>
        </div>
      </section>
    </li>
  );
}

export default ListItem