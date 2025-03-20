import React from 'react';

const ButtonsComponent = ({ selectedCard, modalContent, handleInfoClick, handleCancelRegistration, handleRegistrationClick, handleBracketClick, closeModal, inscriptionStatus }) => {
    const buttonModalStyle = "bg-[#002f5f] text-white p-5 rounded-lg w-[40%] max-w-[500px] h-[40%] overflow-hidden fixed";
    const buttonStyle = "px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900 w-full";
    const smallButtonStyle = "px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 border-2 border-white text-white bg-transparent hover:bg-white hover:text-blue-900";

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className={buttonModalStyle}>
                <h2 className="text-3xl font-bold mb-8 text-center">{selectedCard[2]}</h2> {/* Cambiar modalContent a selectedCard[2] */}
                <div className="flex flex-col gap-6 mt-4">
                    <button className={buttonStyle} onClick={handleInfoClick}>Información del torneo</button>
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
