import React, { useState, useEffect } from "react";
import Logro from "./logroComponent";
import oxygen from "@imgs/Logo_OxygenGaming2.png";

const Logros = () => {
    const [misionesCompletadas, setMisionesCompletadas] = useState([]);
    const [recompensasSolicitadas, setRecompensasSolicitadas] = useState([]);
    const [recompensas_canjeadas, setCanjeadas] = useState([]);
    const [seleccion, setSeleccion] = useState("Misiones Completadas");

    useEffect(() => {
        setMisionesCompletadas([
            { imagen: oxygen, juego: 'Clip de la cagada de la semana', puntos: 20 },
            { imagen: oxygen, juego: 'Completa el quiz semanal', puntos: 100 }
        ]);

        setRecompensasSolicitadas([
            { imagen: oxygen, juego: 'Camiseta del club', puntos: 50 },
            { imagen: oxygen, juego: 'Silla Playseat Puma', puntos: 100 }
        ]);

        setCanjeadas([
            { imagen: oxygen, juego: 'Camiseta del club', puntos: 50 },
            { imagen: oxygen, juego: 'Silla Playseat Puma', puntos: 100 }
        ]);
    }, []);

    const getDatosSeleccionados = () => {
        switch (seleccion) {
            case "Misiones Completadas":
                return misionesCompletadas;
            case "Recompensas Solicitadas":
                return recompensasSolicitadas;
            case "Recompensas Canjeadas":
                return recompensas_canjeadas;
            default:
                return [];
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                {/* Desplegable estilizado para fondo oscuro */}
                <select
                    className="bg-zinc-800 text-white border border-zinc-600 rounded-lg px-4 py-2 shadow-sm"
                    value={seleccion}
                    onChange={(e) => setSeleccion(e.target.value)}
                >
                    <option value="Misiones Completadas">Misiones Completadas</option>
                    <option value="Recompensas Solicitadas">Recompensas Solicitadas</option>
                    <option value="Recompensas Canjeadas">Recompensas Canjeadas</option>
                </select>

                
            </div>

            <div className="w-full">
                <Logro titulo={seleccion} variable={getDatosSeleccionados()} />
            </div>

        </div>
    );
};

export default Logros;



