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
import { count } from "console";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AnaliticsAveragePricePerMeter({ estateData }: any) {
  //   areaInfo
  //areaPriceInfo

  const city = "katowice";

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
          const area = parseFloat(areaInfo.slice(0, -3));
          if (
            (marketInfo === "wtórny" || marketInfo === "pierwotny") &&
            areaPriceInfo &&
            cityInfo === city &&
            area >= valuesArray[index] &&
            area <= valuesArray[index + 1]
          ) {
            const areaPrice = parseFloat(areaPriceInfo.slice(0, -3));
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
          const area = parseFloat(areaInfo.slice(0, -3));
          if (
            marketInfo === "pierwotny" &&
            areaPriceInfo &&
            cityInfo === city &&
            area >= 0 &&
            area <= 30
          ) {
            const areaPrice = parseFloat(areaPriceInfo.slice(0, -3));
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
          const area = parseFloat(areaInfo.slice(0, -3));
          if (
            marketInfo === "wtórny" &&
            areaPriceInfo &&
            cityInfo === city &&
            area >= 0 &&
            area <= 30
          ) {
            const areaPrice = parseFloat(areaPriceInfo.slice(0, -3));
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
  const labels = ["<30", "30-40", "40-50", "50-60", "70-80", "80<"];
  const data = {
    labels,
    datasets: [
      {
        label: "Primary & Secondary Market",
        data: labels.map(
          (item, index) => calculateAvgPricePerMeter(estateData, city, index)[0]
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Primary Market",
        data: labels.map(
          (item, index) => calculateAvgPricePerMeter(estateData, city, index)[1]
        ),
        borderColor: "rgb(255, 99, 242)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Secondary Market",
        data: labels.map(
          (item, index) => calculateAvgPricePerMeter(estateData, city, index)[2]
        ),
        borderColor: "rgb(215, 99, 242)",
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
        text: `${city}`,
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
