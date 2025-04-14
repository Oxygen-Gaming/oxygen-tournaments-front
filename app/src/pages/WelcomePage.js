import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Banner from "@components/componentesInicio/BannerComponent";
import VentajasMixtas from "@components/componentesInicio/VentajasMixtasComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Tarjeta from "@imgs/poster1.webp";
import Tarjeta2 from "@imgs/poster2.webp";
import Tarjeta3 from "@imgs/poster3.webp";
import Tarjeta4 from "@imgs/poster4.webp";
import Tarjeta5 from "@imgs/poster5.webp";
import Tarjeta6 from "@imgs/poster6.webp";
import Tarjeta7 from "@imgs/poster7.webp";
import Tarjeta8 from "@imgs/poster8.webp";
import Tarjeta9 from "@imgs/poster9.webp";
import PortadaDeHome from "@imgs/Portada_de_Home.jpg";
import rewards from '../components/Recompensas/rewardsData';
import RewardCard from '../components/Recompensas/CardRewardHome';

const OxygenGaming = () => {
  const premiumCards = [
    { image: Tarjeta },
    { image: Tarjeta2 },
    { image: Tarjeta3 },
    { image: Tarjeta4 },
    { image: Tarjeta5 },
    { image: Tarjeta6 },
    { image: Tarjeta7 },
    { image: Tarjeta8 },
    { image: Tarjeta9 },
  ];

  return (
    <div className="bg-[#1AA9FF] text-white overflow-x-hidden font-['Roboto_Condensed',sans-serif] lg:p-0 pt-[30px] flex flex-col gap-0">
      <Header />
      <MenuHamburguesaNormal />
      <main
        className="flex items-center h-[calc(100vh-80px)] px-16 relative overflow-hidden mt-[20px] lg:mt-0 pt-7"
        style={{
          backgroundImage: `url(${PortadaDeHome})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="hidden lg:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1AA9FF] z-10"></div>
        <div className="max-w-[600px] z-20 relative">
          <h1 className="text-3xl mb-4 leading-[1.2]">
            VENTAJAS EXCLUSIVAS PARA <span className="text-white">GAMERS</span>.
          </h1>
          <h1 className="text-3xl mb-4 leading-[1.2]">
            VIVE LA MEJOR EXPERIENCIA GAMER CON <span className="text-white">OXYCLUB</span>.
          </h1>
          <p className="mb-8 text-white">
            ¡Bienvenido a OxyClub! La plataforma que te da más: más acceso a
          </p>
          <div className="flex gap-4 mt-[-20px]">
            <a
              href="/register"
              className="inline-block px-4 py-3 rounded font-bold transition transform hover:-translate-y-1 hover:shadow-md bg-[#005f99] text-white"
            >
              Únete a Oxyclub
            </a>
          </div>
        </div>
      </main>

      <div className="w-screen xl:mt-[150px] mt-[80px]">
        <div className="w-full flex xl:flex-row xl:items-center xl:justify-evenly lg:flex-row lg:items-center lg:justify-evenly md:flex-col md:items-center md:justify-evenly md:gap-[50px] sm:flex-col sm:items-center flex-col items-center gap-[30px]">
          <div className="xl:w-[30rem] min-[2000px]:w-[45rem] xl:h-[30rem] min-[2000px]:h-[40rem] lg:w-[25rem] lg:h-[25rem] md:w-[30rem] md:h-[30rem] sm:w-[30rem] sm:h-[30rem] w-[80%] flex items-center justify-center relative">
            <h1 className="absolute text-[50px] z-10">Ventajas Free</h1>
            <img src={Tarjeta} alt="competiciones" className="w-full h-full object-cover rounded-[10px]" />
          </div>
          <div className="xl:w-[30rem] min-[2000px]:w-[45rem] xl:h-[30rem] min-[2000px]:h-[40rem] lg:w-[25rem] lg:h-[25rem] md:w-[30rem] md:h-[30rem] sm:w-[30rem] sm:h-[30rem] w-[80%] flex items-center justify-center relative">
            <h1 className="absolute text-[50px] z-10">Ventajas Premium</h1>
            <img src={Tarjeta} alt="contenido" className="w-full h-full object-cover rounded-[10px]" />
          </div>
        </div>

        {/* Reemplazamos el p con el slider */}
        <div className="mt-[100px] mb-20 flex flex-col justify-center items-center overflow-x-hidden lg:p-0 p-[20px] md:p-[40px]" id="events">
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
                <SwiperSlide key={reward.id} className="flex items-center justify-center ">
                  <RewardCard {...reward} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className=" mt-[20vh] mb-[100px] w-full flex xl:flex-row xl:items-center xl:justify-evenly lg:flex-row lg:items-center lg:justify-evenly md:flex-col md:items-center md:justify-evenly md:gap-[50px] sm:flex-col sm:items-center flex-col items-center gap-[30px]">
          <div className="xl:w-[30rem] min-[2000px]:w-[45rem] xl:h-[30rem] min-[2000px]:h-[40rem] lg:w-[25rem] lg:h-[25rem] md:w-[30rem] md:h-[30rem] sm:w-[30rem] sm:h-[30rem] w-[80%] flex items-center justify-center relative">
            <h1 className="absolute text-[50px] z-10">Competiciones</h1>
            <img src={Tarjeta} alt="competiciones" className="w-full h-full object-cover rounded-[10px]" />
          </div>
          <div className="xl:w-[30rem] min-[2000px]:w-[45rem] xl:h-[30rem] min-[2000px]:h-[40rem] lg:w-[25rem] lg:h-[25rem] md:w-[30rem] md:h-[30rem] sm:w-[30rem] sm:h-[30rem] w-[80%] flex items-center justify-center relative">
            <h1 className="absolute text-[50px] z-10">Contenido</h1>
            <img src={Tarjeta} alt="contenido" className="w-full h-full object-cover rounded-[10px]" />
          </div>
        </div>

      </div>

      

      <Footer />
    </div>
  );
};

export default OxygenGaming;



