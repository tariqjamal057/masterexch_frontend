import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BiCricketBall,
  BiFootball,
  BiTennisBall,
  BiBasketball,
} from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

const Header = ({ onGameSelect, selectedGame }) => {
  const games = [
    {
      icon: BiCricketBall,
      name: "Cricket",
      image: "/cricket.jpg",
    },
    {
      icon: BiFootball,
      name: "Soccer",
      image: "/football.jpg",
    },
    {
      icon: BiTennisBall,
      name: "Tennis",
      image: null,
    },
    {
      icon: BiBasketball,
      name: "Basketball",
      image: null,
    },
  ];

  return (
    <header className="bg-[#3c3c3c]">
      <div className=" flex items-center justify-between gap-x-2 ">
        <div className="flex-1 flex items-center px-3 gap-4 overflow-x-scroll pt-2 bg-[#162931]">
          {games.map((game, index) => {
            const IconComponent = game.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-2 text-white cursor-pointer hover:text-yellow-500 transition-colors p-2 rounded-t relative ${
                  selectedGame === game.name
                    ? "text-yellow-500 bg-[#3c3c3c]"
                    : ""
                }`}
                onClick={() => {
                  onGameSelect(game.name);
                }}
              >
                <IconComponent size={20} />
                <span className="text-sm font-medium">{game.name}</span>

                <img
                  src={game.image}
                  alt=""
                  className="w-8 absolute top-[-4px] right-2 rounded overflow-hidden"
                />
              </div>
            );
          })}
        </div>

        <div className="text-white px-2 text-lg">
          <IoSearch />
        </div>
      </div>
    </header>
  );
};

const SportContent = ({ sportData }) => {
  const [isParlayOn, setIsParlayOn] = useState(true);
  const navigate = useNavigate();

  const handleParlayToggle = () => {
    setIsParlayOn(!isParlayOn);
  };

  const pushpinSvg = (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C13.1 2 14 2.9 14 4C14 4.64 13.75 5.24 13.32 5.66L14 6.34L18 10.34L13 15.34V20L11 22V15.34L6 10.34L10 6.34L10.68 5.66C10.25 5.24 10 4.64 10 4C10 2.9 10.9 2 12 2Z"
        fill="#789EA6"
      />
    </svg>
  );

  return (
    <main className="mx-auto max-w-4xl">
      <div className="flex bg-[#26424f]">
        <div className="flex items-center gap-3 bg-gray-600 px-1 py-2 text-white shadow-inner">
          <div
            className={`relative h-5 w-10 cursor-pointer rounded-full p-1 transition-all flex justify-center items-center duration-300 ${
              isParlayOn
                ? "bg-gradient-to-r from-green-500 to-green-600"
                : "bg-gray-400"
            }`}
            onClick={handleParlayToggle}
          >
            <div
              className={`absolute left-1 h-4 w-4 rounded-full bg-white transition-all duration-300 ${
                isParlayOn ? "translate-x-[1.1rem]" : ""
              }`}
            ></div>
          </div>
          <span className="font-semibold text-sm">Parlay</span>
        </div>

        <div className="flex-1 flex justify-center items-center text-white font-semibold">
          <span>Highlights</span>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg rounded-t-none bg-white shadow-md">
        {sportData.matches.map((match, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-gray-200 p-4 py-2 last:border-b-0"
            onClick={() => {
              localStorage.setItem("match", JSON.stringify(match));
              navigate("/inplay/detail");
            }}
          >
            <div>
              <div className="flex items-center gap-2 !text-sm">
                <div className="flex gap-2">
                  {match.icons.map((icon, i) => (
                    <div
                      key={i}
                      className={`flex h-6 w-7 items-center justify-center rounded-sm text-sm font-bold text-white ${
                        icon === "play"
                          ? "bg-blue-600"
                          : icon === "p"
                          ? "bg-orange-500"
                          : icon === "f"
                          ? "bg-green-600"
                          : icon === "b"
                          ? "bg-gray-400"
                          : ""
                      }`}
                    >
                      {icon === "play" && "▶"}
                      {icon === "p" && "P"}
                      {icon === "f" && "F"}
                      {icon === "b" && "B"}
                    </div>
                  ))}
                </div>
                <div className="!text-xs font-bold text-green-500">In-Play</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="mt-1 h-3 w-3 rounded-full bg-green-500"></div>
                <div className="font-bold text-sky-600 md:text-xl">
                  {match.teams}
                </div>
              </div>
            </div>
            <div className="w-8">
              <img className="w-6 h-6" src="/pin.jpg" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

const Sport = () => {
  const [selectedGame, setSelectedGame] = useState("Cricket");

  const sportsData = [
    {
      sport: "Cricket",
      matches: [
        { inplay: true, teams: "Asia Cup", icons: [] },
        { inplay: true, teams: "Somerset v Hampshire", icons: ["play", "p"] },
        {
          inplay: true,
          teams: "Durham v Worcestershire",
          icons: ["play", "p"],
        },
        {
          inplay: true,
          teams: "Surrey v Nottinghamshire",
          icons: ["play", "f", "p"],
        },
        {
          inplay: true,
          teams: "Melbourne Stars SRL T20 v Melbourne Renegades",
          icons: ["p"],
        },
        {
          inplay: true,
          teams: "Zimbabwe v Namibia",
          icons: ["play", "f", "p", "b"],
        },
        {
          inplay: true,
          teams: "Sri Lanka SRL T20 v New Zealand SRL T20",
          icons: ["p"],
        },
        {
          inplay: true,
          teams: "Sri Lanka v Afghanistan",
          icons: ["play", "f", "p"],
        },
      ],
    },
    {
      sport: "Soccer",
      category: "Premier League",
      matches: [
        { inplay: true, teams: "Man Utd v Chelsea", icons: ["play", "f"] },
        {
          inplay: true,
          teams: "Liverpool v Arsenal",
          icons: ["play", "f", "p"],
        },
        { inplay: true, teams: "Man City v Spurs", icons: ["p"] },
      ],
    },
    {
      sport: "Tennis",
      category: "Wimbledon",
      matches: [
        { inplay: true, teams: "Djokovic v Alcaraz", icons: ["play"] },
        { inplay: true, teams: "Swiatek v Jabeur", icons: ["play", "f", "p"] },
      ],
    },
  ];

  // Filter sports data to show only the selected game
  const filteredSportData = sportsData.filter(
    (sport) => sport.sport === selectedGame
  );

  const handleGameSelect = (gameName) => {
    setSelectedGame(gameName);
  };

  return (
    <div className="min-h-screen font-['Rubik']">
      <style>
        {`
          body {
            background-color: #f7f7f7;
            color: #0b3440;
          }
          @media (max-width: 420px) {
            .tab {
              padding: 10px 10px;
              font-size: 14px;
            }
          }
        `}
      </style>
      <Header onGameSelect={handleGameSelect} selectedGame={selectedGame} />
      {filteredSportData.map((sport, index) => (
        <SportContent key={index} sportData={sport} />
      ))}
    </div>
  );
};

export default Sport;
