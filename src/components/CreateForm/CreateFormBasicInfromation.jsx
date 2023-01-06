import React from "react";
import CreateFormInput from "./CreateFormInput";
import DropdownNumberOfFloors from "./DropdownNumberOfFloors";
import styles from "./CreateFormContactDetails.module.css";
import { useState } from "react";

function CreateFormBasicInfromation({ handleChange }) {
  const basicData = [
    {
      label: "Powierzchnia",
      name: "areaInfo",
      placeholder: "Wpisz Powierzchnię",
      labelText: "Powierzchnia (m²)",
    },
    {
      label: "LiczbaPokoi",
      name: "numbersOfFloorsInfo",
      placeholder: "Wpisz liczbę pokoi",
      labelText: "Liczba Pokoi",
    },
    {
      label: "Cena",
      name: "priceInfo",
      placeholder: "Wpisz Cenę",
      labelText: "Cena",
    },
  ];

  const [numberOfFloor, setNumberOfFloor] = useState({
    floorFrom: "",
    floorTo: "",
  });

  const numberOfFloorsData = Array.from({ length: 11 }, (element, index) => ({
    value: index + 1,
    label: (index + 1).toString(),
  }));

  const handleChangeNumberOfFloors = (ref) => {
    setNumberOfFloor({
      ...numberOfFloor,
      [ref.current.name]: ref.current.value,
    });
  };

  return (
    <article className={styles.article}>
      <h3>Informacje podstawowe</h3>
      <section className={styles.article_section}>
        {basicData.map((item) => (
          <CreateFormInput data={item} handleChange={handleChange} />
        ))}
        <div>
          <label htmlFor="negotiatedPrice">Cena do negocjacji</label>
          <input type="checkbox" id="negotiatedPrice" />
        </div>
        <div>
          <p>
            Twoje ogłoszenie zostanie oznaczone jako “do negocjacji”, dzięki
            temu kupujący będą mogli proponować swoje oferty cenowe.
          </p>
        </div>
        <div
          style={{
            backgroundColor: " #554971",
            width: "320px",
            height: "60px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DropdownNumberOfFloors
            handleChange={handleChangeNumberOfFloors}
            data={numberOfFloorsData}
          />
        </div>
      </section>
    </article>
  );
}

export default CreateFormBasicInfromation;

//naprawić zeby Backspace działał
//onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
