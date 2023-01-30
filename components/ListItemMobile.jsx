import React from "react";
import styles from "./ListItemMobile.module.css";

function ListItemMobile({ item }) {
  return (
    <li key={item.offerID} className={styles.listItem_container}>
      <article className={styles.grid_container}>
        <section className={styles.grid_img}>
          

          
        </section>
        <section className={styles.grid_description}>
          <h3 className={styles.grid_description_category}>
            {item.titleKategoria}
          </h3>
          <div className={styles.grid_description_areaPrice}>
            {item.areaPriceInfo}&nbsp;m²
          </div>
          <h2 className={styles.grid_description_title}>
            {item.offerTitle
              .split(" ")
              .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
              .join(" ")}
          </h2>
          <h3 className={styles.grid_description_price}>{item.priceInfo}</h3>
        </section>
      </article>
    </li>
  );
}

export default ListItemMobile;
