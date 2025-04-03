import React from "react";

const VentajaPequeño = ({ link, text, shadow, background }) => {
  const cardContainer = {
    width: "40vh",
    height: "40vh",
    perspective: "1000px",
  };

  const cardStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s ease-in-out",
    borderRadius: "10px", 
    transformOrigin: "center"
  };

  const faceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "10px",
  };

  // Aplicamos el fondo directamente sin transición
  const backFaceStyle = {
    ...faceStyle,
    backgroundColor: background,  // Aquí se aplica el fondo directamente
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotateY(180deg)",
    boxShadow: shadow,
  };

  return (
    <div style={cardContainer}>
      {/* Contenedor que rota */}
      <div
        style={cardStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "rotateY(180deg)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "rotateY(0deg)")}
      >
        {/* Cara frontal */}
        <div style={faceStyle} className={`shadow-[${shadow}]`}>
          <img
            src={link}
            alt="Ventaja"
            style={{ width: "100%", height: "100%", borderRadius: "10px" }}
          />
        </div>

        {/* Cara trasera con el color de fondo directo */}
        <div style={backFaceStyle}>
          <p style={{ color: "black", fontWeight: "bold", fontSize: "3rem", textAlign: "center", padding: "10px" }}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VentajaPequeño;

