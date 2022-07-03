import React, { useEffect, useContext } from "react";
import Layout from "./layout/Layout";
import StoreContext from "./context/StoreContext";
import Workspace from "./layout/Workspace";
const App = () => {
  const { store, setStore } = useContext(StoreContext);

  const setCachedUser = () => {
    const u = localStorage.getItem("user");
    if (!!u) setStore({ ...store, user: JSON.parse(u) });
  };

  useEffect(() => {
    setCachedUser();
  }, []);

  return (
    <div className="flex justify-center">
      <Layout>
        <Workspace />
      </Layout>
    </div>
  );
};

export default App;
