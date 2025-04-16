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
    return (
        <div id="tabla_ventajas" className="mt-12 px-4 sm:px-6 lg:px-12 mb-12">
            <h2 className="text-3xl font-bold text-center mb-10 text-white">Ventajas Exclusivas de la Suscripción</h2>
            <div className="shadow-2xl overflow-x-auto rounded-lg border border-gray-700 w-full">
                <table className="w-full sm:w-auto min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800/50 backdrop-blur-sm">
                    <tr>
                        <th scope="col" className="px-4 py-2 text-center text-[15px] font-semibold text-gray-300 uppercase tracking-wider">Ventajilla</th>
                        <th scope="col" className="px-4 py-2 text-center text-[15px] font-semibold text-gray-300 uppercase tracking-wider">Normal</th>
                        <th scope="col" className="px-4 py-2 text-center text-[15px] font-semibold text-amber-300 uppercase tracking-wider bg-gradient-to-br from-amber-800 to-amber-600">Premium Exclusivo</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-900/80 divide-y divide-gray-700 backdrop-blur-sm">
                    {ventajas_free.map((ventaja, index) => (
                        <tr key={index} className="hover:bg-gray-800/70 transition duration-200 ease-in-out align-middle">
                            <td className="p-2 text-center">
                                <span className="text-white text-sm font-semibold">{ventaja}</span>
                            </td>
                            <td className="p-2 text-center">
                                <span className="text-green-500 text-lg font-bold">✔</span>
                            </td>
                            <td className="p-2 text-center">
                                <span className="text-red-500 text-lg font-bold">X</span>
                            </td>
                        </tr>
                    ))}

                    {ventajas_premium.map((ventaja, index) => (
                        <tr key={index} className="hover:bg-gray-800/70 transition duration-200 ease-in-out align-middle">
                            <td className="p-2 text-center">
                                <span className="text-white text-sm font-semibold">{ventaja}</span>
                            </td>
                            <td className="p-2 text-center">
                                <span className="text-green-500 text-lg font-bold">✔</span>
                            </td>
                            <td className="p-2 text-center">
                                <span className="text-amber-500 text-lg font-bold">✔</span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TablaVentajas;