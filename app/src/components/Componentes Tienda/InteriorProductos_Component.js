import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FotoTallas from "@imgs/tallas/Tallaje-Emix.webp";
import Header from "@components/Header";
import Footer from "@components/Footer";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Sidebar from "@components/Componentes Tienda/Carrito_Component";

const Interior_Productos = () => {
  const { state: producto } = useLocation();

  if (!producto) {
    return <div className="p-10 text-center text-red-600">Producto no encontrado.</div>;
  }

  const [selectedSize, setSelectedSize] = useState(null);
  const [personalizacion, setPersonalizacion] = useState("Personalizada");
  const [nickname, setNickname] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const images = [producto.imagen, producto.imagen_posterior];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const sizes = ["S", "M", "L", "XL", "2XL", "3XL"];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = () => {
    if (!selectedSize) {
      alert("Por favor, selecciona una talla.");
      return;
    }
    const newItem = {
      titulo: producto.titulo,
      precio: producto.precio,
      talla: selectedSize,
      personalizacion: personalizacion,
      nickname: personalizacion === "Personalizada" ? nickname : "",
      cantidad: 1,
      imagen: producto.imagen,
    };
    setCartItems([...cartItems, newItem]);
    setIsCartOpen(true);
  };

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Header />
      <MenuHamburguesaNormal />

      <section className="relative bg-black w-full flex flex-col xl:flex-row items-center justify-center gap-10 p-6 xl:p-[50px]">
        {/* Botones juntos */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <a href="/tienda">
            <button className="px-4 py-2 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg hover:bg-[#0077b6] transition">
              Volver
            </button>
          </a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="px-4 py-2 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg hover:bg-[#0077b6] transition"
          >
            Mostrar Carrito
          </button>
        </div>

        <Sidebar
          isOpen={isCartOpen}
          setIsOpen={setIsCartOpen}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />

        <div className="w-full h-full xl:w-1/2 flex justify-center items-stretch gap-[30px]">
          <div className="flex flex-col justify-start gap-4 h-[600px]">
            {images.map((img, index) => (
              <img
                key={index}
                onClick={() => setSelectedImage(img)}
                src={img}
                alt={`Vista ${index}`}
                className="w-[150px] h-[150px] object-cover border cursor-pointer rounded bg-white"
              />
            ))}
          </div>
          <div className="border-[1px] p-4 h-[70vh] bg-white">
            <img src={selectedImage} alt="Producto Seleccionado" className="xl:w-[600px] h-full object-cover" />
          </div>
        </div>

        <div className="w-full xl:w-1/3 flex flex-col gap-4">
          <h2 className="text-[40px] font-semibold text-white">{producto.titulo}</h2>
          <span className="text-xl text-[#1AA9FF]">{producto.precio}</span>

          <div className="flex flex-wrap gap-2">
            {sizes.map(size => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-3 h-[50px] w-[50px] py-1 border border-[#1AA9FF] rounded text-[15px] transition-colors duration-200 text-[#1AA9FF] ${
                  selectedSize === size ? 'bg-[#1AA9FF] text-white' : 'hover:bg-gray-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          <p
            className="text-[#1AA9FF] hover:underline cursor-pointer w-fit"
            onClick={() => setShowSizeChart(true)}
          >
            Tabla de tallas
          </p>

          {producto.titulo === "CAMISETA TÉCNICA OXYGEN GAMING" && (
            <>
              <select
                className="border p-2 rounded mt-2 w-[40%]"
                value={personalizacion}
                onChange={(e) => setPersonalizacion(e.target.value)}
              >
                <option>Personalizada</option>
                <option>Sin personalizar</option>
              </select>

              {personalizacion === "Personalizada" && (
                <div className="mt-4">
                  <label className="block text-sm mb-1 text-[#1AA9FF] font-bold">Inserta tu Nickname:</label>
                  <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="w-full border p-2 rounded"
                    placeholder="Tu Nickname"
                  />
                </div>
              )}
            </>
          )}

          <p className="text-green-600 font-medium mt-2">✓ En stock</p>

          <button
            onClick={addToCart}
            className="px-4 py-2 bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white rounded-lg hover:bg-[#0077b6] transition"
          >
            Añadir al carrito
          </button>

          <p className="text-sm text-white mt-4">
            Luce con orgullo los colores de Oxygen Gaming, el equipo que respira competitividad y pasión en cada partida. Esta prenda oficial combina un diseño moderno con materiales de alto rendimiento, ideal tanto para fans como para jugadores. Disponible en varias tallas y con opción de personalización.
          </p>
        </div>
      </section>

      {showSizeChart && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowSizeChart(false)}
        >
          <div 
            className="bg-white p-4 rounded max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSizeChart(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-black font-bold text-xl"
              aria-label="Cerrar tabla de tallas"
            >
              ×
            </button>
            <img src={FotoTallas} alt="Tabla de tallas" className="w-full h-auto" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Interior_Productos;
