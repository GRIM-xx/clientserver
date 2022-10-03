import React, { useEffect, useRef } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { useStateContext } from "../context/ContextProvider";
import Profile from "./Profile";

const Navbar = () => {
  const {
    handleClick,
    setIsActive,
    isOpen,
    setIsOpen,
    screenSize,
    setScreenSize,
  } = useStateContext();

  const ref = useRef();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [screenSize, setIsActive]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen.profile && ref.current && !ref.current.contains(e.target)) {
        setIsOpen((isOpen.profile = false));
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen, setIsOpen]);

  return (
    <nav className="p-4 text-xl">
      <div className="relative">
        <div className="flex items-center justify-between">
          <button
            type="button"
            className="p-4 transition-colors duration-500 rounded-full shadow-lg bg-light-100 text-dark dark:bg-dark dark:text-light"
            onClick={() => {
              setIsActive((prevState) => (prevState ? false : true));
            }}
          >
            <FaBars />
          </button>
          <div ref={ref}>
            <button
              type="button"
              className="p-4 transition-colors duration-500 rounded-full shadow-lg bg-light-100 text-dark dark:bg-dark dark:text-light"
              onClick={() => handleClick("profile")}
            >
              <FaUser />
            </button>
            <Profile />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
