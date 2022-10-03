import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { dropDownMenu, variants } from "../animation";
import { useStateContext } from "../context/ContextProvider";

const Profile = () => {
  const { isOpen } = useStateContext();

  return (
    <AnimatePresence mode="wait">
      {isOpen.profile && (
        <motion.div
          className="absolute right-0 z-10 mt-2 text-base tracking-widest transition-colors duration-500 shadow-lg w-72 rounded-xl bg-light-100 text-dark-100 shadow-dark-100 dark:bg-dark dark:text-light"
          initial="closed"
          animate="open"
          exit="closed"
          variants={dropDownMenu}
        >
          <motion.div className="flex flex-col gap-4 p-4" variants={variants}>
            <h1 className="text-sm font-bold">Profile</h1>
            <button
              type="button"
              className="px-4 py-2 text-base font-bold rounded-xl bg-primary text-light-100"
            >
              Log out
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Profile;
