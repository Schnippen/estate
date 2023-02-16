import React from "react";
import styles from "../Item/ItemSideArticleCredit.module.css";
import bank1 from "../../assets/banks/alior.png";
import bank2 from "../../assets/banks/bgz.png";
import bank3 from "../../assets/banks/bos.png";
import bank4 from "../../assets/banks/bps.png";
import bank5 from "../../assets/banks/citi_handlowy.png";
import bank6 from "../../assets/banks/ing.png";
import bank7 from "../../assets/banks/mbank.png";
import bank8 from "../../assets/banks/millennium.png";
import bank9 from "../../assets/banks/pekao.png";
import bank10 from "../../assets/banks/pko_bp.png";
import bank11 from "../../assets/banks/santander.png";
import Dropdown from "../Dropdown";
import CreateFormInput from "../CreateForm/CreateFormInput";
import { useState } from "react";

function ItemSideArticleCredit() {
  const [credit, setCredit] = useState({
    creditValue: "",
    durationOfTheLoan: "",
  });

  const handleChange = (e) => {
    setCredit({ ...credit, [e.target.name]: e.target.value });
  };

  const handleMax = (e, limit) => {
    setCredit({
      ...credit,
      [e.target.name]: e.target.value.slice(0, limit),
    });
  };

  const handleDropdown = (ref) => {
    setCredit({
      ...credit,
      [ref.current.name]: ref.current.value,
    });
  };

  const handleKeyDown = (e) => {
    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "Tab"
    ) {
      return;
    }
    if (e.key < "0" || e.key > "9") {
      e.preventDefault();
    }
  };

  const creditValueData = {
    label: "Wartość nieruchomości ",
    name: "creditValue",
    placeholder: "Wartość nieruchomości",
    labelText: "Wartość nieruchomości zł",
    f: handleKeyDown,
    limit: 14,
  };

  const creditData = {
    data: [
      { value: 5, label: "5 lat" },
      { value: 10, label: "10 lat" },
      { value: 15, label: "15 lat" },
      { value: 20, label: "20 lat" },
      { value: 25, label: "25 lat" },
      { value: 30, label: "30 lat" },
    ],
  };

  return (
    <form className={styles.section_container_credit}>
      <header>
        <h3>Wybierz najkorzystniej</h3>
      </header>
      <div className={styles.credit_wrapper}>
        <div className={styles.credit_input_wrapper}>
          <CreateFormInput
            data={creditValueData}
            handleChange={handleChange}
            handleMax={handleMax}
          />
        </div>
        <div className={styles.credit_input_wrapper}>
          <Dropdown
            data={creditData.data}
            name={"durationOfTheLoan"}
            handleChange={handleDropdown}
            placeholder={"Okres kredytu"}
            label={"Okres kredytu"}
          />
        </div>
      </div>
      <div className={styles.credit_submit}>
        <input
          type="submit"
          className={styles.submit}
          value="Oblicz"
          disabled={
            credit.creditValue && credit.durationOfTheLoan ? false : true
          }
        />
      </div>
      <div className={styles.bankWrapper}>
        <h6>dostępne oferty banków</h6>
        <div className={styles.bankWrapper_List}>
          <img src={bank1} alt="" />
          <img src={bank2} alt="" />
          <img src={bank3} alt="" />
          <img src={bank4} alt="" />
          <img src={bank5} alt="" />
          <img src={bank6} alt="" />
        </div>
        <div className={styles.bankWrapper_List}>
          <img src={bank7} alt="" />
          <img src={bank8} alt="" />
          <img src={bank9} alt="" />
          <img src={bank10} alt="" />
          <img src={bank11} alt="" />
        </div>
      </div>
    </form>
  );
}

export default ItemSideArticleCredit;
