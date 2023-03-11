import React from "react";
import Dropdown from "./Dropdown";

type PriceTypes = {
  data: {
    value: number;
    label: string;
  }[];
  handleChange: (ref: React.RefObject<HTMLInputElement>) => void;
};

function Price({ data, handleChange }: PriceTypes) {
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
      <div style={{ height: "40px", border: "solid var(--secondary-color)" }}></div>
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
