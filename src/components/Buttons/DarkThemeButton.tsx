import React, { useContext } from "react";
import DarkThemeContext from "../../context/DarkThemeContext";
import { MdBrightness4 } from "react-icons/md";
import useActive from "../../utils/useActive";
import styles from "./DarkThemeButton.module.css";

function DarkThemeButton() {
  const { toggleTheme } = useContext(DarkThemeContext);
  const [isActive, setIsActive] = useActive(false);

  console.log(isActive, "darkteheme");
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
      <MdBrightness4 />
    </button>
  );
}

export default DarkThemeButton;
