import Follow from '@imgs/Recompensas_Follow.jpg';
import Clave from '@imgs/Recompensas_Clave.jpg';
import Camiseta from '@imgs/Recompensas_Camiseta.jpg';
import Ticket from '@imgs/Recompensas_Ticket.jpg';
import Pavos from '@imgs/Recompensas_V-bucks.jpg';
import Box from '@imgs/Recompensas_Box.jpg';
import Google from '@imgs/Recompensas_10_Google.jpg';
import Playstation from '@imgs/Recompensas_10_Playstation.jpg';
import Silla from '@imgs/Recompensas_Silla.jpg';
import Taza from '@imgs/Recompensas_Taza.webp';
import Alfombrilla from '@imgs/Recompensas_Alfombrilla.webp';
import Mochila from '@imgs/Recompensas_Mochila.webp';
import Amazon from '@imgs/Recompensas_10_Amazon.webp';
const rewards = [
  { 
    id: 2, 
    title: "Clave aleatoria Steam", 
    image: Clave, 
    points: 200, 
    description: "¿Buscas un nuevo juego? Una clave aleatoria de Steam te sorprenderá con un título increíble para tu biblioteca. Por 200 puntos, la aventura te espera." 
  },
  { 
    id: 3, 
    title: "Camiseta del Club", 
    image: Camiseta, 
    points: 300, 
    description: "¿Listo para mostrar tu pasión? La camiseta del club te hará lucir con orgullo tu espíritu Oxygen. Por 300 puntos, vístete con estilo." 
  },

  { 
    id: 4, 
    title: "Ticket a Sorteo", 
    image: Ticket, 
    points: 500, 
    description: "¿Sueñas con premios épicos? Un ticket a sorteo te da la chance de ganar recompensas increíbles. Por 500 puntos, la suerte está de tu lado." 
  },

  { 
    id: 5, 
    title: "1000 V-Bucks Fortnite", 
    image: Pavos, 
    points: 600, 
    description: "¿Cómo vas a lucir tu victoria magistral? Con 1000 V-Bucks, podrás desbloquear skins exclusivas, bailes originales y otros ítems increíbles para personalizar tu experiencia. Por 600 puntos, estarás más cerca de tu próxima victoria épica." 
  },

  { 
    id: 6, 
    title: "Mystery Box", 
    image: Box, 
    points: 700, 
    description: "¿Te gustan las sorpresas? Una Mystery Box te espera con un regalo único que te encantará. Por 700 puntos, la emoción es tuya." 
  },
  { 
    id: 7, 
    title: "Tarjeta 10€ Google Play", 
    image: Google, 
    points: 800, 
    description: "¿Buscas diversión digital? Con 10 € en Google Play, tendrás acceso a apps, juegos y más para disfrutar al máximo. Por 800 puntos, el entretenimiento es tuyo." 
  },
  { 
    id: 8, 
    title: "Tarjeta 10€ PlayStation", 
    image: Playstation, 
    points: 900, 
    description: "¿Quieres más juegos en PlayStation? Con 10 € en crédito, podrás descargar títulos y contenido para tu consola. Por 900 puntos, la diversión no para." 
  },
  { 
    id: 9, 
    title: "Silla PlaySeat PUMA", 
    image: Silla, 
    points: 10000, 
    description: "Consigue la silla Playseat Puma y lleva tu experiencia de gaming al siguiente nivel." 
  },
  { 
    id: 10, 
    title: "10€ de Amazon", 
    image: Amazon, 
    points: 10000, 
    description: "Consigue los 10€ de Amazon y lleva tu experiencia de gaming al siguiente nivel." 
  },
  { 
    id: 11, 
    title: "Alfombrilla de Oxygen",
    image: Alfombrilla, 
    points: 10000, 
    description: "Lleva tu setup al siguiente nivel ! La alfombrilla del club te ofrece comodidad y precisión para tus partidas. Por solo X puntos puedes presumir de estilo gamer." 
  },
  { 
    id: 12, 
    title: "Mochila de Oxygen", 
    image: Mochila, 
    points: 10000, 
    description: "Lleva el espíritu del club a cualquier lado ! Esta mochila es perfecta para acompañarte donde vayas. Por solo X puntos, llévate tu accesorio práctico y único." 
  },
  { 
    id: 13, 
    title: "Taza de Oxygen", 
    image: Taza, 
    points: 10000, 
    description: "Ya puedes disfrutar de tu bebida favorita en condiciones ! La taza del club te hará sentir el orgullo de ser parte de Oxygen Gaming. Llévate tu taza única por solo X puntos." 
  },
];

export default rewards;
