import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { caretAnimation } from "../animation";
import { EntryDropdown, PhishingTable } from "../components";
import { useStateContext } from "../context/ContextProvider";

const Pagination = () => {
  const { handleClick, isOpen, setIsOpen } = useStateContext();

  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen.entry && ref.current && !ref.current.contains(e.target)) {
        setIsOpen((isOpen.entry = false));
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div className="flex flex-col w-full gap-4">
      <div ref={ref} className="relative text-left">
        <div className="flex items-center gap-2 text-sm transition-colors duration-100 text-dark-100 dark:text-light">
          <p>Show</p>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm shadow-sm rounded-xl bg-primary text-light-100"
            onClick={() => handleClick("entry")}
          >
            20
            <motion.i
              animate={isOpen.entry ? "collapse" : "closed"}
              variants={caretAnimation}
            >
              <FaCaretDown />
            </motion.i>
          </button>
          <p>entries</p>
        </div>
        <EntryDropdown />
      </div>
      <PhishingTable />
    </div>
  );
};

export default Pagination;
