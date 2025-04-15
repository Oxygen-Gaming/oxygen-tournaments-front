import React from "react";

const VentajaMovil = ({ link, text, shadow, background, color }) => {

  return (
    <div className={`group h-[15rem] w-[15rem] sm:w-[30rem] sm:h-[30rem] [perspective:1000px]  rounded-xl`}>
      <div className={`shadow-[${shadow}] h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]`}>
        <div className="h-full flex">
          <img src={link} className="h-full w-full flex flex-col items-center justify-center rounded-xl" />
        </div>
        
        <div className={`absolute inset-0 w-full h-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]`} style={{ backgroundColor: background }}>
          <div className="flex justify-center items-center flex-col p-[3rem]">
            <h2 className={`text-[40px] text-[${color}] text-center font-bold`}>{text}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentajaMovil;