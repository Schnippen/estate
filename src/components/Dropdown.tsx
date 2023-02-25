import React from "react";
import styles from "./Dropdown.module.css";
import useActive from "./useActive";
import { useState, useRef, useEffect } from "react";
import { HiCheck } from "react-icons/hi";

interface DropdownProps {
  data: { value: string|number; label: string }[];
  handleChange: (ref: React.RefObject<HTMLInputElement>) => void;
  placeholder: string;
  label?: string;
  name?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  data,
  handleChange,
  placeholder,
  label,
  name,
}) => {
  const [isOpened, setIsOpened] = useActive(false);
  const [InputTitle, setInputTitleState] = useState("");
  const [selectedOption, setSelectedOption] = useState<string|number>("");
  const [highlighted, setHighlighted] = useState<number>();
  const ref = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (isOpened && ref.current && !ref.current?.contains(e.target as Node)) {
        setIsOpened(!isOpened);
      }
    };
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, [isOpened]);

  const handleInputChange = () => {
    handleChange(inputRef);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("change", handleInputChange);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current &&
          inputRef.current.removeEventListener("change", handleInputChange);
      }
    };
  }, [selectedOption]);

  return (
    <div className={styles.container} ref={ref}>
      {label ? <label htmlFor={label}>{label}</label> : null}
      <input
        id={label}
        type="text"
        className={isOpened ? styles.input_active : styles.input}
        onClick={()=>setIsOpened(!isOpened)}
        placeholder={placeholder}
        value={InputTitle}
      />
      <input type="hidden" value={selectedOption} ref={inputRef} name={name} />
      {isOpened && (
        <ul
          className={styles.list_active}
          style={{
            height: `${data.length * 32 > 200 ? 200 : data.length * 32}px`,
            overflowY: `${data.length * 32 > 200 ? "scroll" : "visible"}`,
          }}
        >
          {data.map((item, index: number) => (
            <li
              key={index}
              value={item.value}
              onClick={() => {
                setInputTitleState(() => item.label);
                setSelectedOption(() => item.value);
                setHighlighted(() => index);
                setIsOpened(!isOpened);
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
};

export default Dropdown;
