import { useState } from "react";

export default function useActive(defaultValue) {
  const [value, setIsActive] = useState(defaultValue);

  function toggleActive(value) {
    setIsActive((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleActive];
}
