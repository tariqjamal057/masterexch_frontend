import React from "react";

const CricketListing = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow">
        <div className="flex items-center border-b p-3">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <a href="#" className="ml-3 font-bold text-blue-600">Asia Cup</a>
          <span className="ml-auto bg-blue-100 text-blue-800 px-2 py-1 rounded">In-Play</span>
        </div>

        <div className="flex items-center p-3 border-b">
          <div className="flex-1">
            <div className="text-green-600 text-sm font-bold">In-Play</div>
            <div className="font-semibold text-lg">Somerset v Hampshire</div>
          </div>
          <button className="w-10 h-10 border rounded-full flex items-center justify-center">📌</button>
        </div>
      </div>
    </div>
  );
};

export default CricketListing;
