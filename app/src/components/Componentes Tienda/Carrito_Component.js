import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen, cartItems = [], setCartItems }) => {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const updateQuantity = (id, delta) => {
    const updated = cartItems
      .map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + delta } : item
      )
      .filter((item) => item.cantidad > 0);
    setCartItems(updated);
    localStorage.setItem("carrito", JSON.stringify(updated));
  };

  const eliminarProducto = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("carrito", JSON.stringify(updated));
  };

  const finalizarCompra = () => {
    if (cartItems.length === 0) {
      alert("No puedes comprar 0 productos.");
      return;
    }
    toggleSidebar(); // cierra el sidebar
    navigate("/checkout"); // navega a la página de checkout
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.precio * item.cantidad,
    0
  );

  return (
    <div className="relative z-50">
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white p-6 shadow-xl transform transition-transform duration-300 flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4 flex-shrink-0">
          <h2 className="text-lg font-bold">Carrito de compra</h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 text-xl"
            aria-label="Cerrar carrito"
          >
            ✕
          </button>
        </div>

        {/* Contenido scrollable */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 mt-10">Tu carrito está vacío.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img
                  src={item.imagen}
                  alt="Producto"
                  className="mr-4 h-[6rem] w-[6rem] object-cover"
                />
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{item.titulo}</p>
                      <p className="text-sm text-gray-600">Talla: {item.talla}</p>
                      {item.nickname && (
                        <p className="text-sm text-gray-600">Nick: {item.nickname}</p>
                      )}
                    </div>
                    <button
                      onClick={() => eliminarProducto(item.id)}
                      className="text-red-500 text-lg ml-2"
                      title="Eliminar producto"
                      aria-label={`Eliminar ${item.titulo}`}
                    >
                      🗑️
                    </button>
                  </div>

                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="bg-gray-200 px-2 py-1 rounded-l"
                      aria-label={`Disminuir cantidad de ${item.titulo}`}
                    >
                      -
                    </button>
                    <span className="px-4">{item.cantidad}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="bg-gray-200 px-2 py-1 rounded-r"
                      aria-label={`Aumentar cantidad de ${item.titulo}`}
                    >
                      +
                    </button>
                  </div>

                  <p className="mt-1 text-sm text-gray-700">
                    {(item.precio * item.cantidad).toFixed(2)}€
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 flex-shrink-0">
          <hr className="my-4" />
          <p className="text-sm text-gray-700 mb-2">Envío: 0.00€</p>
          <p className="text-sm text-gray-700 mb-2">
            Total: {total.toFixed(2)}€
          </p>

          <button
            onClick={finalizarCompra}
            className="w-full bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white px-4 py-2 rounded mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={cartItems.length === 0}
          >
            Finalizar pedido
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

