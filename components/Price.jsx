import React from "react";
import Dropdown from "./Dropdown";

function Price({ data, handleChange }) {
  return (
    <div
      style={{
        display: "flex",
        width: "300px",
        backgroundColor: "#fff",
        borderRadius: "5px",
      }}
    >
      <Dropdown
        data={data}
        name={"PriceFrom"}
        handleChange={handleChange}
        placeholder={"Cena od..."}
      ></Dropdown>
      <div style={{ height: "40px", border: "solid #554971" }}></div>
      <Dropdown
        data={data}
        name={"PriceTo"}
        handleChange={handleChange}
        placeholder={"Cena do..."}
      ></Dropdown>
    </div>
  );
}

export default Price;
