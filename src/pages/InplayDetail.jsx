import React from "react";
import { GrCircleQuestion } from "react-icons/gr";
import { IoIosInformationCircleOutline, IoMdAlarm } from "react-icons/io";

const InplayDetail = () => {
  const match = JSON.parse(localStorage.getItem("match"));

  function getRandomInt(min = 0, max = 1000) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getRandomFloatWithPrecision(integerDigits = 2, decimalDigits = 2) {
    // Determine the min and max for the integer part
    const minInteger = Math.pow(10, integerDigits - 1); // e.g., 10 for 2 digits
    const maxInteger = Math.pow(10, integerDigits) - 1; // e.g., 99 for 2 digits

    // Generate a random integer in the desired range (e.g., 10 to 99)
    const integerPart =
      Math.floor(Math.random() * (maxInteger - minInteger + 1)) + minInteger;

    // Generate a random integer for the decimal part (e.g., 0 to 99)
    const decimalPart = Math.floor(Math.random() * Math.pow(10, decimalDigits));

    // Combine and format the number
    const formattedNumber = `${integerPart}.${String(decimalPart).padStart(
      decimalDigits,
      "0"
    )}`;

    return parseFloat(formattedNumber);
  }

  return (
    <div className="min-h-screen bg-gray-100  font-sans text-white">
      <div className="flex items-center justify-between bg-gray-800 py-2 px-2">
        <h1 className=" font-semibold text-sm">Cricket</h1>
        <div className="flex items-center rounded-full text-xs text-white">
          <div className="bg-green-500 p-[2px] rounded me-1">
            <IoMdAlarm />
          </div>
          In-Play
        </div>
      </div>

      <div>
        <table className="w-full text-sm text-black bg-white">
          <thead className="border-b border-green-300">
            <tr className="">
              <th className="">
                <div className="flex items-center">
                  <div className="p-2 px-4 ps-2 bg-[#e0e6e6] inplay-detail-clippath">
                    <img src="/network.jpg" alt="Network" width={25} />
                  </div>
                  <div>
                    <img src="/graph.jpg" alt="Graph" width={25} />
                  </div>
                </div>
              </th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              {/* <th className="p-2"></th> */}
              <th className="p-2 text-center">Back</th>
              {/* <th className="p-2"></th> */}
              <th className="p-2"></th>
              <th className="p-2 text-center">Lay</th>
              {/* <th className="p-2"></th> */}
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-green-300">
              <td colSpan={5} className="px-2">
                {match.teams.split(" v ")[0]}
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan={2} className="text-center p-4 py-1 bg-blue-300">
                <div className="flex flex-col justify-center items-center">
                  <span className="font-semibold">38</span>
                  <span className="text-xs">25.08</span>
                </div>
              </td>
              <td colSpan={2} className="text-center p-4 py-1 bg-pink-300">
                <div className="flex flex-col justify-center items-center">
                  <span className="font-semibold">40</span>
                  <span className="text-xs">25.08</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-green-300">
              <td colSpan={5} className="px-2">
                {match.teams.split(" v ")[1]}
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan={2} className="text-center p-4 py-1 bg-blue-300">
                <div className="flex flex-col justify-center items-center">
                  <span className="font-semibold">1.02</span>
                  <span className="text-xs">25.08</span>
                </div>
              </td>
              <td colSpan={2} className="text-center p-4 py-1 bg-pink-300">
                <div className="flex flex-col justify-center items-center">
                  <span className="font-semibold">38.6</span>
                  <span className="text-xs">25.08</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between items-center py-2 px-2 bg-gray-800 text-sm">
          <p>
            <span className="text-white font-semibold pe-1 border-e">
              Bookmarker Market
            </span>
            <span className="ps-1 text-gray-500">Zero Comission</span>
          </p>
          <IoIosInformationCircleOutline className="text-white text-base" />
        </div>
        <table className="w-full text-sm text-black bg-white">
          <thead className="border-b border-green-300">
            <tr className="">
              <th className="">
                <div className="flex items-center opacity-0">
                  <div className="p-2 px-4 ps-2 bg-[#e0e6e6] inplay-detail-clippath">
                    <img src="/network.jpg" alt="Network" width={25} />
                  </div>
                  <div>
                    <img src="/graph.jpg" alt="Graph" width={25} />
                  </div>
                </div>
              </th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              <th className="p-2"></th>
              {/* <th className="p-2"></th> */}
              <th className="p-2 text-center">Back</th>
              {/* <th className="p-2"></th> */}
              <th className="p-2"></th>
              <th className="p-2 text-center">Lay</th>
              {/* <th className="p-2"></th> */}
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-green-300">
              <td colSpan={5} className="px-2">
                {match.teams.split(" v ")[0]}
                <p className="text-green-400 text-sm">0</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan={2} className="text-center p-4 py-1 bg-blue-300">
                <div className="flex flex-col justify-center items-center">
                  <span className="font-semibold">38</span>
                  <span className="text-xs">25.08</span>
                </div>
              </td>
              <td colSpan={2} className="text-center p-4 py-1 bg-pink-300">
                <div className="flex flex-col justify-center items-center">
                  <span className="font-semibold">40</span>
                  <span className="text-xs">25.08</span>
                </div>
              </td>
            </tr>
            <tr className="border-b border-green-300">
              <td colSpan={5} className="px-2">
                {match.teams.split(" v ")[1]}
                <p className="text-green-400 text-sm">0</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td colSpan={2} className="text-center p-4 py-1 bg-blue-300">
                <div className="flex flex-col justify-center items-center">
                  <span className="font-semibold">1.02</span>
                  <span className="text-xs">25.08</span>
                </div>
              </td>
              <td colSpan={2} className="text-center p-4 py-1 bg-pink-300">
                <div className="flex flex-col justify-center items-center">
                  <span className="font-semibold">38.6</span>
                  <span className="text-xs">25.08</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="border w-full my-2 border-gray-400"></div>
        <div>
          <div className="flex items-center">
            <div className="bg-teal-500 flex items-center inplay-fancy">
              <span className="flex items-center">
                <div className="bg-green-500 p-[2px] rounded me-1">
                  <IoMdAlarm />
                </div>
                <span className="font-semibold text-sm">Fancy Bet</span>
              </span>
              <span className="inplay-fancy-ques bg-teal-400 p-1 px-2">
                <GrCircleQuestion />
              </span>
            </div>
            <div className="bg-gray-700  px-3 text-sm py-[2px] inplay-premium">
              <span className="">Premium Cricket</span>
            </div>
          </div>
          <div className="bg-teal-500 flex overflow-hidden gap-1 items-center text-sm p-1">
            <div className="text-green-500 bg-white p-2 py-1 rounded">All</div>
            <div className="border-r px-1">Normal</div>
            <div className="border-r px-1">Fancy</div>
            <div className="border-r px-1">Over</div>
            <div className="border-r px-1">Ball by Ball</div>
            <div className=" px-1">Khadda</div>
          </div>
          <table className="w-full text-sm bg-gray-900">
            <thead className="">
              <tr className="">
                <th className="">
                  <div className="flex items-center px-2">Fancy Normal</div>
                </th>
                <th className="p-2"></th>
                <th className="p-2"></th>
                <th className="p-2"></th>
                <th className="p-2"></th>
                <th className="p-2"></th>
                <th className="p-2"></th>
                <th className="p-2"></th>
                {/* <th className="p-2"></th> */}
                <th className="p-2 text-center">Back</th>
                {/* <th className="p-2"></th> */}
                <th className="p-2"></th>
                <th className="p-2 text-center">Lay</th>
                {/* <th className="p-2"></th> */}
                <th className="p-2"></th>
              </tr>
            </thead>
          </table>

          {Array.from({ length: 8 }, (_, index) => (
            <table className="w-full bg-white">
              <thead className="bg-[#162931] text-sm">
                <tr className="">
                  <th className="">
                    <div className="flex items-center px-2">
                      {index + 1} over {match.teams.split(" v ")[0]}
                    </div>
                  </th>
                  <th className="p-2"></th>
                  <th className="p-2"></th>
                  <th className="p-2"></th>
                  <th className="p-2"></th>
                  <th className="p-2"></th>
                  <th className="p-2"></th>
                  <th className="p-2"></th>
                  <th className="p-2 text-center"></th>
                  <th className="p-2"></th>
                  <th className="p-2 text-center"></th>
                  <th className="p-2">
                    <IoIosInformationCircleOutline className="text-white text-base" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td colSpan={5} className="px-2"></td>
                  <td></td>
                  <td colSpan={3} className="text-center p-4 py-1 bg-blue-300">
                    <div className="flex flex-col justify-center items-center">
                      <span className="font-semibold">{getRandomInt()}</span>
                      <span className="text-xs">
                        {getRandomFloatWithPrecision()}
                      </span>
                    </div>
                  </td>
                  <td colSpan={3} className="text-center p-4 py-1 bg-pink-300">
                    <div className="flex flex-col justify-center items-center">
                      <span className="font-semibold">{getRandomInt()}</span>
                      <span className="text-xs">
                        {getRandomFloatWithPrecision()}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
      <div className="mt-2 rounded-lg shadow-md">
        {/* <div className="flex px-2">
          <button className="p-2 px-3 text-sm rounded-full bg-gradient-to-tr from-orange-500 to-orange-400 py-2 font-bold text-gray-800">
            Match Odds
          </button>
          <button className="p-2 text-sm rounded-full bg-gray-800 py-2 font-bold text-white ml-2">
            Tied Match
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default InplayDetail;
