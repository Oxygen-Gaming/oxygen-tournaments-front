import React from "react";

const Logro = ({ titulo, variable }) => {
    return (
        <div className="flex flex-wrap w-screen gap-[20px] lg:w-[50%] justify-center items-center">
            <h1 className="text-[35px] text-center">{titulo}</h1>
            <div className="flex flex-wrap justify-center w-screen gap-[20px]">
                
                {variable.map((logro, index) => (
                    <div key={index} className="bg-gradient-to-t sm:w-[60vh] sm:min-h-[80vh] min-h-[50vh] lg:min-h-[50vh] md:w-[300px] md:min-h-[70%] md:p-[20px] w-[40vh] p-[30px] from-[#18538a] to-[#1e90ff] text-white rounded-[15px]">
                        <img src={logro.imagen} className="w-full md:h-[60%] h-[60%]" alt={`Imagen de ${logro.juego}`} />
                        <div className="flex flex-col text-left gap-[20px]">
                            <p className="text-[25px] h-[60px]">{logro.juego}</p>
                            <p className="text-[20px]">Puntos: {logro.puntos}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Logro;
