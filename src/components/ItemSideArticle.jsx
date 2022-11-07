import React from "react";
import styles from "./ItemSideArticle.module.css";
import { BsPersonFill } from "react-icons/bs";
import { HiPhone, HiMail } from "react-icons/hi";
import profilePicture from "../assets/profile.jpg";
import ItemSideArticleCredit from "./ItemSideArticleCredit";

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
                alt="Profile of realtor"
              />
              <address>
                <strong>Paulina Floryańska </strong>
                <span>LOCO Real Estate</span>
                <span class="phoneNr">
                  tel.
                  <span class="phone">+48 574 78 78 38</span>
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
                <textarea name="" id="" cols="30" rows="10">
                  Chcę poznać więcej szczegółów na temat oferty lub umówić się
                  na spotkanie albo wideoprezentację. Proszę o kontakt.
                </textarea>
                <div className={styles.form_additionalContact_wrapper}>
                  <p>Zgadzam się też na otrzymywanie:</p>
                  <div>
                    <input
                      type="checkbox"
                      id="cb1"
                      className={styles.checkbox}
                    />
                    <label htmlFor="cb1">
                      propozycji kontaktu w sprawie kredytu
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="cb2"
                      className={styles.checkbox}
                    />
                    <label htmlFor="cb2">
                      informacji o promocjach i usługach
                    </label>
                  </div>
                  <div>
                    <input type="submit" className={styles.submit} />
                  </div>
                  <div>
                    <p>terms of agreement</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ItemSideArticleCredit/>
      </section>
    </article>
  );
}

export default ItemSideArticle;
