import React, {useState, useEffect} from "react";
import oxygen from "../../img/Logo_OxygenGaming.jpg"
import Logro from "./logroComponent";
const Inventario = () => {
    const [recompensas_canjeadas, setCanjeadas] = useState([]);
    useEffect(() => {
        setCanjeadas([{imagen: oxygen, juego: 'Camiseta del club', puntos:50}, {imagen: oxygen, juego: 'Silla Playseat Puma', puntos:100}])
    })
    return (
        <div className="flex flex-col gap-[20px]  w-full justify-center items-center">
            <Logro titulo="Recompensas Canjeadas" variable={recompensas_canjeadas} />
        </div>
    );
}

export default Inventario;