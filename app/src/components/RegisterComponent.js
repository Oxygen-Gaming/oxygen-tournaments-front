import React from "react";
const Register = () => {
  
    return (
      <div class="flex flex-col items-center justify-center w-full min-h-[100vh] bg-[#1AA9FF] p-[50px] font-roboto-condensed">
        <div class="w-[40%] flex flex-col gap-[20px]">
        <a href="/" class="text-[20px]">Volver al inicio</a>
          <h1 class="text-[50px] font-semibold">Crear cuenta</h1>
          <p class="text-[20px]">¿Ya tienes cuenta?<a href="/login" class="underline">Inicia sesión</a></p>
          <form class="flex flex-col items-center justify-center gap-[30px] w-full">
              <div class="flex flex-col gap-[10px] w-full">
                <span class="italic">Nombre y apellidos</span>
                <input type="text" class="w-full h-[35px] rounded p-[7px]"  required />
              </div>
  
              <div class="flex flex-col gap-[10px] w-full">
                <span class="italic">Nombre de usuario</span>
                <input type="text" class="w-full h-[35px] rounded p-[7px]"/>
              </div>
  
              <div class="flex flex-col gap-[10px] w-full">
                <span class="italic">Fecha de nacimiento</span>
                <input type="date" class="w-full h-[35px] rounded p-[7px]" required />
              </div>
  
              <div class="flex flex-col gap-[10px] w-full">
                <span class="italic">Teléfono</span>
                <input type="tel" class="w-full h-[35px] rounded p-[7px]"/>
              </div>
  
              <div class="flex flex-col gap-[10px] w-full">
                <span class="italic">Correo electrónico</span>
                <input type="email" class="w-full h-[35px] rounded p-[7px]" required />
              </div>
  
              <div class="flex flex-col gap-[10px] w-full">
                <span class="italic">Contraseña</span>
                <input type="password" class="w-full h-[35px] rounded p-[7px]" required />
              </div>
  
            <button type="submit" class="bg-[white] w-[150px] h-[40px] hover:bg-[#1AA9FF] hover:border-[white] hover:border-[1px] rounded" >Registrarse</button>
  
  
          </form>
        </div>
  
      </div>
    );
  };
  
  export default Register;