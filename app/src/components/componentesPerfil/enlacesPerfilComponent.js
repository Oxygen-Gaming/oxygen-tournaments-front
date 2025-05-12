import React from "react";

const Enlace = ({ opcion, nombre, setOpcionSeleccionada, opcionSeleccionada }) => {
    return (
        <button 
            onClick={() => setOpcionSeleccionada(opcion)} 
            className={`some-class ${opcionSeleccionada === opcion ? "bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-[white] py-[5px] px-[10px] rounded" : "text-white hover:text-[white]"}`}
        >
            {nombre}
        </button>
    );
};

export default Enlace;