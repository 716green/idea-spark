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
        <section>
          {store?.user?.displayName ? (
            <div>
              <div className="flex">
                <img
                  className="m-auto rounded-full"
                  src={store?.user?.photoURL}
                />
              </div>
              <span className="text-xl block">
                Hello {store?.user?.displayName}
              </span>
            </div>
          ) : (
            "User not found"
          )}
        </section>
      </Layout>
    </div>
  );
};

export default App;
