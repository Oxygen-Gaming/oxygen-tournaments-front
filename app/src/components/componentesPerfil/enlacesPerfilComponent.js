import React from "react";

const Enlace = ({ opcion, nombre, setOpcionSeleccionada, opcionSeleccionada }) => {
    return (
        <button 
            onClick={() => setOpcionSeleccionada(opcion)} 
            className={`some-class ${opcionSeleccionada === opcion ? "bg-[black] text-[white] py-[5px] px-[10px] rounded" : "text-white hover:text-[black]"}`}
        >
            {nombre}
        </button>
    );
};

export default Enlace;