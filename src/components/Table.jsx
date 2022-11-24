import React from "react";
import Database from "../data/rybnik_Nieruchomosci_Morizon_08.11.2022.json";

function Table() {
  let intiger = 0;
  const data = Database[intiger];
  //console.log(data.keys);
  //console.table(data);

  const lista = Object.entries(data).map((item, index) => (
    <div key={index}>
      <h3>{item}</h3>
    </div>
  ));

  const pofiltr = Object.entries(data);
  console.table(
    pofiltr.map((arr) => arr));
  //      <div>{Object.keys(data)}</div>
  //  console.log(pofiltr.map(n=>n.length>1?n:"hówno"))

  return (
    <>
      <div>{lista}</div>
    </>
  );
}

export default Table;

/*{
    "offerID": 1667961260561,
    "offerTitle": "Rybnik, Sosnowa 20F",
    "priceInfo": "372 716 zł",
    "areaPriceInfo": "6236,88 zł",
    "areaInfo": "59,76 m²",
    "numberOfRoomsInfo": "3",
    "usableArea": "59,76 m²",
    "floorInfo": "3 / 3",
    "numbersOfFloorsInfo": "3",
    "numberOfBathroomsInfo": "1",
    "typeOfKitchenInfo": "aneks",
    "isBathroomSeparateInfo": "",
    "windowWoodworkInfo": "",
    "marketInfo": "pierwotny",
    "formOfPropertyInfo": "własność",
    "typeOfBuildingInfo": "",
    "yearOfConstructionInfo": "2022",
    "conditionOfThePropertyInfo": "",
    "heatingInfo": "Ogrzewanie (gazowe)",
    "balconyInfo": "Tak",
    "balconyAreaInfo": "6,8 m²",
}*/