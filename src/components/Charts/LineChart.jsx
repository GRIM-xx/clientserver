import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.3,
      backgroundColor: "#DB2777",
      borderColor: "#DB2777",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "#DB2777",
      pointBackgroundColor: "#F5F6F8",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "#DB2777",
      pointHoverBorderColor: "#F5F6F8",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const LineChart = () => {
  return (
    <div className="flex p-4 font-bold transition-colors duration-500 shadow-lg rounded-xl bg-light-100 text-dark-100 dark:bg-dark dark:text-light">
      <div className="grid w-full grid-cols-1">
        <div className="grid col-span-1 gap-4">
          <h1>Tracking Data</h1>
          <div className="grid grid-cols-1 transition-colors duration-500 rounded-xl bg-light dark:bg-dark-100">
            <Line className="p-2" data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
