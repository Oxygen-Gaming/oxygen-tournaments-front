import React from "react"
import premiumCards from "@components/componentesInicio/PremiumCardsComponent";
const TablaVentajas = () => {
    return (
        <div className="mt-12 px-4 sm:px-6 lg:px-12 mb-12">
            <h2 className="text-3xl font-bold text-center mb-10 text-white">Ventajas Exclusivas de la Suscripción</h2>
            <div className="shadow-2xl overflow-hidden rounded-lg border border-gray-700">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800/50 backdrop-blur-sm">
                    <tr>
                        <th scope="col" className="px-6 py-4 text-centerb text-[15px] font-semibold text-gray-300 uppercase tracking-wider"></th>
                        <th scope="col" className="px-6 py-4 text-center text-[15px] font-semibold text-gray-300 uppercase tracking-wider]">Normal</th>
                        <th scope="col" className="px-6 py-4 text-center text-[15px] font-semibold text-amber-300 uppercase tracking-wider bg-gradient-to-br from-amber-800 to-amber-600">Premium Exclusivo</th>
                    </tr>
                    </thead>
                    <tbody className="bg-gray-900/80 divide-y divide-gray-700 backdrop-blur-sm">
                    {premiumCards.map((card, index) => (
                        <tr key={index} className="hover:bg-gray-800/70 transition duration-200 ease-in-out align-middle">
                            <td className="p-3 w-64 text-center">
                                <span className="text-white text-xl font-semibold">Ventajilla Normal</span>
                            </td>
                            <td className="p-3 w-64 text-center">
                                <span className="text-green-500 text-2xl font-bold">✔</span>
                            </td>
                            <td className="p-3 w-64 text-center">
                                <span className="text-amber-200 text-2xl font-bold">✔</span>
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