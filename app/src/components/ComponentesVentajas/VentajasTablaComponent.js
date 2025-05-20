import React from "react";

const gratis = [
    "Watch Parties",
    "Wallpapers",
    "Contenido Exclusivo",
    "Eventos Comunidad",
    "Recompensas por Misiones",
    "Descuento 10% Merchandising",
    "Drop Exclusivos",
    "Descuento Patrocinadores",
];

const premium = [
    "Acceso Discord VIP",
    "Guías Competitivas",
    "Sesión de Coaching",
    "Descuento 15% Merchandising",
    "Acceso Anticipado Drops Exclusivos",
];

const dinoxy = [
    "Banner Exclusivo",
    "Información Privilegiada",
    "Entrada a Eventos",
    "Obsequio Cumpleaños",
    "Puntos Dobles",
    "Activo Digital",
];

const TablaVentajas = () => {
    const columnData = [gratis, premium, dinoxy];
    const ventajasPerColumn = Math.max(...columnData.map(col => col.length));

    const columns = columnData.map((data, i) =>
        Array.from({ length: ventajasPerColumn }, (_, index) => data[index] || "")
    );

    return (
        <div id="tabla_ventajas" className="mt-12 px-4 lg:px-8 xl:px-16 mb-12 bg-black">
            <h2 className="text-5xl font-extrabold text-center mb-8 text-white">Ventajas Exclusivas de la Suscripción</h2>
            
            {/* Centered images with title below */}
            <div className="flex justify-between items-center gap-8 py-6">
                <div className="flex flex-col items-center w-1/3">
                    <img src="/path/to/image1.png" alt="Gratis Icon" className="h-24" />
                </div>
                <div className="flex flex-col items-center w-1/3">
                    <img src="/path/to/image2.png" alt="Premium Icon" className="h-24" />
                </div>
                <div className="flex flex-col items-center w-1/3">
                    <img src="/path/to/image3.png" alt="Dinoxy Icon" className="h-24" />
                </div>
            </div>

            {/* Table */}
            <table className="w-full text-center table-fixed">
                <thead>
                    <tr>
                        <th className="px-6 py-4 text-3xl font-bold text-[#1AA9FF] uppercase w-1/3">Gratis</th>
                        <th className="px-6 py-4 text-3xl font-bold text-[#1AA9FF] uppercase w-1/3">Premium</th>
                        <th className="px-6 py-4 text-3xl font-bold text-[#1AA9FF] uppercase w-1/3">Dinoxy</th>
                    </tr>
                    <tr>
                        <td colSpan="3" className="pt-2 pb-8">
                            <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: ventajasPerColumn }).map((_, rowIndex) => (
                        <tr key={rowIndex} className="h-20">
                            {columns.map((column, colIndex) => (
                                <td key={colIndex} className="px-2 py-8 text-[#1AA9FF] text-lg align-middle">
                                    {column[rowIndex]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaVentajas;
