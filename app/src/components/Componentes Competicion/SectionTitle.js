import React from "react";

const SectionTitle = ({ title, gradientColor = "blue-900" }) => (
  <div className="relative mb-12">
    <h2 className="text-4xl font-extrabold text-center text-white relative z-10">{title}</h2>
    <div className={`absolute top-full left-0 w-full h-1 bg-gradient-to-r from-transparent via-${gradientColor} to-transparent z-0 mt-2`}></div>
    <div className={`absolute top-[calc(100%+0.5rem)] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-${gradientColor} rounded-full`}></div>
  </div>
);

export default SectionTitle;
