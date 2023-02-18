import React from "react";
import useActive from "../useActive";
import styles from "./CreateFormContactDetails.module.css";
import { HiChevronDown } from "react-icons/hi";
import Dropdown from "../Dropdown";
import CreateFormInput from "./CreateFormInput";

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

  type DropdownProps = {
    data: { value: string; label: string }[];
    name: string;
    handleChange: (ref: React.RefObject<HTMLInputElement>) => void;
    placeholder: string;
    label: string;
  };

  const flatDropdownData: DropdownProps[] = [
    {
      data: [
        { value: "cegła", label: "cegła" },
        { value: "suporex", label: "suporex" },
        { value: "rama H", label: "rama H" },
        { value: "bloczki", label: "bloczki" },
        { value: "kamień", label: "kamień" },
        { value: "zróżnicowany", label: "zróżnicowany" },
        { value: "pustak", label: "pustak" },
        { value: "drewno", label: "drewno" },
        { value: "beton", label: "beton" },
        { value: "wielka płyta", label: "wielka płyta" },
      ],
      name: "buildingMaterialInfo",
      handleChange: handleDropdown,
      placeholder: "Rodzaj materiału",
      label: "Materiał Budowlany",
    },
    {
      data: [
        { value: "własność", label: "własność" },
        {
          value: "spółdzielcze-lokatorskie",
          label: "spółdzielcze-lokatorskie",
        },
        { value: "udział", label: "udział" },
        {
          value: "spółdzielcze-własnościowe",
          label: "spółdzielcze-własnościowe",
        },
        { value: "wieczyste użytkowanie", label: "wieczyste użytkowanie" },
        { value: "spół.-własnościowe z KW", label: "spół.-własnościowe z KW" },
      ],
      name: "formOfPropertyInfo",
      handleChange: handleDropdown,
      placeholder: "Wybierz rodzaj",
      label: "Rodzaj własności",
    },
    {
      data: [
        { value: "apartamentowiec", label: "apartamentowiec" },
        {
          value: "blok",
          label: "blok",
        },
        { value: "dom wielorodzinny", label: "dom wielorodzinny" },
        {
          value: "kamienica",
          label: "kamienica",
        },
      ],
      name: "typeOfBuildingInfo",
      handleChange: handleDropdown,
      placeholder: "Budynek",
      label: "Rodzaj budynku",
    },
    {
      data: [
        { value: "bardzo dobry", label: "bardzo dobry" },
        {
          value: "dobry",
          label: "dobry",
        },
        { value: "do odświeżenia", label: "do odświeżenia" },
        {
          value: "do remontu",
          label: "do remontu",
        },
        {
          value: "bez białego montażu i podłóg",
          label: "bez białego montażu i podłóg",
        },
        { value: "do wykończenia", label: "do wykończenia" },
        { value: "wysoki standard", label: "wysoki standard" },
      ],
      name: "conditionOfThePropertyInfo",
      handleChange: handleDropdown,
      placeholder: "Stan mieszkania",
      label: "Stan mieszkania",
    },
    {
      data: [
        { value: "1", label: "1" },
        {
          value: "2",
          label: "2",
        },
        { value: "3", label: "3" },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5",
          label: "5",
        },
      ],
      name: "numberOfLevels",
      handleChange: handleDropdown,
      placeholder: "Liczba",
      label: "Liczba poziomów",
    },
    {
      data: [
        { value: "aneks", label: "aneks" },
        {
          value: "prześwit",
          label: "prześwit",
        },
        { value: "wnęka", label: "wnęka" },
        {
          value: "brak",
          label: "brak",
        },
        {
          value: "otwarta",
          label: "otwarta",
        },
        {
          value: "półotwarta",
          label: "półotwarta",
        },
        {
          value: "osobna",
          label: "osobna",
        },
      ],
      name: "typeOfKitchenInfo",
      handleChange: handleDropdown,
      placeholder: "Kuchania",
      label: "Rodzaj Kuchni",
    },
    {
      data: [
        { value: "razem", label: "razem" },
        {
          value: "osobno",
          label: "osobno",
        },
      ],
      name: "isBathroomSeparateInfo",
      handleChange: handleDropdown,
      placeholder: "...",
      label: "Łazienka i WC",
    },
    {
      data: [
        { value: "miejskie", label: "miejskie" },
        {
          value: "biomasa",
          label: "biomasa",
        },
        { value: "geotermika", label: "geotermika" },
        {
          value: "podłogowe",
          label: "podłogowe",
        },
        {
          value: "klimatyzacja",
          label: "klimatyzacja",
        },
        { value: "brak", label: "brak" },
        {
          value: "kominkowe",
          label: "kominkowe",
        },
        { value: "słoneczne", label: "słoneczne" },
        {
          value: "węglowe",
          label: "węglowe",
        },
        {
          value: "olejowe",
          label: "olejowe",
        },
        { value: "elektryczne", label: "elektryczne" },
        {
          value: "gazowe",
          label: "gazowe",
        },
        {
          value: "zróżnicowane",
          label: "zróżnicowane",
        },
      ],
      name: "heatingInfo",
      handleChange: handleDropdown,
      placeholder: "ogrzewanie",
      label: "Rodzaj Ogrzewania",
    },
    {
      data: [
        { value: "brak", label: "brak" },
        {
          value: "garaż",
          label: "garaż",
        },
        { value: "na ulicy", label: "na ulicy" },
        {
          value: "parking podziemny",
          label: "parking podziemny",
        },
        {
          value: "parking naziemny",
          label: "parking naziemny",
        },
      ],
      name: "parkingInfo",
      handleChange: handleDropdown,
      placeholder: "parking",
      label: "Parking",
    },
    {
      data: [
        { value: "brak", label: "brak" },
        { value: "balkon", label: "balkon" },
        {
          value: "taras",
          label: "taras",
        },
      ],
      name: "balconyInfo",
      handleChange: handleDropdown,
      placeholder: "balkon",
      label: "Balkon",
    },
    {
      data: [
        { value: "tak", label: "tak" },
        { value: "nie", label: "nie" },
      ],
      name: "elevatorInfo",
      handleChange: handleDropdown,
      placeholder: "winda",
      label: "Winda",
    },
  ];

  const houseDropdownData: DropdownProps[] = [
    {
      data: [
        { value: "Wolnostojący", label: "Wolnostojący" },
        {
          value: "Bliźniak",
          label: "Bliźniak",
        },
        { value: "Szeregowiec", label: "Szeregowiec" },
        {
          value: "kamienica",
          label: "kamienica",
        },
        {
          value: "Pałac / dworek",
          label: "Pałac / dworek",
        },
        {
          value: "Gospodarstwo",
          label: "Gospodarstwo",
        },
        {
          value: "Letniskowy",
          label: "Letniskowy",
        },
        {
          value: "Atrialny",
          label: "Atrialny",
        },
        {
          value: "Inny",
          label: "Inny",
        },
      ],
      name: "typeOfBuildingInfo",
      handleChange: handleDropdown,
      placeholder: "dom",
      label: "Rodzaj domu",
    },
    {
      data: [
        { value: "1", label: "1" },
        {
          value: "2",
          label: "2",
        },
        { value: "3", label: "3" },
        {
          value: "4",
          label: "4",
        },
        {
          value: "5",
          label: "5",
        },
      ],
      name: "numberOfLevels",
      handleChange: handleDropdown,
      placeholder: "Liczba",
      label: "Liczba poziomów",
    },
    {
      data: [
        { value: "cegła", label: "cegła" },
        { value: "suporex", label: "suporex" },
        { value: "rama H", label: "rama H" },
        { value: "bloczki", label: "bloczki" },
        { value: "kamień", label: "kamień" },
        { value: "zróżnicowany", label: "zróżnicowany" },
        { value: "pustak", label: "pustak" },
        { value: "drewno", label: "drewno" },
        { value: "beton", label: "beton" },
        { value: "wielka płyta", label: "wielka płyta" },
      ],
      name: "buildingMaterialInfo",
      handleChange: handleDropdown,
      placeholder: "Rodzaj materiału",
      label: "Materiał Budowlany",
    },
    {
      data: [
        { value: "własność", label: "własność" },
        {
          value: "spółdzielcze-lokatorskie",
          label: "spółdzielcze-lokatorskie",
        },
        { value: "udział", label: "udział" },
        {
          value: "spółdzielcze-własnościowe",
          label: "spółdzielcze-własnościowe",
        },
        { value: "wieczyste użytkowanie", label: "wieczyste użytkowanie" },
        { value: "spół.-własnościowe z KW", label: "spół.-własnościowe z KW" },
      ],
      name: "formOfPropertyInfo",
      handleChange: handleDropdown,
      placeholder: "Wybierz rodzaj",
      label: "Rodzaj własności",
    },
    {
      data: [
        { value: "bardzo dobry", label: "bardzo dobry" },
        {
          value: "dobry",
          label: "dobry",
        },
        { value: "do odświeżenia", label: "do odświeżenia" },
        {
          value: "do remontu",
          label: "do remontu",
        },
        {
          value: "do rozbiórki",
          label: "do rozbiórki",
        },
        {
          value: "rozpoczęta budowa",
          label: "rozpoczęta budowa",
        },
        {
          value: "surowy otwarty",
          label: "surowy otwarty",
        },
        {
          value: "surowy zamknięty",
          label: "surowy zamknięty",
        },
        { value: "do wykończenia", label: "do wykończenia" },
        {
          value: "po remoncie",
          label: "po remoncie",
        },
        { value: "wysoki standard", label: "wysoki standard" },
      ],
      name: "conditionOfThePropertyInfo",
      handleChange: handleDropdown,
      placeholder: "Stan domu",
      label: "Stan domu",
    },
    {
      data: [
        { value: "aneks", label: "aneks" },
        {
          value: "prześwit",
          label: "prześwit",
        },
        { value: "wnęka", label: "wnęka" },
        {
          value: "brak",
          label: "brak",
        },
        {
          value: "otwarta",
          label: "otwarta",
        },
        {
          value: "półotwarta",
          label: "półotwarta",
        },
        {
          value: "osobna",
          label: "osobna",
        },
      ],
      name: "typeOfKitchenInfo",
      handleChange: handleDropdown,
      placeholder: "Kuchania",
      label: "Rodzaj Kuchni",
    },
    {
      data: [
        { value: "razem", label: "razem" },
        {
          value: "osobno",
          label: "osobno",
        },
      ],
      name: "isBathroomSeparateInfo",
      handleChange: handleDropdown,
      placeholder: "...",
      label: "Łazienka i WC",
    },
    {
      data: [
        { value: "miejskie", label: "miejskie" },
        {
          value: "biomasa",
          label: "biomasa",
        },
        { value: "geotermika", label: "geotermika" },
        {
          value: "podłogowe",
          label: "podłogowe",
        },
        {
          value: "klimatyzacja",
          label: "klimatyzacja",
        },
        { value: "brak", label: "brak" },
        {
          value: "kominkowe",
          label: "kominkowe",
        },
        { value: "słoneczne", label: "słoneczne" },
        {
          value: "węglowe",
          label: "węglowe",
        },
        {
          value: "olejowe",
          label: "olejowe",
        },
        { value: "elektryczne", label: "elektryczne" },
        {
          value: "gazowe",
          label: "gazowe",
        },
        {
          value: "zróżnicowane",
          label: "zróżnicowane",
        },
      ],
      name: "heatingInfo",
      handleChange: handleDropdown,
      placeholder: "ogrzewanie",
      label: "Rodzaj Ogrzewania",
    },
    {
      data: [
        { value: "brak", label: "brak" },
        {
          value: "garaż",
          label: "garaż",
        },
        { value: "na ulicy", label: "na ulicy" },
        {
          value: "parking podziemny",
          label: "parking podziemny",
        },
        {
          value: "parking naziemny",
          label: "parking naziemny",
        },
      ],
      name: "parkingInfo",
      handleChange: handleDropdown,
      placeholder: "parking",
      label: "Parking",
    },
    {
      data: [
        { value: "brak", label: "brak" },
        { value: "balkon", label: "balkon" },
        {
          value: "taras",
          label: "taras",
        },
      ],
      name: "balconyInfo",
      handleChange: handleDropdown,
      placeholder: "balkon",
      label: "Balkon",
    },
    {
      data: [
        { value: "tak", label: "tak" },
        { value: "nie", label: "nie" },
      ],
      name: "elevatorInfo",
      handleChange: handleDropdown,
      placeholder: "winda",
      label: "Winda",
    },
  ];
  //udogodnienia //media
  //rok budowy, szerokosc dziąłki długosc dziąlki

  const plotOfLandDropdownData: DropdownProps[] = [];
  //udogodnienia
  //rok budowy, szerokosc dziąłki długosc dziąlki

  const commercialPropertyDropdownData: DropdownProps[] = [
    {
      data: [
        { value: "własność", label: "własność" },
        {
          value: "spółdzielcze-lokatorskie",
          label: "spółdzielcze-lokatorskie",
        },
        { value: "udział", label: "udział" },
        {
          value: "spółdzielcze-własnościowe",
          label: "spółdzielcze-własnościowe",
        },
        { value: "wieczyste użytkowanie", label: "wieczyste użytkowanie" },
        { value: "spół.-własnościowe z KW", label: "spół.-własnościowe z KW" },
      ],
      name: "formOfPropertyInfo",
      handleChange: handleDropdown,
      placeholder: "Wybierz rodzaj",
      label: "Rodzaj własności",
    },
    {
      data: [
        { value: "bardzo dobry", label: "bardzo dobry" },
        {
          value: "dobry",
          label: "dobry",
        },
        { value: "do odświeżenia", label: "do odświeżenia" },
        {
          value: "do remontu",
          label: "do remontu",
        },
        {
          value: "do rozbiórki",
          label: "do rozbiórki",
        },
        {
          value: "rozpoczęta budowa",
          label: "rozpoczęta budowa",
        },
        {
          value: "surowy otwarty",
          label: "surowy otwarty",
        },
        {
          value: "surowy zamknięty",
          label: "surowy zamknięty",
        },
        { value: "do wykończenia", label: "do wykończenia" },
        {
          value: "po remoncie",
          label: "po remoncie",
        },
        { value: "wysoki standard", label: "wysoki standard" },
      ],
      name: "conditionOfThePropertyInfo",
      handleChange: handleDropdown,
      placeholder: "Stan mieszkania",
      label: "Stan mieszkania",
    },
    {
      data: [
        { value: "miejskie", label: "miejskie" },
        {
          value: "biomasa",
          label: "biomasa",
        },
        { value: "geotermika", label: "geotermika" },
        {
          value: "podłogowe",
          label: "podłogowe",
        },
        {
          value: "klimatyzacja",
          label: "klimatyzacja",
        },
        { value: "brak", label: "brak" },
        {
          value: "kominkowe",
          label: "kominkowe",
        },
        { value: "słoneczne", label: "słoneczne" },
        {
          value: "węglowe",
          label: "węglowe",
        },
        {
          value: "olejowe",
          label: "olejowe",
        },
        { value: "elektryczne", label: "elektryczne" },
        {
          value: "gazowe",
          label: "gazowe",
        },
        {
          value: "zróżnicowane",
          label: "zróżnicowane",
        },
      ],
      name: "heatingInfo",
      handleChange: handleDropdown,
      placeholder: "ogrzewanie",
      label: "Rodzaj Ogrzewania",
    },
    {
      data: [
        { value: "brak", label: "brak" },
        {
          value: "garaż",
          label: "garaż",
        },
        { value: "na ulicy", label: "na ulicy" },
        {
          value: "parking podziemny",
          label: "parking podziemny",
        },
        {
          value: "parking naziemny",
          label: "parking naziemny",
        },
      ],
      name: "parkingInfo",
      handleChange: handleDropdown,
      placeholder: "parking",
      label: "Parking",
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
          handleChange={items[i].handleChange}
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
