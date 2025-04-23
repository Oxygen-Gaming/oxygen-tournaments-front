import React from "react";

const VentajaPequeño = ({ link, text, background, color, shadow }) => {
  return (
    <div className={`group h-[15rem] lg:w-[15rem] xl:w-[15rem] [perspective:1000px] rounded-xl`}>
      <div className={`shadow-[${shadow}] h-full w-full rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]`}>
        <div className="h-full flex">
          <img src={link} className="h-full w-full flex flex-col items-center justify-center rounded-xl" />
        </div>
        
        <div className={`absolute inset-0 w-full h-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]`} style={{ backgroundColor: background }}>
          <div className="flex justify-center items-center flex-col p-[3rem]">
            <h2 className={`text-[18px] text-[${color}] text-center font-bold lg:text-[3rem]`}>
            {link.split('/').pop().split('.')[0]} {/* Extract and display the image name */}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VentajaPequeño;

