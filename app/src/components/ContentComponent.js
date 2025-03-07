import React, { useState, useEffect } from 'react';

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
            <header className="navbar flex flex-col justify-center items-center p-5 bg-blue-500 text-white w-full fixed top-0 left-0 z-50 shadow-lg">
                <div className="logo flex items-center absolute left-5 top-5">
                    <img src="Logo_OxygenGaming2.png" alt="Logo" className="logo-img h-15 w-15 rounded-full mr-2.5 transition-transform duration-300 hover:scale-110" />
                    <span className="company-name text-4xl font-bold text-white ml-2.5"></span>
                </div>
                <div className="page-title text-center">
                    <h1 className="m-0 text-white text-4xl font-bold shadow-lg transition-colors duration-300 hover:text-blue-100">Contenido</h1>
                    <nav className="nav-menu flex gap-4 mt-2.5">
                        <a href="#registration" className="text-white no-underline p-2.5 text-lg transition-colors duration-300 hover:bg-white hover:text-blue-500 rounded-md hover:underline">Inscripción</a>
                        <a href="#ranking" className="text-white no-underline p-2.5 text-lg transition-colors duration-300 hover:bg-white hover:text-blue-500 rounded-md hover:underline">Clasificación</a>
                        <a href="#history" className="text-white no-underline p-2.5 text-lg transition-colors duration-300 hover:bg-white hover:text-blue-500 rounded-md hover:underline">Historial</a>
                        <a href="#prizes" className="text-white no-underline p-2.5 text-lg transition-colors duration-300 hover:bg-white hover:text-blue-500 rounded-md hover:underline">Premios</a>
                    </nav>
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
        </div>
    );
};

export default Content;
