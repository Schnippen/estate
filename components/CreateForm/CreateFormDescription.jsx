import React from "react";
import styles from "./CreateFormContactDetails.module.css";

function CreateFormDescription({ handleChange, textState, titleState }) {
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
  };
  const labelStyle = {
    padding: "5px 0",
  };

  return (
    <article className={styles.article}>
      <h3>Tytuł i Opis</h3>
      <section className={styles.article_section}>
        <div style={divStyle}>
          <label htmlFor="title" style={labelStyle}>
            Tytuł
          </label>
          <input
            type="text"
            id="title"
            name="offerTitle"
            className={styles.descriptionTitle}
            onChange={(e) => {
              handleChange(e);
            }}
            maxLength={100}
          />
          <div className={styles.digitsStyle}>
            <p>{titleState.length}/100</p>
          </div>
          {titleState.length > 0 && titleState.length < 20 ? (
            <div className={styles.errorParagraph}>
              <p>Opis powienien mieć przynajmniej 20 znaków</p>
            </div>
          ) : null}
        </div>
        <div style={divStyle}>
          <label htmlFor="description" style={labelStyle}>
            Opis
          </label>
          <textarea
            id="description"
            cols="30"
            rows="10"
            className={styles.descriptionText}
            name="descriptionInfo"
            onChange={(e) => {
              handleChange(e);
            }}
            maxLength={6000}
          ></textarea>
        </div>
        <div className={styles.digitsStyle}>
          <p>{textState.length}/6000</p>
        </div>
        {textState.length > 0 && textState.length < 100 ? (
          <div className={styles.errorParagraph}>
            <p>Opis powienien mieć przynajmniej 100 znaków</p>
          </div>
        ) : null}
      </section>
    </article>
  );
}

export default CreateFormDescription;
