import React from "react";
import CreateFormInput from "./CreateFormInput";

function CreateFormBasicInfromation() {
  const basicData = [
    {
      label: "pietro",
      name: "pipa",
      placeholder: "Wpisz Piętro",
      labelText: "pietro",
      value: "default",
    },
    {
      label: "pietro",
      name: "pipa",
      placeholder: "Wpisz Piętro",
      labelText: "pietro",
      value: "default",
    },
  ];

  return (
    <section>
      <h3>Informacje podstawowe</h3>
      poweirczhnia liczba pokoi cena check cena do negocjacji pietro liczba
      pieter
      {basicData.map((item) => (
        <CreateFormInput data={item} />
      ))}
      <input type="text" inputmode="numeric" pattern="\d*" />
    </section>
  );
}

export default CreateFormBasicInfromation;
