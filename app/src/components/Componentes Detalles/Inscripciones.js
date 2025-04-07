import React, { useState, useEffect } from "react";

const Inscripciones = ({ registeredPlayers, onUpdateRegisteredPlayers, onUpdateConfirmedPlayers }) => {
  const [playerName, setPlayerName] = useState("");
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [representativeName, setRepresentativeName] = useState("");
  const [teamPassword, setTeamPassword] = useState("");
  const [showModal, setShowModal] = useState(false); // Modal for successful registration
  const [warningModal, setWarningModal] = useState(false); // Modal for warning after limit
  const [confirmationModal, setConfirmationModal] = useState(false); // Modal for attendance confirmation
  const [successConfirmationModal, setSuccessConfirmationModal] = useState(false); // Modal for successful attendance confirmation
  const [modalMessage, setModalMessage] = useState(""); // Message for successful registration
  const [isRepresentative, setIsRepresentative] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [errors, setErrors] = useState({});
  const [animateRegistered, setAnimateRegistered] = useState(false);
  const [animateConfirmed, setAnimateConfirmed] = useState(false);
  const [counterColor, setCounterColor] = useState("text-green-400"); // Default animation color
  const [confirmedPlayers, setConfirmedPlayers] = useState(() => {
    // Retrieve confirmed players from localStorage
    const savedConfirmedPlayers = localStorage.getItem("confirmedPlayers");
    return savedConfirmedPlayers ? parseInt(savedConfirmedPlayers, 10) : 0;
  });
  const [showConfirmButton, setShowConfirmButton] = useState(() => {
    // Retrieve confirm button visibility from localStorage
    const savedShowConfirmButton = localStorage.getItem("showConfirmButton");
    return savedShowConfirmButton === "true";
  });

  const [inscriptionStatus, setInscriptionStatus] = useState(() => {
    // Retrieve inscription status from localStorage
    const savedStatus = localStorage.getItem("inscriptionStatus");
    return savedStatus ? JSON.parse(savedStatus) : {};
  });

  const MAX_PLAYERS = 128; // Maximum number of players allowed
  const tournamentId = "currentTournament"; // Replace with the actual tournament ID
  const isRegistered = inscriptionStatus[tournamentId] === "pending";
  const isConfirmed = inscriptionStatus[tournamentId] === "confirmed";

  const handleRepresentativeChange = () => {
    setIsRepresentative(!isRepresentative);
    if (!isRepresentative) setIsMember(false);
  };

  const handleMemberChange = () => {
    setIsMember(!isMember);
    if (!isMember) setIsRepresentative(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!playerName) newErrors.playerName = "El nombre del jugador es obligatorio.";
    if (!email) newErrors.email = "El correo electrónico es obligatorio.";
    if (!teamName) newErrors.teamName = "El nombre del equipo es obligatorio.";
    if (!representativeName) newErrors.representativeName = "El nombre del representante es obligatorio.";
    if (!teamPassword) newErrors.teamPassword = "La contraseña del equipo es obligatoria.";
    if (!isRepresentative && !isMember) newErrors.role = "Debes seleccionar un rol en el equipo.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isRegistered || isConfirmed) {
      alert("Ya estás inscrito en este torneo.");
      return;
    }

    const capturedPlayerName = playerName;
    const capturedTeamName = teamName;

    if (registeredPlayers >= MAX_PLAYERS) {
      setWarningModal(true); // Show warning modal
    } else {
      setModalMessage(`¡Gracias por inscribirte, ${capturedPlayerName}! Tu equipo "${capturedTeamName}" ha sido registrado.`);
      setShowModal(true);
      setTimeout(() => setShowModal(false), 3000); // Automatically close modal after 3 seconds
    }

    setCounterColor("text-green-400"); // Set animation color to green
    setAnimateRegistered(true);
    onUpdateRegisteredPlayers(registeredPlayers + 1); // Notify parent component
    setShowConfirmButton(true); // Show confirm button after registration
    localStorage.setItem("showConfirmButton", "true"); // Save confirm button visibility to localStorage

    // Update inscription status
    const updatedStatus = { ...inscriptionStatus, [tournamentId]: "pending" };
    setInscriptionStatus(updatedStatus);
    localStorage.setItem("inscriptionStatus", JSON.stringify(updatedStatus));

    setPlayerName("");
    setEmail("");
    setTeamName("");
    setRepresentativeName("");
    setTeamPassword("");
    setIsRepresentative(false);
    setIsMember(false);
    setErrors({});
  };

  const handleCancelInscription = () => {
    const updatedStatus = { ...inscriptionStatus };
    const wasConfirmed = updatedStatus[tournamentId] === "confirmed"; // Check if the user was confirmed
    delete updatedStatus[tournamentId]; // Remove the inscription for the specific tournament
    setInscriptionStatus(updatedStatus);
    localStorage.setItem("inscriptionStatus", JSON.stringify(updatedStatus));

    // Decrement registered players count
    setCounterColor("text-red-400");
    setAnimateRegistered(true);
    onUpdateRegisteredPlayers(registeredPlayers - 1);

    // Decrement confirmed players count if the user was confirmed
    if (wasConfirmed) {
      setAnimateConfirmed(true);
      onUpdateConfirmedPlayers(confirmedPlayers - 1);
    }
  };

  const handleConfirmAttendance = () => {
    setConfirmationModal(true); // Show confirmation modal
  };

  const confirmAttendance = () => {
    const newConfirmedPlayers = confirmedPlayers + 1;
    setConfirmedPlayers(newConfirmedPlayers); // Increment confirmed players
    localStorage.setItem("confirmedPlayers", newConfirmedPlayers); // Save to localStorage
    onUpdateConfirmedPlayers(newConfirmedPlayers); // Notify parent component
    setCounterColor("text-blue-400"); // Set animation color to blue
    setAnimateConfirmed(true); // Trigger animation only for confirmed players
    setShowConfirmButton(false); // Hide confirm button after confirmation
    localStorage.setItem("showConfirmButton", "false"); // Save confirm button visibility to localStorage
    setConfirmationModal(false); // Close confirmation modal
    setSuccessConfirmationModal(true); // Show success confirmation modal

    // Update inscription status to "confirmed"
    const updatedStatus = { ...inscriptionStatus, [tournamentId]: "confirmed" };
    setInscriptionStatus(updatedStatus);
    localStorage.setItem("inscriptionStatus", JSON.stringify(updatedStatus));
  };

  useEffect(() => {
    if (animateRegistered) {
      const timer = setTimeout(() => setAnimateRegistered(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animateRegistered]);

  useEffect(() => {
    if (animateConfirmed) {
      const timer = setTimeout(() => setAnimateConfirmed(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animateConfirmed]);

  return (
    <div id="inscription-section">
      <h2 className="text-3xl font-bold mb-4 text-center">Inscripciones</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Jugadores Inscritos</h3>
          <p
            className={`text-4xl font-extrabold ${
              animateRegistered ? `${counterColor} scale-110 transition-transform duration-500` : "text-white"
            }`}
          >
            {registeredPlayers}
          </p>
        </div>
        <div className="bg-[#1c1c1c] text-white p-4 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-bold mb-2">Jugadores Confirmados</h3>
          <p
            className={`text-4xl font-extrabold ${
              animateConfirmed ? "text-blue-400 scale-110 transition-transform duration-500" : "text-blue-400"
            }`}
          >
            {confirmedPlayers}
          </p>
        </div>
      </div>
      {(isRegistered || isConfirmed) && (
        <div className="text-center mb-6">
          <button
            onClick={handleCancelInscription}
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Cancelar Inscripción
          </button>
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className={`bg-gray-800 p-4 rounded-lg ${
          isRegistered || isConfirmed ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        <div className="mb-4">
          <label htmlFor="playerName" className="block text-gray-300 mb-2">Nombre del jugador:</label>
          <input
            type="text"
            id="playerName"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
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
            required
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
            required
          />
          {errors.teamName && <p className="text-red-500 text-sm mt-1">{errors.teamName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="representativeName" className="block text-gray-300 mb-2">Nombre del representante:</label>
          <input
            type="text"
            id="representativeName"
            value={representativeName}
            onChange={(e) => setRepresentativeName(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
          {errors.representativeName && <p className="text-red-500 text-sm mt-1">{errors.representativeName}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="teamPassword" className="block text-gray-300 mb-2">Contraseña de acceso al equipo:</label>
          <input
            type="password"
            id="teamPassword"
            value={teamPassword}
            onChange={(e) => setTeamPassword(e.target.value)}
            className="w-full p-2 rounded bg-gray-700 text-white"
            required
          />
          {errors.teamPassword && <p className="text-red-500 text-sm mt-1">{errors.teamPassword}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Rol en el equipo:</label>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              id="representative"
              checked={isRepresentative}
              onChange={handleRepresentativeChange}
              className="mr-2"
            />
            <label htmlFor="representative" className="text-gray-300">Soy el representante del equipo</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="member"
              checked={isMember}
              onChange={handleMemberChange}
              className="mr-2"
            />
            <label htmlFor="member" className="text-gray-300">Soy un miembro del equipo</label>
          </div>
          {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
        </div>
        <button
          type="submit"
          className={`w-full font-bold py-2 px-4 rounded ${
            isConfirmed
              ? "bg-green-600 text-white cursor-not-allowed"
              : isRegistered
              ? "bg-orange-500 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
          disabled={isConfirmed}
        >
          {isConfirmed ? "Asistencia Confirmada" : isRegistered ? "Por Confirmar" : "Inscribirse"}
        </button>
      </form>

      {showConfirmButton && !isConfirmed && (
        <div className="mt-6 text-center bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">¡Confirma tu asistencia!</h3>
          <p className="text-lg mb-4">
            Por favor, confirma tu asistencia al torneo para garantizar tu participación.
          </p>
          <button
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            onClick={handleConfirmAttendance}
          >
            Confirmar asistencia
          </button>
        </div>
      )}

      {confirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg text-white text-center w-[600px]">
            <h3 className="text-3xl font-extrabold mb-4">Confirmación de asistencia</h3>
            <p className="mb-4">
              Al confirmar la asistencia, estás confirmando que no vas a faltar al torneo. Si finalmente faltas al torneo, recibirás una penalización directa por mala conducta.
            </p>
            <button
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              onClick={confirmAttendance}
            >
              Confirmar
            </button>
            <button
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition ml-4"
              onClick={() => setConfirmationModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {successConfirmationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg text-white text-center w-[600px]">
            <h3 className="text-3xl font-extrabold mb-4">¡Asistencia confirmada!</h3>
            <p className="mb-4">
              Tu asistencia al torneo ha sido confirmada exitosamente. ¡Gracias por tu compromiso y te esperamos en el torneo!
            </p>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => setSuccessConfirmationModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg text-white text-center w-[600px] transform scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-extrabold mb-4">¡Tu registro ha sido exitoso!</h3>
            <p className="mb-4">
              Estás oficialmente inscrito en el torneo. ¡Gracias por unirte! Ahora es momento de afinar tus habilidades y prepararte para la competencia.
              Te esperamos en la fecha indicada para darlo todo en el juego. ¡Mucho éxito y que gane el mejor!
            </p>
          </div>
        </div>
      )}

      {warningModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black p-6 rounded-lg shadow-lg text-white text-center w-[600px] transform scale-105 transition-transform duration-300">
            <h3 className="text-3xl font-extrabold mb-4">Registro como suplente</h3>
            <p className="mb-4">
              Has sido registrado después del límite de {MAX_PLAYERS} jugadores aceptados. Serás considerado como suplente y podrías ser seleccionado
              aleatoriamente para ocupar una plaza si algún jugador registrado antes del límite no participa.
            </p>
            <button
              className="mt-4 px-6 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
              onClick={() => setWarningModal(false)}
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inscripciones;