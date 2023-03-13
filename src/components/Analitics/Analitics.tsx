import styles from "./Analitics.module.css";

import { useState, useEffect, useCallback } from "react";
import AnaliticsMarket from "./AnaliticsMarket";
import AnaliticsAveragePrice from "./AnaliticsAveragePrice";
function Analitics() {
  const [estateData, setEstateData] = useState<Array<{}>>([]);

  const fetchDatabase = useCallback(async () => {
    const response = await fetch(`http://localhost:3100/items`);
    const rawData = await response.json();
    setEstateData(rawData);
  }, []);

  useEffect(() => {
    fetchDatabase();
  }, [fetchDatabase]);

  return (
    <body className={styles.body}>
      <h2>Analitics</h2>
      <section>
        <div className={styles.pie}>
          <AnaliticsMarket estateData={estateData} />
        </div>
      </section>
      <section>
        <div className={styles.bar}>
          ceny w miastach, diagram słupkowy - pierwotny wtórny
          <AnaliticsAveragePrice estateData={estateData} />
        </div>
      </section>
      <section>
        <div>za dany przedział metrów &gt;30,30-40 50 60, etc</div>
      </section>
    </body>
  );
}

export default Analitics;
