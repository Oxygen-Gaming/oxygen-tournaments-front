import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "resumen", label: "Resumen" },
    { id: "bracket", label: "Bracket" },
    { id: "partidas", label: "Partidas" },
    { id: "inscritos", label: "Inscripciones" },
    { id: "premios", label: "Premios" },
    { id: "reglas", label: "Reglas" },
    { id: "bracket-detallado", label: "Bracket Detallado" },
  ];

  return (
    <div className="flex justify-center mt-6 border-b border-gray-600 max-w-[1200px] mx-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`px-4 py-2 ${
            activeTab === tab.id ? "border-b-4 border-blue-500 text-blue-500" : "text-gray-300"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
