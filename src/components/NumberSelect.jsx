import React from "react";
import styles from "./NumberSelect.module.css";
import NumberSelectItem from "./NumberSelectItem";
import useActive from "./useActive";
import { useEffect,useRef} from 'react';

function NumberSelect({ placeholder, number }) {
  const [isActive, setIsActive] = useActive(false);
  const ref = useRef();

useEffect(() => {  
  const handleClose = (e) =>{
    if(isActive && ref.current && !ref.current.contains(e.target)){
      setIsActive()
    }
  }
  document.addEventListener("click",handleClose);
  return () => {
   document.removeEventListener("click",handleClose);
  };
}, [isActive])

  /*const Values = {
    0: 0,
    1: 50000,
    2: 10000,
    3: 150000,
  };*/

  const numberList = [...number].map((n, i) => (
    <NumberSelectItem title={[...number][i]} index={i} />
  ));

  return (
    <div>
      <div className={styles.container}>
        <input
          className={isActive ? styles.input_active : styles.input}
          type="text"
          placeholder={placeholder}
          onClick={setIsActive}
          //value={0}
          //czy lepiej renderowac czy miec display none? \/
        /> 
        <ul ref={ref} className={isActive ? styles.list_active : styles.list}>
          {numberList}
        </ul>
      </div>
    </div>
  );
}

export default NumberSelect;

/*        {isActive && <ul ref={ref} className={ styles.list_active}>           {numberList}
        </ul>} */