import React from "react";
import styles from "./CreateForm.module.css";

function CreateFormText({flatData,handleChange}) {
  return (
    <div>
      <div>
        <label htmlFor="">Nazwa oferty</label>
        <input
          type="text"
          name="offerTitle"
          value={flatData}
          placeholder="Wpisz nazwę oferty"
          onChange={handleChange}
        />
      </div>
      <div className={styles.errorParagraph}>
        <p>
          To pole musi zawierać poprawny adres e-mail (np.
          jan.kowalski@mail.com).
        </p>
      </div>
      ;
    </div>
  );
}

export default CreateFormText;
