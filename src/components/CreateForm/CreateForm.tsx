import React from "react";
import { useState, useEffect } from "react";
import styles from "./CreateForm.module.css";
import { GiHomeGarage } from "react-icons/gi";
import { BiLandscape, BiHome } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaRegBuilding } from "react-icons/fa";
import CreateFormPanel from "./CreateFormPanel";
import CreateFormContactDetails from "./CreateFormContactDetails";
import CreateFormBasicInfromation from "./CreateFormBasicInfromation";
import CreateFormLocation from "./CreateFormLocation";
import CreateFormMedia from "./CreateFormMedia";
import CreateFormDescription from "./CreateFormDescription";
import CreateFormDetailedInformation from "./CreateFormDetailedInformation";
import { PanelData } from "./CreateFormDataPanel";

function CreateForm() {
  interface InputValuesTypes {
    titleKategoria: string;
    offerTitle: string;
    priceInfo: string;
    areaInfo: string;
    areaPriceInfo: string;
    numberOfRoomsInfo: string;
    usableArea: string;
    floorInfo: string;
    descriptionInfo: string;
    buildingMaterialInfo: string;
    numbersOfFloorsInfo: string;
    numberOfBathroomsInfo: string;
    typeOfKitchenInfo: string;
    numbersOfBedroomsInfo: string;
    isBathroomSeparateInfo: string;
    windowWoodworkInfo: string;
    marketInfo: string;
    formOfPropertyInfo: string;
    typeOfBuildingInfo: string;
    plotTypeInfo: string;
    yearOfConstructionInfo: string;
    conditionOfThePropertyInfo: string;
    heatingInfo: string;
    parkingInfo: string;
    balconyInfo: string;
    elevatorInfo: string;
    balconyAreaInfo: string;
    gardenAreaInfo: string;
    landAreaInfo: string;
    plotLengthInfo: string;
    plotWidthInfo: string;
    numberOfOfferInfo: string;
    publishedInfo: string;
    //amenities: [],
    googleMapsInfo: [];
    telephoneNumberInfo: string;
    sellerInfo: string;
    estateAgencyInfo: string;
    sellerInfoEmail: string;
    offerID: number;
  }

  const [inputValues, setInputValues] = useState<InputValuesTypes>({
    titleKategoria: "",
    offerTitle: "",
    priceInfo: "",
    areaInfo: "",
    areaPriceInfo: "",
    numberOfRoomsInfo: "",
    usableArea: "",
    floorInfo: "",
    descriptionInfo: "",
    buildingMaterialInfo: "",
    numbersOfFloorsInfo: "",
    numberOfBathroomsInfo: "",
    typeOfKitchenInfo: "",
    numbersOfBedroomsInfo: "",
    isBathroomSeparateInfo: "",
    windowWoodworkInfo: "",
    marketInfo: "",
    formOfPropertyInfo: "",
    typeOfBuildingInfo: "",
    plotTypeInfo: "",
    yearOfConstructionInfo: "",
    conditionOfThePropertyInfo: "",
    heatingInfo: "",
    parkingInfo: "",
    balconyInfo: "",
    elevatorInfo: "",
    balconyAreaInfo: "",
    gardenAreaInfo: "",
    landAreaInfo: "",
    plotLengthInfo: "",
    plotWidthInfo: "",
    numberOfOfferInfo: "",
    publishedInfo: "",
    //amenities: [],
    googleMapsInfo: [],
    telephoneNumberInfo: "",
    sellerInfo: "",
    estateAgencyInfo: "",
    sellerInfoEmail: "",
    offerID: 0,
  });

  const [category, setTitleCategory] = useState({
    string1: "",
    string2: "",
  });

  const handleCategory = (e: React.MouseEvent<HTMLInputElement>) => {
    setTitleCategory({
      ...category,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
        .value,
    });
  };

  useEffect(() => {
    if (category.string1 && category.string2) {
      setInputValues({
        ...inputValues,
        titleKategoria: category.string1 + " " + category.string2,
      });
    }
  }, [category.string1, category.string2]);

  //areaPriceInfo
  useEffect(() => {
    if (inputValues.priceInfo.length > 0 && inputValues.areaInfo.length > 0) {
      setInputValues({
        ...inputValues,
        areaPriceInfo:
          Math.floor(
            Number(inputValues.priceInfo) / Number(inputValues.areaInfo)
          ) + " zł",
      });
    }
  }, [inputValues.priceInfo, inputValues.areaInfo]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>, limit: number) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value.slice(0, limit),
    });
  };

  //const handleClick = () => {};

  //floorInfo
  const handleFloorInfo = (value: string) => {
    setInputValues({
      ...inputValues,
      numbersOfFloorsInfo: value,
    });
  };
  //handle dropdown inputs
  const handleDropdown = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      setInputValues({
        ...inputValues,
        [ref.current.name]: ref.current.value,
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
    ) {
      return;
    }
    if (e.key < "0" || e.key > "9") {
      e.preventDefault();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Submitting!");
    console.log(inputValues);
    let UUID = Date.now();
    setInputValues({ ...inputValues, offerID: UUID });
    const data = { ...inputValues };
    fetch("http://localhost:3100/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  function isValidTitleKategoria(titleKategoria: string) {
    return [
      "Mieszkanie na sprzedaż",
      "Dom na sprzedaż",
      "Nieruchomość Komercyjna na sprzedaż",
      "Działka na sprzedaż",
      "Garaż na sprzedaż",
    ].includes(titleKategoria);
  }

  const panelList = PanelData.map((data, index) => (
    <CreateFormPanel
      panel={data}
      key={index}
      handleCategory={handleCategory}
      panelSelected={category.string1}
    />
  ));

  console.table(inputValues);

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <section className={styles.section_transaction}>
        <div>
          <label htmlFor="Sprzedaż">
            <div
              className={styles.section_transaction_container}
              style={{
                color: category.string2 === "na sprzedaż" ? "#daa520" : "#fff",
              }}
            >
              <p>Sprzedam</p>
              <input
                type="radio"
                value="na sprzedaż"
                id="Sprzedaż"
                name="string2"
                onClick={handleCategory}
              />
              <span className={styles.custom_checkmark}></span>
            </div>
          </label>
          <label htmlFor="Wynajem">
            <div
              className={styles.section_transaction_container}
              style={{
                color: category.string2 === "na wynajem" ? "#daa520" : "#fff",
              }}
            >
              <p>Wynajmę</p>
              <input
                type="radio"
                value="na wynajem"
                id="Wynajem"
                name="string2"
                onClick={handleCategory}
              />
              <span className={styles.custom_checkmark}></span>
            </div>
          </label>
        </div>
      </section>
      <section className={styles.section_panel}>
        <ul className={styles.panel_container}>{panelList}</ul>
      </section>
      <section className={styles.section_details}>
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormBasicInfromation
            handleChange={handleChange}
            handleFloorInfo={handleFloorInfo}
            handleKeyDown={handleKeyDown}
            handleMax={handleMax}
            inputValues={inputValues.areaPriceInfo}
            type={inputValues.titleKategoria}
          />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormLocation />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormMedia />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormDescription
            handleChange={handleChange}
            titleState={inputValues.offerTitle}
            textState={inputValues.descriptionInfo}
          />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormDetailedInformation
            handleDropdown={handleDropdown}
            //inputValues={inputValues}
            type={inputValues.titleKategoria}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            handleMax={handleMax}
          />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormContactDetails
            inputValues={inputValues}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
            handleDropdown={handleDropdown}
            handleMax={handleMax}
          />
        )}
        <div className={styles.submit_wrapper}>
          <input
            type="submit"
            value="Opublikuj"
            className={styles.submit}
            disabled={
              inputValues.titleKategoria &&
              inputValues.priceInfo &&
              inputValues.areaInfo &&
              inputValues.offerTitle &&
              inputValues.sellerInfo &&
              inputValues.descriptionInfo.length > 100
                ? false
                : true
            }
          ></input>
        </div>
      </section>
    </form>
  );
}

export default CreateForm;
