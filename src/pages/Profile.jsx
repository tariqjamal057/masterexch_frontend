import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { HiUserCircle } from "react-icons/hi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const sections = [
    {
      name: "My Profile",
      url: "#",
    },
    {
      name: "Balance Overview",
      url: "#",
    },
    {
      name: "My Bets",
      url: "#",
    },
    {
      name: "Bets History",
      url: "#",
    },
    {
      name: "Profit & Loss",
      url: "#",
    },
    {
      name: "Activity Log",
      url: "#",
    },
    {
      name: "Check Sport Wise Result",
      url: "/profile/match-result",
    },
    {
      name: "Balance Transfer",
      url: "/profile/balance-transfer",
    },
  ];
  const userAuthenticated = localStorage.getItem("userAuthenticated");
  if (userAuthenticated === null || userAuthenticated === false) {
    window.location.href = "/login";
    navigate("/login");
  }
  return (
    <>
      {userAuthenticated && (
        <div className="flex flex-col gap-3">
          <div className="">
            <div className="flex justify-between p-2 items-center bg-gray-800 text-white">
              <p className="flex items-center justify-center ">
                <HiUserCircle /> <span className="p-[2px]">{username}</span>
              </p>
              <p>GMT+6.0</p>
            </div>
            <div className="flex flex-col">
              {sections.map((data, index) => (
                <Link key={index} to={data.url}>
                  <div className="p-2 font-semibold text-[#5fbaff] bg-white shadow flex justify-between items-center">
                    <p>{data.name}</p>
                    <p className="text-black p-1 border border-gray-300 rounded">
                      <FaAngleRight />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div
            className="flex justify-center w-full items-center gap-1 font-semibold bg-gradient-to-bl from-red-400 to-red-700 py-2 text-white"
            onClick={() => {
              localStorage.removeItem("userAuthenticated");
              window.location.href = "/";
            }}
          >
            LOGOUT <RiLogoutBoxLine />
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
