import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const items = {
  action: false,
  delete: false,
  entry: false,
  profile: false,
};

export const ContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(true);
  const [isOpen, setIsOpen] = useState(items);
  const [screenSize, setScreenSize] = useState(undefined);

  const handleClick = (e) => {
    setIsOpen((prevState) => ({ ...items, [e]: !prevState[e] }));
    console.log(isOpen);
  };

  return (
    <StateContext.Provider
      value={{
        handleClick,
        isActive,
        setIsActive,
        isOpen,
        setIsOpen,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
