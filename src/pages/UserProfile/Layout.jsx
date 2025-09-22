import React, { useState } from "react";
import {
  HiDotsVertical,
  HiUser,
  HiSearch,
  HiCog,
  HiOutlineDotsVertical,
} from "react-icons/hi";
import { TbReload } from "react-icons/tb";
import { Link, Outlet, useLocation } from "react-router-dom";

const UserProfileLayout = () => {
  const path = useLocation();
  const navigationItems = [
    "Home",
    "In-Play",
    "Multi Markets",
    "Cricket",
    "Soccer",
    "Tennis",
    "Result",
    "Asia Cup",
  ];

  const sidebarItems = [
    "My Profile",
    "Balance Overview",
    "Account Statement",
    "My Bets",
    "Activity Log",
  ];
  const sideBarItemsWithHref = [
    { name: "My Profile", href: "dashboard" },
    { name: "Balance Overview", href: "balance-overview" },
    { name: "Account Statement", href: "account-statement" },
    { name: "My Bets", href: "my-bets" },
    { name: "Activity Log", href: "activity-log" },
  ];

  return (
    <div className="w-full overflow-visible">
      <header className="flex flex-col">
        <div className="w-full flex justify-between items-center gap-x-4 bg-gray-800 px-2 py-1 overflow-visible">
          <div className="flex justify-center items-center gap-2">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-[160px] md:w-60 h-auto"
              />
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-1 border border-gray-300 rounded-md w-45 focus:outline-none focus:ring focus:ring-gray-300  bg-white text-xs"
              />
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="!text-xs flex justify-center items-center bg-gradient-to-bl from-[#504f4f] to-[#3c3c3c] rounded border-t border-t-gray-400 border-r border-r-gray-800 border-b border-b-gray-800 shadow-sm shadow-gray-800">
              <div className="balance-box flex text-yellow-500 !text-xs">
                <span className="flex justify-center items-center px-2 gap-x-0.5">
                  <span className="font-light">Main PBU</span>{" "}
                  <span className="highlight">0.00</span>
                </span>
                <span className="flex justify-center items-center px-2 gap-x-0.5">
                  <span className="font-light">Exp</span>{" "}
                  <span className="highlight">0.00</span>
                </span>
              </div>
              <div className="flex justify-center items-center">
                <div className="py-[0.3px] px-1.5 rounded border border-yellow-400 me-1">
                  +4
                </div>
                <div className="bg-[#2c2c2c] text-base p-1.5 font-bold text-yellow-500">
                  <TbReload />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-yellow-500 bg-gradient-to-bl from-[#504f4f] to-[#3c3c3c] px-2 py-0.5 rounded">
              <HiUser className="w-5 h-5" />
              <span className="font- ">My Account</span>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center gap-x-4 bg-gray-950 px-2 overflow-visible">
          <div className="flex items-center gap-6 text-white ">
            {navigationItems.map((item, index) => (
              <Link key={index} to="#" className="text-sm font-medium">
                {item}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4 text-white">
            <div className="text-sm">Time Zone +GMT6.0</div>
            <div className="flex justify-center items-center gap-2 text-xs py-2 px-2 bg-gradient-to-t from-gray-600 to-gray-800 border-t-4 border-green-500">
              <input type="checkbox" className="w-4 h-4" />
              <span>One Click Bet</span>
            </div>
            <button className="  hover:text-gray-800 flex items-center gap-2 text-sm">
              Settings <HiCog className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>
      <div className="flex items-center gap-2 w-70">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center text-white bg-gray-700 text-sm px-2 py-1">
            <HiOutlineDotsVertical />
            My Account
          </div>
          {sideBarItemsWithHref.map((item, index) => (
            <Link key={index} to={item.href}>
              <div
                className={`flex justify-between items-center text-black text-sm px-2 py-1 border-b border-gray-300 border-r font-semibold ${
                  path.pathname.includes(item.href) ? "bg-yellow-200" : ""
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfileLayout;
