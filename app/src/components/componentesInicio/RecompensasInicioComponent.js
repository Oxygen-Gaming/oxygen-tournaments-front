import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import rewards from '../../components/Recompensas/rewardsData';
import RewardCard from '../../components/Recompensas/CardRewardHome';

const RecompensasInicio = () => {
    return (
        <div className="mt-[100px] mb-20 flex flex-col gap-[50px] justify-center items-center overflow-x-hidden lg:p-0 p-[20px] md:p-[40px] w-full" id="events">
          <h1 className="text-[40px] md:text-[60px] font-bold text-center">¡Llévate recompensas por ser un auténtico Fan de Oxygen!</h1>
          <p className="text-[25px] text-center md:text-[30px]">Cada ventaja ha sido diseñada pensando en ti, para ofrecerte una experiencia sin igual</p>
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
                  slidesPerView:4
                }
               
              }}
              className="lg:w-[80%] w-full flex justify-center items-center"
            >
              {rewards.map((reward) => (
                <SwiperSlide key={reward.id} className="w-full flex">

                  <div className="w-full h-full flex items-center justify-center cursor-pointer">

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
                HAZTE CON ELLAS
            </a>
          </div>
        </div>
    )
}

export default RecompensasInicio;