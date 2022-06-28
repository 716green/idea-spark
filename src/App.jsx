import React, { useContext } from "react";
import Layout from "./layout/Layout";
import StoreContext from "./context/StoreContext";

const App = () => {
  const { store, setStore } = useContext(StoreContext);
  return (
    <>
      <span>
        <code>
          <pre>{JSON.stringify(store)}</pre>
        </code>
      </span>
      <div className="flex justify-center">
        <Layout>
          {/* <span className="text-xl">Hello {store.user.name}</span> */}
        </Layout>
      </div>
    </>
  );
};

export default App;
