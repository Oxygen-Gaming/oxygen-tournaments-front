import React from "react";
import register from "@imgs/register.png"
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Header from "@components/Header";
import Footer from "@components/Footer";
const Login = () => {
  
    return (
      
      <div className="bg-[#1AA9FF] text-[white] font-roboto-condensed">
        <Header />
        <MenuHamburguesaNormal />
        <div className="flex flex-row items-center justify-center">
          
          
          <div className="lg:w-[40%] sm:w-[80%] flex flex-col justify-center items-center lg:gap-[20px] gap-[10px]  lg:h-[85vh] p-[30px] my-[30px]  bg-[#313ee3] rounded-l-lg">
            
            <h1 className="text-[50px] font-semibold">Iniciar Sesión</h1>
            
            <form className="flex flex-col items-center justify-center lg:gap-[30px] w-full gap-[20px]">
                <div className=" flex flex-col items-center justify-center lg:gap-[30px] w-full gap-[20px]">
                  
      
                  <div className="flex flex-col lg:gap-[10px] w-[45vh]">
                    <span className="italic">Correo electrónico</span>
                    <input placeholder="ejemplo@gmail.com" type="email" className="lg:w-full lg:h-[35px] h-[30px] sm:min-w-[100%] rounded lg:p-[7px] text-[black] p-[6px]" required />
                  </div>
      
                  <div className="flex flex-col lg:gap-[10px] w-[45vh]">
                    <span className="italic">Contraseña</span>
                    <input placeholder="Nunca la compartas" type="password" className="lg:w-full lg:h-[35px] h-[30px] sm:min-w-[100%] rounded lg:p-[7px] text-[black] p-[6px]" required />
                  </div>
                </div>

              <p className="text-[20px]">¿No tienes cuenta? <a href="/register" className="underline text-blue-400">Crear Cuenta</a></p>
    
              <button type="submit" className="bg-[white] text-[black] lg:w-[150px] lg:h-[40px] w-[120px] h-[50px] hover:bg-blue-900 hover:text-[white] hover:border-[white] hover:border-[1px] rounded" >Iniciar Sesión</button>

            </form>
          </div>

          <div className="bg-blue-500 lg:w-[40%] sm:w-[80%] flex flex-col justify-center items-center lg:gap-[20px] gap-[10px]  lg:h-[85vh] p-[30px] my-[30px] rounded-r-lg"><img className="w-[75%]" src={register} />      </div>  
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Login;