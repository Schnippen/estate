import React from "react";
import styles from "./ListItem.module.css";
import { HiMail } from "react-icons/hi";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import ListItemMobile from "./ListItemMobile";
import { useAddToFavorites } from "../../utils/useAddToFavorites";

function ListItem({ item, isMobile }: { item: any; isMobile?: boolean }) {
  const AddToFavorites = useAddToFavorites(item.offerID, false);

  let navigate = useNavigate();

  const handleNavigateItem = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    navigate(`/Item/${item.offerID}`, { state: item });
  };
  const photosPicsum = [
    57, 61, 78, 6, 88, 101, 116, 164, 178, 188, 214, 221, 234, 238, 288, 290,
    299, 308, 322, 320, 397, 405, 437,
  ];
  return (
    <>
      {isMobile ? (
        <ListItemMobile item={item} />
      ) : (
        <li key={item.offerID} className={styles.listItem_container}>
          <article className={styles.grid_container}>
            <section
              className={styles.grid_img}
              onClick={(e) => handleNavigateItem(e)}
            >
              <img
                src={`https://picsum.photos/id/${photosPicsum[Math.floor(
                  Math.random() * photosPicsum.length)]
                }/500/500`}
                alt="listing"
                loading="lazy"
              ></img>
            </section>
            <section className={styles.grid_mini}>
              <h2
                className={styles.grid_mini_title}
                onClick={(e) => handleNavigateItem(e)}
              >
                {item.offerTitle
                  .split(" ")
                  .map((n: string) => n.charAt(0).toUpperCase() + n.slice(1))
                  .join(" ")}
              </h2>
              <h3
                className={styles.grid_mini_category}
                onClick={(e) => handleNavigateItem(e)}
              >
                {item.titleKategoria}
              </h3>
              <h3
                className={styles.grid_mini_price}
                onClick={(e) => handleNavigateItem(e)}
              >
                {item.priceInfo}
              </h3>
              <div className={styles.grid_mini_floor}>
                {typeof item.floorInfo === "string" ? (
                  <div>
                    <p>{"Piętro"}</p>
                    <p>{item.floorInfo}</p>
                  </div>
                ) : null}
              </div>
              <div className={styles.grid_mini_numberOfRooms}>
                {typeof item.numberOfRoomsInfo === "string" ? (
                  <p>
                    {item.numberOfRoomsInfo}
                    {item.numberOfRoomsInfo === 1
                      ? " Pokój"
                      : item.numberOfRoomsInfo > 1 && item.numberOfRoomsInfo < 5
                      ? " Pokoje"
                      : " Pokoi"}
                  </p>
                ) : null}
              </div>
              <div className={styles.grid_mini_area}>
                <div>{item.areaInfo}</div>
                {typeof item.areaPriceInfo === "string" ? (
                  <div>{item.areaPriceInfo}&nbsp;m²</div>
                ) : null}
              </div>
              <p className={styles.grid_mini_sendMessage}>Napisz wiadomość</p>
              <div className={styles.grid_mini_sendMessageButton}>
                <Button>
                  <HiMail />
                </Button>
              </div>
              <p className={styles.grid_mini_favorite}>Dodaj do ulubionych</p>
              <div className={styles.grid_mini_favoriteButton}>
                {AddToFavorites}
              </div>
            </section>
          </article>
        </li>
      )}
    </>
  );
}

export default ListItem;
/*        <Link
          to="/Item"
          state={item}
          className={styles.Link}
          onClick={(e) => {
            //e.preventDefault();
            setIsFavorite(!isFavorite);
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          }}
        ></Link>*/
