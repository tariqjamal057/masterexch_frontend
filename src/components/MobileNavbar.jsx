import React from "react";
import { NavLink } from "react-router-dom";
import { Home, PlayCircle, Grid, User } from "lucide-react";
import { IoIosAlarm } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

const MobileNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#2e4b5e] text-white shadow-inner border-t border-gray-700 z-50 md:hidden">
      <ul className="flex justify-around items-center py-2 relative">
        <li className="absolute top-[-27px] left-6 w-18 h-18 rounded-full">
          <a
            onClick={() => handlePolicyClick("mini")}
            className="w-full flex justify-center"
          >
            <img
              className="h-full w-full"
              src="http://masterexch.vip/Content/images/mobile/minigame-promo/promot.gif"
              alt="Mini Game Promotion"
            />
          </a>
        </li>
        <li className="w-13"></li>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="text-yellow-400"
            className="flex flex-col items-center text-xs"
          >
            <FaTrophy className="w-6 h-6 mb-1" />
            Sports
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="text-yellow-400"
            className="flex flex-col items-center text-xs"
          >
            <IoIosAlarm className="w-6 h-6 mb-1" />
            In-play
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="text-yellow-400"
            className="flex flex-col items-center text-xs"
          >
            <TiHome className="w-6 h-6 mb-1" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/multi"
            activeClassName="text-yellow-400"
            className="flex flex-col items-center text-xs"
          >
            <Grid className="w-6 h-6 mb-1" />
            Multi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            activeClassName="text-yellow-400"
            className="flex flex-col items-center text-xs"
          >
            <User className="w-6 h-6 mb-1" />
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
