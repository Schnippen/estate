import React from "react";
import styles from "./ListItemMobile.module.css";
import { useAddToFavorites } from "../../utils/useAddToFavorites";
import { useNavigate } from "react-router-dom";

type ListItemMobileProps = {
  item: any;
};

const ListItemMobile: React.FC<ListItemMobileProps> = ({ item }) => {
  const AddToFavorites = useAddToFavorites(item.offerID, false);
  const photosPicsum = [
    57, 61, 78, 6, 88, 101, 116, 164, 178, 188, 214, 221, 234, 238, 288, 290,
    299, 308, 322, 320, 397, 405, 437,
  ];

  let navigate = useNavigate();

  const handleNavigateItem = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    navigate(`/Item/${item.offerID}`, { state: item });
  };

  return (
    <li key={item.offerID} className={styles.listItem_container}>
      <article className={styles.grid_container}>
        <section className={styles.grid_img}>
          <img
            src={`https://picsum.photos/id/${
              photosPicsum[Math.floor(Math.random() * photosPicsum.length)]
            }/500/500`}
            alt="listing"
            loading="lazy"
          ></img>
        </section>
        <section className={styles.grid_description}>
          <h3 className={styles.grid_description_category}>
            <div>{item.titleKategoria}</div>
          </h3>
          <div className={styles.grid_description_price}>
            <h3>{item.priceInfo}</h3>
            {item.areaPriceInfo}&nbsp;m²
          </div>
          <h2
            className={styles.grid_description_title}
            onClick={(e) => handleNavigateItem(e)}
          >
            <div>
              {item.offerTitle
                .split(" ")
                .map((n: string) => n.charAt(0).toUpperCase() + n.slice(1))
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
                    {parseInt(item.numberOfRoomsInfo) === 1
                      ? " Pokój"
                      : parseInt(item.numberOfRoomsInfo) > 1 &&
                        parseInt(item.numberOfRoomsInfo) < 5
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
            {AddToFavorites}
          </div>
        </section>
      </article>
    </li>
  );
};

export default ListItemMobile;
<span>•</span>;
