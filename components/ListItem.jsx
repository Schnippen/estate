import styles from "./ListItem.module.css";
import { HiHeart, HiMail } from "react-icons/hi";
import Button from "./Button";
import { Link } from "react-router-dom";
import ListItemMobile from "./ListItemMobile";

function ListItem({ item, isMobile }) {
  return (
    <>
      {isMobile ? (
        <ListItemMobile item={item} />
      ) : (
        <Link
          to="/Item"
          state={item}
          className={styles.Link}
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <li key={item.offerID} className={styles.listItem_container}>
            <article className={styles.grid_container}>
              <section className={styles.grid_img}>
                <img
                  src={`https://picsum.photos/500/500?random=${Math.floor(
                    Math.random() * 100
                  )}`}
                  alt="listing"
                  loading="lazy"
                ></img>
              </section>
              <section className={styles.grid_mini}>
                <h2 className={styles.grid_mini_title}>
                  {item.offerTitle
                    .split(" ")
                    .map((n) => n.charAt(0).toUpperCase() + n.slice(1))
                    .join(" ")}
                </h2>
                <h3 className={styles.grid_mini_category}>
                  {item.titleKategoria}
                </h3>
                <h3 className={styles.grid_mini_price}>{item.priceInfo}</h3>
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
                        : item.numberOfRoomsInfo > 1 &&
                          item.numberOfRoomsInfo < 5
                        ? " Pokoje"
                        : " Pokoi"}
                    </p>
                  ) : null}
                </div>
                <div className={styles.grid_mini_area}>
                  <div>{item.areaInfo}</div>
                  <div>{item.areaPriceInfo}&nbsp;m²</div>
                </div>
                <p className={styles.grid_mini_sendMessage}>Napisz wiadomość</p>
                <div className={styles.grid_mini_sendMessageButton}>
                  <Button>
                    <HiMail />
                  </Button>
                </div>
                <p className={styles.grid_mini_favorite}>Dodaj do ulubionych</p>
                <div className={styles.grid_mini_favoriteButton}>
                  <Button>
                    <HiHeart />
                  </Button>
                </div>
              </section>
            </article>
          </li>
        </Link>
      )}
    </>
  );
}

export default ListItem;
