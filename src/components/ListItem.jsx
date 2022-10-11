import './ListItem.css'
import { HiHeart } from "react-icons/hi";

function ListItem({item}) {



  return (
    <li className="listing__item" key={item.offerID}>
      <div className="listing__photos">
        <img src="." alt="listing" loading="lazy"></img>
      </div>
      <section className="listing__section">
        <header className='listing__section-header'>
          <div>
            <h2>{item.offerTitle}</h2>
            <h3>{item.titleKategoria}</h3>
          </div>
          <div className='listing__section-price'>
            <p>{item.priceInfo}</p>
            <p>
              {item.areaPriceInfo} m<sup>2</sup>
            </p>
          </div>
        </header>
        <div>
          <ul className='listing__list-info'>
            <li>{item.numberOfRoomsInfo}pokoje</li>
            <li>{item.usableArea}</li>
            <li>{item.floorInfo}</li>
          </ul>
        </div>
        <div>
          <p>opis</p>
        </div>
        <div>
          <ul>
            <li><HiHeart/></li>
            <li>napisz maila</li>
          </ul>
        </div>
      </section>
    </li>
  );
}

export default ListItem