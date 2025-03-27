import React from 'react';

const ButtonsComponent = ({ selectedCard, handleInfoClick, handleCancelRegistration, handleRegistrationClick, handleBracketClick, closeModal, inscriptionStatus }) => {
    const buttonModalStyle = selectedCard[4] === 'ongoing' || selectedCard[4] === 'finished'
        ? "bg-[#002f5f] text-white p-5 rounded-lg w-[40%] max-w-[500px] h-[30%] overflow-hidden fixed" // Adjusted height for ongoing/finished tournaments
        : "bg-[#002f5f] text-white p-5 rounded-lg w-[40%] max-w-[500px] h-[40%] overflow-hidden fixed"; // Default height for other tournaments
    const buttonStyle = "px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 w-full";
    const smallButtonStyle = "px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900";

    const showInfoModal = () => {
        closeModal();
        handleInfoClick(selectedCard); // Pass the selected card to display its content
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className={buttonModalStyle}>
                <h2 className="text-3xl font-bold mb-8 text-center">{selectedCard[2]}</h2>
                <div className="flex flex-col gap-6 mt-4">
                    <button className={buttonStyle} onClick={showInfoModal}>Información del torneo</button>
                    {inscriptionStatus[selectedCard[0]] ? (
                        <button className={buttonStyle} onClick={handleCancelRegistration}>Cancelar Inscripción</button>
                    ) : (
                        selectedCard[4] === 'upcoming' && <button className={buttonStyle} onClick={handleRegistrationClick}>Inscripción</button>
                    )}
                    <button className={buttonStyle} onClick={handleBracketClick}>Ver Bracket</button>
                </div>
                <button onClick={closeModal} className={`mt-8 ${smallButtonStyle} mx-auto block`}>Cerrar</button>
            </div>
        </div>
    );
};

export default ButtonsComponent;
