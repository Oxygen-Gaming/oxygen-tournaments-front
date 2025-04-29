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
    'Recompensas por Misiones',
    'Descuento 10% Merchandising', // Added to show a tick
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

const sections = [
    { 
        title: "OXYGEN, TU EQUIPO", 
        ventajas: [
            'Watch Parties',
            'Wallpapers',
            'Banner Exclusivo',
            'Follow Club',
            'Acceso Discord VIP',
            'Información Privilegiada'
        ] 
    },
    { 
        title: "CONTENIDO POR Y PARA TI", 
        ventajas: [
            'Contenido Exclusivo',
            'Eventos Comunidad',
            'Guías Competitivas',
            'Sesión de Coaching'
        ] 
    },
    { 
        title: "GANA PREMIOS", 
        ventajas: [
            'Recompensas por Misiones',
            'Entradas a Eventos',
            'Obsequio Cumpleaños',
            'Puntos Dobles',
            'Activo Digital'
        ] 
    },
    { 
        title: "PRODUCTOS EXCLUSIVOS Y DESCUENTOS", 
        ventajas: [
            'Descuento 10% Merchandising',
            'Descuento 15% Merchandising',
            'Drops Exclusivos',
            'Wallpapers'
        ] 
    },
];

const TablaVentajas = () => {
    return (
        <div id="tabla_ventajas" className="mt-12 px-4 lg:px-8 xl:px-16 mb-12">
            <h2 className="text-4xl font-extrabold text-center mb-10 text-white">Ventajas Exclusivas de la Suscripción</h2>
            <div id="section-1" className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                {/* Left Column: OXYGEN, TU EQUIPO */}
                <div className="space-y-6">
                    {sections.slice(0, 1).map((section, sectionIndex) => (
                        <div key={sectionIndex} className="bg-gray-800/50 rounded-lg shadow-lg border border-gray-700">
                            <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-t-lg">
                                <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                            </div>
                            <div className="overflow-hidden">
                                <table className="w-full text-left divide-y divide-gray-700">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-6 py-3 text-sm font-bold text-gray-300 uppercase">Ventajas</th>
                                            <th className="px-6 py-3 text-sm font-bold text-gray-300 uppercase">Normal</th>
                                            <th className="px-6 py-3 text-sm font-bold text-amber-300 uppercase">Premium Exclusivo</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                                        {section.ventajas.map((ventaja, index) => (
                                            <tr key={index} className="hover:bg-gray-700 transition duration-200">
                                                <td className="px-6 py-4 text-white text-base align-middle">{ventaja}</td>
                                                <td className="px-6 py-4 text-center align-middle">
                                                    <span className={`text-xl font-bold ${ventajas_free.includes(ventaja) ? "text-green-500" : "text-red-500"}`}>
                                                        {ventajas_free.includes(ventaja) ? "✔" : "X"}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-center align-middle">
                                                    <span className="text-xl font-bold text-amber-500">✔</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
                 {/* Right Column: GANA PREMIOS */}
                 <div className="space-y-6">
                    {sections.slice(2, 3).map((section, sectionIndex) => (
                        <div key={sectionIndex + 2} className="bg-gray-800/50 rounded-lg shadow-lg border border-gray-700">
                            <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-t-lg">
                                <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                            </div>
                            <div className="overflow-hidden">
                                <table className="w-full text-left divide-y divide-gray-700">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-6 py-3 text-sm font-bold text-gray-300 uppercase">Ventajas</th>
                                            <th className="px-6 py-3 text-sm font-bold text-gray-300 uppercase">Normal</th>
                                            <th className="px-6 py-3 text-sm font-bold text-amber-300 uppercase">Premium Exclusivo</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                                        {section.ventajas.map((ventaja, index) => (
                                            <tr key={index} className="hover:bg-gray-700 transition duration-200">
                                                <td className="px-6 py-4 text-white text-base align-middle">{ventaja}</td>
                                                <td className="px-6 py-4 text-center align-middle">
                                                    <span className={`text-xl font-bold ${ventajas_free.includes(ventaja) ? "text-green-500" : "text-red-500"}`}>
                                                        {ventajas_free.includes(ventaja) ? "✔" : "X"}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-center align-middle">
                                                    <span className="text-xl font-bold text-amber-500">✔</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            <div id="section-2" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column: CONTENIDO POR Y PARA TI */}
                <div className="space-y-6">
                    {sections.slice(1, 2).map((section, sectionIndex) => (
                        <div key={sectionIndex + 1} className="bg-gray-800/50 rounded-lg shadow-lg border border-gray-700">
                            <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-t-lg">
                                <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                            </div>
                            <div className="overflow-hidden">
                                <table className="w-full text-left divide-y divide-gray-700">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-6 py-3 text-sm font-bold text-gray-300 uppercase">Ventajas</th>
                                            <th className="px-6 py-3 text-sm font-bold text-gray-300 uppercase">Normal</th>
                                            <th className="px-6 py-3 text-sm font-bold text-amber-300 uppercase">Premium Exclusivo</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                                        {section.ventajas.map((ventaja, index) => (
                                            <tr key={index} className="hover:bg-gray-700 transition duration-200">
                                                <td className="px-6 py-4 text-white text-base align-middle">{ventaja}</td>
                                                <td className="px-6 py-4 text-center align-middle">
                                                    <span className={`text-xl font-bold ${ventajas_free.includes(ventaja) ? "text-green-500" : "text-red-500"}`}>
                                                        {ventajas_free.includes(ventaja) ? "✔" : "X"}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-center align-middle">
                                                    <span className="text-xl font-bold text-amber-500">✔</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: PRODUCTOS EXCLUSIVOS Y DESCUENTOS */}
                <div className="space-y-6">
                    {sections.slice(3, 4).map((section, sectionIndex) => (
                        <div key={sectionIndex + 3} className="bg-gray-800/50 rounded-lg shadow-lg border border-gray-700">
                            <div className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-700 to-gray-900 rounded-t-lg">
                                <h3 className="text-2xl font-semibold text-white">{section.title}</h3>
                            </div>
                            <div className="overflow-hidden">
                                <table className="w-full text-left divide-y divide-gray-700">
                                    <thead className="bg-gray-900">
                                        <tr>
                                            <th className="px-6 py-3 text-sm font-bold text-gray-300 uppercase">Ventajas</th>
                                            <th className="px-6 py-3 text-sm font-bold text-gray-300 uppercase">Normal</th>
                                            <th className="px-6 py-3 text-sm font-bold text-amber-300 uppercase">Premium Exclusivo</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                                        {section.ventajas.map((ventaja, index) => (
                                            <tr key={index} className="hover:bg-gray-700 transition duration-200">
                                                <td className="px-6 py-4 text-white text-base align-middle">{ventaja}</td>
                                                <td className="px-6 py-4 text-center align-middle">
                                                    <span className={`text-xl font-bold ${ventajas_free.includes(ventaja) ? "text-green-500" : "text-red-500"}`}>
                                                        {ventajas_free.includes(ventaja) ? "✔" : "X"}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-center align-middle">
                                                    <span className="text-xl font-bold text-amber-500">✔</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TablaVentajas;