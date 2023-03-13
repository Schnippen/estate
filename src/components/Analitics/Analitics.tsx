import styles from "./Analitics.module.css";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { useState, useEffect, useCallback } from "react";

function Analitics() {
  const [estateData, setEstateData] = useState([]);

  const fetchDatabase = useCallback(async () => {
    const response = await fetch(`http://localhost:3100/items`);
    const rawData = await response.json();
    setEstateData(rawData);
  }, []);

  useEffect(() => {
    fetchDatabase();
  }, [fetchDatabase]);

  const market = (estateData: any) => {
    let rynekPierwotny = 0;
    let rynekWtórny = 0;
    for (const { marketInfo } of estateData) {
      if (marketInfo === "pierwotny") {
        rynekPierwotny++;
      }
      if (marketInfo === "wtórny") {
        rynekWtórny++;
      }
    }
    const rynekArray = [rynekPierwotny, rynekWtórny];
    return rynekArray;
  };

  //średnia cena na wtórnym pierowtnym
  function calculateAvgPrice(estateData: any) {
    const totalAverage = estateData.reduce(
      (acc: number, { areaPriceInfo }: any) => {
        if (areaPriceInfo) {
          const areaPrice = parseFloat(areaPriceInfo.slice(0, -3));
          if (!isNaN(areaPrice)) {
            return acc + areaPrice;
          }
        }
        return acc;
      },
      0
    );
    let countPrimary = 0;
    const totalAveragePrimary = estateData.reduce(
      (acc: number, { areaPriceInfo, marketInfo }: any) => {
        if (marketInfo === "pierwotny" && areaPriceInfo) {
          const areaPrice = parseFloat(areaPriceInfo.slice(0, -3));
          if (!isNaN(areaPrice)) {
            countPrimary++;
            return acc + areaPrice;
          }
        }
        return acc;
      },
      0
    );
    let countSecondary = 0;
    const totalAverageSecondary = estateData.reduce(
      (acc: number, { areaPriceInfo, marketInfo }: any) => {
        if (marketInfo === "wtórny" && areaPriceInfo) {
          const areaPrice = parseFloat(areaPriceInfo.slice(0, -3));
          if (!isNaN(areaPrice)) {
            countSecondary++;
            return acc + areaPrice;
          }
        }
        return acc;
      },
      0
    );
    const avgPrice = (totalAverage / estateData.length).toFixed(2);
    const avgPricePrimary = (totalAveragePrimary / countPrimary).toFixed(2);
    const avgPriceSecondary = (totalAverageSecondary / countSecondary).toFixed(
      2
    );
    console.log(avgPrice, avgPricePrimary, avgPriceSecondary);
    return [avgPrice, avgPricePrimary, avgPriceSecondary];
  }
  calculateAvgPrice(estateData);
  //console.log(estateData);
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    Title
  );
  const dataPie = {
    labels: ["Primary market", "Secondary market"],
    datasets: [
      {
        label: "Number of offers",
        data: market(estateData),
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Average prices of m2 per city and market",
      },
    },
  };

  const labels = ["Katowice", "sosnowiec"];
  const dataBar = {
    labels,
    datasets: [
      {
        label: "Average Price",
        data: labels.map(() => calculateAvgPrice(estateData)[0]),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Primary Market",
        data: labels.map(() => calculateAvgPrice(estateData)[1]),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Secondary Market",
        data: labels.map(() => calculateAvgPrice(estateData)[2]),
        backgroundColor: "rgba(53, 162, 125, 0.5)",
      },
    ],
  };
  return (
    <body className={styles.body}>
      Analitics
      <div className={styles.pie}>
        ilosc pierwotnego i wtornego na rynku - PIE
        <Pie data={dataPie} />;
      </div>
      <div>ceny w miastach, diagram słupkowy - pierwotny wtórny</div>
      <div className={styles.bar}>
        średnia cena na pierwotnym, srednia cena na wtórnym za dany przedział
        metrów &gt;30,30-40, etc
        <Bar options={options} data={dataBar} />
      </div>
      <div></div>
    </body>
  );
}

export default Analitics;

/*function calculateAvgPrice(data) {
  const totalPrices = data.map(item => item.price);
  const totalSizes = data.map(item => item.size);
  const totalPrice = totalPrices.reduce((acc, curr) => acc + curr);
  const totalSize = totalSizes.reduce((acc, curr) => acc + curr);
  const avgPricePerSqM = totalPrice / totalSize;
  return avgPricePerSqM;
}*/

/*  const fetchDatabase: () => Promise<void> = async () => {
    const response = await fetch(`http://localhost:3100/items`);
    const data = await response.json();
    const filteredData = await getFavorite(data);
    setDatabaseState(filteredData);
    setIsLoading(false);
  }; areaPriceInfo   */