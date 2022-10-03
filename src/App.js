import { lazy, Suspense } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Loader, Navbar, Sidebar } from "./components";
import { useStateContext } from "./context/ContextProvider";

import useDarkMode from "./hook/useDarkMode";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Phishing = lazy(() => import("./pages/Phishing"));
const Training = lazy(() => import("./pages/Training"));

const App = () => {
  const [colorTheme, setColorTheme] = useDarkMode();
  const { isActive } = useStateContext();

  return (
    <div className="relative flex overflow-hidden transition-colors duration-500 bg-light text-light dark:bg-dark-100">
      <Sidebar />
      <div
        className={`flex min-h-screen w-full flex-col bg-light transition-all duration-500 dark:bg-dark-100 ${
          isActive ? "ml-72" : ""
        }`}
      >
        <Navbar />
        <Routes>
          {/*DASHBOARD*/}
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          {/*TEMPLATES*/}
          <Route
            path="/phishing"
            element={
              <Suspense fallback={<Loader />}>
                <Phishing />
              </Suspense>
            }
          />
          <Route
            path="/training"
            element={
              <Suspense fallback={<Loader />}>
                <Training />
              </Suspense>
            }
          />
        </Routes>
      </div>
      <div className="fixed text-xl z-1 bottom-4 right-4">
        <button
          className="p-4 transition-all duration-500 rounded-full shadow bg-primary text-light-100 shadow-dark-100 hover:shadow-dark dark:bg-dark dark:text-light dark:hover:shadow-primary"
          onClick={() => setColorTheme(colorTheme)}
        >
          {colorTheme === "light" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </div>
  );
};

export default App;
