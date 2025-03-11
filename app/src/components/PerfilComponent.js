import React from "react";
import { useState, useEffect } from "react";
import perfil from "../img/perfil.png"
import twitter from "../img/twitter.png"
import tiktok from "../img/tiktok.png"
import instagram from "../img/instagram.png"
import discord from "../img/discord.png"
import oxygen from "../img/Logo_OxygenGaming2.png"
const Perfil = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('perfil')
    const [imagenPerfil, setImagenPerfil] = useState(perfil);
    const [isOpen, setIsOpen] = useState(false);
    const [pedidos, setPedidos] = useState([]);
    const [cuentas, setCuentas] = useState([]);
    const [recompensas_solicitadas, setSolicitadas] = useState([]);
    const [recompensas_canjeadas, setCanjeadas] = useState([]);
    const [misiones_completadas, setCompletadas] = useState([]);
    useEffect(() => {
        setPedidos([{codigo:'1', producto:'Camiseta Oxygen Gaming', precio:10, fecha: '06-03-2025', estado: 'Enviado', imagen:oxygen},{codigo:'2', producto:'Nombre del Producto', precio: 20, fecha: '09-03-2025', estado: 'enviado', imagen: oxygen},{codigo:'2', producto:'Nombre del Producto', precio: 20, fecha: '09-03-2025', estado: 'enviado', imagen: oxygen}, {codigo:'2', producto:'Nombre del Producto', precio: 20, fecha: '09-03-2025', estado: 'enviado', imagen: oxygen}])
      }, []);

    useEffect(() => {
        setCuentas([{imagen: oxygen, juego: 'EA FC25', nickname: 'Chusneo', region: 'Europa'}, {imagen: oxygen, juego: 'EA FC25', nickname: 'Chusneo', region: 'Europa'}])
    })
    useEffect(() => {
        setCanjeadas([{imagen: oxygen, juego: 'Camiseta del club', puntos:50}, {imagen: oxygen, juego: 'Silla Playseat Puma', puntos:100}])
    })

    useEffect(() => {
        setSolicitadas([{imagen: oxygen, juego: 'Camiseta del club', puntos:50}, {imagen: oxygen, juego: 'Silla Playseat Puma', puntos:100}])
    })
    
    useEffect(() => {
        setCompletadas([{imagen: oxygen, juego: 'Clip de la cagada de la semana', puntos:20}, {imagen: oxygen, juego: 'Completa el quiz semanal', puntos:100}])
    })



    const handleLinkClick = () => {
        setIsOpen(false);
    };
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
                    <div className="flex flex-col gap-[30px] lg:pl-[100px] lg:pr-[100px] ">
                        <div className="flex flex-col items-center lg:flex-row w-full gap-[30px]">
                            <img src={imagenPerfil} alt="imagen de perfil" className="w-[150px] h-[150px] p-[10px] border-[2px] rounded-full"/>
                            <div className="text-[20px]">
                                <h1 className="text-[30px]">Nombre Apellido</h1>
                                <p>Puntos totales acumulados</p>
                                <div className="flex gap-[20px] justify-center">
                                    <i className="fa-solid fa-coins mt-[6px]"></i>
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[20px] justify-center lg:items-start items-center w-full">
                            <h1 className="text-[30px]">Estadísticas</h1>
                            <div className="border-[1px] lg:w-[100vh] w-[90%] p-[10px] lg:h-[50px] text-[20px] flex justify-between items-center lg:p-[20px] bg-[white] text-[black] rounded">
                                <p>Misiones completadas:</p>
                                <p>0 Misiones</p>
                            </div>
                        </div>
                    </div>
                );
            case 'cuenta':
                return (
                    <div className="flex flex-col justify-center items-center gap-[20px] pb-[20px] lg:pl-[100px] lg:pr-[100px]">
                        <h1 className="text-[30px]">Información personal</h1>
                        <div className="flex justify-center lg:justify-center items-center w-[50vh]">
                            <div className="relative w-[150px] h-[150px] lg:float-right">
                                <button onClick={() => document.getElementById('fileInput').click()} className="bg-[white] text-[#1AA9FF] p-2 mt-[75%] ml-[75%] rounded-full absolute"><i className="fa-solid fa-user-pen"></i></button>
                                <img src={imagenPerfil} alt="imagen de perfil" className="w-full h-full p-[10px] border-[2px] rounded-full"/>
                                <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="fileInput"/>  
                            </div>
                        </div>
                        <form className="w-[50%] flex flex-col gap-[20px] items-center">
                            <div className="flex flex-col gap-[10px] w-full">
                                <span className="italic">Nombre y apellidos</span>
                                <input type="text" value="Nombre Apellidos" className="w-full h-[35px] rounded p-[7px] text-[black]"  required />
                            </div>               
                            <div className="flex flex-col gap-[10px] w-full">
                                <span className="italic">Nombre de usuario</span>
                                <input type="text" value="Usuario" className="w-full h-[35px] rounded p-[7px] text-[black]"/>
                            </div>
                            <div className="flex flex-col gap-[10px] w-full">
                                <span className="italic">Teléfono</span>
                                <input type="tel" value="6792536490" className="w-full h-[35px] rounded p-[7px] text-[black]"/>
                            </div>
                            <div className="flex flex-col gap-[10px] w-full">
                                <span className="italic">Correo electrónico</span>
                                <input type="email" value="usuario@dominio.com" className="w-full h-[35px] rounded p-[7px] text-[black]" required />
                            </div>
                            <button type="submit" className="bg-[white] w-[120px] lg:w-[150px] h-[40px] hover:bg-[#1AA9FF] hover:border-[white] hover:border-[1px] text-[black] rounded">Actualizar</button>
                        </form>
                        <hr className="underline w-[50%]"></hr>
                        <div className="flex w-[50%] lg:flex-row flex-col justify-between items-center">
                            <h1 className="text-[30px]">Contraseña</h1>
                            <button className="bg-[white] w-[150px] h-[40px] hover:bg-[#1AA9FF] hover:border-[white] hover:border-[1px] text-[black] rounded">Cambiar contraseña</button>
                        </div>
                        <hr className="underline w-[50%]"></hr>
                        <div className="flex lg:flex-row flex-col w-[50%] gap-[10px] text-center justify-between lg:items-start lg:text-start items-center">
                            <div>
                                <h1 className="text-[30px]">Borrar cuenta</h1>
                                <p className="text-[#545454]">Si eliminas la cuenta no podrás recuperarla</p>
                            </div>
                            <button className="bg-[white] w-[150px] h-[40px] hover:bg-[darkred] hover:text-[white] hover:border-[white] hover:border-[1px] text-[red] rounded">Borrar Cuenta</button>
                        </div>
                    </div>
                );
            case 'conexiones':
                return (
                    <div className="flex flex-col gap-[20px] w-full justify-center items-center">
                        <h1 className="text-[35px]">Conexiones</h1>
                        <div className="flex flex-wrap lg:flex-row w-full justify-center items-center gap-[30px] md:justify-center lg:justify-between lg:pl-[100px] lg:pr-[100px]">
                            <div className="bg-[white] text-[black] w-[45vh] md:w-[50vh] flex items-center justify-between p-[20px] rounded-[20px]">
                                <img src={twitter} alt="Logo de Twitter" className="bg-[black] rounded-[10px] p-[7px] w-[50px] h-[50px]" />
                                <div>
                                    <h1 className="text-[25px]">X</h1>
                                    <p className="text-[#545454]">No conectado</p>
                                </div>
                                <button className="bg-[#1AA9FF] h-[40px] w-[30%] rounded-full text-[white] hover:bg-[white] hover:text-[#1AA9FF] hover:border-[#1AA9FF] hover:border-[1px]">Conectar</button>
                            </div>
                            <div className="bg-[white] text-[black] w-[45vh] md:w-[50vh] flex items-center justify-between p-[20px] rounded-[20px]">
                                <img src={discord} alt="Logo de Discord" className="rounded-[10px] p-[7px] w-[60px] h-[60px]" />
                                <div>
                                    <h1 className="text-[25px]">Discord</h1>
                                    <p className="text-[#545454]">No conectado</p>
                                </div>
                                <button className="bg-[#1AA9FF] h-[40px] w-[30%] rounded-full text-[white] hover:bg-[white] hover:text-[#1AA9FF] hover:border-[#1AA9FF] hover:border-[1px]">Conectar</button>
                            </div>
                            <div className="bg-[white] text-[black] w-[45vh] md:w-[50vh] flex items-center justify-between p-[20px] rounded-[20px]">
                                <img src={instagram} alt="Logo de Instagram" className="rounded-[10px] p-[7px] w-[60px] h-[60px]" />
                                <div>
                                    <h1 className="text-[25px]">Instagram</h1>
                                    <p className="text-[#545454]">No conectado</p>
                                </div>
                                <button className="bg-[#1AA9FF] h-[40px] w-[30%] rounded-full text-[white] hover:bg-[white] hover:text-[#1AA9FF] hover:border-[#1AA9FF] hover:border-[1px]">Conectar</button>
                            </div>
                            <div className="bg-[white] text-[black] w-[45vh] md:w-[50vh] flex justify-between items-center p-[20px] rounded-[20px]">
                                <img src={tiktok} alt="Logo de TikTok" className="bg-[black] rounded-[10px] p-[7px] w-[50px] h-[50px]" />
                                <div>
                                    <h1 className="text-[25px]">TikTok</h1>
                                    <p className="text-[#545454]">No conectado</p>
                                </div>
                                <button className="bg-[#1AA9FF] h-[40px] w-[30%] rounded-full text-[white] hover:bg-[white] hover:text-[#1AA9FF] hover:border-[#1AA9FF] hover:border-[1px]">Conectar</button>
                            </div>
                        </div>
                    </div>
                    
                );
            case 'cuentas de juego' :
                return (
                    <div className="flex flex-col gap-[20px] w-full justify-center items-center">
                        <h1 className="text-[35px]">Cuentas de juego</h1>
                        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center gap-[50px] static px-[80px]">
                            {cuentas.map((cuenta, index) => (
                                <div key={index} className="bg-gradient-to-t w-[40vh] h-[50vh] lg:h-[50vh] p-[10px] md:h-[35vh] from-[#18538a] to-[#1e90ff] text-white rounded-[15px]">
                                    <img src={cuenta.imagen} className="w-full h-[40%]"/>
                                    <div className="flex flex-col gap-[20px]">
                                        <p>Juego: {cuenta.juego}</p>
                                        <p>Nickname: {cuenta.nickname}</p>
                                        <p>Región: {cuenta.region}</p>
                                        <div className="flex flex-row justify-between items-center w-full px-[30px]">
                                            <button className="bg-[lightseagreen] rounded-full w-[70px]"><a>Editar</a></button>
                                            <button className="bg-[#c41010] rounded-full w-[70px] "><a>Eliminar</a></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'inventario' :
                return (
                    <div className="flex flex-col gap-[20px]  w-full justify-center items-center">
                        <h1 className="text-[35px]">Recompensas Canjeadas</h1>
                        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center gap-[50px] static px-[80px]">
                            {recompensas_canjeadas.map((canjeada, index) => (
                                <div key={index} className="bg-gradient-to-t w-[40vh] md:h-[30vh] h-[25vh] p-[10px] from-[#18538a] to-[#1e90ff] text-white rounded-[15px]">
                                    <img src={canjeada.imagen} className="w-full md:h-[60%] h-[40%]"/>
                                    <div className="flex flex-col gap-[20px]">
                                        <p>{canjeada.juego}</p>
                                        <p>Puntos: {canjeada.puntos}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            );
            case 'logros' :
                return (

                    <div className="flex flex-col lg:flex-row w-full items-center">
                        <div className="flex flex-col gap-[20px] lg:w-[50%] justify-center items-center">
                            <h1 className="text-[35px]">Misiones completadas</h1>
                            <div className="flex flex-wrap justify-center w-full gap-[20px] static">
                                {misiones_completadas.map((completada, index) => (
                                    <div key={index} className="bg-gradient-to-t w-[40vh] h-[25vh] lg:h-[40vh] p-[10px] from-[#18538a] to-[#1e90ff] text-white rounded-[15px]">
                                        <img src={completada.imagen} className="w-full md:h-[60%] h-[40%]"/>
                                        <div className="flex flex-col gap-[20px]">
                                            <p>{completada.juego}</p>
                                            <p>Puntos: {completada.puntos}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-[20px] lg:w-[50%] justify-center items-center">
                            <h1 className="text-[35px]">Recompensas Solicitadas</h1>
                            <div className="flex w-full flex-wrap justify-center gap-[20px] static">
                                {recompensas_solicitadas.map((solicitada, index) => (
                                    <div key={index} className="bg-gradient-to-t w-[40vh] lg:h-[40vh] h-[25vh] p-[10px] from-[#18538a] to-[#1e90ff] text-white rounded-[15px]">
                                        <img src={solicitada.imagen} className="w-full md:h-[60%] h-[40%]"/>
                                        <div className="flex flex-col gap-[20px]">
                                            <p>{solicitada.juego}</p>
                                            <p>Puntos: {solicitada.puntos}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    
            );
            case 'pedidos' :
                return (
                    <div className="flex flex-col gap-[20px] w-full justify-center items-center">
                        <h1 className="text-[35px]">Pedidos</h1>
                        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center gap-[50px] px-[80px]">
                            {pedidos.map((pedido, index) => (
                                <div key={index} className="bg-gradient-to-t w-[40vh] lg:h-[50vh] h-[55vh] md:h-[40vh] p-[10px] from-[#18538a] to-[#1e90ff] text-white rounded-[15px]">
                                    <img src={pedido.imagen} className="w-full h-[40%]"/>
                                    <div className="flex flex-col gap-[10px]">
                                        <p>Codigo de producto: {pedido.codigo}</p>
                                        <p>Producto: {pedido.producto}</p>
                                        <p>Precio: {pedido.precio}€</p>
                                        <p>Fecha de pedido: {pedido.fecha}</p>
                                        <p>Estado: {pedido.estado}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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
        <div className="bg-blue-900 min-h-[100vh] text-[white] flex flex-col font-roboto-condensed gap-[35px] w-full pt-[30px] lg:p-0">
            <header className="justify-between items-center w-full px-4 py-4 md:px-6 bg-[#18538a] hidden lg:flex">
                <a href="/" className="w-[70px] h-[70px] mr-8">
                    <img src={oxygen} alt="OxygenGaming Logo" className="w-full h-full" />
                </a>
                    <nav className="flex items-center gap-2">
                        <a href="/" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10 bg-blue-600">Inicio</a>
                        <a href="/competiciones" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Competiciones</a>
                        <a href="/reglamentos" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
                        <a href="/missions" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
                        <a href="/rewards" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>
                    </nav>
                <div className="flex items-center gap-2 ml-auto">
                    <button className="bg-blue-600 w-[150px] h-[40px] hover:bg-[#18538a] hover:border-[white] hover:border-[1px] text-[white] rounded"><a href="/">Cerrar Sesion</a></button>
                </div>
            </header>
            <button className="lg:hidden w-full flex flex-col items-center justify-center " onClick={() => setIsOpen(!isOpen)}>
                <div className="w-6 h-0.5 bg-white mb-1"></div>
                <div className="w-6 h-0.5 bg-white mb-1"></div>
                <div className="w-6 h-0.5 bg-white"></div>
            </button>

            <div className={`lg:hidden absolute ${isOpen ? 'block' : 'hidden'} w-full relative bg-blue-900 h-full flex flex-col justify-center items-center mt-4 gap-[20px]`}>
                <a href="/" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Inicio</a>
                <a href="/competiciones" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Competiciones</a>
                <a href="/reglamentos" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Contenido</a>
                <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Misiones</a>
                <a href="/rewards" className="text-white no-underline rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-white/10">Recompensas</a>  
                
                <hr className="text-[white] bg-[white] w-[80%]"></hr>
                <button onClick={() => [setOpcionSeleccionada('perfil'), handleLinkClick()]} className={getButtonClass('perfil')}>Perfil</button>
                <button onClick={() => [setOpcionSeleccionada('inventario'), handleLinkClick()]} className={getButtonClass('inventario')}>Inventario</button>
                <button onClick={() => [setOpcionSeleccionada('logros'), handleLinkClick()]}  className={getButtonClass('logros')}>Logros</button>
                <button onClick={() => [setOpcionSeleccionada('pedidos'), handleLinkClick()]}  className={getButtonClass('pedidos')}>Pedidos</button>
                <button onClick={() => [setOpcionSeleccionada('cuentas de juego'), handleLinkClick()]} className={getButtonClass('cuentas de juego')}>Cuentas de juego</button>
                <button onClick={() => [setOpcionSeleccionada('conexiones'), handleLinkClick()]} className={getButtonClass('conexiones')}>Conexiones</button>
                <button onClick={() => [setOpcionSeleccionada('cuenta'), handleLinkClick()]} className={getButtonClass('cuenta')}>Editar Perfil</button>
            </div>
            <div className="flex items-center text-center w-full justify-center gap-[30px] font-bold">
                <p className="text-[30px]">Tu Perfil</p>
            </div>
            <div className="pl-[100px] px-[30px] hidden lg:flex lg:flex-col">
                <div className="flex text-[10px] gap-[7px] lg:text-[20px] lg:gap-[30px] w-[100%] font-bold">
                    <button onClick={() => setOpcionSeleccionada('perfil')} className={getButtonClass('perfil')}>Perfil</button>
                    <button onClick={() => setOpcionSeleccionada('inventario')} className={getButtonClass('inventario')}>Inventario</button>
                    <button onClick={() => setOpcionSeleccionada('logros')} className={getButtonClass('logros')}>Logros</button>
                    <button onClick={() => setOpcionSeleccionada('pedidos')} className={getButtonClass('pedidos')}>Pedidos</button>
                    <button onClick={() => setOpcionSeleccionada('cuentas de juego')} className={getButtonClass('cuentas de juego')}>Cuentas de juego</button>
                    <button onClick={() => setOpcionSeleccionada('conexiones')} className={getButtonClass('conexiones')}>Conexiones</button>
                    <button onClick={() => setOpcionSeleccionada('cuenta')} className={getButtonClass('cuenta')}>Editar Perfil</button>
                </div>
                <hr className="underline w-full"></hr>
            </div>           
            {renderContent()}
            

            <footer className="w-full bg-neutral-900">
                <div id="contenido_footer" className="flex justify-between items-center text-center lg:items-start flex-col lg:flex-row gap-4 p-10 max-w-[1200px] mx-auto">
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
