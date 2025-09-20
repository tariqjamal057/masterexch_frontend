import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import { RiArrowRightWideFill } from "react-icons/ri";
import { TbReload } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";

const AuthHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    if (isDrawerOpen) {
      // Closing - first trigger animation, then hide after animation completes
      setIsDrawerOpen(false);
    } else {
      // Opening - show immediately, animation will handle the slide
      setIsDrawerOpen(true);
    }
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="body border-b">
      {/* <img src="/sample.jpg" alt="" className="w-80 h-140" /> */}
      <div className="top-bar !bg-gradient-to-br !from-[#3c3c3c] !to-[#1e1e1e] !px-0 !py-2.5 gap-1">
        <div
          className="flex text-sm justify-center items-center gap-1.5 !bg-gradient-to-bl !from-[#2d2d2d] via-[#2d2d2d] !to-[#1e1e1e] ps-6 pe-4 py-1.5 rounded-r shadow border-t border-t-gray-400 border-r border-r-gray-800 border-b border-b-gray-800 cursor-pointer hover:!from-[#353535] hover:via-[#353535] hover:!to-[#252525] transition-all duration-200"
          onClick={toggleDrawer}
        >
          <img src="/sample1.jpg" alt="sample" className="w-4.5 h-4.5" />{" "}
          <span className="text-yellow-500 font-semibold text-xs">Bets</span>
        </div>

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

        <div className="text-yellow-500 text-lg p-1.5 text-center rounded shadow-sm shadow-black bg-gradient-to-bl from-[#393939] to-[#313131] me-2">
          <div className="">
            <IoMdSettings />
          </div>
        </div>
      </div>

      <div className="news-bar">
        <div class="news-path-container">
          <div class=" news-path flex justify-center items-center px-2">
            <div class="mic ">
              <IoMicOutline />
            </div>
            <div class="title">News</div>
          </div>
        </div>
        {/* <span className="!h-full">></span> */}
        <div className="scroll h-full !py-[2px]">
          <span>
            Welcome to 11wickets established • Welcome to 11wickets established
            •
          </span>
        </div>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isDrawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeDrawer}
        ></div>

        {/* Drawer */}
        <div
          className={`z-50 absolute left-0 top-0 w-full h-full bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-2 border-b bg-[#2c2c2c] ">
            <div className="text-lg font-semibold text-gray-800">
              <div className="flex justify-center items-center gap-1.5">
                <img src="/sample1.jpg" alt="sample" className="w-4.5 h-4.5" />{" "}
                <span className=" font-semibold text-xs">Bets</span>
              </div>
            </div>
            <button
              onClick={closeDrawer}
              className="hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <IoIosClose className="text-2xl text-yellow-500" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 h-full">{/* Empty content as requested */}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
