import React from "react";
import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styles from "./CityDropdown.module.css";

type CityDropdownTypes = {
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  queryDetails: {
    [key: string]: string;
  };
  setQueryDetails: React.Dispatch<React.SetStateAction<any>>;
  scroll?: boolean;
};

function CityDropdown({
  handleInput,
  queryDetails,
  setQueryDetails,
  scroll,
}: CityDropdownTypes) {
  const [focused, setFocused] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  const DropdownData = {
    data: [
      { value: "warszawa", label: "Warszawa" },
      { value: "wroclaw", label: "Wrocław" },
      { value: "szczecin", label: "Szczecin" },
      { value: "poznan", label: "Poznań" },
      { value: "lodz", label: "Łódź" },
      { value: "lublin", label: "Lublin" },
      { value: "krakow", label: "Kraków" },
      { value: "katowice", label: "Katowice" },
      { value: "gdansk", label: "Gdańsk" },
      { value: "bydgoszcz", label: "Bydgoszcz" },
    ],
    name: "city",
    placeholder: "Choose a city...",
  };

  return (
    <div className={styles.form_div_wrapper}>
      <div className={styles.form_label_wrapper}>
        <label htmlFor="city">City</label>
      </div>
      <div className={styles.suggestions_relative}>
        <HiOutlineLocationMarker className={styles.svg} />
        <input
          type="text"
          placeholder="...city"
          name="City"
          id="city"
          value={queryDetails.City}
          className={focused ? styles.inputText_active : styles.inputText}
          onChange={handleInput}
          onFocus={() => {
            setFocused(true);
            console.log(focused, "focus");
          }}
          onBlur={() => {
            if (!hovered) {
              setFocused(false);
            }
          }}
        />
        {focused ? (
          <ul
            className={styles.suggestions}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={
              scroll
                ? {
                    height: `${
                      DropdownData.data.length * 32 > 140
                        ? 140
                        : DropdownData.data.length * 32
                    }px`,
                    overflowY: `${
                      DropdownData.data.length * 32 > 140 ? "scroll" : "visible"
                    }`,
                  }
                : undefined
            }
          >
            {DropdownData.data
              .filter((item) =>
                item.label
                  .toLocaleLowerCase()
                  .normalize("NFD")
                  .replace(/[^a-zA-ZąćęŁłńóśźżĄĆĘŁŃÓŚŹŻ]/g, "")
                  .includes(
                    queryDetails.City.toLocaleLowerCase()
                      .normalize("NFD")
                      .replace(/[^a-zA-ZąćęŁłńóśźżĄĆĘŁŃÓŚŹŻ]/g, "")
                  )
              )
              .map((item) => (
                <li
                  key={item.value}
                  onClick={() => {
                    console.log(item.value);
                    setQueryDetails({
                      ...queryDetails,
                      City: item.value,
                    });
                    setFocused(false);
                  }}
                >
                  {item.label}
                </li>
              ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default CityDropdown;
