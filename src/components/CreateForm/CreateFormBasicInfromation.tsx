import React from "react";
import CreateFormInput from "./CreateFormInput";
import DropdownNumberOfFloors from "./DropdownNumberOfFloors";
import styles from "./CreateFormContactDetails.module.css";
import stylesInput from "./CreateFormInput.module.css";
import { useState, useEffect } from "react";
import useActive from "../../utils/useActive";
import { BiErrorAlt } from "react-icons/bi";

type CreateFormBasicInfromationTypes={
    handleChange:   (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFloorInfo:(value: string) => void;
  inputValues:string;
  handleKeyDown:(e: React.KeyboardEvent) => void;
  handleMax:(e: React.ChangeEvent<HTMLInputElement>, limit: number) => void;
  type:string;
}

function CreateFormBasicInfromation({
  handleChange,
  handleFloorInfo,
  inputValues,
  handleKeyDown,
  handleMax,
  type,
}:CreateFormBasicInfromationTypes) {

  interface Data {
    label: string;
    name: string;
    placeholder: string;
    labelText: string;
    f: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    limit: number;
  }

  const flatData:Data[] = [
    {
      label: "Powierzchnia",
      name: "areaInfo",
      placeholder: "Wpisz Powierzchnię",
      labelText: "Powierzchnia (m²)",
      f: handleKeyDown,
      limit: 5,
    },
    {
      label: "LiczbaPokoi",
      name: "numberOfRoomsInfo",
      placeholder: "Wpisz liczbę pokoi",
      labelText: "Liczba Pokoi",
      f: handleKeyDown,
      limit: 2,
    },
    {
      label: "Cena",
      name: "priceInfo",
      placeholder: "Wpisz Cenę",
      labelText: "Cena",
      f: handleKeyDown,
      limit: 10,
    },
  ];

  const houseData: Data[] = [
    {
      label: "Powierzchnia",
      name: "areaInfo",
      placeholder: "Wpisz Powierzchnię",
      labelText: "Powierzchnia mieszkalna (m²)",
      f: handleKeyDown,
      limit: 5,
    },
    {
      label: "PowierzchniaUzy",
      name: "usableArea",
      placeholder: "powierzchnia użytkowa",
      labelText: "Powierzchnia użytkowa",
      f: handleKeyDown,
      limit: 5,
    },
    {
      label: "dzialka",
      name: "landAreaInfo",
      placeholder: "powierzchnia działki",
      labelText: "Powierzchnia działki (m²)",
      f: handleKeyDown,
      limit: 6,
    },
    {
      label: "LiczbaPokoi",
      name: "numberOfRoomsInfo",
      placeholder: "Wpisz liczbę pokoi",
      labelText: "Liczba Pokoi",
      f: handleKeyDown,
      limit: 2,
    },
    {
      label: "Cena",
      name: "priceInfo",
      placeholder: "Wpisz Cenę",
      labelText: "Cena",
      f: handleKeyDown,
      limit: 10,
    },
    {
      label: "pietra",
      name: "numbersOfFloorsInfo",
      placeholder: "liczba pięter",
      labelText: "Liczba pięter budynku",
      f: handleKeyDown,
      limit: 2,
    },
  ];

  const plotOfLandData: Data[] = [
    {
      label: "Powierzchnia",
      name: "areaInfo",
      placeholder: "Wpisz Powierzchnię",
      labelText: "Powierzchnia działki (m²)",
      f: handleKeyDown,
      limit: 6,
    },
    {
      label: "Cena",
      name: "priceInfo",
      placeholder: "Wpisz Cenę",
      labelText: "Cena",
      f: handleKeyDown,
      limit: 10,
    },
  ];

  const commercialPropertyData: Data[] = [
    {
      label: "Powierzchnia",
      name: "areaInfo",
      placeholder: "Wpisz Powierzchnię",
      labelText: "Powierzchnia Całkowita (m²)",
      f: handleKeyDown,
      limit: 6,
    },
    {
      label: "dzialka",
      name: "landAreaInfo",
      placeholder: "powierzchnia działki",
      labelText: "Powierzchnia działki (m²)",
      f: handleKeyDown,
      limit: 6,
    },
    {
      label: "LiczbaPokoi",
      name: "numberOfRoomsInfo",
      placeholder: "Wpisz liczbę pomieszczeń",
      labelText: "Liczba Pomieszczeń",
      f: handleKeyDown,
      limit: 2,
    },
    {
      label: "Cena",
      name: "priceInfo",
      placeholder: "Wpisz Cenę",
      labelText: "Cena",
      f: handleKeyDown,
      limit: 10,
    },
  ];

  const garageData: Data[] = [
    {
      label: "Powierzchnia",
      name: "areaInfo",
      placeholder: "Wpisz Powierzchnię",
      labelText: "Powierzchnia Całkowita (m²)",
      f: handleKeyDown,
      limit: 6,
    },
    {
      label: "Cena",
      name: "priceInfo",
      placeholder: "Wpisz Cenę",
      labelText: "Cena",
      f: handleKeyDown,
      limit: 10,
    },
  ];

  const [checked, setChecked] = useActive(false);

  const [numberOfFloor, setNumberOfFloor] = useState({
    floorFrom: "",
    floorTo: "",
  });

  const numberOfFloorsData = Array.from({ length: 11 }, (element, index) => ({
    value: index + 1,
    label: (index + 1).toString(),
  }));

  const handleChangeNumberOfFloors = (
    ref: React.RefObject<HTMLInputElement>
  ) => {
    if (ref.current) {
      setNumberOfFloor({
        ...numberOfFloor,
        [ref.current.name]: ref.current.value,
      });
    }
  };

  const [renderError, setRenderError] = useState(false);

  useEffect(() => {
    let x = parseInt(numberOfFloor.floorFrom);
    let y = parseInt(numberOfFloor.floorTo);
    if (x > y && y === 0) {
      setRenderError(() => false);
    } else if (x > y && y > 0) {
      setRenderError(() => true);
    } else if (x === y) {
      setRenderError(() => false);
    } else {
      setRenderError(() => false);
    }
    if (
      !renderError &&
      numberOfFloor.floorFrom.length > 0 &&
      numberOfFloor.floorTo.length > 0
    ) {
      let result = numberOfFloor.floorFrom + "/" + numberOfFloor.floorTo;
      handleFloorInfo(result);
    }
  }, [numberOfFloor.floorFrom, numberOfFloor.floorTo]);

    type DataType = {
    [key: string]: Data[];
  };

  function typeInputForm(type:string) {
    const data:DataType = {
      "Mieszkanie na sprzedaż": flatData,
      "Dom na sprzedaż": houseData,
      "Nieruchomość Komercyjna na sprzedaż": commercialPropertyData,
      "Działka na sprzedaż": plotOfLandData,
      "Garaż na sprzedaż": garageData,
    };

    const items = data[type];
    if (!items) return null;

    return items.map((item) => (
      <div style={{ width: "300px", padding: "10px" }}>
        <CreateFormInput
          data={item}
          handleChange={handleChange}
          handleMax={handleMax}
          key={item.name}
        />
      </div>
    ));
  }

  return (
    <article className={styles.article}>
      <h3>Informacje podstawowe</h3>
      <section className={styles.article_section}>
        {typeInputForm(type)}
        <div className={stylesInput.form_input_container}>
          <div style={{ width: "300px", padding: "10px" }}>
            <label>Cena za m²</label>
            <input
              type="text"
              disabled
              value={inputValues}
              className={stylesInput.form_input}
            />
          </div>
        </div>
        <div className={styles.negotiation_wrapper}>
          <label htmlFor="negotiation">
            <div
              className={styles.section_negotiation_container}
              style={{ color: checked ? "#daa520" : "#fff" }}
            >
              <p>Cena do negocjacji</p>
              <input
                type="radio"
                value="negotiation"
                id="negotiation"
                name="negotiation"
                onChange={()=>setChecked}
                checked={checked}
              />
              <span className={styles.custom_checkmark}></span>
            </div>
          </label>
        </div>
        <div className={styles.negotiation_description}>
          <p>
            Twoje ogłoszenie zostanie oznaczone jako “do negocjacji”, dzięki
            temu kupujący będą mogli proponować swoje oferty cenowe.
          </p>
        </div>
        {type === "Mieszkanie na sprzedaż" ? (
          <div style={{ padding: "10px 0", position: "relative" }}>
            {renderError ? <BiErrorAlt className={styles.errorSvg} /> : null}
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "10px",
                userSelect: "none",
              }}
            >
              Piętro / liczba pięter
            </p>
            <div
              style={{
                backgroundColor: " #554971",
                width: "300px",
                height: "60px",
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: renderError ? "0px 0px 1px 3px #ED4F32" : undefined,
              }}
            >
              <DropdownNumberOfFloors
                //id="pietro"
                handleChange={handleChangeNumberOfFloors}
                data={numberOfFloorsData}
              />
            </div>
            {renderError ? (
              <div
                style={{
                  width: "300px",
                  backgroundColor: "black",
                  color: "#fff",
                  textAlign: "justify",
                  borderRadius: "5px",
                  padding: "10px",
                  userSelect: "none",
                  margin: "5px 0 0 0",
                }}
              >
                Pole `piętro` nie może być większe od pola `liczba pięter`
              </div>
            ) : null}
          </div>
        ) : null}
      </section>
    </article>
  );
}

export default CreateFormBasicInfromation;
