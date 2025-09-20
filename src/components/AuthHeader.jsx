import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { IoMicOutline, IoSettingsSharp } from "react-icons/io5";
import { RiArrowRightWideFill } from "react-icons/ri";
import { TbReload } from "react-icons/tb";
import { IoIosClose } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";

const ToggleButton = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`w-12 h-6 rounded-full transition-colors duration-200 ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-5 h-5 bg-white rounded-full transition-transform duration-200 ${
          isOn ? "translate-x-6" : "translate-x-0.5"
        }`}
      ></div>
    </button>
  );
};

const SquareToggleButton = ({ isOn, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`w-12 h-6 rounded transition-colors duration-200 ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-3 h-5 bg-white rounded transition-transform duration-200 ${
          isOn ? "translate-x-8" : "translate-x-0.5"
        }`}
      ></div>
    </button>
  );
};

const AuthHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false);
  const [isQuickStakeEditable, setIsQuickStakeEditable] = useState(false);
  const [defaultStake, setDefaultStake] = useState("");
  const [quickStakes, setQuickStakes] = useState(Array(8).fill(""));
  const [highlightOdds, setHighlightOdds] = useState(false);
  const [highlightParley, setHighlightParley] = useState(false);

  const toggleDrawer = () => {
    if (isDrawerOpen) {
      setIsDrawerOpen(false);
    } else {
      setIsDrawerOpen(true);
    }
  };

  const toggleSettingsDrawer = () => {
    if (isSettingsDrawerOpen) {
      setIsSettingsDrawerOpen(false);
    } else {
      setIsSettingsDrawerOpen(true);
    }
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const closeSettingsDrawer = () => {
    setIsSettingsDrawerOpen(false);
  };

  const toggleQuickStakeEdit = () => {
    setIsQuickStakeEditable(!isQuickStakeEditable);
  };

  const handleQuickStakeChange = (index, value) => {
    const newQuickStakes = [...quickStakes];
    newQuickStakes[index] = value;
    setQuickStakes(newQuickStakes);
  };
  const quick_stakes = [1, 5, 10, 20, 500, 1000, 5000, 10000];

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

        <div
          className="text-yellow-500 text-lg p-1.5 text-center rounded shadow-sm shadow-black bg-gradient-to-bl from-[#393939] to-[#313131] me-2 cursor-pointer hover:from-[#454545] hover:to-[#3a3a3a] transition-all duration-200"
          onClick={toggleSettingsDrawer}
        >
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

      {/* Right Settings Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isSettingsDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            isSettingsDrawerOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeSettingsDrawer}
        ></div>

        {/* Drawer */}
        <div
          className={`z-50 absolute right-0 top-0 w-full h-full bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isSettingsDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header */}
          <div
            className="flex justify-between items-center p-2 border-b bg-[#2c2c2c]  
          !text-yellow-500"
          >
            <div className=" font-semibold flex justify-center items-center gap-1">
              <IoSettingsSharp />
              <span>Setting</span>
            </div>
            <button
              onClick={closeSettingsDrawer}
              className=" hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <IoIosClose className="text-2xl" />
            </button>
          </div>

          {/* Content */}
          <div className="h-full overflow-y-auto">
            {/* Row 1: Stake */}
            <div className="bg-[#26424f] p-2">
              <div className="font-semibold">Stake</div>
            </div>

            {/* Row 2: Default Stake */}
            <div className="bg-white p-2 border-b border-gray-300 flex justify-start items-center gap-2">
              <label className="block  font-medium text-[#26424f]">
                Default Stake
              </label>
              <input
                type="number"
                value={defaultStake}
                onChange={(e) => setDefaultStake(e.target.value)}
                className=" p-2 border border-gray-600 shadow-inner outline rounded active:bg-amber-200 focus:bg-amber-200 text-[#26424f] text-end"
              />
            </div>

            {/* Row 3: Quick Stake */}
            <div className="bg-white p-2 border-b border-gray-300">
              <label className="block text-sm font-medium mb-2 text-[#26424f]">
                Quick Stake
              </label>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {quickStakes.map((stake, index) => (
                  <input
                    key={index}
                    type="text"
                    value={quick_stakes[index]}
                    onChange={(e) =>
                      handleQuickStakeChange(index, e.target.value)
                    }
                    className={`p-2 border rounded text-center active:bg-amber-200 focus:bg-amber-200 outline text-[#26424f] ${
                      isQuickStakeEditable
                        ? "border-gray-300"
                        : "border-gray-200 bg-gray-50"
                    } ${
                      !isQuickStakeEditable && index <= 5
                        ? "!bg-[#2c2c2c] !text-yellow-500 outline-none"
                        : ""
                    } `}
                    readOnly={!isQuickStakeEditable}
                    placeholder={`${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={toggleQuickStakeEdit}
                className={`w-full p-2 font-semibold  rounded hover:bg-blue-600 transition-colors ${
                  isQuickStakeEditable
                    ? "bg-[#2c2c2c] text-yellow-500"
                    : "text-[#26424f] border bg-gradient-to-br from-gray-100 to-gray-300"
                }`}
              >
                {isQuickStakeEditable ? (
                  "Save"
                ) : (
                  <span className="flex justify-center items-center gap-1">
                    Edit Stakes <FaPencilAlt />
                  </span>
                )}
              </button>
            </div>

            {/* Row 4: Odds */}
            <div className="bg-[#26424f] p-2">
              <div className=" font-semibold">Odds</div>
            </div>

            {/* Row 5: Highlight when odds changes */}
            <div className="bg-white p-3 border flex justify-between items-center">
              <span className="text-sm font-medium text-[#26424f]">
                Highlight when odds changes
              </span>
              <SquareToggleButton
                isOn={highlightOdds}
                onToggle={() => setHighlightOdds(!highlightOdds)}
              />
            </div>

            {/* Row 6: Odds */}
            <div className="bg-[#26424f] p-2">
              <div className=" font-semibold">Parlay</div>
            </div>
            {/* Row 7: Highlight when odds changes */}
            <div className="bg-white p-3 border-b border-gray-300 flex justify-between items-center ">
              <span className="text-sm font-medium text-[#26424f]">Parlay</span>
              <SquareToggleButton
                isOn={highlightParley}
                onToggle={() => setHighlightParley(!highlightParley)}
              />
            </div>

            {/* Row 8: Action buttons */}
            <div className="flex gap-3 p-2">
              <button
                onClick={closeSettingsDrawer}
                className="flex-1 p-3  text-[#26424f] rounded transition-colors border border-[#26424f]"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Save logic here
                  console.log("Settings saved");
                  closeSettingsDrawer();
                }}
                className="flex-1 p-3 bg-gradient-to-br from-[#545454] to-[#2c2c2c] text-yellow-500 rounded transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthHeader;
