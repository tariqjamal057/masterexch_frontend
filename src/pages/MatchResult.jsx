import React, { useState, useEffect } from "react";

const MatchResult = () => {
  // State for datetime selectors

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  // Get today's date
  const today = new Date();

  // Create a new Date object for yesterday
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Set yesterday's time to 00:00
  yesterday.setHours(0, 0, 0, 0);

  // Set today's time to 23:59
  today.setHours(23, 59, 0, 0);

  // Set the initial state with the formatted date strings
  const [fromDateTime, setFromDateTime] = useState(formatDate(yesterday));
  const [toDateTime, setToDateTime] = useState(formatDate(today));

  // State for sport filter and search
  const [selectedSport, setSelectedSport] = useState("Cricket");
  const [searchTerm, setSearchTerm] = useState("");

  // State for match data
  const [matchData, setMatchData] = useState([
    {
      id: 1,
      sport: "Cricket",
      matchDate: "25-07-21 22:55:33",
      matchName: "Ireland v England",
    },
    {
      id: 2,
      sport: "Soccer",
      matchDate: "26-07-21 15:30:00",
      matchName: "Manchester United v Liverpool",
    },
    {
      id: 3,
      sport: "Tennis",
      matchDate: "27-07-21 14:00:00",
      matchName: "Wimbledon Final",
    },
    {
      id: 4,
      sport: "Cricket",
      matchDate: "28-07-21 19:45:00",
      matchName: "Australia v India",
    },
    {
      id: 5,
      sport: "Soccer",
      matchDate: "29-07-21 20:00:00",
      matchName: "Barcelona v Real Madrid",
    },
    {
      id: 6,
      sport: "Tennis",
      matchDate: "30-07-21 16:30:00",
      matchName: "US Open Semi Final",
    },
  ]);

  // Sports list for the third row
  const sports = ["Cricket", "Soccer", "Tennis", "Basketball", "Baseball"];

  // Format datetime for display
  const formatDateTime = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day}/${month}/${year}, ${hours}:${minutes}`;
  };

  // Filter data based on selected sport and search term
  const filteredData = matchData.filter((match) => {
    const matchesSport =
      selectedSport === "All" || match.sport === selectedSport;
    const matchesSearch =
      searchTerm === "" ||
      match.matchName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      match.sport.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSport && matchesSearch;
  });

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen">
      {/* First Row - Check Result Title */}
      <div className="w-full">
        <h1 className="text-sm font-bold text-center text-white bg-gray-800 py-2 shadow">
          Check Result
        </h1>
      </div>

      <div className="bg-blue-50">
        {/* Second Row - DateTime Selectors */}
        <div className="flex gap-2 items-center p-2 w-full">
          <div className="flex flex-col">
            <input
              type="datetime-local"
              value={fromDateTime}
              onChange={(e) => setFromDateTime(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-xs"
            />
          </div>
          <span className="text-sm">to</span>
          <div className="flex flex-col">
            <input
              type="datetime-local"
              value={toDateTime}
              onChange={(e) => setToDateTime(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-xs"
            />
          </div>
        </div>

        {/* Third Row - Sports Selection */}
        <div className=" px-2 pb-2 rounded-lg shadow">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {sports.map((sport) => (
              <button
                key={sport}
                onClick={() => setSelectedSport(sport)}
                className={`px-4 py-1 text-xs rounded-md font-medium whitespace-nowrap transition-colors ${
                  selectedSport === sport
                    ? "bg-gray-800 text-white"
                    : "bg-yellow-400 text-black "
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fourth Row - Search Input */}
      <div className="flex justify-end bg-white py-2 pt-3 rounded-lg shadow">
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Search matches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-100 shadow-inner text-sm"
          />
        </div>
      </div>

      {/* Fifth Row - Results Table */}
      <div className="bg-white shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-2 py-1.5 text-left text-xs font-medium border-r border-gray-500">
                  S.No.
                </th>
                <th className="px-2 py-1.5 text-left text-xs font-medium border-r border-gray-500">
                  Sport
                </th>
                <th className="px-2 py-1.5 text-left text-xs font-medium border-r border-gray-500">
                  Match Date
                </th>
                <th className="px-2 py-1.5 text-left text-xs font-medium border-r border-gray-500">
                  Match Name
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredData.map((match, index) => (
                <tr
                  key={match.id}
                  className={`hover:bg-gray-100 ${
                    index % 2 !== 0 ? "bg-gray-50" : ""
                  }`}
                >
                  <td className="px-2 py-1.5 text-xs text-gray-900 border-r border-gray-300">
                    {index + 1}
                  </td>
                  <td className="px-2 py-1.5 text-xs text-gray-900 border-r border-gray-300">
                    {match.sport}
                  </td>
                  <td className="px-2 py-1.5 text-xs text-gray-900 border-r border-gray-300">
                    {match.matchDate}
                  </td>
                  <td className="px-2 py-1.5 text-xs text-gray-900 border-r border-gray-300">
                    {match.matchName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filteredData.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No matches found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchResult;
