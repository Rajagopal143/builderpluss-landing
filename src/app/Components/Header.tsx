"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Menu and close icons
import Image from "next/image";
import NavList from "./NavList";
import { NavItems } from "@/constant/data";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Scroll function
  const handleMenuClick = () => {
    const targetSection = document.getElementById("target-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed rounded-xl h-14 xl:w-[70%] w-screen shadow-md xl:mt-12 px-5 flex items-center justify-between bg-white z-10 xl:mx-[15%]">
      <div className="flex items-center justify-center">
        <Image
          width={1000}
          height={1000}
          alt="logo"
          src={"/cards/Graph Bim.png"}
          className="w-24  rounded-md overflow-hidden"
        />
      </div>

      {/* NavList for desktop */}
      <NavList />

      {/* Menu Icon for mobile */}
      <div className="flex xl:hidden">
        <Menu
          onClick={() => {
            toggleSidebar();
          }}
          className="cursor-pointer"
        />
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 transition-all">
          <div className="fixed top-0 left-0 w-full md:w-1/2 h-[50vh] bg-white p-6 z-30 ">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Menu</h2>
              <X onClick={toggleSidebar} className="cursor-pointer w-6 h-6" />
            </div>
            <div className="flex flex-col gap-4 ">
              {NavItems.map((nav) => (
                <div key={nav.name} className="flex">
                  <h1
                    onClick={() =>{
                      handleMenuClick();
                    }}
                    className={`${
                      nav.name === "Developers " ? "mr-1 " : ""
                    } text-lg font-semibold cursor-pointer`}>
                    {nav.name}
                  </h1>
                  {nav.hasDropdown ? (
                    <></>
                  ) : (
                    <span className="ml-2 px-2 py-1 font-[400] text-[10px] rounded-xl bg-[#F0EEFB] text-slate-500">
                      {nav.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
