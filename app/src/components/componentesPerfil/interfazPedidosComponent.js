import React, { useState, useEffect } from "react";
import oxygen from "@imgs/Logo_OxygenGaming2.png";

const Pedidos = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        setPedidos([
            { codigo: '1', producto: 'Camiseta Oxygen Gaming', precio: 10, fecha: '06-03-2025', estado: 'Enviado', imagen: oxygen },
            { codigo: '2', producto: 'Sudadera Oxygen Pro', precio: 25, fecha: '07-03-2025', estado: 'Pendiente', imagen: oxygen },
            { codigo: '3', producto: 'Gorra Oxygen Classic', precio: 15, fecha: '08-03-2025', estado: 'Enviado', imagen: oxygen },
            { codigo: '4', producto: 'Taza Gamer', precio: 12, fecha: '09-03-2025', estado: 'Cancelado', imagen: oxygen },
            { codigo: '5', producto: 'Alfombrilla RGB', precio: 18, fecha: '10-03-2025', estado: 'Enviado', imagen: oxygen },
            { codigo: '6', producto: 'Ratón Gaming X200', precio: 35, fecha: '11-03-2025', estado: 'Pendiente', imagen: oxygen },
            { codigo: '7', producto: 'Teclado Mecánico Pro', precio: 60, fecha: '12-03-2025', estado: 'Enviado', imagen: oxygen },
            { codigo: '8', producto: 'Monitor 24" Full HD', precio: 120, fecha: '13-03-2025', estado: 'Enviado', imagen: oxygen },
            { codigo: '9', producto: 'Auriculares Surround', precio: 45, fecha: '14-03-2025', estado: 'Pendiente', imagen: oxygen },
            { codigo: '10', producto: 'Silla Gaming Comfort', precio: 150, fecha: '15-03-2025', estado: 'Enviado', imagen: oxygen },
            { codigo: '11', producto: 'Camiseta Oxygen Gaming', precio: 10, fecha: '16-03-2025', estado: 'Enviado', imagen: oxygen },
            { codigo: '12', producto: 'Sudadera Oxygen Pro', precio: 25, fecha: '17-03-2025', estado: 'Pendiente', imagen: oxygen },
            { codigo: '13', producto: 'Gorra Oxygen Classic', precio: 15, fecha: '18-03-2025', estado: 'Enviado', imagen: oxygen },
            { codigo: '14', producto: 'Taza Gamer', precio: 12, fecha: '19-03-2025', estado: 'Cancelado', imagen: oxygen },
            { codigo: '15', producto: 'Alfombrilla RGB', precio: 18, fecha: '20-03-2025', estado: 'Enviado', imagen: oxygen },
            { codigo: '16', producto: 'Ratón Gaming X200', precio: 35, fecha: '21-03-2025', estado: 'Pendiente', imagen: oxygen },
            { codigo: '17', producto: 'Teclado Mecánico Pro', precio: 60, fecha: '22-03-2025', estado: 'Enviado', imagen: oxygen },
            { codigo: '18', producto: 'Monitor 24" Full HD', precio: 120, fecha: '23-03-2025', estado: 'Enviado', imagen: oxygen },
            { codigo: '19', producto: 'Auriculares Surround', precio: 45, fecha: '24-03-2025', estado: 'Pendiente', imagen: oxygen },
            { codigo: '20', producto: 'Silla Gaming Comfort', precio: 150, fecha: '25-03-2025', estado: 'Enviado', imagen: oxygen }
        ]);
    }, []);

    // Function to determine the color based on the state
    const getStateColor = (estado) => {
        if (estado === 'Enviado') return 'text-green-500'; // Green for "Enviado"
        if (estado === 'Pendiente') return 'text-yellow-500'; // Yellow for "Pendiente"
        if (estado === 'Cancelado') return 'text-red-500'; // Red for "Cancelado"
        return 'text-white'; // Default white if the state is unknown
    };

    return (
        <div className="w-full flex justify-center px-4 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full max-w-[1600px] px-4">
                {pedidos.map((pedido, index) => (
                    <div
                        key={index}
                        className="bg-[#1c1c1c] text-white rounded-[15px] p-6 lg:pb-24 flex flex-col items-center justify-start shadow-lg transition duration-300 ease-in-out hover:scale-[1.02]"
                        style={{ height: "500px", width: "100%" }}
                    >
                        <img
                            src={pedido.imagen}
                            alt={`Imagen de ${pedido.producto}`}
                            className="w-full h-[40%] object-contain mb-6"
                        />
                        <div className="flex flex-col gap-3 text-[22px] text-left w-full flex-grow">
                            <p><strong>Código:</strong> {pedido.codigo}</p>
                            <p><strong>Producto:</strong> {pedido.producto}</p>
                            <p><strong>Precio:</strong> {pedido.precio}€</p>
                            <p><strong>Fecha:</strong> {pedido.fecha}</p>
                            <p><strong>Estado:</strong> <span className={getStateColor(pedido.estado)}>{pedido.estado}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pedidos;




