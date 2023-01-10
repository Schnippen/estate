import React from "react";
import styles from "./CreateFormContactDetails.module.css";
import { useState } from "react";

function CreateFormDescription({ handleChange }) {
  const [titleState, setTitleState] = useState("");
  const [textState, setTextState] = useState("");

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
  const digitsStyle = {
    display: "flex",
    width: "600px",
    justifyContent: "flex-end",
  };

  console.log(textState);
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
            style={{
              width: "600px",
              height: "40px",
              borderRadius: "5px",
            }}
            onChange={(e) => setTitleState(e.target.value)}
            maxLength={100}
          />
          <div style={digitsStyle}>
            <p>{titleState.length}/100</p>
          </div>
        </div>
        <div style={divStyle}>
          <label htmlFor="description" style={labelStyle}>
            Opis
          </label>
          <textarea
            name=""
            id="description"
            cols="30"
            rows="10"
            style={{
              width: "600px",
              height: "300px",
              borderRadius: "5px",
            }}
            onChange={(e) => setTextState(e.target.value)}
            maxLength={6000}
          ></textarea>
        </div>
        <div style={digitsStyle}>
          <p>{textState.length}/6000</p>
        </div>
      </section>
    </article>
  );
}

export default CreateFormDescription;
