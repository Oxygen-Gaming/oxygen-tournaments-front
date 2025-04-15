import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Follow from '@imgs/Recompensas_Follow.jpg';
import Clave from '@imgs/Recompensas_Clave.jpg';
import Camiseta from '@imgs/Recompensas_Camiseta.jpg';
import Ticket from '@imgs/Recompensas_Ticket.jpg';
import Pavos from '@imgs/Recompensas_V-bucks.jpg';
import Box from '@imgs/Recompensas_Box.jpg';
import Google from '@imgs/Recompensas_10_Google.jpg';
import Playstation from '@imgs/Recompensas_10_Playstation.jpg';
import Silla from '@imgs/Recompensas_Silla.jpg';

const RewardDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reward = location.state?.reward;

  const [userPoints, setUserPoints] = useState(1000); // Example user points
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false); // State for confirmation pop-up

  useEffect(() => {
    // Animación para desplazarse al principio de la página
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleRedeemReward = () => setShowConfirmationPopup(true);

  const confirmRedeem = () => {
    if (userPoints >= currentReward.points) {
      setUserPoints(userPoints - currentReward.points);
      setShowConfirmationPopup(false);

      // Create a blur overlay
      const blurOverlay = document.createElement("div");
      blurOverlay.style.position = "fixed";
      blurOverlay.style.top = "0";
      blurOverlay.style.left = "0";
      blurOverlay.style.width = "100%";
      blurOverlay.style.height = "100%";
      blurOverlay.style.backdropFilter = "blur(5px)"; // Added blur effect
      blurOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      blurOverlay.style.zIndex = "1000";
      document.body.appendChild(blurOverlay);

      // Display the first message
      const messageBox = document.createElement("div");
      messageBox.textContent = "Tu petición ha sido recibida. Se procesará tu pedido lo antes posible.";
      messageBox.style.position = "fixed";
      messageBox.style.top = "50%";
      messageBox.style.left = "50%";
      messageBox.style.transform = "translate(-50%, -50%)";
      messageBox.style.backgroundColor = "#1c1c1c";
      messageBox.style.color = "white";
      messageBox.style.padding = "20px";
      messageBox.style.borderRadius = "10px";
      messageBox.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      messageBox.style.zIndex = "1001";
      messageBox.style.fontSize = "18px";
      messageBox.style.textAlign = "center";
      messageBox.style.width = "300px";
      messageBox.style.height = "200px";
      messageBox.style.display = "flex";
      messageBox.style.flexDirection = "column";
      messageBox.style.justifyContent = "center";
      messageBox.style.alignItems = "center";

      // Add "Oxygen Gaming" below the message
      const nameElement = document.createElement("p");
      nameElement.textContent = "Oxygen Gaming";
      nameElement.style.marginTop = "10px";
      nameElement.style.fontSize = "14px";
      nameElement.style.color = "#ccc";
      messageBox.appendChild(nameElement);

      document.body.appendChild(messageBox);

      // After 4 seconds, show the second message
      setTimeout(() => {
        messageBox.textContent = "Redirigiendo...";
        messageBox.appendChild(nameElement); // Re-add "Oxygen Gaming" after text change
      }, 4000);

      // After 3 more seconds, remove the message and overlay
      setTimeout(() => {
        document.body.removeChild(messageBox);
        document.body.removeChild(blurOverlay);
      }, 7000);
    } else {
      alert("No tienes suficientes puntos para canjear esta recompensa.");
    }
  };

  const cancelRedeem = () => setShowConfirmationPopup(false);

  const allRewards = [
    { id: 1, image: Follow, title: "Follow por parte de Oxygen", points: 100, description: "¿Quieres unirte a la élite? Un follow exclusivo de Oxygen te conectará con una comunidad única. Por 100 puntos, estarás dentro del círculo del circulo de los mejores." },
    { id: 2, image: Clave, title: "Clave aleatoria Steam", points: 200, description: "¿Buscas un nuevo juego? Una clave aleatoria de Steam te sorprenderá con un título increíble para tu biblioteca. Por  200 puntos, la aventura te espera." },
    { id: 3, image: Camiseta, title: "Camiseta del Club", points: 300, description: "¿Listo para mostrar tu pasión? La camiseta del club te hará lucir con orgullo tu espíritu Oxygen. Por 300 puntos, vístete con estilo." },
    { id: 4, image: Ticket, title: "Ticket a Sorteo", points: 500, description: "¿Sueñas con premios épicos? Un ticket a sorteo te da la chance de ganar recompensas increíbles. Por  500 puntos, la suerte está de tu lado." },
    { id: 5, image: Pavos, title: "1000 V-Bucks Fortnite", points: 600, description: "¿Cómo vas a lucir tu victoria magistral? Con 1000 V-Bucks, podrás desbloquear skins exclusivas, bailes originales y otros ítems increíbles para personalizar tu experiencia. Por 600 puntos, estarás más cerca de tu próxima victoria épica." },
    { id: 6, image: Box, title: "Mystery Box", points: 700, description: "¿Te gustan las sorpresas? Una Mystery Box te espera con un regalo único que te encantará. Por  700 puntos, la emoción es tuya." },
    { id: 7, image: Google, title: "Tarjeta 10€ Google Play", points: 800, description: "¿Buscas diversión digital? Con 10 € en Google Play, tendrás acceso a apps, juegos y más para disfrutar al máximo. Por  800 puntos, el entretenimiento es tuyo." },
    { id: 8, image: Playstation, title: "Tarjeta 10€ PlayStation", points: 900, description: "¿Quieres más juegos en Playstation? Con 10 € en crédito, podrás descargar títulos y contenido para tu consola. Por 900 puntos, la diversión no para." },
    { id: 9, image: Silla, title: "Silla PlaySeat PUMA", points: 10000, description: "Consigue la silla Playseat Puma y lleva tu experiencia de gaming al siguiente nivel." },
  ];

  const currentReward = reward || allRewards.find((r) => r.id === reward?.id);

  const recommendedRewards = allRewards
    .filter((r) => r.id !== reward?.id)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  if (!currentReward) {
    return (
      <div className="bg-[#1AA9FF] text-white h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center">No se encontró información de la recompensa.</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#1AA9FF] text-white min-h-screen font-['Roboto_Condensed',sans-serif]">
      <Header />
      <div className="container mx-auto p-6">
        {/* Back Button */}
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 mb-6" // Added margin-bottom
          onClick={() => navigate("/rewards")}
        >
          Volver
        </button>
        <br></br>

        {/* Reward Details */}
        <div className="flex flex-col lg:flex-row gap-8 bg-[#1c1c1c] p-6 rounded-lg shadow-lg">
          <img
            src={currentReward.image}
            alt={currentReward.title}
            className="w-full lg:w-1/3 h-auto object-cover rounded-lg"
          />
          <div className="flex flex-col justify-between w-full">
            <div>
              <h1 className="text-4xl font-bold mb-8 text-center">{currentReward.title}</h1> {/* Increased margin-bottom */}
              <div className="mb-12"> {/* Increased margin-bottom */}
                <h2 className="text-2xl font-semibold text-gray-300 mb-4 text-center">Descripción</h2> {/* Centered title */}
                <p className="text-lg text-gray-300">{currentReward.description}</p>
              </div>
              <div className="mt-12"> {/* Increased margin-top */}
                <h2 className="text-3xl font-bold text-center text-white mb-6">Canjear Recompensa</h2> {/* Increased margin-bottom */}
                <p className="text-lg text-gray-300 text-center mt-6 mb-8"> {/* Increased margin-top and margin-bottom */}
                  ¿Listo para obtener esta recompensa? Haz clic en el botón de abajo para canjearla.
                </p>
                <div className="flex justify-center">
                  <button
                    className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105 hover:translate-y-[-2px]" // Added animation
                    onClick={handleRedeemReward} // Trigger the confirmation pop-up
                  >
                    Canjear Recompensa
                  </button>
                </div>
              </div>
            </div>
            <div className="text-right mt-12"> {/* Added margin-top */}
              <h2 className="text-2xl font-bold mb-4">Objetivo Necesario:</h2> {/* Increased margin-bottom */}
              <p className="text-4xl font-extrabold bg-gray-800 px-4 py-2 inline-block rounded-lg">{currentReward.points} puntos</p> {/* Highlighted with background */}
            </div>
          </div>
        </div>

        {/* Confirmation Pop-up */}
        {showConfirmationPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Confirmar Canjeo</h2>
              <p className="mb-4">¿Estás seguro de que deseas canjear esta recompensa?</p>
              <p className="text-sm mb-2">
                Puntos actuales: <b>{userPoints}</b> - <b>{currentReward.points}</b>
              </p>
              <p className="text-sm mb-4">
                Puntos restantes: <b>{userPoints - currentReward.points}</b>
              </p>
              {userPoints - currentReward.points < 0 && (
                <p className="text-red-500 text-sm mb-4">
                  Actualmente no puedes canjear esta recompensa. Necesitas un total de{" "}
                  <b>{currentReward.points}</b> puntos para poder canjear esta recompensa.
                </p>
              )}
              <div className="flex justify-center gap-4">
                <button
                  onClick={confirmRedeem}
                  className={`px-6 py-3 rounded-lg transition-transform ${
                    userPoints - currentReward.points < 0
                      ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                      : "bg-green-500 text-white hover:bg-green-600 transform hover:scale-105"
                  }`}
                  disabled={userPoints - currentReward.points < 0} // Disable if remaining points are negative
                >
                  Sí
                </button>
                <button
                  onClick={cancelRedeem}
                  className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-transform transform hover:scale-105"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Recommended Rewards */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-6">Recompensas Recomendadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedRewards.map((recommendedReward) => (
              <div
                key={recommendedReward.id}
                className="bg-[#1c1c1c] rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" }); // Animación de scroll al principio
                  navigate("/reward-details", { state: { reward: recommendedReward } });
                }}
              >
                <div className="relative w-full h-40">
                  <img
                    src={recommendedReward.image}
                    alt={recommendedReward.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2">{recommendedReward.title}</h3>
                  <p className="text-blue-400 font-bold">{recommendedReward.points} puntos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RewardDetailsPage;