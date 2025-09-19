import React from "react";
import { TbCircleDotted } from "react-icons/tb";

const MultiMarketPage = () => {
  return (
    <div
      className="h-full my-20 md:my-38 flex justify-center items-center font-sans"
    >
      <div className="bg-white border border-gray-300 rounded-md w-[90%] max-w-lg text-center p-5 text-[#607080] shadow-sm">
        <div className="flex justify-center mb-3">
            <TbCircleDotted className="w-[30px] h-[30px] text-[#94a0ad]" />
        </div>
        <h1 className="text-lg font-bold">কোনো মাল্টি মার্কেট নেই</h1>
        <p className="mt-2 text-sm leading-6">
          দুঃখিত, কোনো মাল্টি মার্কেট নেই। আপনার অ্যাকাউন্টের তথ্যের জন্য,
          অনুগ্রহ করে ওয়েবসাইটে যান।
        </p>
      </div>
    </div>
  );
};

export default MultiMarketPage;
