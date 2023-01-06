import React from "react";
import Dropdown from "../Dropdown";

function DropdownNumberOfFloors({ data, handleChange }) {
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
