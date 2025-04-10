import React from "react";
//medidad w-[55vh] h-[30vh]



const VentajaGrande = ({ link, text, background, color, shadow }) => {
  return (
    <div className={`group h-[15rem] lg:w-[25rem] xl:w-[32rem] [perspective:1000px] rounded-xl`} >
       <div className={`shadow-[${shadow}] h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]`}>
        <div className="h-full flex">
          <img src={link} className="h-full w-full flex flex-col items-center justify-center rounded-xl" />
        </div>
        
        <div className={`absolute inset-0 w-full h-full rounded-xl [transform:rotateX(180deg)] [backface-visibility:hidden]`} style={{ backgroundColor: background }}>
          <div className="flex justify-center items-center flex-col p-[3rem]">
            <h2 className={`text-[18px] text-[${color}] text-center font-bold lg:text-[3rem]`}>{text}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}



export default VentajaGrande;