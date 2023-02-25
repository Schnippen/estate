import React from "react";
import styles from "./CreateFormInput.module.css";

type CreateFormInputTypes = {
  data:any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleMax:(e: React.ChangeEvent<HTMLInputElement>, limit: number) => void;
};

function CreateFormInput({ data, handleChange, handleMax }:CreateFormInputTypes) {
  return (
    <div className={styles.form_input_container}>
      <label htmlFor={data.label}>{data.labelText}</label>
      <input
        type="text"
        name={data.name}
        id={data.label}
        placeholder={data.placeholder}
        onChange={(e) => {
          handleChange(e);
          handleMax(e, data.limit);
        }}
        maxLength={data.limit}
        onKeyDown={data.f}
        className={styles.form_input}
      />
    </div>
  );
}

export default CreateFormInput;
