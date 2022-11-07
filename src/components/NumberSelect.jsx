import React from "react";
import styles from "./NumberSelect.module.css";
import { useState } from "react";
import NumberSelectItem from "./NumberSelectItem";

function NumberSelect({placeholder,number}) {
  const [isActive, setIsActive] = useState(false);

  const handleActiveDropDown = () => {
    setIsActive((current) => !current);
  };

  /*const Values = {
    0: 0,
    1: 50000,
    2: 10000,
    3: 150000,
  };*/  


  const numberList = [...number].map((n, i) => (
    <NumberSelectItem title={[...number][i]} index={i} />
  ));

  //<li>{array[i]}</li>

  return (
    <div>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder={placeholder}
          onClick={handleActiveDropDown}
          //value={0}
        />
        <ul className={isActive ? styles.list_active : styles.list}>
          {numberList}
        </ul>
      </div>
    </div>
  );
}

export default NumberSelect;
