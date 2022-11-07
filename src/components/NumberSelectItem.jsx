import React from 'react'
import styles from "./NumberSelect.module.css";
import {useState,useRef} from 'react';

function NumberSelectItem({title,index}) {

  const [isFocused, setIsFocused] = useState(false);
  const [selected, setSelected] = useState(0);

  const handleFocus=()=>{
    setIsFocused((current)=>!current);
    console.log(isFocused);
  };

  const handleOutOfFocus=()=>{
    setIsFocused(current=>!current)
  }
  
  const ref =useRef()

  console.log(index);

  return (
    <li
      onMouseEnter={handleFocus}
      onMouseLeave={handleOutOfFocus}
      className={ isFocused ? styles.list_item_active : styles.list_item}
    >{title}{index}
    </li>
  );
}

export default NumberSelectItem
