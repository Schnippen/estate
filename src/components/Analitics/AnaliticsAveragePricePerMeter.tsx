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

function AnaliticsAveragePricePerMeter({
  estateData,
  inputValue,
}: {
  estateData: any;
  inputValue: {
    city: string;
  };
}) {
  const labelValues = [
    "Andrychów",
    "Będzin",
    "Częstochowa",
    "Gliwice",
    "Katowice",
    "Mikołów",
    "Mysłowice",
    "Pszczyna",
    "Rybnik",
    "Sosnowiec",
    "Zabrze",
  ];
  const array = [
    "andrychow",
    "bedzin",
    "czestochowa",
    "gliwice",
    "katowice",
    "mikolow",
    "myslowice",
    "pszczyna",
    "rybnik",
    "sosnowiec",
    "zabrze",
  ];

  const city = inputValue.city;
  const index = array.indexOf(city);
  const labelValue =
    index !== -1 ? labelValues[index] : "no city has been selected";

  function calculateAvgPricePerMeter(
    estateData: any,
    city: string,
    index: number
  ) {
    let valuesArray = [30, 40, 50, 60, 70, 80, 1000];
    let countAveragePrimarySecondary = 0;
    const totalAverage = estateData.reduce(
      (acc: number, { areaPriceInfo, cityInfo, marketInfo, areaInfo }: any) => {
        if (areaInfo) {
          const area = parseInt(areaInfo.trim().slice(0, -3));
          if (
            (marketInfo === "wtórny" || marketInfo === "pierwotny") &&
            areaPriceInfo &&
            cityInfo === city &&
            area >= valuesArray[index] &&
            area <= valuesArray[index + 1]
          ) {
            const areaPrice = parseInt(areaPriceInfo.trim().slice(0, -3));
            if (!isNaN(areaPrice)) {
              countAveragePrimarySecondary++;
              return acc + areaPrice;
            }
          }
        }
        return acc;
      },
      0
    );
    let countPrimary = 0;
    const totalAveragePrimary = estateData.reduce(
      (acc: number, { areaPriceInfo, cityInfo, marketInfo, areaInfo }: any) => {
        if (areaInfo) {
          const area = parseInt(areaInfo.trim().slice(0, -3));
          if (
            marketInfo === "pierwotny" &&
            areaPriceInfo &&
            cityInfo === city &&
            area >= 0 &&
            area <= 30
          ) {
            const areaPrice = parseInt(areaPriceInfo.trim().slice(0, -3));
            if (!isNaN(areaPrice)) {
              countPrimary++;
              return acc + areaPrice;
            }
          }
        }
        return acc;
      },
      0
    );
    let countSecondary = 0;
    const totalAverageSecondary = estateData.reduce(
      (acc: number, { areaPriceInfo, cityInfo, marketInfo, areaInfo }: any) => {
        if (areaInfo) {
          const area = parseInt(areaInfo.trim().slice(0, -3));
          if (
            marketInfo === "wtórny" &&
            areaPriceInfo &&
            cityInfo === city &&
            area >= 0 &&
            area <= 30
          ) {
            const areaPrice = parseInt(areaPriceInfo.trim().slice(0, -3));
            if (!isNaN(areaPrice)) {
              countSecondary++;
              return acc + areaPrice;
            }
          }
        }
        return acc;
      },
      0
    );

    const avgPrice = (totalAverage / countAveragePrimarySecondary).toFixed(2);
    const avgPricePrimary = (totalAveragePrimary / countPrimary).toFixed(2);
    const avgPriceSecondary = (totalAverageSecondary / countSecondary).toFixed(
      2
    );
    //console.log(valuesArray[index], valuesArray[index + 1]);
    //console.log(avgPrice, avgPricePrimary, avgPriceSecondary);
    return [avgPrice, avgPricePrimary, avgPriceSecondary];
  }
  const labels = [
    "<30 m²",
    "30-40 m²",
    "40-50 m²",
    "50-60 m²",
    "70-80 m²",
    "80< m²",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "Market Average",
        data: labels.map(
          (item, index) => calculateAvgPricePerMeter(estateData, city, index)[0]
        ),
        borderColor: "rgba(255, 99, 132, 0.9)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Primary Market",
        data: labels.map(
          (item, index) => calculateAvgPricePerMeter(estateData, city, index)[1]
        ),
        borderColor: "rgba(53, 162, 235, 0.9)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Secondary Market",
        data: labels.map(
          (item, index) => calculateAvgPricePerMeter(estateData, city, index)[2]
        ),
        borderColor: "rgba(53, 162, 125, 0.9)",
        backgroundColor: "rgba(53, 162, 125, 0.5)",
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: `${labelValue}`,
      },
    },
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default AnaliticsAveragePricePerMeter;
