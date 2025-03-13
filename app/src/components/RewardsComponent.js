import React from 'react';
import logo from '../img/Logo_Blue.png';
import twitter from '../img/twitter.png';
import instagram from '../img/instagram.png';
import tiktok from '../img/tiktok.png';
import discord from '../img/discord.png';
import PropTypes from 'prop-types';
import oxygen from '../img/Logo_OxygenGaming2.png';
import Header from "./Header"; // Import Header component
import Footer from "./Footer"; // Import Footer component

const Card = ({ image, title, points }) => {
  return (
    <div className="card w-1/5 h-52 bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-1/2 object-cover" />
      <div className="p-3 text-white text-lg text-left">{title}</div>
      <p className="text-[#55a5db] text-sm absolute bottom-3 right-5">
        Puntos: {points}
      </p>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
};

const Rewards = () => {
  return (
    <div className="bg-[#18538a] text-[18px]">
      <Header /> {/* Replace existing header with Header component */}
      <div className="container p-6 flex justify-center mt-10"> {/* Change mt-6 to mt-10 to move title down */}
        <h1 className="text-white text-4xl font-bold ml-80">Recompensas</h1> {/* Move title slightly to the right */}
      </div>
      <section className="cards-container flex flex-wrap justify-center gap-16 pt-40 mb-24"> {/* Add mb-24 for margin-bottom */}
        <Card image="Logo_OxygenGaming2.png" title="Follow por parte de Oxygen" points="100" />
        <Card image="premio2.jpg" title="Clave aleatoria de Steam" points="200" />
        <Card image="premio3.jpg" title="Camiseta del club" points="300" />
        <Card image="premio4.jpg" title="10€ Riot Points" points="400" />
        <Card image="premio4.jpg" title="Ticket a sorteo" points="500" />
        <Card image="premio4.jpg" title="1000 v-bucks Fortnite" points="600" />
        <Card image="premio4.jpg" title="Mystery Box" points="700" />
        <Card image="premio4.jpg" title="10€ Google Play" points="800" />
        <Card image="premio4.jpg" title="10€ Playstation" points="900" />
        <Card image="premio4.jpg" title="Silla Playseat Puma" points="1000" />
      </section>
      <Footer /> {/* Replace existing footer with Footer component */}
    </div>
  );
};

export default Rewards;
