import React, { useState } from "react";
import perfil from "@imgs/perfil.png";

let imagenPerfil = perfil

const Cuenta = () => {
    const [imagen, setImagenPerfil] = useState(imagenPerfil);
    imagenPerfil = imagen;

    const [nombre, setNombre] = useState("Nombre");
    const [apellidos, setApellidos] = useState("Apellidos");
    const [usuario, setUsuario] = useState("Usuario");
    const [correo, setCorreo] = useState("usuario@dominio.com");
    
    const [dni, setDni] = useState("DNI");
    const [telefono, setTelefono] = useState("6792536490");
    const [direccion, setDireccion] = useState("Dirección");
    const [codigo_postal, setCodigo_postal] = useState("Código Postal");

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
        <div className="w-[100%] lg:bg-[black] sm:h-full lg:w-full flex flex-col lg:flex-row sm:items-center sm:bg-gray-700 sm:rounded-r-lg mb-[30px] xl:mt-[10px] xl:mb-[100px] rounded-lg">
            
            <div className="p-[30px]  lg:w-[15rem] lg:h-[25rem] w-full sm:w-[80%] sm:h-full flex flex-col items-center gap-[10px] h-full rounded-t-lg">


                <div className="relative w-[150px] h-[150px] lg:float-right">
                    <button onClick={() => document.getElementById('fileInput').click()} className="bg-[white] text-[#1AA9FF] p-2 mt-[75%] ml-[75%] rounded-full absolute">
                        <i className="fa-solid fa-user-pen"></i>
                    </button>
                    <img src={imagenPerfil} alt="imagen de perfil" className="w-full h-full p-[10px] border-[2px] rounded-full"/>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="fileInput"/>  
                </div>
                <div className="flex flex-col justify-between h-[7rem]">
                    <button className="bg-[white] w-[150px] h-[40px] hover:bg-[#1AA9FF] hover:text-[white] duration-500 hover:border-[white] hover:border-[1px] text-[black] rounded">Cambiar contraseña</button>
                    <button className="bg-[white] w-[150px] h-[40px] hover:bg-[red] duration-500 hover:text-[white] hover:border-[white] hover:border-[1px] text-[red] rounded">Borrar Cuenta</button>

                </div>
            </div>
            <form className="lg:py-[10vh] lg:px-[5vh] lg:bg-[black] bg-gray-800 w-full lg:w-[50%] flex flex-col items-center p-[15px] rounded-b-lg sm:rounded-none sm:rounded-r-lg sm:rounded-rb-none">

                <h1 className="text-[30px]">Información personal</h1>
                <div className="w-full flex flex-row items-center gap-[20px]">
                
                    <div className="w-[80%] flex flex-col gap-[20px] xl:flex-col">
                        <div className="w-full flex flex-col gap-[10px]">

                            <span className="italic">Nombre</span>

                            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>
                        </div>

                        <div className="w-full flex flex-col gap-[10px]">
                            <span className="italic">Apellidos</span>
                            <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>

                        </div>
                    </div>
                    <div className="w-[80%] flex flex-col gap-[20px] xl:flex-col">
                        <div className="w-full flex flex-col gap-[10px]">
                            <span className="italic">Usuario</span>
                            <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>
                        </div>

                        <div className="w-full flex flex-col gap-[10px]">
                            <span className="italic">Correo electrónico</span>
                            <input type="text" value={correo} onChange={(e) => setCorreo(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>
                        </div>
                    </div>
                    <div className="w-[80%] flex flex-col gap-[20px] xl:flex-col">
                        <div className="w-full flex flex-col gap-[10px]">
                            <span className="italic">DNI</span>
                            <input type="text" value={dni} onChange={(e) => setDni(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>
                        </div>

                        <div className="w-full flex flex-col gap-[10px]">
                            <span className="italic">Teléfono</span>
                            <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>

                        </div>
                    </div>
                    <div className="w-[80%] flex flex-col gap-[20px] xl:flex-col">
                        <div className="w-full flex flex-col gap-[10px]">
                            <span className="italic">Dirección</span>

                            <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>
                        </div>

                        <div className="w-full flex flex-col gap-[10px]">
                            <span className="italic">Código Postal</span>
                            <input type="text" value={codigo_postal} onChange={(e) => setCodigo_postal(e.target.value)} className="w-full h-[35px] rounded p-[7px] text-[black]" required/>

                        </div>
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