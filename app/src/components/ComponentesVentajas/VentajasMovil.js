import React from "react";

const VentajaMovil = ({ link, shadow, isPremium }) => {
  const premiumStyles = isPremium
    ? {
        boxShadow: "0 0 10px rgba(255, 223, 0, 1), 0 0 20px rgba(255, 223, 0, 1)",
      }
    : {};

  return (
    <div
      className="h-[15rem] w-[15rem] sm:w-[30rem] sm:h-[30rem] rounded-xl relative transform transition-transform duration-500 hover:scale-105"
      style={premiumStyles}
    >
      <div className="h-full w-full rounded-xl" style={{ boxShadow: shadow }}>
        <div className="h-full flex flex-col items-center justify-center rounded-xl">
          <img
            src={link}
            className="h-full w-full rounded-xl object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default VentajaMovil;