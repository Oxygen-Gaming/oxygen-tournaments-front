import React from "react";
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Banner from "@imgs/Unete_Al_OxyClub.jpg";
const Register = () => {
  
    return (
      
      <div className="bg-[#1c1c1c] text-[white] flex flex-col items-center font-roboto-condensed pt-[30px] lg:block lg:p-0">
        <Header />
        <MenuHamburguesaNormal />
        <div className="w-full flex flex-col items-center">
          <div className="w-[80%] lg:w-[60%] flex flex-col lg:flex-row items-stretch justify-center mt-[30px] mb-[30px] xl:mt-[50px] xl:mb-[50px]">
            <div className=" w-full lg:w-1/2 flex items-center justify-center rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none">
              <img className="w-full h-full object-cover rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none" src={Banner} />      
            </div> 
            <div className="bg-gray-800 w-full lg:w-2/3 flex flex-col items-center justify-center p-[20px] rounded-b-lg lg:rounded-r-lg lg:rounded-bl-none">
              
              <h1 className="text-[50px] font-semibold text-center">Crear cuenta</h1>
              
              <form className="w-[90%] max-w-[500px] flex flex-col items-center gap-[20px]">
                <div className="w-full flex flex-col xl:flex-row gap-[20px]">
                  <div className="w-full flex flex-col gap-[20px]">
                    
                    <div className="w-[90%] flex flex-col gap-[10px]">
                      <span className="italic">Nombre y apellidos</span>
                      <input placeholder="Nombre Apellidos" type="text" className="w-full h-[40px] p-[10px] text-[black] rounded" required />
                    </div>
        
                    <div className="w-[90%] flex flex-col gap-[10px]">
                      <span className="italic">Fecha de nacimiento</span>
                      <input type="date" className="w-full h-[40px] p-[10px] text-[black] rounded" required />
                    </div>

                    <div className="w-[90%] flex flex-col gap-[10px]">
                      <span className="italic">Correo electrónico</span>
                      <input placeholder="ejemplo@gmail.com" type="email" className="w-full h-[40px] p-[10px] text-[black] rounded" required />
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-[20px]">
                    
                    <div className="w-[90%] flex flex-col gap-[10px]">
                      <span className="italic">Nombre de usuario</span>
                      <input placeholder="Username" type="text" className="w-full h-[40px] p-[10px] text-[black] rounded" required />
                    </div>
        
                    <div className="w-[90%] flex flex-col gap-[10px]">
                      <span className="italic">Teléfono</span>
                      <input placeholder="123456789" type="tel" className="w-full h-[40px] p-[10px] text-[black] rounded" required />
                    </div>

                    <div className="w-[90%] flex flex-col gap-[10px]">
                      <span className="italic">Contraseña</span>
                      <input placeholder="Nunca la compartas" type="password" className="w-full h-[40px] p-[10px] text-[black] rounded" required />
                    </div>
                  </div>
                </div>
                  

                <p className="w-[70%] text-center text-[20px]">¿Ya tienes cuenta? <a href="/login" className="underline text-blue-400">Iniciar Sesión</a></p>
      
                <button type="submit" className="w-[70%] h-[50px] text-[20px] bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white hover:bg-blue-900 hover:text-[white] hover:border-[white] rounded" >Crear Cuenta</button>

              </form>
            </div>

              
          </div>
        </div>
        
        <Footer />
      </div>
    );
  };
  
  export default Register;