import React from "react";
import styles from "./ItemSideArticleCredit.module.css";
import NumberSelect from "../components/NumberSelect";
import bank1 from "../assets/banks/alior.png";
import bank2 from "../assets/banks/bgz.png";
import bank3 from "../assets/banks/bos.png";
import bank4 from "../assets/banks/bps.png";
import bank5 from "../assets/banks/citi_handlowy.png";
import bank6 from "../assets/banks/ing.png";
import bank7 from "../assets/banks/mbank.png";
import bank8 from "../assets/banks/millennium.png";
import bank9 from "../assets/banks/pekao.png";
import bank10 from "../assets/banks/pko_bp.png";
import bank11 from "../assets/banks/santander.png";

function ItemSideArticleCredit() {
  return (
    <div className={styles.section_container_credit}>
      <header>
        <h3>Wybierz najkorzystniej</h3>
      </header>
      <div className={styles.credit_wrapper}>
        <div className={styles.credit_input}>
          <label>wartość nieruchomości</label>
          <input type="number" placeholder="123 000" />
        </div>
        <div className={styles.credit_input}>
          <label>okres kredytu</label>
          <NumberSelect
            number={["5 lat", "10 lat", "15 lat", "20 lat", "25 lat", "30 lat"]}
          />
        </div>
      </div>
      <div className={styles.credit_submit}>
        <input type="submit" className={styles.submit} value="Oblicz" />
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
    </div>
  );
}

export default ItemSideArticleCredit;
