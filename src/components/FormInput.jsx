import React from 'react'
import styles from "./ItemSideArticle.module.css";

function FormInput({props,svg}) {
  return (
    <div className={styles.form_div_wrapper}>
      {svg}
      <input className={styles.inputText} />
    </div>
  );
}

export default FormInput