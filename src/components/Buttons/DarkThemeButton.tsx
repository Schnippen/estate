import React, { useContext } from "react";
import DarkThemeContext from "../../context/DarkThemeContext";
import { MdBrightnessLow, MdBrightness3 } from "react-icons/md";
import useActive from "../../utils/useActive";
import styles from "./DarkThemeButton.module.css";

function DarkThemeButton() {
  const { toggleTheme } = useContext(DarkThemeContext);
  const [isActive, setIsActive] = useActive(false);

  return (
    <button
      className={styles.smallButton}
      style={{
        color: isActive
          ? "var(--tertiary-text-color)"
          : "var(--primary-text-color)",
      }}
      onClick={() => {
        toggleTheme();
        setIsActive(!isActive);
      }}
    >
      <div
        className={styles.smallButton_rail}
        style={{
          backgroundColor: isActive
            ? "var(--disabled)"
            : "var(--primary-text-color)",
        }}
      >
        <span
          className={`${styles.smallButton_rail_span} ${
            isActive
              ? styles.smallButton_rail_span_active
              : styles.smallButton_rail_span_inactive
          }`}
        ></span>
        <div className={styles.smallButton_rail_svg}>
          <MdBrightnessLow style={{ color: "var(--tertiary-text-color)" }} />
        </div>
        <div className={styles.smallButton_rail_svg}>
          <MdBrightness3 style={{ color: "var(--tertiary-color)" }} />
        </div>
      </div>
    </button>
  );
}

export default DarkThemeButton;
//<MdBrightness4 />;
//MdBrightness5;
//MdBrightness3;
//MdBrightnessLow
