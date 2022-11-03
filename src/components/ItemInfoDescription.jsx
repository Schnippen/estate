import React from "react";
import styles from './ItemInfoDescription.module.css';
import Database from "../data/rybnik_Nieruchomosci_Morizon_21.09.2022.json";

function ItemInfoDescription({...props}) {
  
  const propa = Database[1];

  function TableRow({ name }) {
    return <th>{name}</th>;
  }

  function TableData({ prop }) {
    return prop !== "" ? <td>{prop}</td> : null;
  }

  function TableBig({ prop }) {
    return <table></table>;
  }

  return (
    <div className={styles.div}>
      <h2>Informacje szczegółowe</h2>
      <table>
        <tr>
          <th>powierzchnia</th>
          <td>{propa.areaInfo}</td>
        </tr>
        <tr>
          <TableRow name="Ilość okien" />
          <TableData prop={propa.windowWoodworkInfo} />
        </tr>
      </table>
      <h3>Opis nieruchomości</h3>
      <div></div>
      <div>
        <p>{propa.descriptionInfo}</p>
      </div>
      <div className={styles.div_maps}>
        <iframe
          className={styles.maps}
          src={`https://maps.google.com/maps?q=${parseFloat(
            propa.googleMapsInfo[0].split("").slice(0, -2).join("")
          )},${parseFloat(
            propa.googleMapsInfo[1].split("").slice(0, -2).join("")
          )}&hl=es;&output=embed`}
        ></iframe>
      </div>
    </div>
  );
}

export default ItemInfoDescription;

let shit = {
  titleKategoria: "Mieszkanie na sprzedaż",
  currentOfferURL:
    "https://www.morizon.pl/oferta/sprzedaz-mieszkanie-rybnik-sosnowa-39m2-mzn2040991273",
  offerID: 1663790324057,
  offerTitle: "Rybnik, Sosnowa 20E",
  priceInfo: "253 936 zł",
  areaPriceInfo: "6449,99 zł",
  areaInfo: "39,37 m²",
  numberOfRoomsInfo: "2",
  usableArea: "39,37 m²",
  floorInfo: "parter / 3",
  numbersOfFloorsInfo: "3",
  numberOfBathroomsInfo: "1",
  typeOfKitchenInfo: "aneks",
  isBathroomSeparateInfo: "",
  windowWoodworkInfo: "",
  marketInfo: "pierwotny",
  formOfPropertyInfo: "własność",
  typeOfBuildingInfo: "",
  yearOfConstructionInfo: "",
  conditionOfThePropertyInfo: "",
  heatingInfo: "Ogrzewanie (gazowe)",
  balconyInfo: "Nie",
  balconyAreaInfo: "",
  numberOfOfferInfo: "morizon-gratka-26039909",
  publishedInfo: "3 maja 2022",
  googleMapsInfo: ["50.105 N", "18.5796 E"],
};

/*Informajce szczegółowe
Budynek
Ogrzewanie
Udogodnienia
Opis
Mapa*/
