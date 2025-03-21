import React, {useState, useEffect} from "react";
import oxygen from "@imgs/Logo_OxygenGaming2.png"
const CuentasJuego = () => {
    const [cuentas, setCuentas] = useState([]);
    useEffect(() => {
        setCuentas([{imagen: oxygen, juego: 'EA FC25', nickname: 'Chusneo', region: 'Europa'}, {imagen: oxygen, juego: 'EA FC25', nickname: 'Chusneo', region: 'Europa'}])
    })
    return (
        <div className="flex flex-col gap-[20px] w-full justify-center items-center overflow-x-hidden">
            <h1 className="text-[35px]">Cuentas de juego</h1>
            <div className="flex flex-wrap items-center justify-center gap-[50px] static sm:p-[30px] px-[80px]">
                {cuentas.map((cuenta, index) => (
                    <div key={index} className="bg-gradient-to-t w-[40vh] sm:min-h-[150vh] sm:w-[70vh] min-h-[70vh] lg:min-h-[80vh] lg:w-[50vh] p-[30px] md:w-[300px] md:min-h-[70%] md:p-[20px] from-[#18538a] to-[#1e90ff] text-white rounded-[15px]">
                        <img src={cuenta.imagen} className="w-full h-[45%]"/> 
                        <div className="flex flex-col gap-[20px] text-[25px]">
                            <p>Juego: {cuenta.juego}</p>
                            <p>Nickname: {cuenta.nickname}</p>
                            <p>Región: {cuenta.region}</p>
                            <div className="flex flex-row justify-between text-[25px] items-center w-full">
                                <button className="bg-[lightseagreen] rounded-full h-[50px] w-[120px]"><a>Editar</a></button>
                                <button className="bg-[#c41010] rounded-full h-[50px] w-[120px] "><a>Eliminar</a></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CuentasJuego;