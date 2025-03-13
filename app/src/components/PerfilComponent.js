import React from "react";
import { useState, useEffect } from "react";
import perfil from"@imgs/perfil.png";
import twitter from "@imgs/twitter.png";
import tiktok from "@imgs/tiktok.png";
import instagram from "@imgs/instagram.png";
import discord from "@imgs/discord.png";
import oxygen from "@imgs/Logo_OxygenGaming2.png";
import logo from "@imgs/Logo_Blue.png";

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

  
};

export default Perfil;
