import React from "react";
import styles from "./CreateForm.module.css";

type CreateFormPanelTypes = {
  panel: {
    label: string;
    text: string;
    name: string;
    value: string;
    icon: JSX.Element;
  };
  handleCategory: (e: React.MouseEvent<HTMLInputElement>) => void;
  panelSelected: string;
};

function CreateFormPanel({
  panel,
  handleCategory,
  panelSelected,
}: CreateFormPanelTypes) {
  return (
    <li>
      <label htmlFor={panel.label}>
        <div
          className={
            panelSelected=== panel.value
              ? styles.panel_active
              : styles.panel
          }
        >
          <div className={styles.icon}>{panel.icon}</div>
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
