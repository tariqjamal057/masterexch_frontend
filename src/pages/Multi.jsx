import React from "react";

const Multi = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white border rounded-lg shadow p-6 text-center max-w-sm">
        <div className="mb-3">
          <div className="w-8 h-8 mx-auto rounded-full bg-gray-400"></div>
        </div>
        <h2 className="font-semibold text-gray-700 mb-2">
          There are currently no followed<br />multi markets.
        </h2>
        <p className="text-sm text-gray-500">Please add some markets from events.</p>
      </div>
    </div>
  );
};

export default Multi;
