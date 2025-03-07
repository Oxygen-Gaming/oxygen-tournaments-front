import React, { useState, useEffect } from 'react';
import logo from '../img/Logo_Blue.png';
const Contenido = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVideoSrc, setModalVideoSrc] = useState('');
    const [modalVideoTime, setModalVideoTime] = useState(0);
    const [modalProgressPercentage, setModalProgressPercentage] = useState('0%');

    const openModal = (videoId) => {
        const savedTime = parseFloat(localStorage.getItem(videoId + "_time")) || 0;
        const savedPercentage = localStorage.getItem(videoId + "_percentage") || "0%";
        setModalVideoSrc(videoId + ".webm");
        setModalVideoTime(savedTime);
        setModalProgressPercentage(savedPercentage);
        setModalVisible(true);
    };

    const closeModal = () => {
        const videoId = modalVideoSrc.split('/').pop().split('.')[0];
        localStorage.setItem(videoId + "_time", modalVideoTime);
        const porcentaje = (modalVideoTime / document.getElementById("modalVideo").duration) * 100;
        localStorage.setItem(videoId + "_percentage", Math.round(porcentaje) + "%");
        setModalVisible(false);
    };

    const updateProgress = () => {
        const video = document.getElementById("modalVideo");
        const porcentaje = (video.currentTime / video.duration) * 100;
        if (!isNaN(porcentaje)) {
            setModalProgressPercentage(Math.round(porcentaje) + "%");
        } else {
            setModalProgressPercentage("0%");
        }
    };

    const compartir = () => {
        alert("¡Has ganado 100 puntos de loyalty por compartir el contenido!");
    };

    useEffect(() => {
        const video = document.getElementById("modalVideo");
        if (video) {
            video.currentTime = modalVideoTime;
            video.addEventListener("timeupdate", updateProgress);
        }
    }, [modalVideoTime]);

    return (
        <div className="font-sans bg-blue-900 text-black m-0 p-0">
           <header className="flex justify-between items-center px-4 py-4 md:px-6 bg-[#18538a]">
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
          <a href="/register" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md border-2 border-white bg-transparent">Registrarse</a>
          <a href="/login" className="text-white no-underline px-2 py-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md bg-blue-600 ml-4">Iniciar Sesión</a>
        </div>
      </header>
            <br />
            <div className="container p-5 text-center mt-24">
                <h1 className="text-black">Contenido</h1>
            </div>
            {modalVisible && (
                <div id="videoModal" className="modal fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-80">
                    <div className="modal-content relative m-auto p-0 w-4/5 max-w-2xl top-1/2 transform -translate-y-1/2">
                        <div className="button-container">
                            <button className="close-button absolute top-2.5 right-6 bg-transparent border-none text-white text-3xl cursor-pointer" onClick={closeModal}>&times;</button>
                            <button className="share-button mt-5 p-2.5 bg-blue-300 text-black border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue-200 hover:text-blue-500" onClick={compartir}>Compartir</button>
                        </div>
                        <video id="modalVideo" controls className="w-full rounded-lg shadow-lg" src={modalVideoSrc}></video>
                        <div className="progress mt-2.5 w-full h-2.5 bg-gray-800 rounded-md overflow-hidden">
                            <div className="progress-bar h-full" style={{ width: modalProgressPercentage, backgroundColor: '#4d06f5' }}></div>
                        </div>
                        <div className="progress-percentage mt-1.5 text-white">{modalProgressPercentage}</div>
                    </div>
                </div>
            )}
            <table className="ranking-table w-1/5 m-5 border-collapse shadow-lg absolute right-1/12 top-64 rounded-lg overflow-hidden">
                <thead>
                    <tr>
                        <th className="bg-blue-500 text-white font-bold p-2.5">Posición</th>
                        <th className="bg-blue-500 text-white font-bold p-2.5">Nombre</th>
                        <th className="bg-blue-500 text-white font-bold p-2.5">Puntos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
                        <td className="p-2.5 border-b border-white">1</td>
                        <td className="p-2.5 border-b border-white">Juan Pérez</td>
                        <td className="p-2.5 border-b border-white">1500</td>
                    </tr>
                    <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
                        <td className="p-2.5 border-b border-white">2</td>
                        <td className="p-2.5 border-b border-white">María López</td>
                        <td className="p-2.5 border-b border-white">1400</td>
                    </tr>
                    <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
                        <td className="p-2.5 border-b border-white">3</td>
                        <td className="p-2.5 border-b border-white">Carlos García</td>
                        <td className="p-2.5 border-b border-white">1300</td>
                    </tr>
                    <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
                        <td className="p-2.5 border-b border-white">4</td>
                        <td className="p-2.5 border-b border-white">Ana Martínez</td>
                        <td className="p-2.5 border-b border-white">1200</td>
                    </tr>
                    <tr className="bg-blue-900 even:bg-blue-800 hover:bg-gray-300">
                        <td className="p-2.5 border-b border-white">5</td>
                        <td className="p-2.5 border-b border-white">Jose Juan</td>
                        <td className="p-2.5 border-b border-white">1100</td>
                    </tr>
                </tbody>
            </table>
            <div className="info-card w-2/5 m-5 p-5 bg-gradient-to-t from-blue-900 to-blue-500 text-white rounded-lg shadow-lg absolute left-5 top-64">
                <h2 className="text-2xl">Sobre Oxygen Gaming</h2>
                <p>Oxygen Gaming es una plataforma dedicada a la organización de torneos de videojuegos. Ofrecemos una amplia variedad de contenido para los entusiastas de los videojuegos, incluyendo:</p>
                <ul className="list-disc list-inside">
                    <li>Transmisiones en vivo de torneos</li>
                    <li>Videos destacados de partidas</li>
                    <li>Entrevistas con jugadores profesionales</li>
                    <li>Guías y tutoriales para mejorar tus habilidades</li>
                    <li>Noticias y actualizaciones sobre el mundo de los videojuegos</li>
                </ul>
                <p>Únete a nuestra comunidad y participa en nuestros torneos para ganar premios y reconocimiento. ¡Mantente conectado y sigue mejorando con Oxygen Gaming!</p>
            </div>
            <div className="video-row flex justify-between flex-nowrap overflow-hidden mt-12 absolute bottom-24 w-full">
                <div className="video-card flex items-center justify-between w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105" onClick={() => openModal('Minimalist Rotativo Dang3r 2025')}>
                    <img src="Minimalist Rotativo Dang3r 2025.webm" alt="Video 1" className="video-thumbnail w-1/3 cursor-pointer" />
                    <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
                        <div className="video-title text-lg font-bold">Video 1</div>
                        <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">Puntos:</div>
                    </div>
                </div>
                <div className="video-card flex items-center justify-between w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105" onClick={() => openModal('video2')}>
                    <img src="thumbnail2.jpg" alt="Video 2" className="video-thumbnail w-1/3 cursor-pointer" />
                    <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
                        <div className="video-title text-lg font-bold">Video 2</div>
                        <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">Puntos:</div>
                    </div>
                </div>
                <div className="video-card flex items-center justify-between w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105" onClick={() => openModal('video3')}>
                    <img src="thumbnail3.jpg" alt="Video 3" className="video-thumbnail w-1/3 cursor-pointer" />
                    <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
                        <div className="video-title text-lg font-bold">Video 3</div>
                        <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">Puntos:</div>
                    </div>
                </div>
                <div className="video-card flex items-center justify-between w-1/5 h-36 bg-gradient-to-t from-blue-900 to-blue-500 rounded-lg p-2.5 shadow-lg transition-transform duration-300 relative flex-shrink-0 hover:scale-105" onClick={() => openModal('video4')}>
                    <img src="thumbnail4.jpg" alt="Video 4" className="video-thumbnail w-1/3 cursor-pointer" />
                    <div className="video-info flex flex-col justify-between w-2/3 pl-2.5">
                        <div className="video-title text-lg font-bold">Video 4</div>
                        <div className="video-points text-blue-500 absolute bottom-2.5 right-2.5">Puntos:</div>
                    </div>
                </div>
            </div>
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
              <img id="logo_footer" src={logo} alt="Oxygen Gaming Logo" className="w-[80%] max-w-[200px] mb-4" />
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
        
    );
};

export default Content;
