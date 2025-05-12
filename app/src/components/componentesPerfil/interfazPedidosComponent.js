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
        <div className="w-full px-4 py-8 flex flex-col items-center">
      <div className="overflow-x-auto w-full max-w-[1200px] shadow-lg rounded-2xl bg-white">
        <table className="min-w-full text-left border-collapse text-[white]">
          <thead className="bg-gradient-to-r from-[#18538a] to-[#1e90ff] text-white">
            <tr className="bg-gray-800 hover:bg-gray-700">
              <th className="px-4 py-3 text-[25px] font-bold text-center">Imagen</th>
              <th className="px-4 py-3 text-[25px] font-bold text-center">Código</th>
              <th className="px-4 py-3 text-[25px] font-bold text-center">Producto</th>
              <th className="px-4 py-3 text-[25px] font-bold text-center">Precio</th>
              <th className="px-4 py-3 text-[25px] font-bold text-center">Fecha</th>
              <th className="px-4 py-3 text-[25px] font-bold text-center">Estado</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {pedidos.map((cuenta, index) => (
              <tr
                key={index}
                className="bg-gray-900 even:bg-gray-800 hover:bg-gray-700"
              >
                <td className="px-4 py-3 flex items-center justify-center">
                  <img
                    src={cuenta.imagen}
                    alt="logo"
                    className="w-12 h-12 object-contain rounded-md"
                  />
                </td>
                <td className="px-4 py-3 text-[18px] font-semibold text-center">{cuenta.codigo}</td>
                <td className="px-4 py-3 text-[18px] font-semibold text-center">{cuenta.producto}</td>
                <td className="px-4 py-3 text-[18px] font-semibold text-center">{cuenta.precio}</td>
                <td className="px-4 py-3 text-[18px] font-semibold text-center">{cuenta.fecha}</td>
                <td className={`px-4 py-3 text-[18px] font-semibold text-center ${getStateColor(cuenta.estado)}`}>{cuenta.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default Pedidos;


