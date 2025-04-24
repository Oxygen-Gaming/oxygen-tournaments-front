import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import VentajaMovil from "@components/ComponentesVentajas/VentajasMovil";
import VentajaGrande from "@components/ComponentesVentajas/VentajasGrandeComponent";
import VentajaPequeño from "@components/ComponentesVentajas/VentajasPequeñoComponent";
import PortadaDeHome from "@imgs/Portada_de_Home.jpg";
import rewards from '../components/Recompensas/rewardsData';
import RewardCard from '../components/Recompensas/CardRewardHome';
import posternormal1 from "@imgs/Watch parties.webp"; // Fixed case sensitivity
import posternormal2 from "@imgs/recompensas por misiones.webp"; // Fixed case sensitivity
import poster1 from "@imgs/Watch parties.webp"; // Fixed case sensitivity
import poster3 from "@imgs/Obsequio cumpleaños.webp";
import poster2 from "@imgs/Descuentos merchandising.webp";
import poster10 from "@imgs/Entradas a eventos.webp";
import Competiciones from "@imgs/Header_Competiciones.jpg";
import Contenido from "@imgs/Header_Contenido.jpg";
import Misiones from "@imgs/Header_Misiones.jpg";

const OxygenGaming = () => {
  

  return (
    <div className="bg-[#1AA9FF] text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif] lg:p-0 pt-[30px] flex flex-col gap-0">
      <Header />
      <MenuHamburguesaNormal />
      <main
        className="flex items-center max-[320px]:h-[100vh] landscape:min-[568px]:h-[100vh] md:h-[80vh] px-16 relative overflow-hidden mt-[20px] lg:mt-0 pt-7"
        style={{
          backgroundImage: `url(${PortadaDeHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0 "></div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1AA9FF] z-10 "></div>
        <div className="max-w-[600px] z-20 relative my-5 ">
          <h1 className="text-3xl mb-4 leading-[1.2]">
            VENTAJAS EXCLUSIVAS PARA <span className="text-white">GAMERS</span>.
          </h1>
          <h1 className="text-3xl mb-4 leading-[1.2]">
            VIVE LA MEJOR EXPERIENCIA GAMER CON <span className="text-white">OXYCLUB</span>.
          </h1>
          <p className="mb-8 text-white">
            ¡Bienvenido a OxyClub! La plataforma definitiva para gamers apasionados. 
            Descubre competiciones emocionantes, contenido exclusivo y recompensas únicas. 
            Únete a nuestra comunidad y lleva tu experiencia gamer al siguiente nivel.
          </p>
          <div className="flex gap-4 mt-4"> {/* Adjusted margin */}
            <a
              href="/register"
              className="inline-block px-6 py-3 rounded-lg font-bold text-lg transition transform hover:-translate-y-1 hover:shadow-lg bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white hover:from-[#00487a] hover:to-[#007acc] animate-pulse"
            >
              Únete a Oxyclub
            </a>
          </div>
        </div>
      </main>

      <div className="w-screen">
        
        <div className="w-full flex flex-col items-center">
          <h1 className="text-[40px] font-bold text-center mt-[20px] mb-[30px]">Nuestras Ventajas</h1>
          <div className="w-[60%] text-[20px] text-center mb-[30px]">
            <p>
              <span className="font-bold text-white">Ventajas Free:</span> Queremos agradecer tu apoyo incondicional ofreciéndote una selección de ventajas exclusivas y oportunidades únicas para conectar con el equipo. 
              ¡Únete a nuestra comunidad y comienza a disfrutar!
            </p>
            <hr className="my-6 border-t-2 border-gray-300" /> {/* Line separator */}
            <p>
              <span className="font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text animate-pulse">
                Ventajas VIP:
              </span> Eleva tu pasión al siguiente nivel y desbloquea una experiencia VIP con acceso anticipado, contenido exclusivo. 
              Conviértete en un miembro de élite y disfruta de ventajas que no encontrarás en ningún otro lugar.
            </p>
          </div>
          <div className="hidden lg:flex flex-row items-center justify-center gap-[2rem]">
            <VentajaPequeño link={posternormal1} text={"Ventajas Free"} background={"#1796E6"} color="white" />
            <VentajaGrande link={poster1} text={"Ventajas Free"} background={"#1796E6"} color="white" />
            <VentajaPequeño link={posternormal2} text={"Ventajas Free"} background={"#1796E6"} color="white" />
          </div>
          <div className="lg:hidden flex flex-col items-center justify-center gap-[2rem]">
            <VentajaMovil link={posternormal1} text={"Ventajas Free"} background={"#1796E6"} />
            <VentajaMovil link={posternormal2} text={"Ventajas Free"} background={"#1796E6"} />
            <VentajaMovil link={poster1} text={"Ventajas Free"} background={"#1796E6"} />
          </div>
          <div className="hidden lg:flex flex-row items-center justify-center gap-[2rem] mt-8">
            <VentajaPequeño link={poster2} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" isPremium={true} />
            <VentajaGrande link={poster10} text={"Ventajas Premium"} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} background={"gold"} color="black" isPremium={true} />
            <VentajaPequeño link={poster3} shadow={"0_0_10px_10px_rgba(255,215,0,0.8)"} text={"Ventajas Premium"} background={"gold"} color="black" isPremium={true} />
          </div>
          <div className="lg:hidden flex flex-col items-center justify-center gap-[2rem] mt-8">
            <VentajaMovil link={poster1} background={"gold"} color="black" text={"Ventajas Premium"} isPremium={true} />
            <VentajaMovil link={poster2} background={"gold"} color="black" text={"Ventajas Premium"} isPremium={true} />
            <VentajaMovil link={poster3} background={"gold"} color="black" text={"Ventajas Premium"} isPremium={true} />
          </div>
        </div>

        
        <div className="text-[#1AA9FF] py-[12vh] px-6 sm:px-12 mt-[15vh] bg-[white]">
          <div className="max-w-[1400px] mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 tracking-wide">Así funciona</h1>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
              {[
                {
                  icon: "fas fa-trophy",
                  title: "Competiciones",
                  text: "Participa en desafíos, pronósticos y torneos oficiales para demostrar tus conocimientos y escalar posiciones en los rankings.",
                  link: "/competition",
                  background: Competiciones, // Use the imported image
                },
                {
                  icon: "fas fa-photo-video",
                  title: "Contenido",
                  text: "Accede a contenido exclusivo de tus equipos y deportes favoritos: entrevistas, entrenamientos, backstage y mucho más.",
                  link: "/content",
                  background: Contenido, // Use the imported image
                },
                {
                  icon: "fas fa-tasks",
                  title: "Misiones",
                  text: "Completa tareas, responde encuestas, juega y gana puntos que podrás canjear por premios y recompensas únicas.",
                  link: "/missions",
                  background: Misiones, // Use the imported image
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center p-8 sm:p-10 bg-[#f5f4f4] rounded-2xl backdrop-blur-md hover:shadow-2xl hover:scale-105 transition duration-300"
                  style={{
                    backgroundImage: item.background ? `url(${item.background})` : "none", // Apply background if available
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div> {/* Dark overlay */}
                  <i className={`${item.icon} text-[#1AA9FF] text-5xl sm:text-6xl mb-6 sm:mb-8 relative z-10`}></i>
                  <a
                    href={item.link}
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 hover:text-[#1AA9FF] transition-colors relative z-10" // Changed hover color
                  >
                    {item.title}
                  </a>
                  <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-[#78c0ff] relative z-10">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Reemplazamos el p con el slider */}
        <div className="mt-[100px] mb-20 flex flex-col justify-center items-center overflow-x-hidden lg:p-0 p-[20px] md:p-[40px] w-full" id="events">
          <h1 className="text-[40px] font-bold text-center">Nuestras Recompensas</h1>

          <div className="w-full flex justify-center items-center mt-[50px]">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              spaceBetween={30}
              breakpoints={{
                76: {
                  slidesPerView: 1,
                },
                568:{
                  slidesPerView:2
                },
                600:{
                  slidesPerView:3
                },
                768: {
                  slidesPerView: 2,
                },
                1024:{
                  slidesPerView:3
                }
               
              }}
              className="lg:w-[80%] w-full flex justify-center items-center"
            >
              {rewards.map((reward) => (
                <SwiperSlide key={reward.id} className="w-full flex">
                  <div className="w-full flex items-center justify-center cursor-pointer">
                    <RewardCard {...reward} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Botón para ir a recompensas */}
          <div className="mt-[50px] flex justify-center items-center">
            <a
                href="rewards"
                className="inline-block px-8 py-4 text-lg rounded-lg font-bold transition transform hover:-translate-y-2 hover:shadow-lg bg-[#005f99] hover:bg-[#00487a] text-white"
            >
                Ver Recompensas
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OxygenGaming;



