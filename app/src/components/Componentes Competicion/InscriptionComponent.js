import React from "react";
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";

const Inscription = ({
  selectedCard,
  modalContent,
  closeRegistrationModal,
  handleInputChange,
  handleSubmit,
  formData,
  isFormValid,
}) => {
  const modalStyle = "bg-[#002f5f] text-white p-5 rounded-lg w-[85%] max-w-[1300px] h-[75%] overflow-hidden fixed";
  const modalContentStyle = "overflow-y-auto h-full pr-4";
  const infoTitleStyle = "text-4xl font-bold mb-4 text-center relative";
  const smallButtonStyle = "px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className={modalStyle}>
        <div className={modalContentStyle}>
          <img
            src={
              selectedCard[1].includes("League of Legends")
                ? LeagueOfLegends
                : selectedCard[1].includes("Valorant")
                ? Valorant
                : RocketLeague
            }
            alt={selectedCard[1]}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h2 className={infoTitleStyle}>{selectedCard[2]}</h2>
          <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Nombre de usuario"
              className="p-2 rounded-lg bg-gray-800 text-white w-3/4"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="p-2 rounded-lg bg-gray-800 text-white w-3/4"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="teamName"
              placeholder="Nombre del equipo"
              className="p-2 rounded-lg bg-gray-800 text-white w-3/4"
              value={formData.teamName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="teamRepresentative"
              placeholder="Representante del equipo"
              className="p-2 rounded-lg bg-gray-800 text-white w-3/4"
              value={formData.teamRepresentative}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 w-1/5"
              disabled={!isFormValid()}
            >
              Enviar
            </button>
          </form>
          <button onClick={closeRegistrationModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
