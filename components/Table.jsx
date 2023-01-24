import React from "react";
import "./Table.module.css";

function Table({ prop }) {
  const filtered = Object.entries(prop).map(([key, value]) => {
    if (value === "") {
      return Object.entries(prop).filter(() => value !== value);
    } else {
      return [key, value];
    }
  });

  const toRender = filtered.map(([key, value]) =>
    key === "areaInfo" ? (
      <>
        <tr>
          <th>Powierzchnia</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "numberOfRoomsInfo" ? (
      <>
        <tr>
          <th>Liczba pokoi</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "usableArea" ? (
      <>
        <tr>
          <th>Powierzchnia użytkowa</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "floorInfo" ? (
      <>
        <tr>
          <th>Piętro</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "numbersOfFloorsInfo" ? (
      <>
        <tr>
          <th>Liczba pięter</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "numberOfBathroomsInfo" ? (
      <>
        <tr>
          <th>Liczba Łazienek</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "typeOfKitchenInfo" ? (
      <>
        <tr>
          <th>Rodzaj kuchni</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "isBathroomSeparateInfo" ? (
      <>
        <tr>
          <th>Osobna łazienka</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "windowWoodworkInfo" ? (
      <>
        <tr>
          <th>Okna</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "marketInfo" ? (
      <>
        <tr>
          <th>Rynek</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "formOfPropertyInfo" ? (
      <>
        <tr>
          <th>Forma własności</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "typeOfBuildingInfoo" ? (
      <>
        <tr>
          <th>Rodzaj budynku</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "yearOfConstructionInfo" ? (
      <>
        <tr>
          <th>Rok budowy</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "conditionOfThePropertyInfo" ? (
      <>
        <tr>
          <th>Stan</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "heatingInfo" ? (
      <>
        <tr>
          <th>Ogrzewanie</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "balconyInfo" ? (
      <>
        <tr>
          <th>Balkon</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "balconyAreaInfo" ? (
      <>
        <tr>
          <th>Powierzchnia balkonu</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : key === "publishedInfo" ? (
      <>
        <tr>
          <th>Opublikowano</th>
          <td>{[value]}</td>
        </tr>
      </>
    ) : null
  );

  return (
    <>
      <h2>Informacje szczegółowe</h2>
      <table>{toRender}</table>
    </>
  );
}

export default Table;
