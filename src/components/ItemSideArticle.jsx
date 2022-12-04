import React from "react";
import styles from "./ItemSideArticle.module.css";
import { BsPersonFill } from "react-icons/bs";
import { HiPhone, HiMail } from "react-icons/hi";
import ItemSideArticleCredit from "./ItemSideArticleCredit";
import RealtorData from "./ItemRealtorData";
//import { useState } from "react";
import { useRef } from "react";
import useActive from "./useActive";

function ItemSideArticle({ prop }) {
  //const prop = Database[10];

  //const [items,setItems] = useState([]);
  const inputRef = useRef();
  const [isActive, setIsActive] = useActive(false);
  console.log(isActive)
  //let statuses = ["empty", "typing", "submitting", "success", "error"];

  //w formie zrób potiwerdzenie ze wiadomosc jest w drodze, jesli sie nie wysle to pierdolij error xD div usestate loading etc
  //wyslij wiadomosc gdzies na serwer  sprawdz se jak sie to robi
  return (
    <article className={styles.container_article_side}>
      <section className={styles.section_sidebar}>
        <div className={styles.section_div}>
          <RealtorData prop={prop}/>
          <div>
            <div className={styles.form_container}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Submitting!");
                }}
              >
                <div className={styles.form_div_wrapper}>
                  <BsPersonFill className={styles.svg} />
                  <input
                    ref={inputRef}
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
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder={`Chcę poznać więcej szczegółów na temat oferty lub umówić się na spotkanie albo wideoprezentację.           Proszę o kontakt.`}
                ></textarea>
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
                  <div className={styles.terms}>
                    <p onClick={setIsActive}>terms of agreement</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ItemSideArticleCredit />
      </section>
    </article>
  );
}

export default ItemSideArticle;
