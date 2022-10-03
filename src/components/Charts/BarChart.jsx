import React from "react";
import { Chart } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Courses",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "#0D9488",
        "#0D9488",
        "#DB2777",
        "#DB2777",
        "#9333EA",
        "#9333EA",
        "#EAB308",
      ],
    },
  ],
};

const BarChart = () => {
  return (
    <div className="flex w-full p-4 font-bold transition-colors duration-500 shadow-lg rounded-xl bg-light-100 text-dark dark:bg-dark dark:text-light">
      <div className="grid w-full grid-cols-1">
        <div className="grid col-span-1 gap-4">
          <h1>Popular Courses</h1>
          <div className="grid grid-cols-1 transition-colors duration-500 rounded-xl bg-light dark:bg-dark-100">
            <Bar
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

export default BarChart;
