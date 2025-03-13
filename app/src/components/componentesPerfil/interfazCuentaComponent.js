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
        <div className="flex flex-col justify-center items-center gap-[20px] pb-[20px] lg:pl-[100px] lg:pr-[100px]">
            <h1 className="text-[30px]">Información personal</h1>
            <div className="flex justify-center lg:justify-center items-center w-[50vh]">
                <div className="relative w-[150px] h-[150px] lg:float-right">
                    <button onClick={() => document.getElementById('fileInput').click()} className="bg-[white] text-[#1AA9FF] p-2 mt-[75%] ml-[75%] rounded-full absolute">
                        <i className="fa-solid fa-user-pen"></i>
                    </button>
                    <img src={imagenPerfil} alt="imagen de perfil" className="w-full h-full p-[10px] border-[2px] rounded-full"/>
                    <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="fileInput"/>  
                </div>
            </div>
            <form className="w-[50%] flex flex-col gap-[20px] items-center">
                <div className="flex flex-col gap-[10px] w-full">
                    <span className="italic">Nombre y apellidos</span>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        className="w-full h-[35px] rounded p-[7px] text-[black]"
                        required
                    />
                </div>
                <div className="flex flex-col gap-[10px] w-full">
                    <span className="italic">Nombre de usuario</span>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        className="w-full h-[35px] rounded p-[7px] text-[black]"
                    />
                </div>
                <div className="flex flex-col gap-[10px] w-full">
                    <span className="italic">Teléfono</span>
                    <input
                        type="tel"
                        value={telefono}
                        onChange={(e) => setTelefono(e.target.value)}
                        className="w-full h-[35px] rounded p-[7px] text-[black]"
                    />
                </div>
                <div className="flex flex-col gap-[10px] w-full">
                    <span className="italic">Correo electrónico</span>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        className="w-full h-[35px] rounded p-[7px] text-[black]"
                        required
                    />
                </div>
            </form>
            <hr className="underline w-[50%]" />
            <div className="flex w-[50%] lg:flex-row flex-col justify-between items-center">
                <h1 className="text-[30px]">Contraseña</h1>
                <button className="bg-[white] w-[150px] h-[40px] hover:bg-[#1AA9FF] hover:border-[white] hover:border-[1px] text-[black] rounded">Cambiar contraseña</button>
            </div>
            <hr className="underline w-[50%]" />
            <div className="flex lg:flex-row flex-col w-[50%] gap-[10px] text-center justify-between lg:items-start lg:text-start items-center">
                <div>
                    <h1 className="text-[30px]">Borrar cuenta</h1>
                    <p className="text-[#545454]">Si eliminas la cuenta no podrás recuperarla</p>
                </div>
                <button className="bg-[white] w-[150px] h-[40px] hover:bg-[darkred] hover:text-[white] hover:border-[white] hover:border-[1px] text-[red] rounded">Borrar Cuenta</button>
            </div>
        </div>
    );
}

const getImagenPerfil = () => imagenPerfil;

export { getImagenPerfil };
export default Cuenta;