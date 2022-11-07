import React from "react";
import styles from "./NumberSelect.module.css";
import { useState} from "react";
import NumberSelectItem from "./NumberSelectItem";

function NumberSelect({Array}) {

  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive((current) => !current);
  };

  const Values = {
    0:0,
    1:50000,
    2:10000,
    3:150000,
  };

  const numberList = Array.map((n,i)=><NumberSelectItem title={Array[i]} index={i}/>);

  //<li>{array[i]}</li>

  return (
    <div className={styles.back}>
      <label>cena gówna</label>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder="Od"
          onClick={handleActive}
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