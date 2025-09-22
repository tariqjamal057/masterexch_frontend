import React from "react";

const BalanceTransfer = () => {
  return (
    <div className="bg-amber-50  min-h-[75vh]">
      <div className="bg-gray-800 text-white text-sm  text-center py-1">
        BALANCE TRANSFER
      </div>
      <div className="flex flex-col justify-center items-center px-2 py-3 gap-y-3">
        <p className="text-center font-semibold text-sm">TO USER:</p>
        <input
          type="text"
          placeholder="ENTER USERID"
          className="bg-white rounded w-full shadow-inner py-1.5 text-xs focus:border focus:border-gray-300 outline-gray-300 px-2 outline-none"
        />
        <p className="text-center font-semibold text-sm">TRANSFER AMOUNT:</p>
        <input
          type="number"
          placeholder="ENTER AMOUNT"
          className="bg-white rounded w-full shadow-inner py-1.5 text-xs focus:border focus:border-gray-300 outline-gray-300 px-2 outline-none"
        />
        <button className="w-full bg-green-600 text-white uppercase text-xs py-2 font-semibold rounded">
          TRANSFER AMOUNT
        </button>
      </div>
    </div>
  );
};

export default BalanceTransfer;
