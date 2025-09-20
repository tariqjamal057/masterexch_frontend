import React from "react";
import { IoMdSettings } from "react-icons/io";
import { IoMicOutline } from "react-icons/io5";
import { RiArrowRightWideFill } from "react-icons/ri";
import { TbReload } from "react-icons/tb";

const AuthHeader = () => {
  return (
    <div className="body border-b">
      {/* <img src="/sample.jpg" alt="" className="w-80 h-140" /> */}
      <div className="top-bar !bg-gradient-to-br !from-[#3c3c3c] !to-[#1e1e1e] !px-0 !py-2.5">
        <div className="flex text-sm justify-center items-center gap-1.5 !bg-gradient-to-bl !from-[#2d2d2d] via-[#2d2d2d] !to-[#1e1e1e] ps-8 pe-6 py-1.5 rounded-r shadow border-t border-t-gray-400 border-r border-r-gray-800 border-b border-b-gray-800">
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
    </div>
  );
};

export default AuthHeader;
