import './ListItem.css'
import { HiHeart } from "react-icons/hi";
import Button from './Button';
import { Link, Route, Routes } from "react-router-dom";
import Item from '../pages/Item';

function ListItem({item}) {



  return (
    <li className="listing__item" key={item.offerID}>
      <div className="listing__photos">
        <img src="." alt="listing" loading="lazy"></img>
      </div>
      <section className="listing__section">
        <header className="listing__section-header">
          <div>
              <h2>{item.offerTitle}</h2>
            <h3>{item.titleKategoria}</h3>
          </div>
          <div className="listing__section-price">
            <p>{item.priceInfo}</p>
            <p>
              {item.areaPriceInfo} m<sup>2</sup>
            </p>
          </div>
        </header>
        <div>
          <ul className="listing__list-info">
            <li>{item.numberOfRoomsInfo}pokoje</li>
            <li>{item.usableArea}</li>
            <li>{item.floorInfo}</li>
          </ul>
        </div>
        <div className="listing__list-contact">
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