import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { dropDownItems, dropDownMenu, variants } from "../animation";
import { useStateContext } from "../context/ContextProvider";
import { controls, entries } from "../data/site.data";

const Dropdown = () => {
  const { isOpen } = useStateContext();

  return (
    <AnimatePresence mode="wait">
      {controls.map(
        (control, i) =>
          isOpen[control.title] && (
            <motion.div
              key={i}
              className="absolute right-0 z-10 mt-2 w-[238.1px] rounded-xl bg-light-100 text-sm text-dark-100 shadow-lg transition-colors duration-500 dark:bg-dark dark:text-light dark:shadow-dark-100"
              initial="closed"
              animate="open"
              exit="closed"
              variants={dropDownMenu}
            >
              <div className="p-2">
                {control.title && (
                  <motion.ul
                    className="flex flex-col items-center justify-center"
                    variants={dropDownItems}
                  >
                    {control.options.map((option, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center justify-center w-full"
                        variants={variants}
                      >
                        <button
                          type="button"
                          className="w-full px-4 py-2 rounded-xl hover:bg-primary hover:text-light-100"
                        >
                          {option.name}
                        </button>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </motion.div>
          )
      )}
    </AnimatePresence>
  );
};

const EntryDropdown = () => {
  const { isOpen } = useStateContext();

  return (
    <AnimatePresence mode="wait">
      {isOpen.entry && (
        <motion.div
          className="absolute left-[54px] z-10 mt-2 w-[71.1833px] rounded-xl bg-light-100 text-sm text-dark-100 shadow-lg transition-colors duration-500 dark:bg-dark dark:text-light dark:shadow-dark-100"
          initial="closed"
          animate="open"
          exit="closed"
          variants={dropDownMenu}
        >
          <div className="p-2">
            <motion.ul
              className="flex flex-col items-center justify-center"
              variants={dropDownItems}
            >
              {entries.map((entry, i) => (
                <motion.li key={i} className="w-full" variants={variants}>
                  <button
                    type="button"
                    className="w-full p-2 text-left rounded-xl hover:bg-primary hover:text-light-100"
                  >
                    {entry.count}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Dropdown, EntryDropdown };
