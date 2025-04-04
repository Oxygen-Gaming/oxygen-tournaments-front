import React from "react";

const VentajaMovil = ({ link, text, shadow, background }) => {






  return (
    <div>
      <div className="w-full h-full">
          <div className={`shadow-[${shadow}] rounded-[10px] w-[100%] h-[100%]`}>
            <img
              src={link}
              alt="Ventaja"
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
  );
};

export default VentajaMovil;