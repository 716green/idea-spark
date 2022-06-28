import React, { useState, useEffect, useContext } from "react";
import { XIcon, MenuIcon } from "@heroicons/react/solid";
import { signUserOut } from "../firebase";
import StoreContext from "../context/StoreContext";

const Sidebar = (props) => {
  const { store, setStore } = useContext(StoreContext);
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarClass, setSidebarClass] = useState("");
  const toggleSidebar = () => setShowSidebar(!showSidebar);

  useEffect(() => {
    const classValue = showSidebar
      ? "lg:left-0 md:left-0 sm:translate-x-0 translate-x-0 sm:left-0 left-0"
      : "lg:-translate-x-full md:-translate-x-full sm:translate-x-full translate-x-full lg:-left-full md:-left-full sm:left-full left-full";
    setSidebarClass(classValue);
  }, [showSidebar]);

  const signoutHandler = () => {
    const s = { ...store };
    delete s.user;
    setStore(s);
    signUserOut();
  };

  const menuItems = [
    { label: "first", action: () => console.log("first") },
    { label: "second", action: () => console.log("second") },
    { label: "Log Out", action: () => signoutHandler() },
  ];

  return (
    <>
      {showSidebar ? (
        <button
          className="flex text-4xl text-white items-center cursor-pointer fixed lg:left-10 md:left-10 sm:right-10 right-10 top-6 z-50"
          onClick={toggleSidebar}
        >
          <XIcon className="w-6 text-red-200 fixed lg:left-12 md:left-12 sm:right-12 right-12 top-8 cursor-pointer" />
        </button>
      ) : (
        <svg
          onClick={toggleSidebar}
          className="fixed z-30 flex items-center cursor-pointer lg:left-10 md:left-10 sm:right-10 right-10 top-6"
          fill={props.sidebarColor}
          viewBox="0 0 100 80"
          width="40"
          height="40"
        >
          <MenuIcon className="w-6 absolute lg:left-4 md:left-4 sm:right-4 right-4 top-4 cursor-pointer " />
        </svg>
      )}
      <div
        style={{
          backgroundColor: props.sidebarColor,
        }}
        className={`top-0 lg:left-0 md:left-0 sm:right-0 right-0 lg:w-96 md:w-96 sm:w-[100vw] w-[100vw] p-10 text-white fixed h-full z-40 ease-in-out duration-300 ${sidebarClass}`}
      >
        <h3 className="mt-20 text-4xl font-semibold text-white text-center">
          <span className="absolute text-center w-full top-6 left-0">
            sidebar
          </span>
          <ul>
            {menuItems.map((item, i) => (
              <li className="text-left justify-start my-6" key={i}>
                <button onClick={item.action}>
                  {i} - {item.label}
                </button>
              </li>
            ))}
          </ul>
        </h3>
      </div>
    </>
  );
};

export default Sidebar;
