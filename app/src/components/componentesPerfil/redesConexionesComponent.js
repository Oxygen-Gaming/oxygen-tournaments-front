import React from "react";

const Red = ({ logo, nombre, estado, boton, fondo, relleno }) => {
    return (
        <div className="bg-gray-700 text-white w-[18rem] min-[568px]:w-[20rem] lg:w-[50vh] xl:w-[25rem] flex items-center justify-between p-5 rounded-[10px] shadow-md">
            <img
                src={logo}
                alt="Logo"
                className={`rounded-[10px] w-[50px] h-[50px] bg-[${fondo}] p-[${relleno}]`}
            />
            <div className="flex flex-col ml-4 flex-grow">
                <h1 className="text-xl font-semibold">{nombre}</h1>
                <p className="text-sm text-gray-300">{estado}</p>
            </div>
            <button className="bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white font-medium h-10 px-4 rounded-[10px] transition-all duration-300 ease-in-out">

                {boton}
            </button>
        </div>
    );

}
export default Red;
