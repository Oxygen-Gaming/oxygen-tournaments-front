import React, { useState, useEffect } from "react";
import oxygen from "@imgs/Logo_OxygenGaming2.png"
const Pedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    useEffect(() => {
        setPedidos([{codigo:'1', producto:'Camiseta Oxygen Gaming', precio:10, fecha: '06-03-2025', estado: 'Enviado', imagen:oxygen},{codigo:'2', producto:'Nombre del Producto', precio: 20, fecha: '09-03-2025', estado: 'enviado', imagen: oxygen},{codigo:'2', producto:'Nombre del Producto', precio: 20, fecha: '09-03-2025', estado: 'enviado', imagen: oxygen}, {codigo:'2', producto:'Nombre del Producto', precio: 20, fecha: '09-03-2025', estado: 'enviado', imagen: oxygen}])
    }, []);
    return (
        <div className="flex flex-col gap-[20px] w-full justify-center items-center overflow-x-hidden">
            <h1 className="text-[35px]">Pedidos</h1>
            <div className="flex flex-wrap justify-center items-center gap-[50px] px-[80px] sm:px-[30px]">
                {pedidos.map((pedido, index) => (
                    <div key={index} className="bg-gradient-to-t sm:min-h-[150vh] sm:w-[80vh] w-[40vh] lg:min-h-[50vh] min-h-[80vh] md:w-[300px] md:min-h-[70%] md:p-[20px] p-[30px] from-[#18538a] to-[#1e90ff] text-white rounded-[15px]">
                        <img src={pedido.imagen} className="w-full h-[40%]"/>
                        <div className="flex flex-col gap-[10px] text-[25px] md:text-[20px]">
                            <p>Codigo de producto: {pedido.codigo}</p>
                            <p>Producto: {pedido.producto}</p>
                            <p>Precio: {pedido.precio}€</p>
                            <p>Fecha de pedido: {pedido.fecha}</p>
                            <p>Estado: {pedido.estado}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Pedidos;