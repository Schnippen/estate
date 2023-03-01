import React from "react";
import styles from "../Item/ItemSideArticleCredit.module.css";
import Dropdown from "../Dropdown";
import CreateFormInput from "../CreateForm/CreateFormInput";
import { useState } from "react";
const bank1 = require("../../assets/banks/alior.png") as string;
const bank2 = require("../../assets/banks/bgz.png") as string;
const bank3 = require("../../assets/banks/bos.png") as string;
const bank4 = require("../../assets/banks/bps.png") as string;
const bank5 = require("../../assets/banks/citi_handlowy.png") as string;
const bank6 = require("../../assets/banks/ing.png") as string;
const bank7 = require("../../assets/banks/mbank.png") as string;
const bank8 = require("../../assets/banks/millennium.png") as string;
const bank9 = require("../../assets/banks/pekao.png") as string;
const bank10 = require("../../assets/banks/pko_bp.png") as string;
const bank11 = require("../../assets/banks/santander.png") as string;

function ItemSideArticleCredit() {
  const [credit, setCredit] = useState({
    creditValue: "",
    durationOfTheLoan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCredit({ ...credit, [e.target.name]: e.target.value });
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>, limit: number) => {
    setCredit({
      ...credit,
      [e.target.name]: e.target.value.slice(0, limit),
    });
  };

  const handleDropdown = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      setCredit({
        ...credit,
        [ref.current.name]: ref.current.value,
      });
    }
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
