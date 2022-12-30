import { svg } from "leaflet";
import React from "react";
import styles from "./CreateForm.module.css";

function CreateFormPanel({ panel, handleCategory, panelSelected }) {
  return (
    <li>
      <label htmlFor={panel.label}>
        <div
          className={
            panelSelected === panel.value ? styles.panel_active : styles.panel
          }
        >
          <div className={styles.svg}>{panel.svg}</div>
          <p>{panel.text}</p>
        </div>
      </label>
      <input
        className={styles.panel_input}
        type="radio"
        id={panel.label}
        name={panel.name}
        value={panel.value}
        onClick={handleCategory}
      />
    </li>
  );
}

export default CreateFormPanel;
