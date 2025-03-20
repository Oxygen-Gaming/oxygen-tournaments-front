import React, { useState, useEffect } from "react";
import Logro from "./logroComponent";
import oxygen from "@imgs/Logo_OxygenGaming2.png";

const Logros = () => {
    const [misionesCompletadas, setMisionesCompletadas] = useState([]);
    const [recompensasSolicitadas, setRecompensasSolicitadas] = useState([]);

    useEffect(() => {
        setMisionesCompletadas([
            { imagen: oxygen, juego: 'Clip de la cagada de la semana', puntos: 20 },
            { imagen: oxygen, juego: 'Completa el quiz semanal', puntos: 100 }
        ]);

        setRecompensasSolicitadas([
            { imagen: oxygen, juego: 'Camiseta del club', puntos: 50 },
            { imagen: oxygen, juego: 'Silla Playseat Puma', puntos: 100 }
        ]);
    }, []);

    return (
        <div className="flex flex-col lg:flex-row w-full items-center">
            <Logro titulo="Misiones Completadas" variable={misionesCompletadas} />
            <Logro titulo="Recompensas Solicitadas" variable={recompensasSolicitadas} />
        </div>
    );
}

export default Logros;
