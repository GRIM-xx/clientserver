import React from "react";
import { BarChart, DoughnutChart, LineChart } from "../components";
import { useStateContext } from "../context/ContextProvider";

const Dashboard = () => {
  const { isActive } = useStateContext();

  return (
    <div className="flex flex-col gap-4 px-4 tracking-widest">
      <h1 className="text-2xl transition-all duration-500 text-dark-100 dark:text-light">
        Dashboard
      </h1>
      <div className="flex flex-col justify-between w-full gap-4 font-bold md:flex-row">
        <div className="flex items-center justify-between w-full gap-4 p-4 transition-all duration-500 shadow-lg rounded-xl bg-light-100 text-dark-100 dark:bg-dark dark:text-light">
          <div className="flex flex-col w-full whitespace-nowrap">
            <h3>Active Users</h3>
            <p className="text-4xl font-bold text-dash-pink-100 dark:text-dash-pink">
              1,001
            </p>
          </div>
          <div
            className={`w-full text-sm ${isActive ? "hidden md:flex" : "flex"}`}
          >
            display something
          </div>
        </div>
        <div className="flex items-center justify-between w-full gap-4 p-4 transition-all duration-500 shadow-lg rounded-xl bg-light-100 text-dark-100 dark:bg-dark dark:text-light">
          <div className="flex flex-col w-full whitespace-nowrap">
            <h3>Courses</h3>
            <p className="text-4xl font-bold transition-colors duration-500 text-dash-purple-100 dark:text-dash-purple">
              601
            </p>
          </div>
          <div
            className={`w-full text-sm ${isActive ? "hidden md:flex" : "flex"}`}
          >
            display something
          </div>
        </div>
        <div className="flex items-center justify-between w-full gap-4 p-4 transition-all duration-500 shadow-lg rounded-xl bg-light-100 text-dark-100 dark:bg-dark dark:text-light">
          <div className="flex flex-col w-full whitespace-nowrap">
            <h3>Lessons</h3>
            <p className="text-4xl font-bold transition-colors duration-500 text-dash-green-100 dark:text-dash-green">
              7,524
            </p>
          </div>
          <div
            className={`w-full text-sm ${isActive ? "hidden md:flex" : "flex"}`}
          >
            display something
          </div>
        </div>
      </div>
      <LineChart />
      <div className="flex flex-col gap-4 md:flex-row">
        <DoughnutChart />
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
