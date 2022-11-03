import React from 'react'
import styles from './ItemSideArticle.module.css'
import { BsPersonFill } from "react-icons/bs";
import { HiPhone, HiMail } from "react-icons/hi";
import profilePicture from "../assets/profile.jpg";

function ItemSideArticle() {
  return (
    <article className={styles.container_article_side}>
      <section className={styles.section_sidebar}>
        <div className={styles.section_div}>
          <header className={styles.section_header}>
            <h2>Skontakuj się</h2>
            <div className={styles.contact}>
              <img
                className={styles.profilePicture}
                src={profilePicture}
                alt="Profile picture of realtor"
              />
              <address>
                <strong>Paulina Floryańska </strong>
                <span>LOCO Real Estate</span>
                <span class="phoneNr">
                  tel.
                  <span class="phone">
                    +48 574 78 78 38
                  </span>
                </span>
              </address>
            </div>
          </header>
          <div>
            <div className={styles.form_container}>
              <form>
                <div className={styles.form_div_wrapper}>
                  <BsPersonFill className={styles.svg} />
                  <input
                    type="text"
                    placeholder="wpisz imię"
                    className={styles.inputText}
                  />
                </div>
                <div className={styles.form_div_wrapper}>
                  <HiPhone className={styles.svg} />
                  <input
                    type="tel"
                    placeholder="nr telefonu"
                    className={styles.inputText}
                  />
                </div>
                <div className={styles.form_div_wrapper}>
                  <HiMail className={styles.svg} />
                  <input
                    type="email"
                    placeholder="wpisz e-mail"
                    className={styles.inputText}
                  />
                </div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div>
                  zgadzam się na otrzymywanie
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="*">zgadzam się</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label htmlFor="*">jasne byczqu</label>
                  </div>
                  <div>
                    <input type="submit" />
                  </div>
                  <div>terms of agreement</div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.section_div_credit}>
          <h3>Wybierz najkorzystniej</h3>
          <label>wartosc nieruchomosic</label>
          <input type="number" />
          <label>okres spłaty</label>
          <input type="text" />
          <button>oblicza rate</button>
          <div>ikonki manku</div>
        </div>
      </section>
    </article>
  );
}

export default ItemSideArticle