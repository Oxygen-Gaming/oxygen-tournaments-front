import React from "react";
import Competiciones from "@imgs/inicio1.webp";
import Contenido from "@imgs/inicio2.webp";
import Misiones from "@imgs/inicio3.webp";
const FuncionaInicio = () => {
    return (
        <div className="text-white py-[8vh] px-6 sm:px-12 bg-[#1AA9FF]"> {/* Reduced top padding */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 sm:mb-20 tracking-wide">Descubre lo que Oxyclub tiene para ti</h1>
            <div className="grid place-items-center gap-[6rem] grid-cols-1 md:grid-cols-3 w-full">
              {[
                {
                  icon: "fas fa-trophy",
                  title: "Competiciones",
                  text: "Participa en emocionantes torneos y desafíos llenos de acción. ¡Compite, progresa y conviértete en una verdadera leyenda del juego!",
                  link: "/competition",
                  background: Contenido, // Use the imported image
                },
                {
                  icon: "fas fa-photo-video",
                  title: "Contenido Exclusivo",
                  text: "Sumérgete en el mundo de tu equipo favorito con contenido exclusivo: disfruta de entrevistas a tus ídolos, entrenamientos y momentos únicos que solo los verdaderos fanáticos pueden apreciar. ",
                  link: "/content",
                  background: Competiciones, // Use the imported image
                },
                {
                  icon: "fa-solid fa-gift",
                  title: "Recompensas",
                  text: "Disfruta completando tareas entretenidas mientras acumulas puntos con cada logro. Cuantos más desafíos superes, más puntos obtendrás para canjear por recompensas increíbles.",
                  link: "/rewards",
                  background: Misiones, // Use the imported image
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center justify-center w-full h-[80vw] sm:w-full sm:h-[50vw] md:w-[16rem] md:h-[16rem] lg:h-[20rem] lg:w-[20rem] xl:h-[25rem] xl:w-full text-center sm:p-10 bg-[#f5f4f4] rounded-2xl backdrop-blur-md hover:shadow-2xl hover:scale-105 transition duration-300"
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
    )
}

export default FuncionaInicio;