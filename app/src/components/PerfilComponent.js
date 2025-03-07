import React from "react";
import { useState } from "react";
import perfil from "../img/perfil.png"
import twitter from "../img/twitter.png"
import tiktok from "../img/tiktok.png"
import instagram from "../img/instagram.png"
import discord from "../img/discord.png"
import juego from "../img/juego.png"
import oxygen from "../img/Oxygen_Gaming.png"
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
                    <div class="flex flex-col gap-[30px]">
                        <div class="flex w-full gap-[30px]">
                            <img src={imagenPerfil} alt="imagen de perfil" class="w-[150px] h-[150px] p-[10px] border-[2px] rounded-full"/>
                            <div class="text-[20px]">
                                <h1>Nombre Apellido</h1>
                                <p>Oro total acumulado</p>
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
                    <div class="flex flex-col gap-[20px] pb-[20px]">
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
                    <div class="flex w-full justify-between">
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
                    <div class="flex flex-col gap-[30px]">
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
                    <div class="flex flex-col gap-[30px]">
                        <h1 class="text-[30px]">Recompensas Canjeadas</h1>
                        <div class=" w-full rounded-[10px] flex justify-between">
                            <div class="text-[black] text-[20px] p-[10px] w-[22%] bg-[#219ec6]">
                                <img src={oxygen} alt="logo oxygen" />
                                <h1>Follow por parte de Oxygen</h1>
                                <p>Puntos: 0</p>
                            </div>
                            <div class="text-[black] text-[20px] p-[10px] w-[22%] bg-[white]">
                                <img src={oxygen} alt="logo oxygen" />
                                <h1>Ticket a sorteo</h1>
                                <p>Puntos: 0</p>
                            </div>
                            <div class="text-[black] text-[20px] p-[10px] w-[22%] bg-[white]">
                                <img src={oxygen} alt="logo oxygen" />
                                <h1>Camiseta del club</h1>
                                <p>Puntos: 0</p>
                            </div>
                            <div class="text-[black] text-[20px] p-[10px] w-[22%] bg-[white]">
                                <img src={oxygen} alt="logo oxygen" />
                                <h1>Silla playseat puma</h1>
                                <p>Puntos: 0</p>
                            </div>
                        </div>
                    </div>
                );
            case 'logros' :
                return (
                    <div class="flex justify-evenly">
                        <div class="w-full flex flex-col gap-[30px] justify-center items-center">
                            <h1 class="text-[30px]">Misiones completadas</h1>
                            <div class="bg-[white] w-[90%] rounded-[10px]">
                                <p class="text-[black] text-[30px] p-[10px]">Siguenos en X <i class="fa-solid fa-check text-[green]"></i></p>
                                <p class="border-[1px] text-[black] text-[30px] p-[10px]">Completa el quiz semanal <i class="fa-solid fa-check text-[green]"></i></p>
                                <p class="border-[1px] text-[black] text-[30px] p-[10px]">Meme del mes <i class="fa-solid fa-check text-[green]"></i></p>
                                <p class="text-[black] text-[30px] p-[10px]">Clip de la cagada de la semana <i class="fa-solid fa-check text-[green]"></i></p>
                            </div>
                        </div>
                        <div class="w-full flex flex-col gap-[30px] justify-center items-center">
                            <h1 class="text-[30px]">Recompensas solicitadas</h1>
                            <div class="bg-[white] w-[90%] rounded-[10px]">
                                <p class="text-[black] text-[30px] p-[10px]">Follow por parte de Oxygen<i class="fa-solid fa-check text-[green]"></i></p>
                                <p class="border-[1px] text-[black] text-[30px] p-[10px]">Ticket a sorteo<i class="fa-solid fa-check text-[green]"></i></p>
                                <p class="border-[1px] text-[black] text-[30px] p-[10px]">Camiseta del club<i class="fa-solid fa-check text-[green]"></i></p>
                                <p class="text-[black] text-[30px] p-[10px]">Silla playseat puma <i class="fa-solid fa-check text-[green]"></i></p>
                            </div>
                        </div>
                    </div>
                );
            case 'pedidos' :
                return (
                    <div class="p-[10px]">
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

            case 'tickets' :
                return (
                    <div>
                        <h1>Tickets</h1>
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
        <div class="bg-[#1AA9FF] pt-[50px] pl-[100px] pr-[100px] min-h-[100vh] text-[white] flex flex-col font-roboto-condensed gap-[35px]">
            <div class="flex items-center text-center gap-[30px] font-bold">
                <p class="text-[30px]">Tu Perfil</p>
            </div>
            <div>
                <div class="flex text-[20px] gap-[30px] w-[100%] font-bold">
                    <button onClick={() => setOpcionSeleccionada('perfil')} class="hover:text-[black]" className={getButtonClass('perfil')}>Perfil</button>
                    <button onClick={() => setOpcionSeleccionada('inventario')} class="hover:text-[black]" className={getButtonClass('inventario')}>Inventario</button>
                    <button onClick={() => setOpcionSeleccionada('logros')} class="hover:text-[black]" className={getButtonClass('logros')}>Logros</button>
                    <button onClick={() => setOpcionSeleccionada('pedidos')} class="hover:text-[black] flex" className={getButtonClass('pedidos')}>Pedidos</button>
                    <button onClick={() => setOpcionSeleccionada('tickets')} class="hover:text-[black] flex" className={getButtonClass('tickets')}>Tickets</button>
                    <button onClick={() => setOpcionSeleccionada('cuentas de juego')} class="hover:text-[black]" className={getButtonClass('cuentas de juego')}>Cuentas de juego</button>
                    <button onClick={() => setOpcionSeleccionada('conexiones')} class="hover:text-[black]" className={getButtonClass('conexiones')}>Conexiones</button>
                    <button onClick={() => setOpcionSeleccionada('cuenta')} class="hover:text-[black] flex" className={getButtonClass('cuenta')}>Editar Perfil</button>
                    
                </div>
                <hr class="underline w-full"></hr>
            </div>
            
            
            {renderContent()}
        </div>
    )
}

export default Perfil 