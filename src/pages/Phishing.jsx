import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import { caretAnimation } from "../animation";
import { Dropdown, Pagination } from "../components";
import { useStateContext } from "../context/ContextProvider";
import { controls } from "../data/site.data";

const Phishing = () => {
  const { handleClick, isOpen, setIsOpen, screenSize } = useStateContext();

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (
        (isOpen.action && ref.current && !ref.current.contains(e.target)) ||
        (isOpen.delete && ref.current && !ref.current.contains(e.target))
      ) {
        setIsOpen(((isOpen.action = false), (isOpen.delete = false)));
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div className="flex flex-col gap-4 px-4 tracking-widest">
      <h1 className="text-2xl transition-all duration-500 text-dark dark:text-light">
        Phishing
      </h1>
      <div className="flex flex-col gap-4 p-4 transition-colors duration-500 shadow-lg rounded-xl bg-light-100 dark:bg-dark">
        <div ref={ref} className="relative w-full text-left">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 px-4 py-2 transition-colors duration-500 rounded-xl bg-light-100 text-dark-100 ring-1 ring-dark-100 dark:bg-dark-100 dark:text-light">
              <i>
                <FaSearch />
              </i>
              <input
                type="text"
                placeholder="Search"
                className="w-48 transition-colors duration-500 outline-none bg-light-100 dark:bg-dark-100"
              />
            </div>
            <div className="flex gap-4">
              {screenSize <= 600
                ? controls.map((control, i) => (
                    <button
                      key={i}
                      type="button"
                      className="p-2 transition-colors duration-500 rounded-lg shadow-lg bg-primary text-light-100"
                      onClick={() => handleClick(control.title)}
                    >
                      {control.icon}
                    </button>
                  ))
                : controls.map((control, i) => (
                    <button
                      key={i}
                      type="button"
                      className="flex items-center gap-2 px-4 py-2 font-bold rounded-xl bg-primary text-light-100"
                      onClick={() => handleClick(control.title)}
                    >
                      <span className="capitalize">{control.title}</span>
                      <motion.i
                        animate={isOpen[control.title] ? "collapse" : "closed"}
                        variants={caretAnimation}
                      >
                        <FaCaretDown />
                      </motion.i>
                    </button>
                  ))}
            </div>
          </div>
          <Dropdown />
        </div>
      </div>
      <div className="flex p-4 transition-colors duration-500 shadow-xl rounded-xl bg-light-100 dark:bg-dark">
        <Pagination />
      </div>
    </div>
  );
};

export default Phishing;
