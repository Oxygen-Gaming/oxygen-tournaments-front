import React from "react";

const Login = () => {
    return(
        <div class="flex flex-col items-center justify-center w-full min-h-[100vh] text-[white] bg-blue-900 lg:p-[50px] p-[20px] font-roboto-condensed">
          <div class="lg:w-[40%] sm:w-[80%] flex flex-col lg:gap-[20px] gap-[10px]">
            <a href="/" class="text-[20px]">Volver al inicio</a>
            <h1 class="text-[50px] font-semibold">Iniciar Sesión</h1>
            <p class="text-[20px]">¿No tienes cuenta?<a href="/register" class="underline">Regístrate</a></p>
            <form class="flex flex-col items-center justify-center lg:gap-[30px] gap-[20px] w-full">

                <div class="flex flex-col lg:gap-[10px] w-full">
                  <span class="italic">Correo electrónico</span>
                  <input type="email" class="w-full lg:h-[35px] h-[30px] p-[6px] rounded lg:p-[7px] text-[black]" required />
                </div>
    
                <div class="flex flex-col lg:gap-[10px] w-full">
                  <span class="italic">Contraseña</span>
                  <input type="password" class="w-full lg:h-[35px] h-[30px] p-[6px] rounded lg:p-[7px] text-[black]" required />
                </div>
    
              <button type="submit" class="bg-[white] text-[black] lg:w-[150px] lg:h-[40px] w-[120px] h-[50px] hover:bg-blue-900 hover:text-[white] hover:border-[white] hover:border-[1px] rounded" >Iniciar sesión</button>
            </form>
          </div>
        </div>
    )
}

export default Login