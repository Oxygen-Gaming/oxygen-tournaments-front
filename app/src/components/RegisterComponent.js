import React from "react";
import register from "@imgs/register.png"
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Header from "@components/Header";
import Footer from "@components/Footer";
const Register = () => {
  
    return (
      
      <div className="bg-[#1AA9FF] text-[white] flex flex-col items-center font-roboto-condensed pt-[30px] lg:block lg:p-0">
        <Header />
        <MenuHamburguesaNormal />
        <div className="w-full flex flex-col items-center">
          <div className="w-[90%] sm:h-full lg:w-[60%] flex flex-col sm:flex-row sm:items-center sm:bg-blue-500 sm:rounded-r-lg items-center mt-[30px] mb-[30px] xl:mt-[100px] xl:mb-[100px] rounded-lg">
            <div className="bg-blue-500 p-[30px] w-full sm:w-[80%] sm:h-full flex flex-col items-center h-full rounded-t-lg">
              <img className="w-[80%]" src={register} />      
            </div> 
            <div className="bg-[#313ee3] w-full flex flex-col items-center p-[15px] rounded-b-lg sm:rounded-none sm:rounded-r-lg sm:rounded-rb-none">
              
              <h1 className="text-[40px] font-semibold">Crear cuenta</h1>
              
              <form className="w-full flex flex-col items-center gap-[20px]">
                <div className="w-full h-full flex flex-col xl:flex-row">
                  <div className="w-full flex flex-col items-center gap-[20px]">
                    
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
                  <div className="w-full flex flex-col items-center gap-[20px]">
                    
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
      
                <button type="submit" className="w-[70%] h-[50px] text-[20px] bg-[white] text-[black] hover:bg-blue-900 hover:text-[white] hover:border-[white] rounded" >Crear Cuenta</button>

              </form>
            </div>

              
          </div>
        </div>
        
        <Footer />
      </div>
    );
  };
  
  export default Register;