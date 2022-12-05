import React from "react";
import styles from "./OptionSelect.module.css";
import OptionSelectItem from "./OptionSelectItem";
import useActive from "./useActive";
import { useEffect, useRef, useState } from "react";

function OptionSelect({
  placeholder,
  option,
  value,
  name,
  checkMark,
  setState,
}) {
  const [isActive, setIsActive] = useActive(false);
  const [InputTitle, setInputTitleState] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const ref = useRef();

  //console.log(InputTitle, selectedOption);

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

  const optionList = [...option].map((n, i) => (
    <OptionSelectItem
      title={[...option][i]}
      index={i}
      value={value[i]}
      key={n.id}
      setInputTitleState={setInputTitleState}
      setSelectedOption={setSelectedOption}
      selectedOption={selectedOption}
      checkMark={checkMark}
      setState={setState}
    />
  ));

  return (
    <div>
      <div className={styles.container} ref={ref}>
        <input
          className={isActive ? styles.input_active : styles.input}
          type="text"
          placeholder={placeholder}
          onClick={setIsActive}
          value={InputTitle}
          name={name}
        />
        {isActive && <ul className={styles.list_active}>{optionList}</ul>}
      </div>
    </div>
  );
}
export default OptionSelect;
