import React from "react";
import { NavLink } from "react-router-dom";
import { Home, PlayCircle, Grid, User } from "lucide-react"; // you can replace icons

const MobileNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-inner border-t border-gray-700 z-50 md:hidden">
      <ul className="flex justify-around items-center py-2">
        <li>
          <NavLink
            exact
            to="/"
            activeClassName="text-yellow-400"
            className="flex flex-col items-center text-xs"
          >
            <Home className="w-6 h-6 mb-1" />
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cricket"
            activeClassName="text-yellow-400"
            className="flex flex-col items-center text-xs"
          >
            <PlayCircle className="w-6 h-6 mb-1" />
            Cricket
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
