import React from "react";
const Register = () => {
  
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-[100vh] bg-[#1AA9FF] p-[50px] font-roboto-condensed">
        <div className="w-[40%] flex flex-col gap-[20px]">
        <a href="/" className="text-[20px]">Volver al inicio</a>
          <h1 className="text-[50px] font-semibold">Crear cuenta</h1>
          <p className="text-[20px]">¿Ya tienes cuenta?<a href="/login" className="underline">Inicia sesión</a></p>
          <form className="flex flex-col items-center justify-center gap-[30px] w-full">
              <div className="flex flex-col gap-[10px] w-full">
                <span className="italic">Nombre y apellidos</span>
                <input type="text" className="w-full h-[35px] rounded p-[7px]"  required />
              </div>
  
              <div className="flex flex-col gap-[10px] w-full">
                <span className="italic">Nombre de usuario</span>
                <input type="text" className="w-full h-[35px] rounded p-[7px]"/>
              </div>
  
              <div className="flex flex-col gap-[10px] w-full">
                <span className="italic">Fecha de nacimiento</span>
                <input type="date" className="w-full h-[35px] rounded p-[7px]" required />
              </div>
  
              <div className="flex flex-col gap-[10px] w-full">
                <span className="italic">Teléfono</span>
                <input type="tel" className="w-full h-[35px] rounded p-[7px]"/>
              </div>
  
              <div className="flex flex-col gap-[10px] w-full">
                <span className="italic">Correo electrónico</span>
                <input type="email" className="w-full h-[35px] rounded p-[7px]" required />
              </div>
  
              <div className="flex flex-col gap-[10px] w-full">
                <span className="italic">Contraseña</span>
                <input type="password" className="w-full h-[35px] rounded p-[7px]" required />
              </div>
  
            <button type="submit" className="bg-[white] w-[150px] h-[40px] hover:bg-[#1AA9FF] hover:border-[white] hover:border-[1px] rounded" >Registrarse</button>
  
  
          </form>
        </div>
  
      </div>
    );
  };
  
  export default Register;