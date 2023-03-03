import React from "react";
import Dropdown from "../Dropdown";

type DropdownNumberOfFloorsTypes = {
  data: {
    value: string|number;
    label: string;
  }[];
  handleChange: (ref: React.RefObject<HTMLInputElement>) => void;
};


function DropdownNumberOfFloors({ data, handleChange }:DropdownNumberOfFloorsTypes) {
  return (
    <div
      style={{
        display: "flex",
        width: "280px",
        backgroundColor: "#fff",
        borderRadius: "5px",
      }}
    >
      <Dropdown
        data={data}
        name={"floorFrom"}
        handleChange={handleChange}
        placeholder={"Wybierz"}
      ></Dropdown>
      <div style={{ height: "40px", border: "solid #554971" }}></div>
      <Dropdown
        data={data}
        name={"floorTo"}
        handleChange={handleChange}
        placeholder={"Wybierz"}
      ></Dropdown>
    </div>
  );
}
export default DropdownNumberOfFloors;
