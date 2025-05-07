import React from "react";

const all_ventajas = [
    "Watch Parties",
    "Eventos Comunidad",
    "Ventaja Free",
    "Drop Exclusivos",
    "Wallpapers",
    "Descuento Merchandising",
    "Contenido Exclusivo",
    "Recompensas por Misiones",
    "Descuento 10% Merchandising",
    "Entrada a Eventos",
    "Banner Exclusivo",
    "Descuento 15% Merchandising",
    "Obsequio Cumpleaños",
    "Partidas con Creadores/Jugadores",
    "Puntos Dobles",
    "Información Privilegiada",
    "Sesión de Coaching",
    "Activo Digital",
    "Follow Club",
    "Acceso Discord VIP",
    "Guías Competitivas",
];

const TablaVentajas = () => {
    const columnCount = 3;
    const ventajasPerColumn = Math.ceil(all_ventajas.length / columnCount);
    const columns = Array.from({ length: columnCount }, (_, colIndex) =>
        all_ventajas.slice(colIndex * ventajasPerColumn, (colIndex + 1) * ventajasPerColumn)
    );

    return (
        <div id="tabla_ventajas" className="mt-12 px-4 lg:px-8 xl:px-16 mb-12">
            <h2 className="text-5xl font-extrabold text-center mb-8 text-white">Ventajas Exclusivas de la Suscripción</h2> {/* Increased bottom margin */}
           
                {/* Centered images with title below */}
                <div className="flex justify-between items-center gap-8 py-6">
                    <div className="flex flex-col items-center w-1/3">
                        <img src="/path/to/image1.png" alt="Ventaja Icon 1" className="h-24" />
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                        <img src="/path/to/image2.png" alt="Ventaja Icon 2" className="h-24" />
                    </div>
                    <div className="flex flex-col items-center w-1/3">
                        <img src="/path/to/image3.png" alt="Ventaja Icon 3" className="h-24" />
                    </div>
                </div>
                {/* Table */}
                <table className="w-full text-center table-fixed">
                    <thead>
                        <tr>
                            <th className="px-6 py-4 text-3xl font-bold text-gray-800 uppercase w-1/3">Normal</th> 
                            <th className="px-6 py-4 text-3xl font-bold text-gray-800 uppercase w-1/3">Premium</th> 
                            <th className="px-6 py-4 text-3xl font-bold text-gray-800 uppercase w-1/3">Premium Exclusivo</th> 
                        </tr>
                        <tr>
                            <td colSpan="3" className="pt-2 pb-8"> {/* Increased padding above the line */}
                                <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div> {/* Gradient line */}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: ventajasPerColumn }).map((_, rowIndex) => (
                            <tr key={rowIndex} className="h-20"> {/* Increased height for more vertical spacing */}
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex} className="px-2 py-8 text-gray-800 text-lg align-middle"> {/* Reduced horizontal padding */}
                                        {column[rowIndex] || ""}
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