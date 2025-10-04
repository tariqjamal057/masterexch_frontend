import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home, PlayCircle, Grid, User } from "lucide-react";
import { IoIosAlarm } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { TiHome } from "react-icons/ti";

const MobileNavbar = () => {
  const [navOption, setNavOption] = useState(2);
  const userAuthenticated = localStorage.getItem("userAuthenticated");
  return (
    <nav className="block md:hidden">
      <ul class="mini-lobby flex justify-evenly pb-0.5">
        <li
          class={`${navOption === 0 ? "select" : ""} text-center`}
          onClick={() => setNavOption(0)}
        >
          <Link
            to="/sports"
            className="!flex !justify-center !items-center !flex-col"
          >
            <FaTrophy size={22} />
            Sports
          </Link>
        </li>
        <li
          class={`${navOption === 1 ? "select" : ""} text-center`}
          onClick={() => setNavOption(1)}
        >
          <Link
            to="/inplay"
            className="!flex !justify-center !items-center !flex-col"
          >
            <PlayCircle />
            In-Play
          </Link>
        </li>
        <li
          class={`${navOption === 2 ? "select" : ""} text-center`}
          onClick={() => setNavOption(2)}
        >
          <Link
            to="/"
            className="!flex !justify-center !items-center !flex-col"
          >
            <Home />
            Home
          </Link>
        </li>
        <li
          class={`${navOption === 3 ? "select" : ""} text-center`}
          onClick={() => setNavOption(3)}
        >
          <Link
            to="/multi"
            className="!flex !justify-center !items-center !flex-col"
          >
            <Grid />
            Multi
          </Link>
        </li>
        <li
          class={`${navOption === 4 ? "select" : ""} text-center`}
          onClick={() => setNavOption(4)}
        >
          <Link
            to={`${userAuthenticated ? "/profile" : "/login"}`}
            className="!flex !justify-center !items-center !flex-col"
          >
            <User />
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
