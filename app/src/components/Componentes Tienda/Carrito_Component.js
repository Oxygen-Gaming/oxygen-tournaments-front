import React, { useState } from "react";
import Camiseta_Frontal from "@imgs/productos/Camiseta_Frontal.webp";

const Sidebar = ({ isOpen, setIsOpen, cartItems = [], setCartItems }) => {
  const [cantidad, setCantidad] = useState(5);
  const [instrucciones, setInstrucciones] = useState("");
  const [aceptarTerminos, setAceptarTerminos] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  const subtotal = cantidad * 40.0;

  return (
    <div className="relative z-50">
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white p-6 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-lg font-bold mb-4">Carrito de compra</h2>
        <button onClick={toggleSidebar} className="absolute top-4 right-4 text-gray-500">
          ✕
        </button>

        <div className="flex items-center mb-4">
          <img src={Camiseta_Frontal} alt="Camiseta" className="mr-4 h-[8rem] w-[8rem]" />
          <div>
            <p className="font-semibold">Camiseta Entrenamiento Técnico Adulto 24/25 del Levante UD</p>
            <p>Talla: S</p>
            <div className="flex items-center mt-2">
              <button onClick={decrementarCantidad} className="bg-gray-200 px-2 py-1 rounded-l">-</button>
              <span className="px-4">{cantidad}</span>
              <button onClick={incrementarCantidad} className="bg-gray-200 px-2 py-1 rounded-r">+</button>
            </div>
            <p className="mt-2">40,00€</p>
          </div>
        </div>

        <textarea
          className="w-full p-2 mb-4 border rounded"
          placeholder="Instrucciones especiales para el vendedor"
          value={instrucciones}
          onChange={(e) => setInstrucciones(e.target.value)}
        />

        <p className="text-sm text-gray-600 mb-4">Subtotal: {subtotal.toFixed(2)}€</p>
        <p className="text-sm text-gray-600 mb-4">
          Los códigos de descuento, los costos de envío y los impuestos se añadirán durante el pago.
        </p>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={aceptarTerminos}
              onChange={() => setAceptarTerminos(!aceptarTerminos)}
              className="mr-2"
            />
            Acepto los términos y condiciones
          </label>
        </div>

        <button
          className="w-full bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white px-4 py-2 rounded mb-4 cursor-pointer"
          disabled={!aceptarTerminos}
        >
          Finalizar pedido
        </button>
      </div>
    </div>
  );
};

export default Sidebar;