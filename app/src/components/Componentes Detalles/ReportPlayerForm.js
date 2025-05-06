import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ReportPlayerForm = ({ closeForm }) => {
  const [playerName, setPlayerName] = useState("");
  const [reason, setReason] = useState("");
  const [details, setDetails] = useState("");
  const [evidence, setEvidence] = useState(null);
  const [errors, setErrors] = useState({});
  const [tournamentInfo, setTournamentInfo] = useState({
    name: "Torneo Desconocido",
    date: "Fecha Desconocida",
    time: "Hora Desconocida",
  });

  useEffect(() => {
    const storedTournamentInfo = JSON.parse(localStorage.getItem("currentTournament"));
    if (storedTournamentInfo) {
      setTournamentInfo(storedTournamentInfo);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!playerName) newErrors.playerName = "El nombre del jugador es obligatorio.";
    if (!reason) newErrors.reason = "El motivo del reporte es obligatorio.";
    if (!details) newErrors.details = "Los detalles del reporte son obligatorios.";
    if (!evidence) newErrors.evidence = "La evidencia es obligatoria.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const blurOverlay = document.createElement("div");
    blurOverlay.style.position = "fixed";
    blurOverlay.style.top = "0";
    blurOverlay.style.left = "0";
    blurOverlay.style.width = "100%";
    blurOverlay.style.height = "100%";
    blurOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    blurOverlay.style.backdropFilter = "blur(5px)";
    blurOverlay.style.zIndex = "1000";
    document.body.appendChild(blurOverlay);

    const successMessage = document.createElement("div");
    successMessage.textContent = "Reporte enviado con éxito.";
    successMessage.style.position = "fixed";
    successMessage.style.top = "50%";
    successMessage.style.left = "50%";
    successMessage.style.transform = "translate(-50%, -50%)";
    successMessage.style.backgroundColor = "#1c1c1c";
    successMessage.style.color = "white";
    successMessage.style.padding = "20px";
    successMessage.style.borderRadius = "10px";
    successMessage.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    successMessage.style.zIndex = "1001";
    successMessage.style.fontSize = "18px";
    successMessage.style.textAlign = "center";
    successMessage.style.width = "300px";
    successMessage.style.height = "300px";
    successMessage.style.display = "flex";
    successMessage.style.flexDirection = "column";
    successMessage.style.justifyContent = "center";
    successMessage.style.alignItems = "center";

    const nameElement = document.createElement("p");
    nameElement.textContent = "Oxygen Gaming";
    nameElement.style.marginTop = "10px";
    nameElement.style.fontSize = "14px";
    nameElement.style.color = "#ccc";
    successMessage.appendChild(nameElement);

    document.body.appendChild(successMessage);

    setTimeout(() => {
      successMessage.textContent = "Redirigiendo...";
      successMessage.appendChild(nameElement);
    }, 2000);

    setTimeout(() => {
      document.body.removeChild(successMessage);
      document.body.removeChild(blurOverlay);
      setPlayerName("");
      setReason("");
      setDetails("");
      setEvidence(null);
      closeForm();
    }, 5000);
  };

  const handleFileChange = (e) => {
    setEvidence(e.target.files[0]);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-[#1c1c1c] text-white p-6 rounded-lg shadow-lg w-[90%] max-w-[500px] relative"
          initial={{ y: -100, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <button
            className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
            onClick={closeForm}
          >
            X
          </button>
          <h2 className="text-3xl font-bold mb-4 text-center">Reporte de Jugador</h2>
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
              <label htmlFor="reason" className="block text-gray-300 mb-2">Motivo del reporte:</label>
              <input
                type="text"
                id="reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
              {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="details" className="block text-gray-300 mb-2">Detalles:</label>
              <textarea
                id="details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full p-2 rounded bg-gray-700 text-white"
                rows="4"
              />
              {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="evidence" className="block text-gray-300 mb-2">Evidencia (Imagen):</label>
              <input
                type="file"
                id="evidence"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full p-2 rounded bg-gray-700 text-white"
              />
              {errors.evidence && <p className="text-red-500 text-sm mt-1">{errors.evidence}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Enviar Reporte
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReportPlayerForm;


