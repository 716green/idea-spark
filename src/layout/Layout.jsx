import React from "react";
import Sidebar from "./Sidebar";

const sidebarColor = "#2563EB";

function Layout(props) {
  return (
    <>
      <section
        id="sidebar"
        className="flex flex-col items-center justify-center min-h-screen py-2"
      >
        <Sidebar sidebarColor={sidebarColor} />
        <main>{props.children}</main>
      </section>
    </>
  );
}

export default Layout;
