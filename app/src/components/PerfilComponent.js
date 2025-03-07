import React from "react";
import { useState } from "react";
import perfil from "../img/perfil.png"
import twitter from "../img/twitter.png"
import tiktok from "../img/tiktok.png"
import instagram from "../img/instagram.png"
import discord from "../img/discord.png"
import juego from "../img/juego.png"
import oxygen from "../img/Logo_OxygenGaming2.png"
const Perfil = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('perfil')
    const [imagenPerfil, setImagenPerfil] = useState(perfil);
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
    const renderContent = () => {
        switch(opcionSeleccionada) {
            case 'perfil':
                return (
                    <div class="flex flex-col gap-[30px] pl-[100px] pr-[100px] ">
                        <div class="flex w-full gap-[30px]">
                            <img src={imagenPerfil} alt="imagen de perfil" class="w-[150px] h-[150px] p-[10px] border-[2px] rounded-full"/>
                            <div class="text-[20px]">
                                <h1 class="text-[30px]">Nombre Apellido</h1>
                                <p>Puntos totales acumulados</p>
                                <div class="flex gap-[20px]">
                                    <i class="fa-solid fa-coins mt-[6px]"></i>
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-[20px]">
                            <h1 class="text-[30px]">Estadísticas</h1>
                            <div class="border-[1px] w-[100vh] h-[50px] text-[20px] flex justify-between items-center p-[20px] bg-[white] text-[black] rounded">
                                <p>Misiones completadas:</p>
                                <p>0 Misiones</p>
                            </div>
                        </div>
                    </div>
                );
            case 'cuenta':
                return (
                    <div class="flex flex-col gap-[20px] pb-[20px] pl-[100px] pr-[100px]">
                        <h1 class="text-[30px]">Información personal</h1>
                        <div class="flex justify-between items-center w-[50vh]">
                            <div class="relative w-[150px] h-[150px] float-right">
                                <button onClick={() => document.getElementById('fileInput').click()} className="bg-[white] text-[#1AA9FF] p-2 mt-[75%] ml-[75%] rounded-full absolute"><i class="fa-solid fa-user-pen"></i></button>
                                <img src={imagenPerfil} alt="imagen de perfil" class="w-full h-full p-[10px] border-[2px] rounded-full"/>
                                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="fileInput"/>  
                            </div>
                        </div>
                        <form class="w-[50%] flex flex-col gap-[20px] items-center">
                            <div class="flex flex-col gap-[10px] w-full">
                                <span class="italic">Nombre y apellidos</span>
                                <input type="text" value="Nombre Apellidos" class="w-full h-[35px] rounded p-[7px] text-[black]"  required />
                            </div>
                
                            <div class="flex flex-col gap-[10px] w-full">
                                <span class="italic">Nombre de usuario</span>
                                <input type="text" value="Usuario" class="w-full h-[35px] rounded p-[7px] text-[black]"/>
                            </div>
                
                            <div class="flex flex-col gap-[10px] w-full">
                                <span class="italic">Teléfono</span>
                                <input type="tel" value="6792536490" class="w-full h-[35px] rounded p-[7px] text-[black]"/>
                            </div>
                
                            <div class="flex flex-col gap-[10px] w-full">
                                <span class="italic">Correo electrónico</span>
                                <input type="email" value="usuario@dominio.com" class="w-full h-[35px] rounded p-[7px] text-[black]" required />
                            </div>

                            <button type="submit" class="bg-[white] w-[150px] h-[40px] hover:bg-[#1AA9FF] hover:border-[white] hover:border-[1px] text-[black] rounded">Actualizar</button>
                        </form>
                        <hr class="underline w-[50%]"></hr>
                        <div class="flex w-[50%] justify-between items-center">
                            <h1 class="text-[30px]">Contraseña</h1>
                            <button class="bg-[white] w-[150px] h-[40px] hover:bg-[#1AA9FF] hover:border-[white] hover:border-[1px] text-[black] rounded">Cambiar contraseña</button>
                        </div>
                        <hr class="underline w-[50%]"></hr>
                        <div class="flex w-[50%] justify-between items-center">
                            <div>
                                <h1 class="text-[30px]">Borrar cuenta</h1>
                                <p class="text-[#545454]">Si eliminas la cuenta no podrás recuperarla</p>
                            </div>
                            <button class="bg-[white] w-[150px] h-[40px] hover:bg-[darkred] hover:text-[white] hover:border-[white] hover:border-[1px] text-[red] rounded">Borrar Cuenta</button>
                        </div>
                    </div>
                );
            case 'conexiones':
                return (
                    <div class="flex w-full justify-between pl-[100px] pr-[100px]">
                        <div class="bg-[white] text-[black] w-[45vh] flex items-center justify-between p-[20px] rounded-[20px]">
                            <img src={twitter} alt="Logo de Twitter" class="bg-[black] rounded-[10px] p-[7px] w-[50px] h-[50px]" />
                            <div>
                                <h1 class="text-[25px]">X</h1>
                                <p class="text-[#545454]">No conectado</p>
                            </div>
                            <button class="bg-[#1AA9FF] h-[40px] w-[30%] rounded-full text-[white] hover:bg-[white] hover:text-[#1AA9FF] hover:border-[#1AA9FF] hover:border-[1px]">Conectar</button>
                        </div>
                        <div class="bg-[white] text-[black] w-[45vh] flex items-center justify-between p-[20px] rounded-[20px]">
                            <img src={discord} alt="Logo de Discord" class="rounded-[10px] p-[7px] w-[60px] h-[60px]" />
                            <div>
                                <h1 class="text-[25px]">Discord</h1>
                                <p class="text-[#545454]">No conectado</p>
                            </div>
                            <button class="bg-[#1AA9FF] h-[40px] w-[30%] rounded-full text-[white] hover:bg-[white] hover:text-[#1AA9FF] hover:border-[#1AA9FF] hover:border-[1px]">Conectar</button>
                        </div>
                        <div class="bg-[white] text-[black] w-[45vh] flex items-center justify-between p-[20px] rounded-[20px]">
                            <img src={instagram} alt="Logo de Instagram" class="rounded-[10px] p-[7px] w-[60px] h-[60px]" />
                            <div>
                                <h1 class="text-[25px]">Instagram</h1>
                                <p class="text-[#545454]">No conectado</p>
                            </div>
                            <button class="bg-[#1AA9FF] h-[40px] w-[30%] rounded-full text-[white] hover:bg-[white] hover:text-[#1AA9FF] hover:border-[#1AA9FF] hover:border-[1px]">Conectar</button>
                        </div>
                        <div class="bg-[white] text-[black] w-[45vh] flex justify-between items-center p-[20px] rounded-[20px]">
                            <img src={tiktok} alt="Logo de TikTok" class="bg-[black] rounded-[10px] p-[7px] w-[50px] h-[50px]" />
                            <div>
                                <h1 class="text-[25px]">TikTok</h1>
                                <p class="text-[#545454]">No conectado</p>
                            </div>
                            <button class="bg-[#1AA9FF] h-[40px] w-[30%] rounded-full text-[white] hover:bg-[white] hover:text-[#1AA9FF] hover:border-[#1AA9FF] hover:border-[1px]">Conectar</button>
                        </div>
                    </div>
                );
            case 'cuentas de juego' :
                return (
                    <div class="flex flex-col gap-[30px] pl-[100px] pr-[100px]">
                        <h1 class="text-[40px]">Tus cuentas de juegos</h1>
                        <div>
                            <table class="flex flex-col">
                                <th class="w-full flex justify-center items-center h-[50px] bg-[#2879a2] text-[20px]">
                                    <td class="w-full">Cuenta</td>
                                    <td class="w-full">Juego</td>
                                    <td class="w-full">Nickname</td>
                                    <td class="w-full">Región</td>
                                    <td class="w-full">Acciones</td>
                                </th>
                                <tr class="flex justify-center items-center text-center bg-[white] text-[black] border-[1px] text-[20px]">
                                    <td class="w-full flex justify-center items-center"><img src={juego} alt="Logo del juego" class="w-[70px] " /></td>
                                    <td class="w-full">EA FC25</td>
                                    <td class="w-full">Chusneo</td>
                                    <td class="w-full">Europa</td>
                                    <td class="w-full flex justify-evenly">
                                        <button class="bg-[lightseagreen] text-[white] w-[80px] rounded-full">Editar</button>
                                        <button class="bg-[red] text-[white] w-[80px] rounded-full">Eliminar</button>
                                    </td>
                                </tr>
                                <tr class="flex justify-center items-center text-center bg-[white] text-[black] border-[1px] text-[20px]">
                                    <td class="w-full flex justify-center items-center"><img src={juego} alt="Logo del juego" class="w-[70px] " /></td>
                                    <td class="w-full">EA FC25</td>
                                    <td class="w-full">Chusneo</td>
                                    <td class="w-full">Europa</td>
                                    <td class="w-full flex justify-evenly">
                                        <button class="bg-[lightseagreen] text-[white] w-[80px] rounded-full">Editar</button>
                                        <button class="bg-[red] text-[white] w-[80px] rounded-full">Eliminar</button>
                                    </td>
                                </tr>
                                <tr class="flex justify-center items-center text-center bg-[white] text-[black] border-[1px] text-[20px]">
                                    <td class="w-full flex justify-center items-center"><img src={juego} alt="Logo del juego" class="w-[70px] " /></td>
                                    <td class="w-full">EA FC25</td>
                                    <td class="w-full">Chusneo</td>
                                    <td class="w-full">Europa</td>
                                    <td class="w-full flex justify-evenly">
                                        <button class="bg-[lightseagreen] text-[white] w-[80px] rounded-full">Editar</button>
                                        <button class="bg-[red] text-[white] w-[80px] rounded-full">Eliminar</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                );
            case 'inventario' :
                return (
                    <div class="flex flex-col gap-[30px] pl-[100px] pr-[100px]">
                        <h1 class="text-[30px]">Recompensas Canjeadas</h1>
                        <div class=" w-full rounded-[10px] flex justify-between">
                            <div class="text-[black] text-[20px] flex flex-col justify-between items-center p-[15px] w-[22%] h-[30vh] bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-[15px]">
                                <img src={oxygen} alt="logo oxygen" class="h-[50%] w-full"/>
                                <div class="w-full h-full text-[white] flex flex-col justify-evenly">
                                    <h1 class="text-[20px]">Follow por parte de Oxygen</h1>
                                    <p class="text-[13px]">Puntos: 0</p> 
                                </div>
                            </div>
                            <div class="text-[black] text-[20px] flex flex-col justify-between items-center p-[15px] w-[22%] h-[30vh] bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-[15px]">
                                <img src={oxygen} alt="logo oxygen" class="h-[50%] w-full"/>
                                <div class="w-full h-full text-[white] flex flex-col justify-evenly">
                                    <h1 class="text-[20px]">Ticket a sorteo</h1>
                                    <p class="text-[13px]">Puntos: 0</p> 
                                </div>
                                
                            </div>
                            <div class="text-[black] text-[20px] flex flex-col justify-between items-center p-[15px] w-[22%] h-[30vh] bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-[15px]">
                                <img src={oxygen} alt="logo oxygen" class="h-[50%] w-full"/>
                                <div class="w-full h-full text-[white] flex flex-col justify-evenly">
                                    <h1 class="text-[20px]">Camiseta del club</h1>
                                    <p class="text-[13px]">Puntos: 0</p> 
                                </div>
                                
                            </div>
                            <div class="text-[black] text-[20px] flex flex-col justify-between items-center p-[15px] w-[22%] h-[30vh] bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-[15px]">
                                <img src={oxygen} alt="logo oxygen" class="h-[50%] w-full"/>
                                <div class="w-full h-full text-[white] flex flex-col justify-evenly">
                                    <h1 class="text-[20px]">Silla playseat puma</h1>
                                    <p class="text-[13px]">Puntos: 0</p> 
                                </div>
                                
                            </div>
                        </div>
                    </div>
                );
            case 'logros' :
                return (
                    <div class="flex justify-center pl-[100px] pr-[100px]">
                        
                        <div class="flex flex-col justify-center items-center gap-[20px] w-[50%]">
                            <h1 class="text-[30px]">Misiones completadas</h1>
                            <div class="w-full rounded-[10px] flex justify-evenly">
                                <div class="text-[rgb(0,0,0)] text-[20px] flex flex-col justify-between items-center p-[15px] w-[40%] h-[30vh] bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-[15px]">
                                    <img src={oxygen} alt="logo oxygen" class="h-[50%] w-full"/>
                                    <div class="w-full h-full text-[white] flex flex-col justify-evenly">
                                        <h1 class="text-[20px]">Completa el quiz semanal</h1>
                                        <p class="text-[13px]">Puntos: 0</p> 
                                    </div>
                                </div>
                                <div class="text-[black] text-[20px] flex flex-col justify-between items-center p-[15px] w-[40%] h-[30vh] bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-[15px]">
                                    <img src={oxygen} alt="logo oxygen" class="h-[50%] w-full"/>
                                    <div class="w-full h-full text-[white] flex flex-col justify-evenly">
                                        <h1 class="text-[20px]">Clip de la cagada de la semana</h1>
                                        <p class="text-[13px]">Puntos: 0</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="flex flex-col justify-center items-center gap-[20px] w-[50%]">
                            <h1 class="text-[30px]">Recompensas solicitadas</h1>
                            <div class="w-full rounded-[10px] flex justify-evenly">
                                <div class="text-[rgb(0,0,0)] text-[20px] flex flex-col justify-between items-center p-[15px] w-[40%] h-[30vh] bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-[15px]">
                                    <img src={oxygen} alt="logo oxygen" class="h-[50%] w-full"/>
                                    <div class="w-full h-full text-[white] flex flex-col justify-evenly">
                                        <h1 class="text-[20px]">10€ Google Play</h1>
                                        <p class="text-[13px]">Puntos: 0</p> 
                                    </div>
                                </div>
                                <div class="text-[black] text-[20px] flex flex-col justify-between items-center p-[15px] w-[40%] h-[30vh] bg-gradient-to-t from-[#18538a] to-[#1e90ff] rounded-[15px]">
                                    <img src={oxygen} alt="logo oxygen" class="h-[50%] w-full"/>
                                    <div class="w-full h-full text-[white] flex flex-col justify-evenly">
                                        <h1 class="text-[20px]">10€ PlayStation</h1>
                                        <p class="text-[13px]">Puntos: 0</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                );
            case 'pedidos' :
                return (
                    <div class="p-[10px] pl-[100px] pr-[100px]">
                        <h1 class="text-[40px]">Tus pedidos de la tienda</h1>
                        <table class="w-full rounded">
                            <th class="flex w-full text-[20px] justify-center items-center text-center bg-[#39cdeb] h-[50px]">
                                <td class="p-[5px] w-full h-full">Código del producto</td>
                                <td class="p-[5px] w-full h-full">Producto</td>
                                <td class="p-[5px] w-full h-full">Precio</td>
                                <td class="p-[5px] w-full h-full">Fecha del pedido</td>
                                <td class="p-[5px] w-full h-full">Estado del pedido</td>
                            </th>
                            <tr class="flex w-full text-[20px] border-[1px] items-center text-center bg-[#FFFFFF] text-[black] h-[50px]">
                                <td class="p-[5px] w-full h-full">123456</td>
                                <td class="p-[5px] w-full h-full">Camiseta Oxygen Gaming</td>
                                <td class="p-[5px] w-full h-full">10€</td>
                                <td class="p-[5px] w-full h-full">06-03-2025</td>
                                <td class="p-[5px] w-full h-full">En proceso</td>
                            </tr>
                            <tr class="flex w-full text-[20px] border-[1px] items-center text-center bg-[#FFFFFF] text-[black] h-[50px]">
                                <td class="p-[5px] w-full h-full">123456</td>
                                <td class="p-[5px] w-full h-full">Camiseta Oxygen Gaming</td>
                                <td class="p-[5px] w-full h-full">10€</td>
                                <td class="p-[5px] w-full h-full">06-03-2025</td>
                                <td class="p-[5px] w-full h-full">En proceso</td>
                            </tr>
                            <tr class="flex w-full text-[20px] border-[1px] items-center text-center bg-[#FFFFFF] text-[black] h-[50px]">
                                <td class="p-[5px] w-full h-full">123456</td>
                                <td class="p-[5px] w-full h-full">Camiseta Oxygen Gaming</td>
                                <td class="p-[5px] w-full h-full">10€</td>
                                <td class="p-[5px] w-full h-full">06-03-2025</td>
                                <td class="p-[5px] w-full h-full">En proceso</td>
                            </tr>
                            <tr class="flex w-full text-[20px] border-[1px] items-center text-center bg-[#FFFFFF] text-[black] h-[50px]">
                                <td class="p-[5px] w-full h-full">123456</td>
                                <td class="p-[5px] w-full h-full">Camiseta Oxygen Gaming</td>
                                <td class="p-[5px] w-full h-full">10€</td>
                                <td class="p-[5px] w-full h-full">06-03-2025</td>
                                <td class="p-[5px] w-full h-full">En proceso</td>
                            </tr>
                            <tr class="flex w-full text-[20px] border-[1px] items-center text-center bg-[#FFFFFF] text-[black] h-[50px]">
                                <td class="p-[5px] w-full h-full">123456</td>
                                <td class="p-[5px] w-full h-full">Camiseta Oxygen Gaming</td>
                                <td class="p-[5px] w-full h-full">10€</td>
                                <td class="p-[5px] w-full h-full">06-03-2025</td>
                                <td class="p-[5px] w-full h-full">En proceso</td>
                            </tr>
                            <tr class="flex w-full text-[20px] border-[1px] items-center text-center bg-[#FFFFFF] text-[black] h-[50px]">
                                <td class="p-[5px] w-full h-full">123456</td>
                                <td class="p-[5px] w-full h-full">Camiseta Oxygen Gaming</td>
                                <td class="p-[5px] w-full h-full">10€</td>
                                <td class="p-[5px] w-full h-full">06-03-2025</td>
                                <td class="p-[5px] w-full h-full">En proceso</td>
                            </tr>
                            <tr class="flex w-full text-[20px] border-[1px] items-center text-center bg-[#FFFFFF] text-[black] h-[50px]">
                                <td class="p-[5px] w-full h-full">123456</td>
                                <td class="p-[5px] w-full h-full">Camiseta Oxygen Gaming</td>
                                <td class="p-[5px] w-full h-full">10€</td>
                                <td class="p-[5px] w-full h-full">06-03-2025</td>
                                <td class="p-[5px] w-full h-full">En proceso</td>
                            </tr>
                        </table>
                    </div>
                );
            default:
                return 'perfil';
        }
    }
    const getButtonClass = (opcion) => {
        return opcionSeleccionada === opcion ? "text-[black]" : "hover:text-[black]";
    };
    return(
        <div class="bg-[#1AA9FF] min-h-[100vh] text-[white] flex flex-col font-roboto-condensed gap-[35px]">
            <header className="flex justify-between items-center w-full px-4 py-4 md:px-6 bg-[#18538a]">
                <a href="/" className="w-[70px] h-[70px] mr-8">
                    <img src={oxygen} alt="OxygenGaming Logo" className="w-full h-full" />
                </a>
                    <nav className="flex items-center gap-2">
                        <a href="/" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 bg-blue-600">Inicio</a>
                        <a href="/competiciones" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Competiciones</a>
                        <a href="/reglamentos" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
                        <a href="/rewards" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
                        <a href="/rewards" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>
                    </nav>
                <div className="flex items-center gap-2 ml-auto">
                    <button class="bg-blue-600 w-[150px] h-[40px] hover:bg-[#18538a] hover:border-[white] hover:border-[1px] text-[white] rounded"><a href="/">Cerrar Sesion</a></button>
                </div>
            </header>
            <div class="flex items-center text-center gap-[30px] pl-[100px] font-bold">
                <p class="text-[30px]">Tu Perfil</p>
            </div>
            <div class="pl-[100px]">
                <div class="flex text-[20px] gap-[30px] w-[100%] font-bold">
                    <button onClick={() => setOpcionSeleccionada('perfil')} class="hover:text-[black]" className={getButtonClass('perfil')}>Perfil</button>
                    <button onClick={() => setOpcionSeleccionada('inventario')} class="hover:text-[black]" className={getButtonClass('inventario')}>Inventario</button>
                    <button onClick={() => setOpcionSeleccionada('logros')} class="hover:text-[black]" className={getButtonClass('logros')}>Logros</button>
                    <button onClick={() => setOpcionSeleccionada('pedidos')} class="hover:text-[black] flex" className={getButtonClass('pedidos')}>Pedidos</button>
                    <button onClick={() => setOpcionSeleccionada('cuentas de juego')} class="hover:text-[black]" className={getButtonClass('cuentas de juego')}>Cuentas de juego</button>
                    <button onClick={() => setOpcionSeleccionada('conexiones')} class="hover:text-[black]" className={getButtonClass('conexiones')}>Conexiones</button>
                    <button onClick={() => setOpcionSeleccionada('cuenta')} class="hover:text-[black] flex" className={getButtonClass('cuenta')}>Editar Perfil</button>
                    
                </div>
                <hr class="underline w-full"></hr>
            </div>           
            {renderContent()}
            <footer className="w-full bg-neutral-900">
        <div id="contenido_footer" className="flex justify-between items-start gap-4 p-10 max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">OXYGENGAMING</span>
            <div className="flex flex-col gap-4">
              <a href="https://oxygengaming.es/sobre-nosotros/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">SOBRE NOSOTROS</a>
              <a href="https://oxygengaming.es/patrocinadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">PATROCINADORES</a>
              <a href="https://oxygengaming.es/noticias/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">NOTICIAS</a>
              <a href="https://oxygengaming.es/tienda/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">TIENDA</a>
              <a href="https://oxygengaming.es/oxy-club/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">OXYCLUB</a>
              <a href="https://oxygengaming.es/creadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">CREADORES</a>
              <a href="https://oxygengaming.es/contacto/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">CONTACTO</a>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">EQUIPOS</span>
            <div className="flex flex-col gap-4">
              <a href="https://oxygengaming.es/equipos/#leagueoflegends" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">LEAGUE OF LEGENDS</a>
              <a href="https://oxygengaming.es/equipos/#valorant" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">VALORANT</a>
              <a href="https://oxygengaming.es/creadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">CREADORES</a>
            </div>
          </div>

          <div className="flex flex-col gap-2 flex-1 min-w-[200px]">
            <span className="text-cyan-400 font-bold text-[22px] mb-2">Políticas</span>
            <div className="flex flex-col gap-4">
              <a href="https://oxygengaming.es/equipos/#leagueoflegends" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">AVISO LEGAL</a>
              <a href="https://oxygengaming.es/equipos/#valorant" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">PRIVACIDAD</a>
              <a href="https://oxygengaming.es/creadores/" className="no-underline text-gray-300 font-bold transition-colors hover:text-cyan-400">COOKIES</a>
            </div>
          </div>

          <div id="redes_sociales" className="flex flex-col items-center text-center flex-1 min-w-[250px]">
            <a href="https://oxygengaming.es/">
              <img id="logo_footer" src={oxygen} alt="Oxygen Gaming Logo" className="w-[80%] max-w-[200px] mb-4" />
            </a>
            <div className="flex gap-4 mt-2">
              <a href="https://twitter.com/GamingOxygen" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all">
                <img src={twitter} alt="Twitter" className="w-full h-full rounded-full" />
              </a>
              <a href="https://instagram.com/GamingOxygen" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all">
                <img src={instagram} alt="Instagram" className="w-full h-full rounded-full" />
              </a>
              <a href="https://www.tiktok.com/@oxg_esports?lang=es" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all">
                <img src={tiktok} alt="TikTok" className="w-full h-full rounded-full" />
              </a>
              <a href="https://discord.gg/Udsstfpeze" target="_blank" rel="noreferrer" className="flex justify-center items-center w-10 h-10 rounded-full border-[cyan] border-[1px] p-[10px] no-underline transition-all">
                <img src={discord} alt="Discord" className="w-full h-full rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </footer>
        </div>
    )
}
export default Perfil 