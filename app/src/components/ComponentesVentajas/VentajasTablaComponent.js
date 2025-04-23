import React from "react"
import premiumCards from "@components/componentesInicio/PremiumCardsComponent";
const ventajas_free = [
    'Watch Parties',
    'Eventos Comunidad',
    'Ventaja Free',
    'Ventaja Free',
    'Drop Exclusivos',
    'Wallpapers',
    'Descuento Merchandising',
    'Contenido Exclusivo',
    'Ventaja Free',
]

const ventajas_premium = [
    'Entrada a Eventos',
    'Banner Exclusivo',
    'Descuento 15% Merchandising',
    'Obsequio Cumpleaños',
    'Partidas con Creadores/Jugadores',
    'Puntos Dobles',
    'Información Privilegiada',
    'Sesión de Coaching',
    'Activo Digital'
]

const TablaVentajas = () => {
    const interleavedVentajas = [];
    const maxLength = Math.max(ventajas_free.length, ventajas_premium.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < ventajas_free.length) {
            interleavedVentajas.push({ type: "free", text: ventajas_free[i] });
        }
        if (i < ventajas_premium.length) {
            interleavedVentajas.push({ type: "premium", text: ventajas_premium[i] });
        }
    }

    return (
        <div id="tabla_ventajas" className="mt-12 px-0 sm:px-4 lg:px-8 xl:px-16 mb-12"> {/* Reduced outer padding for more width */}
            <h2 className="text-3xl font-bold text-center mb-10 text-white">Ventajas Exclusivas de la Suscripción</h2>
            <div className="shadow-2xl overflow-x-auto rounded-lg border border-gray-700 w-full max-w-[2000px] mx-auto"> {/* Increased max width */}
                <table className="w-full sm:w-auto min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800/50 backdrop-blur-sm">
                    <tr>
                        <th scope="col" className="px-8 py-3 text-center text-[15px] font-semibold text-gray-300 uppercase tracking-wider">Ventajilla</th>
                        <th scope="col" className="px-8 py-3 text-center text-[15px] font-semibold text-gray-300 uppercase tracking-wider">Normal</th>
                        <th scope="col" className="px-8 py-3 text-center text-[15px] font-semibold text-amber-300 uppercase tracking-wider bg-gradient-to-br from-amber-800 to-amber-600">Premium Exclusivo</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-900/80 divide-y divide-gray-700 backdrop-blur-sm">
                    {interleavedVentajas.map((ventaja, index) => (
                        <tr key={index} className="hover:bg-gray-800/70 transition duration-200 ease-in-out align-middle">
                            <td className="p-6 text-center">
                                <span className="text-white text-base font-semibold">{ventaja.text}</span> {/* Increased font size */}
                            </td>
                            <td className="p-6 text-center">
                                <span className={`text-xl font-bold ${ventaja.type === "free" ? "text-green-500" : "text-red-500"}`}> {/* Increased font size */}
                                    {ventaja.type === "free" ? "✔" : "X"}
                                </span>
                            </td>
                            <td className="p-6 text-center">
                                <span className="text-amber-500 text-xl font-bold">✔</span> {/* Increased font size */}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TablaVentajas;