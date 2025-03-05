import React from "react";

const Login = () => {
    return(
        <div class="flex flex-col items-center justify-center w-full min-h-[100vh] bg-[#1AA9FF] p-[50px] font-roboto-condensed">
        <div class="w-[40%] flex flex-col gap-[20px]">
          <h1 class="text-[50px] font-semibold">Iniciar Sesión</h1>
          <p class="text-[20px]">¿No tienes cuenta?<a href="/register" class="underline">Regístrate</a></p>
          <form class="flex flex-col items-center justify-center gap-[30px] w-full">

              <div class="flex flex-col gap-[10px] w-full">
                <span class="italic">Correo electrónico</span>
                <input type="email" class="w-full h-[35px] rounded p-[7px]" required />
              </div>
  
              <div class="flex flex-col gap-[10px] w-full">
                <span class="italic">Contraseña</span>
                <input type="password" class="w-full h-[35px] rounded p-[7px]" required />
              </div>
  
            <button type="submit" class="bg-[white] w-[150px] h-[40px] hover:bg-[#1AA9FF] hover:border-[white] hover:border-[1px] rounded" >Iniciar sesión</button>
  
  
          </form>
        </div>
  
      </div>


    )
}

export default Login