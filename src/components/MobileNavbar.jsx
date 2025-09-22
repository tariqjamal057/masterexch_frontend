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
      <ul class="mini-lobby flex">
        <li id="mini" class="main-nav">
          <Link onclick="evolutionpop('DC','200215',true)" class="ui-link">
            <img
              class="icon-promote"
              src="http://masterexch.vip/Content/images/mobile/minigame-promo/promot.gif"
              alt="mini"
            />
          </Link>
        </li>
        <li
          id="sports"
          class={`${navOption === 0 ? "select" : ""} text-center`}
          onClick={() => setNavOption(0)}
        >
          <Link to="/sports" class="ui-link">
            <img
              class="icon-sports"
              src="http://masterexch.vip/Content/images/transparent.gif"
            />
            Sports
          </Link>
        </li>
        <li
          id="inPlay"
          class={`${navOption === 1 ? "select" : ""} text-center`}
          onClick={() => setNavOption(1)}
        >
          <Link to="/inplay" class="ui-link">
            <img
              class="icon-inplay"
              src="http://masterexch.vip/Content/images/transparent.gif"
            />
            In-Play
          </Link>
        </li>
        <li
          id="home"
          class={`${navOption === 2 ? "select" : ""} text-center`}
          onClick={() => setNavOption(2)}
        >
          <Link to="/" class="ui-link">
            <img
              class="icon-home"
              src="http://masterexch.vip/Content/images/transparent.gif"
            />
            Home
          </Link>
        </li>
        <li
          id="multiMarket"
          class={`${navOption === 3 ? "select" : ""} text-center`}
          onClick={() => setNavOption(3)}
        >
          <Link to="/multi" class="ui-link">
            <img
              class="icon-pin"
              src="http://masterexch.vip/Content/images/transparent.gif"
            />
            Multi
          </Link>
        </li>
        <li
          id="account"
          class={`${navOption === 4 ? "select" : ""} text-center`}
          onClick={() => setNavOption(4)}
        >
          <Link
            to={`${userAuthenticated ? "/profile" : "/login"}`}
            class="ui-link"
          >
            <img
              class="icon-account"
              src="http://masterexch.vip/Content/images/transparent.gif"
            />
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
