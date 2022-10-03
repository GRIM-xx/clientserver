import React from "react";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Students", "Teachers"],
  datasets: [
    {
      data: [300, 100],
      backgroundColor: ["#DB2777", "#0D9488"],
      hoverOffset: 4,
    },
  ],
};

const DoughnutChart = () => {
  return (
    <div className="flex w-full p-4 font-bold transition-colors duration-500 shadow-lg rounded-xl bg-light-100 text-dark dark:bg-dark dark:text-light">
      <div className="grid w-full grid-cols-1">
        <div className="grid col-span-1 gap-4">
          <h1>Most Active Users</h1>
          <div className="grid grid-cols-1 transition-colors duration-500 rounded-xl bg-light dark:bg-dark-100">
            <Doughnut
              className="p-4"
              data={data}
              height={250}
              options={{ maintainAspectRatio: false }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
