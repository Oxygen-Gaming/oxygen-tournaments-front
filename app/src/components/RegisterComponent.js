import React from "react";
import register from "@imgs/register.png"
import MenuHamburguesaNormal from "@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent";
import Header from "@components/Header";
import Footer from "@components/Footer";
const Register = () => {
  
    return (
      
      <div className="bg-blue-900 text-[white] font-roboto-condensed">
        <Header />
        <MenuHamburguesaNormal />
        <div className="flex flex-row items-center justify-center">
          <div className="bg-blue-500 lg:w-[40%] sm:w-[80%] flex flex-col justify-center items-center lg:gap-[20px] gap-[10px]  lg:h-[85vh] p-[30px] my-[30px] rounded-l-lg"><img className="w-[75%]" src={register} />      </div>  
          
          <div className="lg:w-[40%] sm:w-[80%] flex flex-col justify-center items-center lg:gap-[20px] gap-[10px]  lg:h-[85vh] p-[30px] my-[30px]  bg-[#313ee3] rounded-r-lg">
            
            <h1 className="text-[50px] font-semibold">Crear cuenta</h1>
            
            <form className="flex flex-col items-center justify-center lg:gap-[30px] w-full gap-[20px]">
                <div className="lg:grid lg:grid-cols-2 flex flex-col items-center justify-center lg:gap-[30px] w-full gap-[20px]">
                  <div className="flex flex-col lg:gap-[10px] w-full">
                    <span className="italic">Nombre y apellidos</span>
                    <input placeholder="Nombre Apellidos" type="text" className="lg:w-full lg:h-[35px] sm:min-w-[100%] h-[30px] rounded lg:p-[7px] text-[black] p-[6px]"  required />
                  </div>
      
                  <div className="flex flex-col lg:gap-[10px] w-full">
                    <span className="italic">Nombre de usuario</span>
                    <input placeholder="Username" type="text" className="lg:w-full lg:h-[35px] sm:min-w-[100%] h-[30px] rounded lg:p-[7px] text-[black] p-[6px]"/>
                  </div>
      
                  <div className="flex flex-col lg:gap-[10px] w-full">
                    <span className="italic">Fecha de nacimiento</span>
                    <input type="date" className="lg:w-full min-w-[33vh] sm:min-w-[97%] lg:h-[35px] h-[30px] rounded lg:p-[7px] text-[black] p-[6px]" required />
                  </div>
      
                  <div className="flex flex-col gap-[10px] w-full">
                    <span className="italic">Teléfono</span>
                    <input placeholder="999999999" type="tel" className="lg:w-full lg:h-[35px] h-[30px] sm:min-w-[100%] rounded lg:p-[7px] text-[black] p-[6px]"/>
                  </div>
      
                  <div className="flex flex-col lg:gap-[10px] w-full">
                    <span className="italic">Correo electrónico</span>
                    <input placeholder="ejemplo@gmail.com" type="email" className="lg:w-full lg:h-[35px] h-[30px] sm:min-w-[100%] rounded lg:p-[7px] text-[black] p-[6px]" required />
                  </div>
      
                  <div className="flex flex-col lg:gap-[10px] w-full">
                    <span className="italic">Contraseña</span>
                    <input placeholder="Nunca la compartas" type="password" className="lg:w-full lg:h-[35px] h-[30px] sm:min-w-[100%] rounded lg:p-[7px] text-[black] p-[6px]" required />
                  </div>
                </div>

              <p className="text-[20px]">¿Ya tienes cuenta? <a href="/login" className="underline text-blue-400">Inicia sesión</a></p>
    
              <button type="submit" className="bg-[white] text-[black] lg:w-[150px] lg:h-[40px] w-[120px] h-[50px] hover:bg-blue-900 hover:text-[white] hover:border-[white] hover:border-[1px] rounded" >Registrarse</button>

            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Register;