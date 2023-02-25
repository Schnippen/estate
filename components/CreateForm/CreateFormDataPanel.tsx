import { GiHomeGarage } from "react-icons/gi";
import { BiLandscape, BiHome } from "react-icons/bi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaRegBuilding } from "react-icons/fa";

interface PanelData {
  label: string;
  text: string;
  name: string;
  value: string;
  icon: JSX.Element;
}

export const PanelData: PanelData[] = [
  {
    label: "Mieszkanie",
    text: "Mieszkanie",
    name: "string1",
    value: "Mieszkanie",
    icon: <FaRegBuilding />,
  },
  {
    label: "Dom",
    text: "Dom",
    name: "string1",
    value: "Dom",
    icon: <BiHome />,
  },
  {
    label: "Działka",
    text: "Działka",
    name: "string1",
    value: "Działka",
    icon: <BiLandscape />,
  },
  {
    label: "Nieruchomość Komercyjna",
    text: "Nieruchomość Komercyjna",
    name: "string1",
    value: "Nieruchomość Komercyjna",
    icon: <SiHomeassistantcommunitystore />,
  },
  {
    label: "Garaż",
    text: "Garaż",
    name: "string1",
    value: "Garaż",
    icon: <GiHomeGarage />,
  },
];
