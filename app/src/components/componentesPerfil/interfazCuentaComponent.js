import React, { useState } from "react";
import perfil from "@imgs/perfil.png";

let imagenPerfil = perfil

const Cuenta = () => {
    const [imagen, setImagenPerfil] = useState(imagenPerfil);
    imagenPerfil = imagen;

    const [nombre, setNombre] = useState("Nombre Apellidos");
    const [usuario, setUsuario] = useState("Usuario");
    const [telefono, setTelefono] = useState("6792536490");
    const [correo, setCorreo] = useState("usuario@dominio.com");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagenPerfil(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="w-[100%]  sm:h-full lg:w-[50%] flex justify-center items-center flex-col lg:flex-row sm:items-center sm:bg-gray-700 sm:rounded-r-lg mb-[30px] xl:mt-[100px] xl:mb-[100px] rounded-lg">
            
            <div className="  p-[30px] lg:w-[30%] w-full sm:w-[80%] sm:h-full flex flex-col items-center h-full rounded-t-lg">
                <div className="relative w-[150px] h-[150px] lg:float-right">
                    <button onClick={() => document.getElementById('fileInput').click()} className="bg-[white] text-[#1AA9FF] p-2 mt-[75%] ml-[75%] rounded-full absolute">
                        <i className="fa-solid fa-user-pen"></i>
                    </button>
                    <img src={imagenPerfil} alt="imagen de perfil" className="w-full h-full p-[10px] border-[2px] rounded-full"/>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="fileInput"/>  
                </div>
            </div>
            <form className="lg:py-[10vh] lg:px-[5vh] bg-gray-800 w-full flex flex-col items-center p-[15px] rounded-b-lg sm:rounded-none sm:rounded-r-lg sm:rounded-rb-none">
                <h1 className="text-[30px]">Información personal</h1>
                <div className="w-full flex flex-col items-center gap-[20px]">
                
                    <div className="w-[80%] flex flex-col gap-[20px] xl:flex-row">
                        <div className="w-full flex flex-col gap-[20px]">
                            <div className="w-full flex flex-col gap-[10px]">
                                <span className="italic">Nombre y apellidos</span>
                                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>
                            </div>

                            <div className="w-full flex flex-col gap-[10px]">
                                <span className="italic">Nombre de Usuario</span>
                                <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>
                            </div>
                        </div>

                        <div className="w-full flex flex-col gap-[20px]">
                            <div className="w-full flex flex-col gap-[10px]">
                                <span className="italic">Teléfono</span>
                                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>
                            </div>

                            <div className="w-full flex flex-col gap-[10px]">
                                <span className="italic">Correo Electrónico</span>
                                <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>
                            </div>
                        </div>
                    </div>

                    

                    
                    
                    <hr className="underline w-[50%] xl:w-[80%]" />
                    <div className="flex w-[50%] xl:w-[80%] lg:flex-row flex-col justify-between items-center">
                        <h1 className="text-[30px]">Contraseña</h1>
                        <button className="bg-[white] w-[150px] h-[40px] hover:bg-[#1AA9FF] hover:text-[white] duration-500 hover:border-[white] hover:border-[1px] text-[black] rounded">Cambiar contraseña</button>
                    </div>
                    <hr className="underline w-[50%] xl:w-[80%]" />
                    <div className="flex lg:flex-row flex-col xl:w-[80%] w-[50%] gap-[10px] text-center justify-between lg:items-start lg:text-start items-center">
                        <div>
                            <h1 className="text-[30px]">Borrar cuenta</h1>
                            <p className="text-red-500">Si eliminas la cuenta no podrás recuperarla</p>
                        </div>
                        <button className="bg-[white] w-[150px] h-[40px] hover:bg-[red] duration-500 hover:text-[white] hover:border-[white] hover:border-[1px] text-[red] rounded">Borrar Cuenta</button>
                    </div>
                    
                </div>
            </form>
            
        </div>
    );
}

const getImagenPerfil = () => imagenPerfil;

export { getImagenPerfil };
export default Cuenta;


<div className="w-full flex flex-col items-center">
    <div className="w-[90%] sm:h-full lg:w-[60%] flex flex-col-reverse sm:flex-row sm:items-center sm:bg-blue-500 sm:rounded-r-lg items-center mt-[30px] mb-[30px] xl:mt-[100px] xl:mb-[100px] rounded-lg">
        <div className="bg-[#313ee3] w-full flex flex-col items-center p-[15px] rounded-b-lg sm:rounded-none sm:rounded-l-lg sm:rounded-rb-none">
            
            <h1 className="text-[40px] font-semibold">Iniciar Sesión</h1>
            
            
        </div>

        <div className="bg-blue-500 p-[30px] w-full sm:w-[80%] sm:h-full flex flex-col items-center h-full rounded-t-lg">
                  
        </div>   
    </div>
</div>