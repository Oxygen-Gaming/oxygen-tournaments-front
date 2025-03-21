import React from "react";

const Red = ({logo, nombre, estado, boton, fondo, relleno}) => {
    return (
        <div className="bg-[white] text-[black] lg:w-[23%] w-[45vh] md:w-[40%] sm:w-[40%] flex items-center justify-between p-[20px] rounded-[20px]">
            <img src={logo} alt="Logo" className={` rounded-[10px] w-[50px] h-[50px] bg-[${fondo}] p-[${relleno}]`} />
            <div>
                <h1 className="text-[25px]">{nombre}</h1>
                <p className="text-[#545454]">{estado}</p>
            </div>
            <button className="bg-[#1AA9FF] h-[40px] w-[30%] rounded-full text-[white] hover:bg-[white] hover:text-[#1AA9FF] hover:border-[#1AA9FF] hover:border-[1px]">{boton}</button>
        </div>
    )
    
}

export default Red;