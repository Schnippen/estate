import React from "react";
import "./Table.module.css";

type TableType = {
  prop: Record<string, string | number>;
};

function Table({ prop }: TableType) {
  const filtered = Object.entries(prop).map(([key, value]) => {
    if (value === "") {
      return Object.entries(prop).filter(() => value !== value);
    } else {
      return [key, value];
    }
  });

  const toRender = filtered.map(([key, value], index) =>
    key === "areaInfo" ? (
      <tr key={index}>
        <th>Powierzchnia</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "numberOfRoomsInfo" ? (
      <tr key={index}>
        <th>Liczba pokoi</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "usableArea" ? (
      <tr key={index}>
        <th>Powierzchnia użytkowa</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "floorInfo" ? (
      <tr key={index}>
        <th>Piętro</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "numbersOfFloorsInfo" ? (
      <tr key={index}>
        <th>Liczba pięter</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "numberOfBathroomsInfo" ? (
      <tr key={index}>
        <th>Liczba Łazienek</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "typeOfKitchenInfo" ? (
      <tr key={index}>
        <th>Rodzaj kuchni</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "isBathroomSeparateInfo" ? (
      <tr key={index}>
        <th>Osobna łazienka</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "windowWoodworkInfo" ? (
      <tr key={index}>
        <th>Okna</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "marketInfo" ? (
      <tr key={index}>
        <th>Rynek</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "formOfPropertyInfo" ? (
      <tr key={index}>
        <th>Forma własności</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "typeOfBuildingInfoo" ? (
      <tr key={index}>
        <th>Rodzaj budynku</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "yearOfConstructionInfo" ? (
      <tr key={index}>
        <th>Rok budowy</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "conditionOfThePropertyInfo" ? (
      <tr key={index}>
        <th>Stan</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "heatingInfo" ? (
      <tr key={index}>
        <th>Ogrzewanie</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "balconyInfo" ? (
      <tr key={index}>
        <th>Balkon</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "balconyAreaInfo" ? (
      <tr key={index}>
        <th>Powierzchnia balkonu</th>
        <td>{[value]}</td>
      </tr>
    ) : key === "publishedInfo" ? (
      <tr key={index}>
        <th>Opublikowano</th>
        <td>{[value]}</td>
      </tr>
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
