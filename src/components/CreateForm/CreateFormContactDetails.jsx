import React from "react";
import Dropdown from "../Dropdown";
import styles from "./CreateFormContactDetails.module.css";
import { useState } from "react";

function CreateFormContactDetails() {
  return (
    <article className={styles.article}>
      <h3>Dane kontaktowe</h3>
      <section>
        <div>
          <label htmlFor="nazwa">Nazwa ogłoszeniodawcy</label>
          <input type="text" name="sellerInfo" id="nazwa" value="imie" />
        </div>
        <div>
          <label htmlFor="email">Adres E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value="email"
            placeholder="Wpisz e-mail"
          />
        </div>
        <div>
          <label htmlFor="telefon">Numer telefonu</label>
          <input
            type="tel"
            name="telephoneNumberInfo"
            id="telefon"
            value="telefon"
          />
        </div>
        <div>
          obługa w jezyku
          <input type="checkbox" name="" id="" value="" />
        </div>
        <div></div>
        <p>DROPDOWN z włascicielem</p>
        <div>
          spam
          <input type="checkbox" name="" id="" value="" />
        </div>
      </section>
    </article>
  );
}

export default CreateFormContactDetails;
