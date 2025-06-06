import React, { useEffect, useState } from "react";

const Inscripciones = ({ confirmedPlayersList, pendingPlayersList }) => {
  const [showModal, setShowModal] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const [successConfirmationModal, setSuccessConfirmationModal] = useState(false);

  useEffect(() => {
    if (showModal || warningModal || confirmationModal || successConfirmationModal) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [showModal, warningModal, confirmationModal, successConfirmationModal]);

  // Combine confirmed and pending players into a single list
  const allPlayersList = [...confirmedPlayersList, ...pendingPlayersList];

  return (
    <div id="inscription-section" className="p-6">
      
      <div className="bg-black text-white p-6 rounded-lg shadow-lg ">
        {allPlayersList.length > 0 ? (
          <ul className="space-y-4 ">
            {allPlayersList.map((player, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-2 border-b border-blue-500 flex-col gap-4 min-[568px]:flex-row"
              >
                <img
                    src={player.avatar || "https://via.placeholder.com/40"}
                    alt={player.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <span className="text-lg font-semibold">{player.name}</span>
                  <span>🚩 Se ha unido hace 17 minutos, 11:31</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">
            No hay jugadores inscritos en este momento.
          </p>
        )}
      </div>
    </div>
  );
};

export default Inscripciones;