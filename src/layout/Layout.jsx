import React, { useState, useEffect, useContext } from "react";
import StoreContext from "../context/StoreContext";
import Sidebar from "./Sidebar";
import Auth from "../auth/Auth";

const sidebarColor = "#2563EB";
// const userIsLoggedIn = false;

const Layout = ({ children }) => {
  const [user, setUser] = useState();
  const { store, setStore } = useContext(StoreContext);
  useEffect(() => {
    const u = store?.user || null;
    setUser(u);
  }, [store]);

  return (
    <>
      {user?.uid ? (
        <section
          id="sidebar"
          className="flex flex-col items-center justify-center min-h-screen py-2"
        >
          <Sidebar sidebarColor={sidebarColor} />
          <main>{children}</main>
        </section>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default Layout;
