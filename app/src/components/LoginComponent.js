import React from "react";
const Login = () => {
  
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-[100vh] bg-blue-900 text-[white] p-[20px] lg:p-[50px] font-roboto-condensed">
        <div className="lg:w-[40%] sm:w-[80%] flex flex-col lg:gap-[20px] gap-[10px]">
          <a href="/" className="text-[20px]">Volver al inicio</a>
          <h1 className="text-[50px] font-semibold">Iniciar Sesión</h1>
          <p className="text-[20px]">¿No tienes cuenta?<a href="/register" className="underline">Regístrate</a></p>
          <form className="flex flex-col items-center justify-center lg:gap-[30px] w-full gap-[20px]">
  
              <div className="flex flex-col lg:gap-[10px] w-full">
                <span className="italic">Correo electrónico</span>
                <input type="email" className="lg:w-full lg:h-[35px] h-[30px] sm:min-w-[100%] rounded lg:p-[7px] text-[black] p-[6px]" required />
              </div>
  
              <div className="flex flex-col lg:gap-[10px] w-full">
                <span className="italic">Contraseña</span>
                <input type="password" className="lg:w-full lg:h-[35px] h-[30px] sm:min-w-[100%] rounded lg:p-[7px] text-[black] p-[6px]" required />
              </div>
  
            <button type="submit" className="bg-[white] text-[black] lg:w-[150px] lg:h-[40px] w-[120px] h-[50px] hover:bg-blue-900 hover:text-[white] hover:border-[white] hover:border-[1px] rounded" >Iniciar Sesión</button>

          </form>
        </div>
  
      </div>
    );
  };
  
  export default Login;