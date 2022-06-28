import React from "react";
import Sidebar from "./Sidebar";
import Auth from "../auth/Auth";

const sidebarColor = "#2563EB";
const userIsLoggedIn = false;

const Layout = ({ children }) => {
  return (
    <>
      {userIsLoggedIn ? (
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
