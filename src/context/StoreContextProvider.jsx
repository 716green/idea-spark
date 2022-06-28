import React, { useState } from "react";
import StoreContext from "./StoreContext";

const StoreContextProvider = ({ children }) => {
  const [store, setStore] = useState({});
  const value = { store, setStore };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreContextProvider;
