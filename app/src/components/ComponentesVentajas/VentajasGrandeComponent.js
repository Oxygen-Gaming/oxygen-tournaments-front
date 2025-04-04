import React from "react";

const VentajaGrande = ({ link, text, shadow, background }) => {
  const cardContainer = {
    width: "85vh",
    height: "40vh",
    perspective: "1000px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const cardStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s ease-in-out",
    borderRadius: "10px", 
    transformOrigin: "center",
  };

  const faceStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    borderRadius: "10px",
  };

  // Aquí aplicamos el fondo dinámico
  const backFaceStyle = {
    ...faceStyle,
    backgroundColor: background,  // Cambiar color de fondo directamente
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotateX(180deg)",
    boxShadow: shadow,  // Aplicamos la sombra también
  };

  return (
    <div style={cardContainer}>
      {/* Contenedor que rota */}
      <div
        style={cardStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "rotateX(180deg)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "rotateX(0deg)")}
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

export default VentajaGrande;
