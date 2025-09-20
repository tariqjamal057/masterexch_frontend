import React from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const userAuthenticated = localStorage.getItem("userAuthenticated");

  return (
    <header className="bg-[#1e1e1e] text-white flex justify-between items-center h-11 px-4 sticky top-0 z-40">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src="http://masterexch.vip/Content/images/mobile/logo-masterexch.png?ver=6.2"
            alt="Logo"
            className="w-40 md:w-60 h-auto"
          />
        </Link>
      </div>
      <ul className="flex items-center space-x-4">
        {userAuthenticated === null || userAuthenticated === false ? (
          <li>
            <Link
              to="/login"
              className="bg-red-700 text-white px-5 text-sm py-1 rounded  font-semibold flex justify-center items-center gap-2"
            >
              <FaUser /> Login
            </Link>
          </li>
        ) : (
          <></>
        )}

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
