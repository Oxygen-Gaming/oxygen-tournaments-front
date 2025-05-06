import React, { useState, useEffect } from "react";
import LeagueOfLegends from "@imgs/lol.jpg";
import Valorant from "@imgs/valorant.jpg";
import RocketLeague from "@imgs/rocketleague.jpg";
import InscriptionForm from "@components/Componentes Detalles/InscriptionForm";

const TournamentHeader = ({ selectedCard }) => {
  const [showInscriptionForm, setShowInscriptionForm] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState("");

  const getImageForGame = (gameName) => {
    if (gameName === "League of Legends") return LeagueOfLegends;
    if (gameName === "Valorant") return Valorant;
    if (gameName === "Rocket League") return RocketLeague;
    return null;
  };

  const handleJoinTournament = () => {
    setShowInscriptionForm(true);
  };

  const closeInscriptionForm = () => {
    setShowInscriptionForm(false);
  };

  // Función para convertir la fecha del torneo en formato "DD/MM/YYYY" a un objeto Date
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/"); // Divide en partes
    return new Date(`${year}-${month}-${day}T00:00:00`); // Devuelve en formato adecuado
  };

  // Función para calcular la cuenta atrás
  const calculateCountdown = (targetDate) => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    // Si ha pasado más de un día desde el torneo, mostrar "Ya finalizó"
    if (distance < -86400000) { // 86400000 ms = 1 día
      return <span className="text-4xl text-red-600 font-bold">¡Ya finalizó!</span>;
    }

    if (distance <= 0) return <span className="text-4xl text-green-600 font-bold">¡Ya ha comenzado!</span>;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    return (
      <div className="flex justify-center items-center space-x-6 text-4xl font-extrabold text-white">
        <div className="text-center">
          <span className="block text-yellow-400">{days}</span>
          <span className="text-lg text-white">Días</span>
        </div>
        <div className="text-center">
          <span className="block text-red-500">{hours}</span>
          <span className="text-lg text-white">Horas</span>
        </div>
        <div className="text-center">
          <span className="block text-green-500">{minutes}</span>
          <span className="text-lg text-white">Minutos</span>
        </div>
        <div className="text-center">
          <span className="block text-blue-500">{seconds}</span>
          <span className="text-lg text-white">Segundos</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    const targetDate = parseDate(selectedCard[3]); // Convertimos la fecha del torneo
    const interval = setInterval(() => {
      setTimeRemaining(calculateCountdown(targetDate)); // Actualiza la cuenta atrás cada segundo
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedCard]);

  const targetDate = parseDate(selectedCard[3]);
  const distance = targetDate.getTime() - new Date().getTime();

  // Solo mostrar el botón si el torneo no ha comenzado ni ha finalizado
  const showJoinButton = distance > 0;

  return (
    <div
      className="relative bg-cover bg-center h-[450px] w-full flex items-center justify-center"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.7) 100%),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 75%, rgba(0, 0, 0, 0.6) 90%, rgba(0, 0, 0, 0.8) 100%),
          url(${getImageForGame(selectedCard[1])})
        `,
      }}
    >
      {/* Gradient at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1AA9FF] z-10"></div>
      <div className="relative z-20 text-center">
        <h1 className="text-5xl font-extrabold text-white text-center">{selectedCard[2]}</h1>
        <div className="mt-4">{timeRemaining}</div> {/* Mostrar cuenta atrás */}
        
        {/* Mostrar el botón solo si el torneo no ha comenzado ni ha finalizado */}
        {showJoinButton && (
          <button
            className="mt-4 px-6 py-2 bg-[#005f99] text-white rounded-lg hover:bg-[#0077b6] transition-transform transform hover:scale-105 hover:translate-y-[-2px]"
            onClick={handleJoinTournament}
          >
            Unirse al torneo
          </button>
        )}
      </div>
      {showInscriptionForm && (
        <InscriptionForm closeForm={closeInscriptionForm} />
      )}
    </div>
  );
};

export default TournamentHeader;




