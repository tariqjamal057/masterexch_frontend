import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const images = [
    "http://masterexch.vip/Content/images/mobile/masterexch/banner_vip1.webp",
    "http://masterexch.vip/Content/images/mobile/masterexch/banner_vip2.webp",
    "http://masterexch.vip/Content/images/mobile/masterexch/banner_vip3.webp",
    "http://masterexch.vip/Content/images/mobile/masterexch/banner_vip4.webp",
    "http://masterexch.vip/Content/images/mobile/masterexch/banner_vip5.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden shadow-lg aspect-video h-50 md:h-120">
      <div
        className="flex transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </div>
      {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default ImageSlider;
