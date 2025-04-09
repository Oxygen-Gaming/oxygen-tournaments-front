import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "resumen", label: "Resumen" },
    { id: "bracket", label: "Bracket" },
    { id: "partidas", label: "Partidas" },
    { id: "inscritos", label: "Inscripciones" },
  ];

  return (
    <div className="flex justify-center mt-6 border-b-4 border-[#005f99] max-w-[1200px] mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-6 py-3 text-lg font-bold transition-all duration-300 ${
            activeTab === tab.id
              ? "border-b-4 border-white text-white"
              : "text-gray-200 hover:text-white"
          }`}
          onClick={() => setActiveTab(tab.id)} // Cambiar la pestaña activa
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
