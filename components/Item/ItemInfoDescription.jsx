import React from "react";
import GoogleMaps from "../GoogleMaps";
import styles from "../Item/ItemInfoDescription.module.css";
import Table from "./../Table";
import useActive from "../useActive";
import { HiChevronDown } from "react-icons/hi";
import { GrMapLocation } from "react-icons/gr";

function ItemInfoDescription({ prop, isMobile }) {
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
      <header className={styles.descriptionMobile} onClick={setIsOpened}>
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

  const MobileGoogleMaps = (
    <div className={styles.mobileMaps_svg} onClick={setIsMapOpened}>
      <GrMapLocation />
      <h4>Zobacz na mapie</h4>
    </div>
  );
  console.log(isMapOpened);
  //<GoogleMaps prop={prop} />
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
