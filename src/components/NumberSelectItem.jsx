import React from "react";
import styles from "./NumberSelect.module.css";
import useActive from "./useActive";

function NumberSelectItem({ title, index, value }) {
  const [isFocused, setIsFocused] = useActive(false);
  //const [selected, setSelected] = useState(0);

  return (
    <li
      onMouseEnter={setIsFocused}
      onMouseLeave={setIsFocused}
      className={isFocused ? styles.list_item_active : styles.list_item}
      value={value}
    >
      {title}
      {index}
    </li>
  );
}

export default NumberSelectItem;
