import styles from './ListItem.module.css'
import { HiHeart } from "react-icons/hi";
import Button from './Button';
import { Link } from "react-router-dom";
//import Item from '../pages/Item';

function ListItem({item}) {

  //item jest poszczególnym ogłoszeniem [i]
  //<Link to="/"></Link>;
  //(`/Item/:${item.offerID}`)

  return (
    <li key={item.offerID}>
      <Link
        to="/Item"
        state={item}
        className={styles.Link}
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <div className={styles.listing__item}>
          <div className={styles.listing__photos}>
            <img
              src={`https://picsum.photos/500/500?random=${Math.floor(
                Math.random() * 100
              )}`}
              alt="listing"
              loading="lazy"
            ></img>
          </div>
          <section className={styles.listing__section}>
            <header className={styles.listing__section_header}>
              <div>
                <h2>
                  {item.offerTitle
                    .split(" ")
                    .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
                    .join(" ")}
                </h2>
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
          </section>
        </div>
      </Link>
      <section>
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