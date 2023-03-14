import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function AnaliticsMarket({ estateData }: any) {
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
  const options = {
    plugins: {
      title: {
        display: true,
        text: `${"city"}`,
      },
    },
  };
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

  return (
    <div>
      <Pie data={dataPie} options={options} />
    </div>
  );
}

export default AnaliticsMarket;
