import React from "react";
import Dropdown from "../Dropdown";
import styles from "./CreateFormContactDetails.module.css";
import useActive from "../useActive";
import { useState, useEffect } from "react";

function CreateFormContactDetails({
  handleChange,
  inputValues,
  handleKeyDown,
}) {
  //handle Email
  const [emailValid, setEmailValid] = useActive(false);
  const [email, setEmail] = useState("");
  const EMAIL_REGEX = /[^\s@]+@[^\s@]+\.[^\s@]+/gi;

  const handleSpace = (e) => {
    e.key === " " && e.preventDefault();
  };

  useEffect(() => {
    setEmailValid(EMAIL_REGEX.test(email));
  }, [email]);

  return (
    <article className={styles.article}>
      <h3>Dane kontaktowe</h3>
      <section className={styles.article_section}>
        <div className={styles.section_inputContainer}>
          <label htmlFor="nazwa">Nazwa ogłoszeniodawcy</label>
          <input
            type="text"
            name="sellerInfo"
            id="nazwa"
            placeholder="Wpisz imię"
            value={inputValues.sellerInfo}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
        <div className={styles.section_inputContainer}>
          <label htmlFor="email">Adres E-mail</label>
          <input
            type="email"
            name="sellerInfoEmail"
            id="email"
            placeholder="Wpisz e-mail"
            onChange={(e) => {
              setEmail(e.target.value.trim());
              if (emailValid) {
                handleChange(e);
              }
            }}
            onKeyDown={handleSpace}
            className={styles.input}
            required
          />
          {!email || emailValid ? null : (
            <div className={styles.errorParagraph}>
              <p>
                To pole musi zawierać poprawny adres e-mail (np.
                jan.kowalski@mail.com).
              </p>
            </div>
          )}
        </div>
        <div className={styles.section_inputContainer}>
          <label htmlFor="telefon">Numer telefonu</label>
          <input
            type="tel"
            name="telephoneNumberInfo"
            id="telefon"
            value={inputValues.telephoneNumberInfo}
            placeholder="Wpisz numer telefonu"
            onChange={(e) => {
              handleChange(e);
            }}
            onKeyDown={handleKeyDown}
            className={styles.input}
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
