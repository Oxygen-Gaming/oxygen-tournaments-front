import React, {useState, useEffect} from "react";
import oxygen from "@imgs/Logo_OxygenGaming.jpg"
const CuentasJuego = () => {
    const [cuentas, setCuentas] = useState([]);
    useEffect(() => {
        setCuentas([{imagen: oxygen, juego: 'EA FC25', nickname: 'Chusneo', region: 'Europa'}, {imagen: oxygen, juego: 'EA FC25', nickname: 'Chusneo', region: 'Europa'}])
    })
    return (
        <div className="flex flex-col gap-[20px] w-full justify-center items-center">
            <h1 className="text-[35px]">Cuentas de juego</h1>
            <div className="flex flex-col lg:flex-row lg:flex-wrap items-center gap-[50px] static px-[80px]">
                {cuentas.map((cuenta, index) => (
                    <div key={index} className="bg-gradient-to-t w-[40vh] h-[50vh] lg:h-[50vh] p-[10px] md:h-[35vh] from-[#18538a] to-[#1e90ff] text-white rounded-[15px]">
                        <img src={cuenta.imagen} className="w-full h-[40%]"/>
                        <div className="flex flex-col gap-[20px]">
                            <p>Juego: {cuenta.juego}</p>
                            <p>Nickname: {cuenta.nickname}</p>
                            <p>Región: {cuenta.region}</p>
                            <div className="flex flex-row justify-between items-center w-full px-[30px]">
                                <button className="bg-[lightseagreen] rounded-full w-[70px]"><a>Editar</a></button>
                                <button className="bg-[#c41010] rounded-full w-[70px] "><a>Eliminar</a></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CuentasJuego;