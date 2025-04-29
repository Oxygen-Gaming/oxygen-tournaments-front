import React from "react";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Banner from "@imgs/Unete_Al_OxyClub.jpg";
const Login = () => {
  
    return (
      
      <div className="bg-[#1AA9FF] text-[white] flex flex-col items-center font-roboto-condensed pt-[30px] lg:block lg:p-0">
        <Header />
        <MenuHamburguesaNormal />
        <div className="w-full flex flex-col items-center">
          <div className="w-[80%] lg:w-[60%] flex flex-col lg:flex-row-reverse items-stretch justify-center mt-[30px] mb-[30px] xl:mt-[50px] xl:mb-[50px]">
            <div className="bg-blue-500 w-full lg:w-1/2 flex items-center justify-center rounded-t-lg lg:rounded-r-lg lg:rounded-tl-none">
              <img className="w-full h-full object-cover rounded-t-lg lg:rounded-r-lg lg:rounded-tl-none" src={Banner} />
            </div>
            <div className="bg-[#313ee3] w-full lg:w-1/2 flex flex-col items-center justify-center p-[20px] rounded-b-lg lg:rounded-l-lg lg:rounded-br-none">
              <h1 className="text-[30px] font-semibold text-center">Iniciar Sesión</h1>
              <form className="w-[90%] max-w-[500px] flex flex-col items-center gap-[20px]">
                <div className="w-full flex flex-col gap-[20px]">
                  <div className="w-[90%] flex flex-col gap-[10px]">
                    <span className="italic">Correo electrónico</span>
                    <input placeholder="ejemplo@gmail.com" type="email" className="w-full h-[40px] p-[10px] text-[black] rounded" required />
                  </div>
                  <div className="w-[90%] flex flex-col gap-[10px]">
                    <span className="italic">Contraseña</span>
                    <input placeholder="Nunca la compartas" type="password" className="w-full h-[40px] p-[10px] text-[black] rounded" required />
                  </div>
                </div>
                <p className="w-[70%] text-center text-[20px]">¿No tienes cuenta? <a href="/register" className="underline text-blue-400">Crear Cuenta</a></p>
                <button type="submit" className="w-[70%] h-[50px] text-[20px] bg-[white] text-[black] hover:bg-blue-900 hover:text-[white] hover:border-[white] rounded">Iniciar Sesión</button>
              </form>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  };
  
  export default Login;