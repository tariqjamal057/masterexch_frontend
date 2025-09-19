import React from "react";
import { Link } from "react-router-dom";

const ImagePreview = ({ index, classNames, image, title, extra = null }) => {
  return (
    <div
      key={index}
      className={`${classNames} h-50 md:h-70 overflow-hidden relative`}
    >
      <img src={image} alt="web image" className="w-full h-full" />
      {/* top right container */}
      {extra && (
        <div className="absolute top-0 right-0 flex flex-col items-start bg-black/50 text-white p-2 text-sm font-bold">
          <div className="flex items-center mb-1">
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            LIVE
          </div>
          <dl className="space-y-1">
            <dd className="flex justify-between items-center text-xs">
              <p className="mr-2">Cricket</p>
              <span className="bg-white text-black px-2 py-0.5 rounded">
                16
              </span>
            </dd>
            <dd className="flex justify-between items-center text-xs">
              <p className="mr-2">Soccer</p>
              <span className="bg-white text-black px-2 py-0.5 rounded">
                43
              </span>
            </dd>
            <dd className="flex justify-between items-center text-xs">
              <p className="mr-2">Tennis</p>
              <span className="bg-white text-black px-2 py-0.5 rounded">6</span>
            </dd>
          </dl>
        </div>
      )}
      {/* bottom */}
      <Link to="/">
        <div className="absolute inset-x-0 bottom-0 bg-black/50 text-white flex justify-between items-center p-2">
          <div className="font-bold text-lg">{title}</div>
          <div className="rounded bg-amber-400">
            <span className="text-sm  px-1 cursor-pointer">Play Now</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ImagePreview;
