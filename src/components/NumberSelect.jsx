import React from "react";
import styles from "./NumberSelect.module.css";
import NumberSelectItem from "./NumberSelectItem";
import useActive from "./useActive";
import { useEffect, useRef,useState } from "react";

function NumberSelect({ placeholder, number, value, name, checkMark }) {
  const [isActive, setIsActive] = useActive(false);
  const [state,setState]=useState(0);
  const [selected, setSelected] = useState(0);
  const ref = useRef();

console.log(state,selected)

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
    <NumberSelectItem title={[...number][i]} index={i} value={value} key={i} setState={setState} setSelected={setSelected} selected={selected} checkMark={checkMark}/>
  ));

  return (
    <div>
      <div className={styles.container} ref={ref}>
        <input
          className={isActive ? styles.input_active : styles.input}
          type="text"
          placeholder={placeholder}
          onClick={setIsActive}
          value={state}
          name={name}
        />
        {isActive && <ul className={styles.list_active}>{numberList}</ul>}
      </div>
    </div>
  );
}
export default NumberSelect;
