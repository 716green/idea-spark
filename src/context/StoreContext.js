import { createContext } from "react";

const StoreContext = createContext({
  store: {},
  setStore: () => {},
});

export default StoreContext;
