import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Header from "@components/Header";
import Footer from "@components/Footer";

const ReportPlayerPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    playerName: "",
    reason: "",
    evidence: null, // Change to null for file upload
    additionalInfo: "",
  });

  useEffect(() => {
    // Reset scroll position to the top when the page loads
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "evidence") {
      setFormData((prev) => ({ ...prev, evidence: files[0] })); // Handle file input
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a blur overlay
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

    // Display a styled success message
    const successMessage = document.createElement("div");
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

    // Add name next to the message
    const nameElement = document.createElement("p");
    nameElement.textContent = "Oxygen Gaming";
    nameElement.style.marginTop = "10px";
    nameElement.style.fontSize = "14px";
    nameElement.style.color = "#ccc";
    successMessage.appendChild(nameElement);

    // Add tournament information dynamically
    const tournamentInfo = document.createElement("p");
    tournamentInfo.textContent = "Torneo: League of Legends Championship - Fecha: 30/03/2025";
    tournamentInfo.style.marginTop = "10px";
    tournamentInfo.style.fontSize = "14px";
    tournamentInfo.style.color = "#aaa";
    successMessage.appendChild(tournamentInfo);

    document.body.appendChild(successMessage);

    // After 2 seconds, show "Redirigiendo..." message
    setTimeout(() => {
      successMessage.textContent = "Redirigiendo...";
      successMessage.appendChild(nameElement); // Re-add name after text change
    }, 2000);

    // After 3 more seconds, remove the message, reset blur, and redirect
    setTimeout(() => {
      document.body.removeChild(successMessage);
      document.body.removeChild(blurOverlay);
      setFormData({
        playerName: "",
        reason: "",
        evidence: null,
        additionalInfo: "",
      });
      navigate(-1); // Redirect back to the previous page
    }, 5000);
  };

  return (
    <div className="bg-[#1AA9FF] text-white min-h-screen font-['Roboto_Condensed',sans-serif]">
      <Header />
      <div className="max-w-[600px] mx-auto p-6 bg-[#1c1c1c] rounded-lg shadow-lg mt-8">
        <button
          className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          onClick={() => navigate(-1)} // Navigate back to the previous page
        >
          Volver
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center">Reportar Jugador</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="playerName" className="block text-sm font-bold mb-2">
              Nombre del Jugador:
            </label>
            <input
              type="text"
              id="playerName"
              name="playerName"
              value={formData.playerName}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-bold mb-2">
              Razón del Reporte:
            </label>
            <input
              type="text"
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div>
            <label htmlFor="additionalInfo" className="block text-sm font-bold mb-2">
              Descripción del problema:
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label htmlFor="evidence" className="block text-sm font-bold mb-2">
              Evidencia (Imagen):
            </label>
            <input
              type="file"
              id="evidence"
              name="evidence"
              accept="image/*" // Restrict to image files
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-700 text-white"
              required // Make it mandatory
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Enviar Reporte
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ReportPlayerPage;
