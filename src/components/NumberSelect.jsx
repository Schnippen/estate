import React from "react";
import styles from "./NumberSelect.module.css";
import { useState } from "react";
import NumberSelectItem from "./NumberSelectItem";

function NumberSelect() {
  const [isActive, setIsActive] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleActive = () => {
    setIsActive((current) => !current);
  };

  const handleFocus=()=>{
    setIsFocused((current)=>!current);
    console.log(isFocused);
  };

  const handleOutOfFocus=()=>{
    setIsFocused(current=>!current)
  }

  const Values = {
    0:0,
    1:50000,
    2:10000,
    3:150000,
  };

  const handleSelect=(e)=>{
    const choosed = parseInt(e.target.value);
    setSelected(choosed=>choosed);
    console.log(choosed)
  };

  return (
    <div className={styles.back}>
      <label>cena gówna</label>
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder="Od"
          onClick={handleActive}
          defaultValue={selected}
          //value={0}
        />
        <ul className={isActive ? styles.list_active : styles.list}>
          <li
            onMouseEnter={handleFocus}
            onMouseLeave={handleOutOfFocus}
            className={isFocused ? styles.list_item_active : styles.list_item}
            onClick={handleSelect}
            //value={Values[0]}
          >
            Dowolna
          </li>
          <li onClick={handleSelect} //value={Values[1]}
          >
            50 000
          </li>
          <NumberSelectItem handleFocus={handleFocus} setIsFocused={setIsFocused} dupa={handleOutOfFocus} isFocused={isFocused}/>
          <li>150 000</li>
          <li>200 000</li>
          <li>250 000</li>
          <li>300 000</li>
          <li>350 000</li>
          <li>400 000</li>
          <li>450 000</li>
          <li>500 000</li>
          <li>600 000</li>
          <li>700 000</li>
          <li>1 000 000</li>
          <li>2 000 000</li>
          <li>4 000 000</li>
        </ul>
      </div>
    </div>
  );
}

export default NumberSelect;
