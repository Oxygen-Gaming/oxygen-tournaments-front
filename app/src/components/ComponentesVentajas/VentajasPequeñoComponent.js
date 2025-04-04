import React from "react";

const VentajaPequeño = ({ link, text, shadow, background, color }) => {
  const cardContainer = {
    width: "30vh",
    height: "30vh",
    perspective: "1000px",
  };

  const cardStyle = {
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s ease-in-out",
    borderRadius: "10px", 
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
      <div className="w-full h-full">
        <div
          style={cardStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "rotateY(180deg)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "rotateY(0deg)")}
        >
          <div style={faceStyle} className={`shadow-[${shadow}]`}>
            <img
              src={link}
              alt="Ventaja"
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            />
          </div>
          <div style={backFaceStyle}>
            <p style={{fontWeight: "bold", fontSize: "3rem", textAlign: "center", padding: "10px" }} className={`text-${color}`}>
              {text}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default VentajaPequeño;

