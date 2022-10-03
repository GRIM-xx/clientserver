import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { sidebarAnimation } from "../animation";
import { useStateContext } from "../context/ContextProvider";
import { links } from "../data/site.data";

const activeLink =
  "flex gap-4 px-4 py-2 mt-2 font-bold rounded-xl bg-primary text-light-100";

const defaultLink =
  "mt-2 flex gap-4 rounded-xl px-4 py-2 text-dark-100 hover:bg-light dark:text-light dark:hover:bg-dark-100";

const Sidebar = () => {
  const { isActive, setIsActive, screenSize } = useStateContext();

  const handleCollapse = () => {
    if (isActive && screenSize <= 900) {
      setIsActive(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          className="fixed flex flex-col h-full gap-4 tracking-widest transition-colors duration-500 shadow-lg select-none bg-light-100 text-dark-100 dark:bg-dark dark:text-light"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={sidebarAnimation}
        >
          <div className="p-4">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="flex items-center gap-4 text-xl text-dark-100 dark:text-light"
              >
                <i className="p-4 rounded-xl bg-primary text-light-100">
                  <FaBookOpen />
                </i>
                <h1 className="font-black">LOGO</h1>
              </Link>
              <div className="flex flex-col gap-2">
                {links.map((item) => (
                  <div key={item.title}>
                    <h1 className="text-[10px] uppercase">{item.title}</h1>
                    {item.links.map((link) => (
                      <NavLink
                        key={link.name}
                        to={`/${link.name}`}
                        className={({ isActive }) =>
                          isActive ? activeLink : defaultLink
                        }
                        onClick={handleCollapse}
                      >
                        <i className="text-xl">{link.icon}</i>
                        <span className="capitalize">{link.name}</span>
                      </NavLink>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
