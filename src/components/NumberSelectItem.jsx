import React from "react";
import styles from "./NumberSelect.module.css";
import useActive from "./useActive";
import { HiCheck } from "react-icons/hi";

function NumberSelectItem({
  title,
  index,
  value,
  setState,
  setSelected,
  selected,
  checkMark,
}) {
  const [isFocused, setIsFocused] = useActive(false);
  //styles.list_item_active
  //styles.list_item //isFocused

  return (
    <li
      onMouseEnter={setIsFocused}
      onMouseLeave={setIsFocused}
      className={
        selected === index ? styles.list_item_active:
        isFocused?  styles.list_item_active : styles.list_item
      }
      value={value}
      onClick={() => {
        setState(() => title);
        setSelected(() => index);
      }}
    >
      {title}
      {checkMark && selected === index ? (
        <HiCheck className={styles.checkMark} />
      ) : null}
    </li>
  );
}

export default NumberSelectItem;
