import React from "react";
import styles from "./ListItemMobile.module.css";
import { HiHeart } from "react-icons/hi";
import Button from "./Button";

function ListItemMobile({ item }) {
  return (
    <li key={item.offerID} className={styles.listItem_container}>
      <article className={styles.grid_container}>
        <section className={styles.grid_img}></section>
        <section className={styles.grid_description}>
          <h3 className={styles.grid_description_category}>
            <div>{item.titleKategoria}</div>
          </h3>
          <div className={styles.grid_description_price}>
            <h3>{item.priceInfo}</h3>
            {item.areaPriceInfo}&nbsp;m²
          </div>
          <h2 className={styles.grid_description_title}>
            <div>
              {item.offerTitle
                .split(" ")
                .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
                .join(" ")}
            </div>
          </h2>
          <div className={styles.grid_description_details}>
            <div className={styles.grid_description_details_child}>
              {typeof item.floorInfo === "string" ? (
                <>
                  <p>{"Piętro"}</p>
                  <p>{item.floorInfo}</p>
                </>
              ) : null}
            </div>
            <div className={styles.grid_description_details_child}>
              {typeof item.numberOfRoomsInfo === "string" ? (
                <>
                  <p>
                    {item.numberOfRoomsInfo === 1
                      ? " Pokój"
                      : item.numberOfRoomsInfo > 1 && item.numberOfRoomsInfo < 5
                      ? " Pokoje"
                      : " Pokoi"}
                  </p>
                  <p>{item.numberOfRoomsInfo}</p>
                </>
              ) : null}
            </div>
            <div className={styles.grid_description_details_child}>
              <p>{item.areaInfo}</p>
            </div>
          </div>
          <div className={styles.grid_description_favoriteButton}>
            <Button>
              <HiHeart />
            </Button>
          </div>
        </section>
      </article>
    </li>
  );
}

export default ListItemMobile;
<span>•</span>;
