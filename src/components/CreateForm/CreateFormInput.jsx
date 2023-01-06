import React from "react";
import styles from "./CreateFormInput.module.css";

function CreateFormInput({ data, handleChange }) {
  return (
    <div className={styles.form_input_container}>
      <label htmlFor={data.label}>{data.labelText}</label>
      <input
        type="text"
        name={data.name}
        id={data.label}
        //value={data.value}
        placeholder={data.placeholder}
        onChange={handleChange}
        className={styles.form_input}
      />
    </div>
  );
}

export default CreateFormInput;
