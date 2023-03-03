import React from "react";
import useActive from "../useActive";
import styles from "./CreateFormContactDetails.module.css";
import { HiChevronDown } from "react-icons/hi";
import Dropdown from "../Dropdown";
import CreateFormInput from "./CreateFormInput";
import {DropdownProps,
  flatDropdownData,
  houseDropdownData,
  plotOfLandDropdownData,
  commercialPropertyDropdownData,
} from "./CreateFormDetailedInformationData";

type CreateFormDetailedInformationTypes = {
  handleDropdown: (ref: React.RefObject<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleMax: (e: React.ChangeEvent<HTMLInputElement>, limit: number) => void;
  type: string;
};

function CreateFormDetailedInformation({
  handleDropdown,
  handleKeyDown,
  handleChange,
  handleMax,
  type,
}: CreateFormDetailedInformationTypes) {
  const [isOpened, setIsOpened] = useActive(false);

  type yearOfConstructionInfoDataTypes = {
    label: string;
    name: string;
    placeholder: string;
    labelText: string;
    f: (e: React.KeyboardEvent<Element>) => void;
    limit: number;
  };

  const yearOfConstructionInfoData: yearOfConstructionInfoDataTypes[] = [
    {
      label: "rokbudowy",
      name: "yearOfConstructionInfo",
      placeholder: "...",
      labelText: "Rok budowy",
      f: handleKeyDown,
      limit: 4,
    },
  ];

  //liczba pieter
  type DataType = {
    [key: string]: DropdownProps[];
  };
  function typeDropdownForm(type: string) {
    const data: DataType = {
      "Mieszkanie na sprzedaż": flatDropdownData,
      "Dom na sprzedaż": houseDropdownData,
      "Nieruchomość Komercyjna na sprzedaż": commercialPropertyDropdownData,
      "Działka na sprzedaż": plotOfLandDropdownData,
    };

    const items = data[type];
    if (!items) return null;

    return items.map((item, i: number) => (
      <li className={styles.dropdown} key={i}>
        <Dropdown
          data={items[i].data}
          name={items[i].name}
          handleChange={handleDropdown}
          placeholder={items[i].placeholder}
          label={items[i].label}
        />
      </li>
    ));
  }

  type yearOfConstructionDataType = {
    [key: string]: yearOfConstructionInfoDataTypes[];
  };

  function yearOfConstruction(type: string) {
    const data: yearOfConstructionDataType = {
      "Mieszkanie na sprzedaż": yearOfConstructionInfoData,
      "Dom na sprzedaż": yearOfConstructionInfoData,
      "Nieruchomość Komercyjna na sprzedaż": yearOfConstructionInfoData,
    };
    const item = data[type];
    if (!item) return null;
    return item.map((item) => (
      <CreateFormInput
        data={item}
        handleChange={handleChange}
        handleMax={handleMax}
        key={item.name}
      />
    ));
  }

  return (
    <article className={styles.article}>
      <header
        style={{ position: "relative", width: "100%" }}
        onClick={() => setIsOpened(!isOpened)}
      >
        <h3>
          Informacje szczegółowe
          <div
            className={isOpened ? styles.moreInfoClosed : styles.moreInfoOpened}
          >
            kliknij aby rozwinąć
          </div>
        </h3>

        <div
          className={
            isOpened ? styles.moreInfoArrowClosed : styles.moreInfoArrowOpened
          }
        >
          <HiChevronDown />
        </div>
      </header>
      {isOpened ? (
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "20px",
          }}
        >
          {typeDropdownForm(type)}
          <div style={{ width: "300px" }}>{yearOfConstruction(type)}</div>
        </ul>
      ) : null}
    </article>
  );
}

export default CreateFormDetailedInformation;
