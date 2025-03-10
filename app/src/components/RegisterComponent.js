import React from "react";
const Register = () => {
  
    return (
      <div class="flex flex-col items-center justify-center w-full min-h-[100vh] bg-blue-900 text-[white] p-[20px] lg:p-[50px] font-roboto-condensed">
        <div class="lg:w-[40%] sm:w-[80%] flex flex-col lg:gap-[20px] gap-[10px]">
          <a href="/" class="text-[20px]">Volver al inicio</a>
          <h1 class="text-[50px] font-semibold">Crear cuenta</h1>
          <p class="text-[20px]">¿Ya tienes cuenta?<a href="/login" class="underline">Inicia sesión</a></p>
          <form class="flex flex-col items-center justify-center lg:gap-[30px] w-full gap-[20px]">
              <div class="flex flex-col lg:gap-[10px] w-full">
                <span class="italic">Nombre y apellidos</span>
                <input type="text" class="lg:w-full lg:h-[35px] sm:min-w-[100%] h-[30px] rounded lg:p-[7px] text-[black] p-[6px]"  required />
              </div>
  
              <div class="flex flex-col lg:gap-[10px] w-full">
                <span class="italic">Nombre de usuario</span>
                <input type="text" class="lg:w-full lg:h-[35px] sm:min-w-[100%] h-[30px] rounded lg:p-[7px] text-[black] p-[6px]"/>
              </div>
  
              <div class="flex flex-col lg:gap-[10px] w-full">
                <span class="italic">Fecha de nacimiento</span>
                <input type="date" class="lg:w-full min-w-[33vh] sm:min-w-[97%] lg:h-[35px] h-[30px] rounded lg:p-[7px] text-[black] p-[6px]" required />
              </div>
  
              <div class="flex flex-col gap-[10px] w-full">
                <span class="italic">Teléfono</span>
                <input type="tel" class="lg:w-full lg:h-[35px] h-[30px] sm:min-w-[100%] rounded lg:p-[7px] text-[black] p-[6px]"/>
              </div>
  
              <div class="flex flex-col lg:gap-[10px] w-full">
                <span class="italic">Correo electrónico</span>
                <input type="email" class="lg:w-full lg:h-[35px] h-[30px] sm:min-w-[100%] rounded lg:p-[7px] text-[black] p-[6px]" required />
              </div>
  
              <div class="flex flex-col lg:gap-[10px] w-full">
                <span class="italic">Contraseña</span>
                <input type="password" class="lg:w-full lg:h-[35px] h-[30px] sm:min-w-[100%] rounded lg:p-[7px] text-[black] p-[6px]" required />
              </div>
  
            <button type="submit" class="bg-[white] text-[black] lg:w-[150px] lg:h-[40px] w-[120px] h-[50px] hover:bg-blue-900 hover:text-[white] hover:border-[white] hover:border-[1px] rounded" >Registrarse</button>
  
  
          </form>
        </div>
  
      </div>
    );
  };
  
  export default Register;