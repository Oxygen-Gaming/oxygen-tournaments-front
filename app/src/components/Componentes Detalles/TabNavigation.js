import React from "react";

const tabs = ["resumen", "bracket", "partidas", "inscritos"];

const TabNavigation = ({ activeTab, setActiveTab }) => (
  <>
    <div className="flex justify-center mt-6 border-b-4 border-[#005f99] max-w-[1200px] mx-auto md:hidden">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`flex-1 text-center px-4 py-2 text-sm font-bold transition-all duration-300 ${
            activeTab === tab
              ? "border-b-4 border-white text-white"
              : "text-gray-200 hover:text-white"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>

    <div className="hidden md:flex justify-center mt-6 border-b-4 border-[#005f99] max-w-[1200px] mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-6 py-3 text-lg font-bold transition-all duration-300 ${
            activeTab === tab
              ? "border-b-4 border-white text-white"
              : "text-gray-200 hover:text-white"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </div>
  </>
);

export default TabNavigation;

