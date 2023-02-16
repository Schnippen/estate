import { useState } from "react";
type ReturnValue = [boolean, (value: boolean) => void];
export default function useActive(defaultValue:boolean): ReturnValue {
  const [value, setIsActive] = useState(defaultValue);

  function toggleActive(value:boolean) {
    setIsActive((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleActive];
}
