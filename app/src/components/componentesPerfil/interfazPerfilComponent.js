import React from "react";
import { getImagenPerfil } from "./interfazCuentaComponent";

const Perfil2 = () => {
    const imagenPerfil = getImagenPerfil();

    return (
        <div className="w-full lg:w-[60%] xl:w-[50%] lg:items-center flex flex-col items-center gap-[30px] lg:pl-[100px] lg:pr-[100px] py-5 md:py-10 lg:py-0 ">
            <div className="flex flex-col items-center lg:flex-row w-full gap-[30px]">
                <img src={imagenPerfil} alt="imagen de perfil" className="w-[150px] h-[150px] p-[10px] border-[2px] rounded-full"/>
                <div className="text-[20px]">
                    <h1 className="text-[30px]">Nombre Apellido</h1>
                    <p>Puntos totales acumulados</p>
                    <div className="flex gap-[20px] justify-center">
                        <i className="fa-solid fa-coins mt-[6px]"></i>
                        <p>0</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-[20px] justify-center lg:items-start items-center w-full">
                <h1 className="text-[30px]">Estadísticas</h1>
                <div className="border-[1px] landscape:md:w-[70vh] md:w-[35vh] lg:w-[100vh] w-[90%] p-[10px] lg:h-[50px] text-[20px] flex justify-between items-center lg:p-[20px] bg-[white] text-[black] rounded">
                    <p>Misiones completadas:</p>
                    <p>0 Misiones</p>
                </div>
            </div>
        </div>
    );
}

export default Perfil2;
