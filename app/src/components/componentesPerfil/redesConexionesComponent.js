import React from "react";

const Red = ({logo, nombre, estado, boton, fondo, relleno}) => {
    return (
        <div className="bg-[white] text-[black] w-[18rem] min-[568px]:w-[20rem] lg:w-[50vh] xl:w-[60vh] flex items-center justify-between p-[20px] rounded-[10px]">
            <img src={logo} alt="Logo" className={` rounded-[10px] w-[50px] h-[50px] bg-[${fondo}] p-[${relleno}]`} />
            <div>
                <h1 className="text-[25px]">{nombre}</h1>
                <p className="text-[#545454]">{estado}</p>
            </div>
            <button className="bg-[#1AA9FF] h-[40px] w-[30%] rounded-[10px] text-[white] hover:bg-[white] hover:text-[#1AA9FF] hover:border-[#1AA9FF] hover:border-[1px]">{boton}</button>
        </div>
    )
    
}

export default Red;