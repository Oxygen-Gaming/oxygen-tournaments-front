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
import Contenido from "@imgs/Headers_Contenido.jpg";
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
          <h1 className="text-[50px] mb-4">
            VIVE LA MEJOR EXPERIENCIA GAMER CON <span className="text-[#1AA9FF] text-[50px] font-bold">OXYCLUB</span>.
          </h1>
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
        
        {/* Así funciona */}
        <div className="text-white py-[8vh] px-6 sm:px-12 bg-[#1AA9FF]"> {/* Reduced top padding */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 tracking-wide">Así funciona</h1>
            <div className="grid place-items-center gap-[6rem] grid-cols-1 md:grid-cols-3 w-full">
              {[
                {
                  icon: "fas fa-trophy",
                  title: "Demuestra tus habilidades",
                  text: "Participa en emocionantes torneos y desafíos llenos de acción. ¡Compite, progresa y conviértete en una verdadera leyenda del juego!",
                  link: "/competition",
                  background: Competiciones, // Use the imported image
                },
                {
                  icon: "fas fa-photo-video",
                  title: "Contenido Exclusivo",
                  text: "Sumérgete en el mundo de tu equipo favorito con contenido exclusivo: disfruta de entrevistas a tus ídolos, entrenamientos y momentos únicos que solo los verdaderos fanáticos pueden apreciar. ",
                  link: "/content",
                  background: Contenido, // Use the imported image
                },
                {
                  icon: "fas fa-tasks",
                  title: "Desafíos ",
                  text: "Disfruta completando tareas entretenidas mientras acumulas puntos con cada logro. Cuantos más desafíos superes, más puntos obtendrás para canjear por recompensas increíbles.",
                  link: "/missions",
                  background: Misiones, // Use the imported image
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center h-[30rem] w-[30rem] text-center sm:p-10 bg-[#f5f4f4] rounded-2xl backdrop-blur-md hover:shadow-2xl hover:scale-105 transition duration-300"
                  style={{
                    backgroundImage: item.background ? `url(${item.background})` : "none", // Apply background if available
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >                
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl"></div> {/* Dark overlay */}
                  <a href={item.link} className="w-full h-full absolute"></a>
                  <i className={`${item.icon} text-[white] text-5xl sm:text-6xl mb-6 sm:mb-8 relative z-10`}></i>
                  <p
                    className="text-xl sm:text-2xl lg:text-[35px] font-semibold mb-4 sm:mb-6 relative z-10"
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nuestras Ventajas */}
        <div className="w-full flex flex-col items-center bg-white text-[#1AA9FF] pb-[10vh]"> {/* Increased bottom padding */}
          <h1 className="text-[60px] font-bold text-center mt-[20px] mb-[30px] text-[black]">Nuestras Ventajas</h1>
          
          <p className="text-[black] text-[30px] font-bold">Los descuentos son solo el principio...</p>

          <div className="hidden lg:flex flex-row items-center justify-center gap-[2rem] mt-[20px]">
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

          <button href="/ventajas" className="text-[30px] text-[white] bg-[#1AA9FF] w-[10rem] text-center rounded-[8px] mt-[50px] pointer"><a href="/ventajas">Ver mas</a></button>
        </div>
            
        
        <div className="mt-[100px] mb-20 flex flex-col justify-center items-center overflow-x-hidden lg:p-0 p-[20px] md:p-[40px] w-full" id="events">
          <h1 className="text-[60px] font-bold text-center">En Oxyclub todos ganan</h1>
          <p className="text-[30px]">Cada ventaja ha sido diseñada pensando en ti, para ofrecerte una experiencia sin igual</p>
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
          {/* Botón para ir a misiones*/}
          <div className="mt-[50px] flex justify-center items-center">
            <a
                href="missions"
                className="inline-block px-8 py-4 text-lg rounded-lg font-bold transition transform hover:-translate-y-2 hover:shadow-lg bg-[white] hover:bg-[#00487a] text-[#1AA9FF]"
            >
                Como ganarlas
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OxygenGaming;