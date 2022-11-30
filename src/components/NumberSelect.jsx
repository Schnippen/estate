import React from "react";
import styles from "./NumberSelect.module.css";
import NumberSelectItem from "./NumberSelectItem";
import useActive from "./useActive";
import { useEffect, useRef } from "react";

function NumberSelect({ placeholder, number, value }) {
  const [isActive, setIsActive] = useActive(false);
  //const [state,setState]=useState('')
  const ref = useRef();

  useEffect(() => {
    const handleClose = (e) => {
      if (isActive && ref.current && !ref.current?.contains(e.target)) {
        setIsActive();
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isActive]);

  const numberList = [...number].map((n, i) => (
    <NumberSelectItem title={[...number][i]} index={i} value={value} key={i} />
  ));

  return (
    <div>
      <div className={styles.container} ref={ref}>
        <input
          className={isActive ? styles.input_active : styles.input}
          type="text"
          placeholder={placeholder}
          onClick={setIsActive}
        />
        {isActive && <ul className={styles.list_active}>{numberList}</ul>}
      </div>
    </div>
  );
}
export default NumberSelect;
