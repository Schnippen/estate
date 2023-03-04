import React, { useState, useEffect, createContext } from "react";

const DarkThemeContext = createContext<{
  toggleTheme: () => void;
}>({ toggleTheme: () => {} });

export const DarkThemeContextProvider = ({ children }: { children: any }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkTheme) {
      root.style.setProperty("--primary-color", "#0E0E07");
      root.style.setProperty("--secondary-color", "#2D3142");
      root.style.setProperty("--tertiary-color", "#291A15");
      root.style.setProperty("--quaternary-color", "#08050F");
      root.style.setProperty("--background-color", "white");
      root.style.setProperty("--article", "#fff");
      root.style.setProperty("--text-background", "#f5f8fb");
      root.style.setProperty("--disabled", "#57555e");
      root.style.setProperty("--primary-text-color", "#efe7e7");
      root.style.setProperty("--secondary-text-color", "#141212");
      root.style.setProperty("--tertiary-text-color", "#daa520");
    } else {
      root.style.setProperty("--primary-color", "#63768d");
      root.style.setProperty("--secondary-color", "#554971");
      root.style.setProperty("--tertiary-color", "#36213e");
      root.style.setProperty("--quaternary-color", "#051034");
      root.style.setProperty("--background-color", "white");
      root.style.setProperty("--article", "#fff");
      root.style.setProperty("--text-background", "#f5f8fb");
      root.style.setProperty("--disabled", "#57555e");
      root.style.setProperty("--primary-text-color", "#efe7e7");
      root.style.setProperty("--secondary-text-color", "#141212");
      root.style.setProperty("--tertiary-text-color", "#daa520");
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
