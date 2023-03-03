import React from "react";
import GoogleMaps from "../GoogleMaps";
import styles from "../Item/ItemInfoDescription.module.css";
import Table from "./../Table";
import useActive from "../useActive";
import { HiChevronDown, HiOutlineX } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";

type ItemInfoDescriptionTypes={
  prop:any;
  isMobile:boolean;
}

function ItemInfoDescription({ prop, isMobile }: ItemInfoDescriptionTypes) {
  const [isOpened, setIsOpened] = useActive(false);
  const [isMapOpened, setIsMapOpened] = useActive(false);

  const Description = (
    <>
      <h3>Opis nieruchomości</h3>
      <div style={{ whiteSpace: "pre-wrap" }}>{prop.descriptionInfo}</div>
      <div className={styles.description_published}>
        {typeof prop.publishedInfo === "string" ? (
          <p>Ogłoszenie zostało dodane {prop.publishedInfo}</p>
        ) : null}
      </div>
    </>
  );

  const DescriptionMobile = (
    <>
      <header className={styles.descriptionMobile} onClick={() => setIsOpened}>
        <h3>Opis nieruchomości</h3>
        <div>
          <HiChevronDown
            className={isOpened ? styles.moreInfoOpened : styles.moreInfoClosed}
          />
        </div>
      </header>
      {isOpened ? (
        <>
          <div style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>
            {prop.descriptionInfo}
          </div>
          <div className={styles.description_published}>
            {typeof prop.publishedInfo === "string" ? (
              <p>Ogłoszenie zostało dodane {prop.publishedInfo}</p>
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );

  const Exit = (
    <div className={styles.mobileMaps_nav_exit}>
      <HiOutlineX />
    </div>
  );

  const MobileGoogleMaps = (
    <>
      {isMapOpened ? (
        <>
          <nav className={styles.mobileMaps_nav}>
            <div
              className={styles.mobileMaps_nav_exit}
              onClick={() => setIsMapOpened}
            >
              <HiOutlineX />
            </div>
            <h4 className={styles.mobileMaps_nav_offerTitle}>
              {prop.offerTitle
                .split(" ")
                .map((n:string) => n.charAt(0).toUpperCase() + n.slice(1))
                .join(" ")}
            </h4>
          </nav>
          <div className={styles.mobileMaps_fullscreen}>
            <GoogleMaps prop={prop} />
          </div>
        </>
      ) : (
        <div className={styles.mobileMaps_svg} onClick={() => setIsMapOpened}>
          <GrMapLocation />
          <h4>Zobacz na mapie</h4>
        </div>
      )}
    </>
  );

  return (
    <div className={styles.description_container}>
      <Table prop={prop} />
      <div className={styles.description_wrapper}>
        {isMobile ? DescriptionMobile : Description}
      </div>
      {isMobile ? MobileGoogleMaps : <GoogleMaps prop={prop} />}
    </div>
  );
}

export default ItemInfoDescription;
