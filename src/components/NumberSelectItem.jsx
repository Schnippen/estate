import React from 'react'
import styles from "./NumberSelect.module.css";

function NumberSelectItem({handleFocus,setIsFocused,dupa,isFocused}) {
  return (
    <li
      onMouseEnter={handleFocus}
      onMouseLeave={dupa}
      className={isFocused ? styles.list_item_active : styles.list_item}
    >
      chuj
    </li>
  );
}

export default NumberSelectItem
