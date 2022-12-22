import React from "react";
import styles from "./OptionSelect.module.css";
import useActive from "./useActive";
import { HiCheck } from "react-icons/hi";

function OptionSelectItem({
  title,
  index,
  value,
  setInputTitleState,
  setSelectedOption,
  selectedOption,
  checkMark,
  setState,
}) {
  const [isFocused, setIsFocused] = useActive(false);
  //styles.list_item_active
  //styles.list_item //isFocused

  return (
    <li
      onMouseEnter={setIsFocused}
      onMouseLeave={setIsFocused}
      className={
        selectedOption === index
          ? styles.list_item_active
          : isFocused
          ? styles.list_item_active
          : styles.list_item
      }
      value={value}
      onClick={() => {
        setInputTitleState(() => title);
        setSelectedOption(() => index);
       // setState(value=>value);
      }}
      key={index}
    >
      {title}
      {checkMark && selectedOption === index ? (
        <HiCheck className={styles.checkMark} />
      ) : null}
    </li>
  );
}

export default OptionSelectItem;
