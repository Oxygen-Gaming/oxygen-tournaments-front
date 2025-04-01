import React, { useState } from "react";
import LeagueOfLegends from "@imgs/League.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";

const Inscription = ({
  selectedCard,
  handleInputChange,
  handleSubmit,
  formData,
  isFormValid,
  inscriptionStatus,
  setInscriptionStatus, // Recibir setInscriptionStatus como prop
  handleCancelRegistration,
}) => {
  // Determina la imagen según el nombre del juego
  const getImageForGame = (gameName) => {
    if (gameName === "League of Legends") return LeagueOfLegends;
    if (gameName === "Valorant") return Valorant;
    if (gameName === "Rocket League") return RocketLeague;
    return null;
  };

  const gameImage = selectedCard && selectedCard[1] ? getImageForGame(selectedCard[1]) : null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInscriptionStatus((prevStatus) => ({
      ...prevStatus,
      [selectedCard[0]]: true, // Actualizar el estado de inscripción
    }));
    handleSubmit(e); // Llamar a la función de envío original
  };

  const [showCancelPopup, setShowCancelPopup] = useState(false); // State for cancel confirmation pop-up

  const handleCancelClick = () => {
    setShowCancelPopup(true); // Show the confirmation pop-up
  };

  const confirmCancel = () => {
    setInscriptionStatus((prevStatus) => ({
      ...prevStatus,
      [selectedCard[0]]: false, // Update the inscription status
    }));
    setShowCancelPopup(false); // Close the pop-up
  };

  const closeCancelPopup = () => {
    setShowCancelPopup(false); // Close the pop-up
  };

  return (
    <div className="bg-[#002f5f] text-white p-5 rounded-lg w-full max-w-[1300px] mx-auto mt-8">
      <h2 className="text-4xl font-bold mb-4 text-center">Inscripción</h2>

      {/* Estado de inscripción */}
      <div className="text-center mb-8">
        <p
          className={`text-md font-bold px-4 py-2 rounded w-fit mx-auto mb-4 ${
            inscriptionStatus && selectedCard && inscriptionStatus[selectedCard[0]]
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {inscriptionStatus && selectedCard && inscriptionStatus[selectedCard[0]] ? "Inscrito" : "No inscrito"}
        </p>
        {inscriptionStatus && selectedCard && inscriptionStatus[selectedCard[0]] && (
          <button
            onClick={handleCancelClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg transition-transform transform hover:scale-105"
          >
            Cancelar inscripción
          </button>
        )}
      </div>

      {showCancelPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 text-white p-10 rounded-lg shadow-lg w-[600px] text-center">
            <h2 className="text-3xl font-bold mb-6">¿Estás seguro/a de que deseas realizar esta acción?</h2>
            <p className="text-lg mb-6">
              Si continúas con esta acción, perderás permanentemente tu plaza reservada para{" "}
              <span className="font-bold">{selectedCard[2]}</span>. Podrás recuperarla solo si te registras nuevamente antes de que otro usuario ocupe tu lugar.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmCancel}
                className="px-6 py-3 bg-red-500 text-white rounded-lg transition-transform transform hover:scale-105 w-1/3"
              >
                Sí
              </button>
              <button
                onClick={closeCancelPopup}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg transition-transform transform hover:scale-105 w-1/3"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <form className="flex flex-col gap-4 items-center" onSubmit={handleFormSubmit}>
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
    </div>
  );
};

export default Inscription;
