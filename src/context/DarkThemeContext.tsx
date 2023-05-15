import React, { useState, useEffect, createContext } from "react";

const DarkThemeContext = createContext<{
  toggleTheme: () => void;
}>({ toggleTheme: () => {} });

export const DarkThemeContextProvider = ({ children }: { children: any }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("DarkTheme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkTheme) {
      root.style.setProperty("--primary-color", "#63768d");
      root.style.setProperty("--secondary-color", "#554971");
      root.style.setProperty("--tertiary-color", "#36213e");
      root.style.setProperty("--quaternary-color", "#051034");
      root.style.setProperty("--background-color", "#F5F5F5");
      root.style.setProperty("--article", "#fbfbfb");
      root.style.setProperty("--text-background", "#f5f8fb");
      root.style.setProperty("--disabled", "#57555e");
      root.style.setProperty("--primary-text-color", "#efe7e7");
      root.style.setProperty("--secondary-text-color", "#141212");
      root.style.setProperty("--tertiary-text-color", "#daa520");
      localStorage.setItem("DarkTheme", "false");
    } else {
      root.style.setProperty("--primary-color", "#172f55");
      root.style.setProperty("--secondary-color", "#313066");
      root.style.setProperty("--tertiary-color", "#7a576e");
      root.style.setProperty("--quaternary-color", "#a888c3");
      root.style.setProperty("--background-color", "#acacac");
      root.style.setProperty("--article", "#c7c7c7");
      root.style.setProperty("--text-background", "#f5f8fb");
      root.style.setProperty("--disabled", "#57555e");
      root.style.setProperty("--primary-text-color", "#efe7e7");
      root.style.setProperty("--secondary-text-color", "#141212");
      root.style.setProperty("--tertiary-text-color", "#FFEBC9");
      localStorage.setItem("DarkTheme", "true");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <DarkThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export default DarkThemeContext;
