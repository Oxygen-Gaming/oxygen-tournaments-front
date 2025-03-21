import React from "react";

const Enlace = ({ opcion, nombre, setOpcionSeleccionada }) => {
    return (
        <button onClick={() => setOpcionSeleccionada(opcion)} className="some-class hover:text-[black]">
            {nombre}
        </button>
    );
};

export default Enlace;
