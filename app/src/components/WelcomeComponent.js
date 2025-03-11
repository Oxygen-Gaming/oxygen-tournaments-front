import React from 'react';
import Logo from '@imgs/Logo_OxygenGaming2.png';
import Header from '@components/Header';
import Footer from '@components/Footer';

const rewards = [
  {
    title: 'Watch Parties',
    text: 'Disfruta de eventos en vivo con otros miembros de OxyClub.',
    image: 'path/to/image1.jpg',
  },
  {
    title: 'Eventos de Comunidad',
    text: 'Participa en eventos exclusivos y conoce a otros gamers.',
    image: 'path/to/image2.jpg',
  },
  {
    title: 'Drops Exclusivos',
    text: 'Obtén recompensas únicas y exclusivas para miembros de OxyClub.',
    image: 'path/to/image3.jpg',
  },
  {
    title: 'Wallpapers',
    text: 'Descarga fondos de pantalla exclusivos para tu dispositivo.',
    image: 'path/to/image4.jpg',
  },
  {
    title: 'Descuento en Merchandising',
    text: 'Aprovecha descuentos especiales en nuestra tienda.',
    image: 'path/to/image5.jpg',
  },
  {
    title: 'Contenido exclusivo',
    text: 'Accede a contenido exclusivo solo para miembros de OxyClub.',
    image: 'path/to/image6.jpg',
  },
  {
    title: 'Acceso discord VIP',
    text: 'Únete a nuestro servidor VIP en Discord.',
    image: 'path/to/image7.jpg',
  },
  {
    title: 'Recompensas por misiones',
    text: 'Completa misiones y gana recompensas exclusivas.',
    image: 'path/to/image8.jpg',
  },
  {
    title: 'Guías competitivas',
    text: 'Accede a guías y estrategias para mejorar tu juego.',
    image: 'path/to/image9.jpg',
  },
];

const Images = [
  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo },
  { image: Logo },
];

const OxygenGaming = () => {
  return (
    <div className="bg-blue-900 text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif]">
      <Header />
      <main className="flex items-center h-[calc(100vh-80px)] px-16 relative overflow-hidden">
        <svg
          className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] opacity-10 z-[1]"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M250,50 L400,250 L250,450 L100,250 Z"
            className="fill-orange-400 opacity-20"
          />
        </svg>
        <div className="max-w-[600px] z-10 relative">
          <h1 className="text-3xl mb-4 leading-[1.2]">
            VENTAJAS EXCLUSIVAS PARA{' '}
            <span className="text-blue-600">GAMERS</span>.
          </h1>
          <h1 className="text-3xl mb-4 leading-[1.2]">
            VIVE LA MEJOR EXPERIENCIA GAMER CON{' '}
            <span className="text-blue-600">OXYCLUB</span>.
          </h1>
          <p className="mb-8 text-gray-300">
            ¡Bienvenido a OxyClub! La plataforma que te da más: más acceso a
            competiciones, más contenido exclusivo, más premios y más
            oportunidades para demostrar tu talento y vivir el gaming al máximo.
          </p>
          <div className="flex gap-4">
            <a
              href="/register"
              className="inline-block px-4 py-3 rounded font-bold transition transform hover:-translate-y-1 hover:shadow-md bg-blue-600 text-white"
            >
              Únete a Oxyclub
            </a>
            <a
              href="/faqs"
              className="inline-block px-4 py-3 rounded font-bold transition transform hover:-translate-y-1 hover:shadow-md bg-transparent text-white border-2 border-white"
            >
              FAQs
            </a>
          </div>
        </div>
      </main>
      <section className="py-16 px-8 bg-blue-800">
        <h2 className="text-center text-2xl md:text-3xl mb-8">
          Ventajas de unirte a OxyClub
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Images.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-lg shadow-md bg-blue-700 transition-transform duration-300 hover:scale-105 hover:shadow-md"
            >
              <img
                src={item.image}
                alt={`Ventaja ${index + 1}`}
                className="w-full h-full"
              />
            </div>
          ))}
          {rewards.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-lg shadow-md bg-blue-700 transition-transform duration-300 hover:scale-105 hover:shadow-md"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
              }}
            >
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default OxygenGaming;
