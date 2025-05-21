import React from "react";
import { useNavigate } from "react-router-dom";

import Camiseta_Basica_Frontal from "@imgs/productos/Camiseta_Basica_Frontal.webp";
import Camiseta_Frontal from "@imgs/productos/Camiseta_Frontal.webp";
import Camiseta_Polo_Frontal from "@imgs/productos/Camiseta_Polo_Frontal.webp";
import Sudadera_Frontal from "@imgs/productos/Sudadera-Frontal.webp";

import Camiseta_Basica_Trasera from "@imgs/productos/Camiseta_Basica_Trasera.webp";
import Camiseta_Trasera from "@imgs/productos/Camiseta_Trasera.webp";
import Camiseta_Polo_Trasera from "@imgs/productos/Camiseta_Polo_Trasera.webp";
import Sudadera_Trasera from "@imgs/productos/Sudadera-Trasera.webp";

const productos = [
  {
    titulo: "CAMISETA OXYGEN GAMING",
    precio: "14,95 €",
    imagen: Camiseta_Basica_Frontal,
    imagen_posterior: Camiseta_Basica_Trasera,
    alt: "Camiseta Frontal",
    alt_posterior: "Camiseta Trasera"
  },
  {
    titulo: "CAMISETA TÉCNICA OXYGEN GAMING",
    precio: "29,90 €",
    imagen: Camiseta_Frontal,
    imagen_posterior: Camiseta_Trasera,
    alt: "Camiseta Técnica Frontal",
    alt_posterior: "Camiseta Técnica Trasera"
  },
  {
    titulo: "POLO OXYGEN GAMING",
    precio: "19,95 €",
    imagen: Camiseta_Polo_Frontal,
    imagen_posterior: Camiseta_Polo_Trasera,
    alt: "Polo Frontal",
    alt_posterior: "Polo Trasero"
  },
  {
    titulo: "SUDADERA OXYGEN GAMING",
    precio: "24,95 €",
    imagen: Sudadera_Frontal,
    imagen_posterior: Sudadera_Trasera,
    alt: "Sudadera Frontal",
    alt_posterior: "Sudadera Trasera"
  },
];

const ColeccionProductos = () => {
  const navigate = useNavigate();

  const handleClick = (producto) => {
    navigate("/producto", { state: producto });
  };

  return (
    <div className="w-full bg-black p-4 flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white text-center my-12">
        <div className="w-[80px] h-[3px] bg-[#1AA9FF] md:w-[200px]" />
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase">Nuestras Camisetas</h2>
        <div className="w-[80px] h-[3px] bg-[#1AA9FF] md:w-[200px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {productos.map((producto, index) => (
          <div
            key={index}
            className="flex flex-col text-left relative cursor-pointer"
            onClick={() => handleClick(producto)}
          >
            <div className="bg-white p-5 rounded-lg relative overflow-hidden">
              <div className="block relative group">
                <img
                  className="w-full h-[350px] object-cover rounded transition-opacity duration-300 ease-in-out group-hover:opacity-0"
                  src={producto.imagen}
                  alt={producto.alt}
                />
                <img
                  className="absolute top-0 left-0 w-full h-[350px] object-cover rounded opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
                  src={producto.imagen_posterior}
                  alt={producto.alt_posterior}
                />
              </div>
            </div>
            <h3 className="text-white text-lg mt-2 font-bold">{producto.titulo}</h3>
            <p className="text-white text-lg font-bold">{producto.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColeccionProductos;
