import React from 'react';
import { useState, useEffect } from 'react';
import perfil from '@imgs/perfil.png';
import twitter from '@imgs/twitter.png';
import tiktok from '@imgs/tiktok.png';
import instagram from '@imgs/instagram.png';
import discord from '@imgs/discord.png';
import oxygen from '@imgs/Logo_OxygenGaming2.png';
import Header from '@components/Header';
import Footer from '@components/Footer';

const Perfil = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('perfil');
  const [imagenPerfil, setImagenPerfil] = useState(perfil);
  const [isOpen, setIsOpen] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [cuentas, setCuentas] = useState([]);
  const [recompensas_solicitadas, setSolicitadas] = useState([]);
  const [recompensas_canjeadas, setCanjeadas] = useState([]);
  const [misiones_completadas, setCompletadas] = useState([]);

  useEffect(() => {
    setPedidos([
      {
        codigo: '1',
        producto: 'Camiseta Oxygen Gaming',
        precio: 10,
        fecha: '06-03-2025',
        estado: 'Enviado',
        imagen: oxygen,
      },
      {
        codigo: '2',
        producto: 'Nombre del Producto',
        precio: 20,
        fecha: '09-03-2025',
        estado: 'enviado',
        imagen: oxygen,
      },
      {
        codigo: '3',
        producto: 'Nombre del Producto',
        precio: 20,
        fecha: '09-03-2025',
        estado: 'enviado',
        imagen: oxygen,
      },
      {
        codigo: '4',
        producto: 'Nombre del Producto',
        precio: 20,
        fecha: '09-03-2025',
        estado: 'enviado',
        imagen: oxygen,
      },
    ]);
  }, []);

  useEffect(() => {
    setCuentas([
      {
        imagen: oxygen,
        juego: 'EA FC25',
        nickname: 'Chusneo',
        region: 'Europa',
      },
      {
        imagen: oxygen,
        juego: 'EA FC25',
        nickname: 'Chusneo',
        region: 'Europa',
      },
    ]);
  }, []);

  useEffect(() => {
    setCanjeadas([
      { imagen: oxygen, juego: 'Camiseta del club', puntos: 50 },
      { imagen: oxygen, juego: 'Silla Playseat Puma', puntos: 100 },
    ]);
  }, []);

  useEffect(() => {
    setSolicitadas([
      { imagen: oxygen, juego: 'Camiseta del club', puntos: 50 },
      { imagen: oxygen, juego: 'Silla Playseat Puma', puntos: 100 },
    ]);
  }, []);

  useEffect(() => {
    setCompletadas([
      { imagen: oxygen, juego: 'Clip de la cagada de la semana', puntos: 20 },
      { imagen: oxygen, juego: 'Completa el quiz semanal', puntos: 100 },
    ]);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagenPerfil(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getButtonClass = (opcion) => {
    return opcionSeleccionada === opcion ? "text-[black]" : "hover:text-[black]";
  };

  return (
    <div className="bg-blue-900 min-h-[100vh] text-[white] flex flex-col font-roboto-condensed gap-[35px] w-full pt-[30px] lg:p-0">
      <Header /> {/* Replace existing header with Header component */}
      <button className="lg:hidden w-full flex flex-col items-center justify-center " onClick={() => setIsOpen(!isOpen)}>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </button>

      <div className={`lg:hidden absolute ${isOpen ? 'block' : 'hidden'} w-full relative bg-blue-900 h-full flex flex-col justify-center items-center mt-4 gap-[20px]`}>
        <a href="/" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Inicio</a>
        <a href="/competiciones" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Competiciones</a>
        <a href="/reglamentos" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
        <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
        <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>  
        
        <hr className="text-[white] bg-[white] w-[80%]"></hr>
        <button onClick={() => [setOpcionSeleccionada('perfil'), handleLinkClick()]} className={getButtonClass('perfil')}>Perfil</button>
        <button onClick={() => [setOpcionSeleccionada('inventario'), handleLinkClick()]} className={getButtonClass('inventario')}>Inventario</button>
        <button onClick={() => [setOpcionSeleccionada('logros'), handleLinkClick()]}  className={getButtonClass('logros')}>Logros</button>
        <button onClick={() => [setOpcionSeleccionada('pedidos'), handleLinkClick()]}  className={getButtonClass('pedidos')}>Pedidos</button>
        <button onClick={() => [setOpcionSeleccionada('cuentas de juego'), handleLinkClick()]} className={getButtonClass('cuentas de juego')}>Cuentas de juego</button>
        <button onClick={() => [setOpcionSeleccionada('conexiones'), handleLinkClick()]} className={getButtonClass('conexiones')}>Conexiones</button>
        <button onClick={() => [setOpcionSeleccionada('cuenta'), handleLinkClick()]} className={getButtonClass('cuenta')}>Editar Perfil</button>
      </div>
      <div className="flex flex-col gap-[20px] justify-center lg:items-start items-center w-full">
        <h1 className="text-[30px]">Estadísticas</h1>
        <div className="border-[1px] lg:w-[100vh] w-[90%] p-[10px] lg:h-[50px] text-[20px] flex justify-between items-center lg:p-[20px] bg-[white] text-[black] rounded">
          <p>Misiones completadas:</p>
          <p>0 Misiones</p>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
