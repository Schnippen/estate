import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AnaliticsAveragePrice({ estateData }: any) {
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

  //Average price on primary and secondary market
  function calculateAvgPrice(estateData: any, item: string) {
    let countAll = 0;
    const totalAverage = estateData.reduce(
      (acc: number, { areaPriceInfo, cityInfo, marketInfo }: any) => {
        if (
          (marketInfo === "wtórny" || marketInfo === "pierwotny") &&
          areaPriceInfo &&
          cityInfo === item
        ) {
          const areaPrice = parseFloat(areaPriceInfo.slice(0, -3));
          if (!isNaN(areaPrice)) {
            countAll++;
            return acc + areaPrice;
          }
        }
        return acc;
      },
      0
    );
    let countPrimary = 0;
    const totalAveragePrimary = estateData.reduce(
      (acc: number, { areaPriceInfo, marketInfo, cityInfo }: any) => {
        if (marketInfo === "pierwotny" && areaPriceInfo && cityInfo === item) {
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
      (acc: number, { areaPriceInfo, marketInfo, cityInfo }: any) => {
        if (marketInfo === "wtórny" && areaPriceInfo && cityInfo === item) {
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
    const avgPrice = (totalAverage / countAll).toFixed(2);
    const avgPricePrimary = (totalAveragePrimary / countPrimary).toFixed(2);
    const avgPriceSecondary = (totalAverageSecondary / countSecondary).toFixed(
      2
    );
    //console.log(avgPrice, avgPricePrimary, avgPriceSecondary);
    return [avgPrice, avgPricePrimary, avgPriceSecondary];
  }
  //calculateAvgPrice(estateData);
  const cities: string[] = Array.from(
    new Set(estateData.map((obj: any) => obj.cityInfo))
  );
  const labels = cities;
  const dataBar = {
    labels,
    datasets: [
      {
        label: "Average Price",
        data: labels.map(
          (item, index) => calculateAvgPrice(estateData, item)[0]
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Average Primary Market Price",
        data: labels.map(
          (item, index) => calculateAvgPrice(estateData, item)[1]
        ),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Average Secondary Market Price",
        data: labels.map(
          (item, index) => calculateAvgPrice(estateData, item)[2]
        ),
        backgroundColor: "rgba(53, 162, 125, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={dataBar} />
    </div>
  );
}

export default AnaliticsAveragePrice;
