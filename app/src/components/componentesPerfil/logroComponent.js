import React from "react";

const Logro = ({ titulo, variable }) => {
    return (
        <div className="flex flex-col gap-[20px] lg:w-[50%] justify-center items-center">
            <h1 className="text-[35px]">{titulo}</h1>
            <div className="flex flex-wrap justify-center w-full gap-[20px] static">
                {variable.map((logro, index) => (
                    <div key={index} className="bg-gradient-to-t w-[40vh] h-[25vh] lg:h-[40vh] p-[10px] from-[#18538a] to-[#1e90ff] text-white rounded-[15px]">
                        <img src={logro.imagen} className="w-full md:h-[60%] h-[40%]" alt={`Imagen de ${logro.juego}`} />
                        <div className="flex flex-col gap-[20px]">
                            <p>{logro.juego}</p>
                            <p>Puntos: {logro.puntos}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Logro;
