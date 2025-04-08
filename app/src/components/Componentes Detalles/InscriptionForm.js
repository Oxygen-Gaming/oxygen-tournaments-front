import React, { useState } from "react";

const InscriptionForm = ({ closeForm }) => {
  const [playerName, setPlayerName] = useState("");
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!playerName) newErrors.playerName = "El nombre del jugador es obligatorio.";
    if (!email) newErrors.email = "El correo electrónico es obligatorio.";
    if (!teamName) newErrors.teamName = "El nombre del equipo es obligatorio.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    alert("Inscripción completada con éxito.");
    closeForm(); // Close the form
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg w-[90%] max-w-[500px]">
        <button
          className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
          onClick={closeForm}
        >
          X
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center">Formulario de Inscripción</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="playerName" className="block text-gray-300 mb-2">Nombre del jugador:</label>
            <input
              type="text"
              id="playerName"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
            {errors.playerName && <p className="text-red-500 text-sm mt-1">{errors.playerName}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="teamName" className="block text-gray-300 mb-2">Nombre del equipo:</label>
            <input
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="w-full p-2 rounded bg-gray-700 text-white"
            />
            {errors.teamName && <p className="text-red-500 text-sm mt-1">{errors.teamName}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Inscribirse
          </button>
        </form>
      </div>
    </div>
  );
};

export default InscriptionForm;
