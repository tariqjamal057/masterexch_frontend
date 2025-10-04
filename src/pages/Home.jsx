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
        {/* <ImagePreview classNames={} image={"https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"} /> */}
      </div>
    </div>
  );
};

export default Home;
