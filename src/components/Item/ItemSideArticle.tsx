import React from "react";
import styles from "../Item/ItemSideArticle.module.css";
import { BsPersonFill } from "react-icons/bs";
import { HiPhone, HiMail } from "react-icons/hi";
import ItemSideArticleCredit from "./ItemSideArticleCredit";
import RealtorData from "./ItemRealtorData";
import FullscreenModal from "../FullscreenModal";
import useActive from "../useActive";
import { useState } from "react";

function ItemSideArticle({ prop }: { prop: any }) {
  const [isActive, setIsActive] = useActive(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    telephone: "",
    email: "",
    textmessage: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    alert("Submitting!");
    console.log(inputValues);
    setInputValues({ name: "", telephone: "", email: "", textmessage: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (
      ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"].includes(e.key)
    ) {
      return;
    }
    if (e.key < "0" || e.key > "9") {
      e.preventDefault();
    }
  };

  return (
    <article className={styles.container_article_side}>
      <section className={styles.section_sidebar}>
        <div className={styles.section_div}>
          <RealtorData prop={prop} />
          <div>
            <div className={styles.form_container}>
              <form onSubmit={handleSubmit}>
                <div className={styles.form_div_wrapper}>
                  <BsPersonFill className={styles.svg} />
                  <input
                    name="name"
                    type="text"
                    placeholder="wpisz imię"
                    className={styles.inputText}
                    value={inputValues.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.form_div_wrapper}>
                  <HiPhone className={styles.svg} />
                  <input
                    name="telephone"
                    type="tel"
                    placeholder="nr telefonu"
                    className={styles.inputText}
                    value={inputValues.telephone}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    required
                  />
                </div>
                <div className={styles.form_div_wrapper}>
                  <HiMail className={styles.svg} />
                  <input
                    name="email"
                    type="email"
                    placeholder="wpisz e-mail"
                    className={styles.inputText}
                    value={inputValues.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <textarea
                  className={styles.textarea}
                  name="textmessage"
                  id=""
                  cols={30}
                  rows={10}
                  onChange={handleChange}
                  required
                  maxLength={2000}
                  placeholder="Wpisz wiadomość..."
                ></textarea>
                <div className={styles.form_additionalContact_wrapper}>
                  <p>Zgadzam się też na otrzymywanie:</p>
                  <div className={styles.additionalContact_container}>
                    <input type="checkbox" id="cb1" />
                    <span className={styles.custom_checkmark}></span>
                    <label htmlFor="cb1">
                      propozycji kontaktu w sprawie kredytu
                    </label>
                  </div>
                  <div className={styles.additionalContact_container}>
                    <input type="checkbox" id="cb2" />
                    <span className={styles.custom_checkmark}></span>
                    <label htmlFor="cb2">
                      informacji o promocjach i usługach
                    </label>
                  </div>
                  <div>
                    <input
                      value="Wyślij wiadomość"
                      type="submit"
                      className={styles.submit}
                      disabled={
                        inputValues.name &&
                        inputValues.telephone &&
                        inputValues.email &&
                        inputValues.textmessage
                          ? false
                          : true
                      }
                    />
                  </div>
                </div>
              </form>
              <div className={styles.terms}>
                <p onClick={()=>setIsActive(!isActive)}>Terms of service</p>
                {isActive ? (
                  <FullscreenModal
                    setIsActive={setIsActive}
                    isActive={isActive}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <ItemSideArticleCredit />
      </section>
    </article>
  );
}

export default ItemSideArticle;
