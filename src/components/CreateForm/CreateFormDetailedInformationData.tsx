export type DropdownProps = {
  data: { value: string; label: string }[];
  name: string;

  placeholder: string;
  label: string;
};

export const flatDropdownData: DropdownProps[] = [
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

    placeholder: "Wybierz rodzaj",
    label: "Rodzaj własności",
  },
  {
    data: [
      { value: "apartamentowiec", label: "Apartamentowiec" },
      {
        value: "blok",
        label: "Blok",
      },
      { value: "dom wielorodzinny", label: "Dom wielorodzinny" },
      {
        value: "kamienica",
        label: "Kamienica",
      },
    ],
    name: "typeOfBuildingInfo",

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

    placeholder: "balkon",
    label: "Balkon",
  },
  {
    data: [
      { value: "tak", label: "tak" },
      { value: "nie", label: "nie" },
    ],
    name: "elevatorInfo",

    placeholder: "winda",
    label: "Winda",
  },
];

export const houseDropdownData: DropdownProps[] = [
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

    placeholder: "Dom",
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

    placeholder: "balkon",
    label: "Balkon",
  },
  {
    data: [
      { value: "tak", label: "tak" },
      { value: "nie", label: "nie" },
    ],
    name: "elevatorInfo",

    placeholder: "winda",
    label: "Winda",
  },
];

export const plotOfLandDropdownData: DropdownProps[] = [];

export const commercialPropertyDropdownData: DropdownProps[] = [
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
      {
        value: "spół.-własnościowe z KW",
        label: "spół.-własnościowe z KW",
      },
    ],
    name: "formOfPropertyInfo",

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

    placeholder: "parking",
    label: "Parking",
  },
];
