import React from "react";
import Banner from "@imgs/Header_Competiciones.jpg";

const BannerCarousel = ({ currentImage, images }) => (
  <div className="w-full h-96 bg-cover bg-center relative mt-0">
    <img
      src={Banner}
      alt={images[currentImage].alt}
      className="w-full h-full object-cover transition-opacity duration-500"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <h1 className="text-5xl font-extrabold text-white">Competiciones</h1>
    </div>
  </div>
);

export default BannerCarousel;
