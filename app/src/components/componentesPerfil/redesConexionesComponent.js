import React from "react";

const Red = ({logo, nombre, estado, boton}) => {
    return (
        <div className="bg-[white] text-[black] w-[45vh] md:w-[50vh] flex items-center justify-between p-[20px] rounded-[20px]">
            <img src={logo} alt="Logo de Twitter" className="bg-[black] rounded-[10px] p-[7px] w-[50px] h-[50px]" />
            <div>
                <h1 className="text-[25px]">{nombre}</h1>
                <p className="text-[#545454]">{estado}</p>
            </div>
            <button className="bg-[#1AA9FF] h-[40px] w-[30%] rounded-full text-[white] hover:bg-[white] hover:text-[#1AA9FF] hover:border-[#1AA9FF] hover:border-[1px]">{boton}</button>
        </div>
    )
    
}

export default Red;