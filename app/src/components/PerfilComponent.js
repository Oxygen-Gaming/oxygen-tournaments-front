import React, { useState } from "react";
import juego from "../img/juego.png";
import oxygen from "../img/Logo_OxygenGaming2.png";

const Perfil = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("perfil");
  const [imagenPerfil, setImagenPerfil] = useState(juego);

  const getButtonClass = (option) => {
    return opcionSeleccionada === option ? "text-black" : "text-white";
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagenPerfil(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderContent = () => {
    switch (opcionSeleccionada) {
      case "perfil":
        return (
          <div className="flex flex-col gap-[30px] pl-[100px] pr-[100px]">
            <div className="flex w-full gap-[30px]">
              <img
                src={imagenPerfil}
                alt="imagen de perfil"
                className="w-[150px] h-[150px] p-[10px] border-[2px] rounded-full"
              />
              <div className="text-[20px]">
                <h1 className="text-[30px]">Nombre Apellido</h1>
                {/* Add more profile details here */}
              </div>
            </div>
          </div>
        );
      case "inventario":
        return <div>Inventario Content</div>;
      case "logros":
        return <div>Logros Content</div>;
      case "pedidos":
        return <div>Pedidos Content</div>;
      case "cuentas de juego":
        return <div>Cuentas de Juego Content</div>;
      case "conexiones":
        return <div>Conexiones Content</div>;
      case "cuenta":
        return <div>Editar Perfil Content</div>;
      default:
        return null;
    }
  };

  return (
    <div>
      <header className="flex justify-between items-center px-4 py-4 md:px-6 bg-[#18538a]">
        <a href="/" className="w-[70px] h-[70px] mr-8">
          <img src={oxygen} alt="OxygenGaming Logo" className="w-full h-full" />
        </a>
        <nav className="flex items-center gap-2">
          <a
            href="/"
            className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 bg-blue-600"
          >
            Inicio
          </a>
          <a
            href="/competiciones"
            className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10"
          >
            Competiciones
          </a>
          <a
            href="/reglamentos"
            className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10"
          >
            Contenido
          </a>
          <a
            href="/rewards"
            className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10"
          >
            Misiones
          </a>
          <a
            href="/rewards"
            className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10"
          >
            Recompensas
          </a>
        </nav>
        <div className="flex items-center gap-2 ml-auto">
          <button className="bg-blue-600 w-[150px] h-[40px] hover:bg-[#18538a] hover:border-[white] hover:border-[1px] text-[white] rounded">
            <a href="/">Cerrar Sesion</a>
          </button>
        </div>
      </header>
      <div className="flex items-center text-center gap-[30px] pl-[100px] font-bold">
        <p className="text-[30px]">Tu Perfil</p>
      </div>
      <div className="pl-[100px]">
        <div className="flex text-[20px] gap-[30px] w-[100%] font-bold">
          <button
            onClick={() => setOpcionSeleccionada("perfil")}
            className={`hover:text-[black] ${getButtonClass("perfil")}`}
          >
            Perfil
          </button>
          <button
            onClick={() => setOpcionSeleccionada("inventario")}
            className={`hover:text-[black] ${getButtonClass("inventario")}`}
          >
            Inventario
          </button>
          <button
            onClick={() => setOpcionSeleccionada("logros")}
            className={`hover:text-[black] ${getButtonClass("logros")}`}
          >
            Logros
          </button>
          <button
            onClick={() => setOpcionSeleccionada("pedidos")}
            className={`hover:text-[black] ${getButtonClass("pedidos")}`}
          >
            Pedidos
          </button>
          <button
            onClick={() => setOpcionSeleccionada("cuentas de juego")}
            className={`hover:text-[black] ${getButtonClass(
              "cuentas de juego"
            )}`}
          >
            Cuentas de juego
          </button>
          <button
            onClick={() => setOpcionSeleccionada("conexiones")}
            className={`hover:text-[black] ${getButtonClass("conexiones")}`}
          >
            Conexiones
          </button>
          <button
            onClick={() => setOpcionSeleccionada("cuenta")}
            className={`hover:text-[black] ${getButtonClass("cuenta")}`}
          >
            Editar Perfil
          </button>
        </div>
        <hr className="underline w-full"></hr>
      </div>
      {renderContent()}
    </div>
  );
};

export default Perfil;
