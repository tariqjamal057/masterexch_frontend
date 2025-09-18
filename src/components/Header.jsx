import React from "react";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-[#1e1e1e] text-white flex justify-between items-center h-20 px-4">
      <div className="flex items-center">
        <a href="#" className="flex items-center">
          <img
            src="http://masterexch.vip/Content/images/mobile/logo-masterexch.png?ver=6.2"
            alt="Logo"
            className="w-40 md:w-60 h-auto"
          />
        </a>
      </div>
      <ul className="flex items-center space-x-4">
        <li>
          <a
            href="#/Home/Login"
            className="bg-red-700 text-white px-4 py-2 rounded text-lg font-semibold flex justify-center items-center gap-2"
          >
            <FaUser /> Login
          </a>
        </li>
        {/* <li>
          <a href="#/Home/Signup" className="bg-[#0074c4] text-white px-4 py-2 rounded-full text-sm font-semibold">
            Signup
          </a>
        </li> */}
      </ul>
    </header>
  );
};

export default Header;
