import React from "react";

const VentajaGrande = ({ link, shadow, isPremium }) => {
  const premiumStyles = isPremium
    ? {
        boxShadow: "0 0 10px rgba(255, 223, 0, 1), 0 0 20px rgba(255, 223, 0, 1)",
      }
    : {};

  return (
    <div
      className="h-[15rem] lg:w-[25rem] xl:w-[32rem] rounded-xl relative"
      style={premiumStyles}
    >
      <div className="h-full w-full rounded-xl" style={{ boxShadow: shadow }}>
        <div className="h-full flex flex-col items-center justify-center rounded-xl">
          <img src={link} className="h-full w-full rounded-xl object-cover" alt="" />
        </div>
      </div>
    </div>
  );
};

export default VentajaGrande;