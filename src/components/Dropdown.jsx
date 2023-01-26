import React from "react";
import styles from "./Dropdown.module.css";
import useActive from "./useActive";
import { useState, useRef, useEffect } from "react";
import { HiCheck } from "react-icons/hi";

function Dropdown({ data, handleChange, placeholder, label, name }) {
  const [isOpened, setIsOpened] = useActive(false);
  const [InputTitle, setInputTitleState] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [highlighted, setHighlighted] = useState("");
  const ref = useRef();
  const inputRef = useRef(0);

  useEffect(() => {
    const handleClose = (e) => {
      if (isOpened && ref.current && !ref.current?.contains(e.target)) {
        setIsOpened();
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isOpened]);

  useEffect(() => {
    inputRef.current.addEventListener("change", handleChange(inputRef));
    return () =>
      inputRef.current &&
      inputRef.current.removeEventListener("change", handleChange(inputRef));
  }, [selectedOption]);
  //console.log(selectedOption)
  return (
    <div className={styles.container} ref={ref}>
      {label ? <label htmlFor={label}>{label}</label> : null}
      <input
        id={label}
        type="text"
        className={isOpened ? styles.input_active : styles.input}
        onClick={setIsOpened}
        placeholder={placeholder}
        value={InputTitle}
      />
      <input type="hidden" value={selectedOption} ref={inputRef} name={name} />
      {isOpened && (
        <ul className={styles.list_active}>
          {data.map((item, index) => (
            <li
              key={index}
              value={item.value}
              onClick={() => {
                setInputTitleState(() => item.label);
                setSelectedOption(() => item.value);
                setHighlighted(() => index);
                setIsOpened();
              }}
              className={
                index === highlighted
                  ? styles.list_item_active
                  : styles.list_item
              }
            >
              {item.label}
              {index === highlighted ? (
                <HiCheck className={styles.checkMark} />
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
