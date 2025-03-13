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
    setSolicitadas([
      { imagen: oxygen, juego: 'Camiseta del club', puntos: 50 },
      { imagen: oxygen, juego: 'Silla Playseat Puma', puntos: 100 },
    ]);
  }, []);

  

 

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
