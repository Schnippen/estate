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
import CreateFormDescription from "./CreateFormDescription";
import CreateFormDetailedInformation from "./CreateFormDetailedInformation";

function CreateForm() {
  const [inputValues, setInputValues] = useState({
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
    offerID: "",
  });

  const panelData = [
    {
      label: "Mieszkanie",
      text: "Mieszkanie",
      name: "string1",
      value: "Mieszkanie",
      svg: <FaRegBuilding />,
    },
    {
      label: "Dom",
      text: "Dom",
      name: "string1",
      value: "Dom",
      svg: <BiHome />,
    },
    {
      label: "Działka",
      text: "Działka",
      name: "string1",
      value: "Działka",
      svg: <BiLandscape />,
    },
    {
      label: "Nieruchomość Komercyjna",
      text: "Nieruchomość Komercyjna",
      name: "string1",
      value: "Nieruchomość Komercyjna",
      svg: <SiHomeassistantcommunitystore />,
    },
    {
      label: "Garaż",
      text: "Garaż",
      name: "string1",
      value: "Garaż",
      svg: <GiHomeGarage />,
    },
  ];

  const [category, setTitleCategory] = useState({
    string1: "",
    string2: "",
  });

  const handleCategory = (e) => {
    setTitleCategory({ ...category, [e.target.name]: e.target.value });
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

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  //const handleClick = () => {};

  //floorInfo
  const handleFloorInfo = (value) => {
    setInputValues({ ...inputValues, [inputValues.floorInfo]: value });
  };
  //handle dropdown inputs
  const handleDropdown = (ref) => {
    setInputValues({
      ...inputValues,
      [ref.current.name]: ref.current.value,
    });
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "Tab"
    ) {
      return;
    }
    if (e.key < "0" || e.key > "9") {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitting!");
    //console.log(inputValues);
    //setInputValues({ name: "", telephone: "", email: "", textmessage: "" });
  };

  function isValidTitleKategoria(titleKategoria) {
    return (
      titleKategoria === "Mieszkanie na sprzedaż" ||
      titleKategoria === "Dom na sprzedaż" ||
      titleKategoria === "Nieruchomość Komercyjna na sprzedaż" ||
      titleKategoria === "Działka na sprzedaż" ||
      titleKategoria === "Garaż na sprzedaż"
    );
  }

  const panelList = panelData.map((item, index) => (
    <CreateFormPanel
      panel={item}
      key={index}
      handleCategory={handleCategory}
      panelSelected={category.string1}
    />
  ));

  console.table(inputValues);

  return (
    <main className={styles.main}>
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
        <div>
          {inputValues.titleKategoria === "Mieszkanie na sprzedaż" ? (
            <p>Mieszkanie na sprzedaż</p>
          ) : inputValues.titleKategoria === "Dom na sprzedaż" ? (
            <p>Dom na sprzedaż</p>
          ) : inputValues.titleKategoria ===
            "Nieruchomość Komercyjna na sprzedaż" ? (
            <p>Nieruchomość Komercyjna na sprzedaż</p>
          ) : inputValues.titleKategoria === "Działka na sprzedaż" ? (
            <p>Działka na sprzedaż</p>
          ) : inputValues.titleKategoria === "Garaż na sprzedaż" ? (
            <p>Garaż na sprzedaż</p>
          ) : null}
        </div>
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormBasicInfromation
            handleChange={handleChange}
            handleFloorInfo={handleFloorInfo}
            handleKeyDown={handleKeyDown}
            inputValues={inputValues.areaPriceInfo}
            type={inputValues.titleKategoria}
          />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormLocation />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <div> multimedia - zdjęcia</div>
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormDescription
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
          />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormDetailedInformation
            handleDropdown={handleDropdown}
            inputValues={inputValues}
            type={inputValues.titleKategoria}
          />
        )}
        {isValidTitleKategoria(inputValues.titleKategoria) && (
          <CreateFormContactDetails
            inputValues={inputValues}
            handleChange={handleChange}
            handleKeyDown={handleKeyDown}
          />
        )}
        <input type="submit" value="submit" onSubmit={handleSubmit}></input>
      </section>
    </main>
  );
}

export default CreateForm;
