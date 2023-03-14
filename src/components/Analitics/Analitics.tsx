import styles from "./Analitics.module.css";
import { useState, useEffect, useCallback } from "react";
import AnaliticsMarket from "./AnaliticsMarket";
import AnaliticsAveragePrice from "./AnaliticsAveragePrice";
import AnaliticsAveragePricePerMeter from "./AnaliticsAveragePricePerMeter";
import Dropdown from "../Dropdown";

function Analitics() {
  const [estateData, setEstateData] = useState<Array<{}>>([]);
  const [inputValue, setInputValue] = useState({
    city: "",
  });

  const fetchDatabase = useCallback(async () => {
    const response = await fetch(`http://localhost:3100/items`);
    const rawData = await response.json();
    setEstateData(rawData);
  }, []);

  useEffect(() => {
    fetchDatabase();
  }, [fetchDatabase]);

  const handleDropdown = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      setInputValue({
        ...inputValue,
        [ref.current.name]: ref.current.value,
      });
    }
  };

  //console.log(inputValue);
  const DropdownData = {
    data: [
      { value: "andrychow", label: "Andrychów" },
      { value: "bedzin", label: "Będzin" },
      { value: "czestochowa", label: "Częstochowa" },
      { value: "gliwice", label: "Gliwice" },
      { value: "katowice", label: "Katowice" },
      { value: "mikolow", label: "Mikołów" },
      { value: "myslowice", label: "Mysłowice" },
      { value: "pszczyna", label: "Pszczyna" },
      { value: "rybnik", label: "Rybnik" },
      { value: "sosnowiec", label: "Sosnowiec" },
      { value: "zabrze", label: "Zabrze" },
    ],
    name: "city",
    placeholder: "Choose a city...",
  };

  return (
    <body className={styles.body}>
      <header className={styles.header}>
        <h1>Analitics</h1>
      </header>
      <article>
        <section className={styles.section}>
          <h2>Share of primary and secondary market</h2>
          <div className={styles.pie}>
            <AnaliticsMarket estateData={estateData} />
          </div>
        </section>
        <section className={styles.section}>
          <h2>Prices in the 10 most populous cities in Poland</h2>
          <div className={styles.bar}>
            <AnaliticsAveragePrice estateData={estateData} />
          </div>
        </section>
        <section className={styles.section}>
          <h2>Average price in m² brackets</h2>
          <div className={styles.grid_container}>
            <div className={styles.bar_chart}>
              <AnaliticsAveragePricePerMeter
                estateData={estateData}
                inputValue={inputValue}
              />
            </div>
            <div className={styles.bar_dropdown}>
              <Dropdown
                data={DropdownData.data}
                name={DropdownData.name}
                placeholder={DropdownData.placeholder}
                handleChange={handleDropdown}
              />
            </div>
          </div>
        </section>
      </article>
    </body>
  );
}

export default Analitics;
