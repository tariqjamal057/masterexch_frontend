import React from "react";
import ImageSlider from "../components/ImageSlider";
import ImagePreview from "../components/ImagePreview";
import { imageData } from "../data/home";

const Home = () => {
  return (
    <div className="text-center">
      <ImageSlider />
      <div className="grid grid-cols-12 gap-2 p-2">
        {imageData.map((data, index) => {
          return (
            <ImagePreview
              index={index}
              classNames={data.classNames}
              title={data.title}
              image={data.image}
              extra={data.extra}
            />
          );
        })}
        {/* <ImagePreview classNames={} image={"http://masterexch.vip/Content/images/mobile/betbuzz365/banner_sports.0da533cd.png"} /> */}
      </div>
    </div>
  );
};

export default Home;
