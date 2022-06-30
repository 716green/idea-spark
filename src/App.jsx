import React, { useEffect, useContext } from "react";
import Layout from "./layout/Layout";
import StoreContext from "./context/StoreContext";
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
        <section>Logged in</section>
      </Layout>
    </div>
  );
};

export default App;
