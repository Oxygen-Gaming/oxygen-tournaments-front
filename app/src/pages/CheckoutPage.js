import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal } from "react-icons/fa";

const SuperCheckout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [pedidoRealizado, setPedidoRealizado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    codigo_postal: "",
    tarjeta: "",
    vencimiento: "",
    cvv: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("carrito");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in formData) {
      if (!formData[key]) {
        alert("Por favor, completa todos los campos.");
        return;
      }
    }
    localStorage.removeItem("carrito");
    setCartItems([]);
    setPedidoRealizado(true);
  };

  if (pedidoRealizado) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#121212] text-white text-center p-4">
        <h1 className="text-4xl font-bold text-[#1AA9FF] mb-6">¡Gracias por tu compra!</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white py-2 px-6 rounded text-lg font-semibold"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen bg-[#121212] text-white font-montserrat">
      {/* Formulario */}
      <div className="w-full md:w-2/3 p-6 md:p-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-[#1AA9FF]">Checkout OxyClub</h2>
          {/* Botón "Volver" corregido */}
          <button
            onClick={() => navigate(-1)}
            className="text-[#1AA9FF] hover:text-white transition bg-transparent border-none cursor-pointer p-2 rounded text-base font-medium"
          >
            ← Volver
          </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Inputs más altos, con padding y sin borde azul al focus */}
          <input
            name="nombre"
            placeholder="Nombre y apellidos"
            value={formData.nombre}
            onChange={handleInputChange}
            className="bg-[#2c2c2c]  rounded p-4 h-16 border-[1px] border-[#1AA9FF] focus:outline-none focus:ring-0 text-white"
          />
          <input
            name="email"
            type="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-[#2c2c2c]  rounded p-4 h-16 border-[1px] border-[#1AA9FF] focus:outline-none focus:ring-0 text-white"
          />
          <input
            name="telefono"
            type="tel"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleInputChange}
            className="bg-[#2c2c2c]  rounded p-4 h-16 border-[1px] border-[#1AA9FF] focus:outline-none focus:ring-0 text-white"
          />
          <input
            name="direccion"
            placeholder="Dirección"
            value={formData.direccion}
            onChange={handleInputChange}
            className="bg-[#2c2c2c]  rounded p-4 h-16 border-[1px] border-[#1AA9FF] focus:outline-none focus:ring-0 text-white col-span-1 sm:col-span-2"
          />
          <input
            name="ciudad"
            placeholder="Ciudad"
            value={formData.ciudad}
            onChange={handleInputChange}
            className="bg-[#2c2c2c]  rounded p-4 h-16 border-[1px] border-[#1AA9FF] focus:outline-none focus:ring-0 text-white"
          />
          <input
            name="codigo_postal"
            placeholder="Código postal"
            value={formData.codigo_postal}
            onChange={handleInputChange}
            className="bg-[#2c2c2c]  rounded p-4 h-16 border-[1px] border-[#1AA9FF] focus:outline-none focus:ring-0 text-white"
          />

          {/* Pago */}
          <div className="col-span-1 sm:col-span-2 mt-4">
            <p className="mb-2 font-semibold text-[#1AA9FF] text-[30px]">Datos de pago</p>
            <div className="flex gap-4 text-3xl mb-4 text-[#1AA9FF]">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcAmex />
              <FaCcPaypal />
            </div>
            <input
              name="tarjeta"
              type="text"
              maxLength="19"
              placeholder="Número de tarjeta"
              value={formData.tarjeta}
              onChange={handleInputChange}
              className="mb-2 w-full bg-[#2c2c2c] rounded p-4 h-16 border-[1px] border-[#1AA9FF] focus:outline-none focus:ring-0 text-white"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                name="vencimiento"
                type="text"
                maxLength="5"
                placeholder="MM/AA"
                value={formData.vencimiento}
                onChange={handleInputChange}
                className="bg-[#2c2c2c] rounded p-4 h-16 border-[1px] border-[#1AA9FF] focus:outline-none focus:ring-0 text-white"
              />
              <input
                name="cvv"
                type="password"
                maxLength="4"
                placeholder="CVV"
                value={formData.cvv}
                onChange={handleInputChange}
                className="bg-[#2c2c2c] rounded p-4 h-16 border-[1px] border-[#1AA9FF] focus:outline-none focus:ring-0 text-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="col-span-1 sm:col-span-2 mt-4 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white py-3 px-6 rounded text-lg font-semibold"
          >
            Confirmar compra
          </button>
        </form>
      </div>

      {/* Resumen */}
      <div className="w-full md:w-1/3 bg-[#1e1e1e] p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-4 text-[#1AA9FF]">Resumen del pedido</h3>
        {cartItems.length === 0 ? (
          <p className="text-gray-400">Tu carrito está vacío.</p>
        ) : (
          cartItems.map((item, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{item.titulo}</p>
              <p className="text-sm text-gray-400">
                Talla: {item.talla} - Cantidad: {item.cantidad}
              </p>
              <p className="text-sm">Subtotal: {(item.precio * item.cantidad).toFixed(2)}€</p>
              <p className="text-sm">Envío: 0.00€</p>
            </div>
          ))
        )}
        <hr className="my-4 border-[#1AA9FF]" />
        <p className="text-xl font-bold">Total: {total.toFixed(2)}€</p>
      </div>
    </div>
  );
};

export default SuperCheckout;