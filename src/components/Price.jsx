import React from 'react'
import Dropdown from './Dropdown'
import { useState } from "react";

function Price({data,handleChange}) {
  return (
    <div style={{display:"flex", width:"300px"}}>
      <Dropdown
        data={data}
        name={"PriceFrom"}
        handleChange={handleChange}
        placeholder={"Cena od..."}
      ></Dropdown>
      <Dropdown
        data={data}
        name={"PriceTo"}
        handleChange={handleChange}
        placeholder={"Cena do..."}
      ></Dropdown>
    </div>
  );
}

export default Price