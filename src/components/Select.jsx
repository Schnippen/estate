import React from "react";
import { HiCheck } from "react-icons/hi";

function Select({ data, handleChange, label, labelText, name, placeholder }) {
  return (
    <div>
      {labelText.length > 0 ? (
        <div>
          <label htmlFor={label}>{labelText}</label>
        </div>
      ) : null}
      <select onChange={handleChange} id={label} name={name}>
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {data.map((i) => (
          <option value={i.value} key={i.value}>
            {i.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
