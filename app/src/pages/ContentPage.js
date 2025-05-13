import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RankingTable from '@components/Contenido/RankingTable';
import Banner from '@imgs/Headers_Contenido_Prueba.jpg';
import MenuHamburguesaNormal from '@components/ComponentesMenuHamburguesa/MenuHamburguesaNormalComponent';
import { motion } from 'framer-motion';




const Contenido = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showSearchInput, setShowSearchInput] = useState(false);
    const searchInputRef = useRef(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const videoRef = useRef(null);
    const [videoProgress, setVideoProgress] = useState(0);

    const handleCardClick = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchClick = () => {
        setShowSearchInput(!showSearchInput);
    };

    useEffect(() => {
        if (showSearchInput) {
            searchInputRef.current.focus();
        }
    }, [showSearchInput]);

    useEffect(() => {
        const handleTimeUpdate = () => {
            if (videoRef.current) {
                const currentTime = videoRef.current.currentTime;
                const duration = videoRef.current.duration;
                const progress = duration ? Math.min((currentTime / duration) * 100, 100) : 0; // Asegura que no sobrepase 100
                setVideoProgress(progress);
            }
        };

        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.addEventListener('timeupdate', handleTimeUpdate); // Escucha el evento timeupdate
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('timeupdate', handleTimeUpdate); // Limpia el listener al desmontar
            }
        };
    }, [selectedVideo]);

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
        window.scrollTo(0, 0);
    };

    const handleBackClick = () => {
        setSelectedVideo(null);
        setVideoProgress(0);
    };

    const categories = [
        { name: 'Todo', value: null },
        { name: 'Creadores de contenido', value: 'creadores' },
        { name: 'Valorant', value: 'valorant' },
        { name: 'League of Legends', value: 'lol' },
        { name: 'Rocket League', value: 'rocketleague' },
    ];

    const searchVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } },
    };

    const videos = [
        { id: 1, title: 'Introducción a React Hooks', category: 'creadores', thumbnail: 'https://img.youtube.com/vi/dpw9EHDh2bM/hqdefault.jpg', src: 'https://www.youtube.com/embed/dpw9EHDh2bM', description: 'Aprende los fundamentos de React Hooks en este tutorial completo.Aprende los fundamentos de React Hooks en este tutorial completo.Aprende los fundamentos de React Hooks en este tutorial completo.Aprende los fundamentos de React Hooks en este tutorial completo.Aprende los fundamentos de React Hooks en este tutorial completo.Aprende los fundamentos de React Hooks en este tutorial completo.Aprende los fundamentos de React Hooks en este tutorial completo.' },
        
        { id: 2, title: 'Como jugar al League of Legends - Guía para empezar de cero.', category: 'lol', thumbnail: 'https://media.vandal.net/master/8-2021/202183014214660_1.jpg', src: 'https://www.youtube.com/embed/LjLKNGQK0Tg?si=75EusSQXybNqZ2bR', description: 'Domina a tus campeones favoritos con esta guía detallada.' },
        
        { id: 3, title: 'COMO MEJORAR RÁPIDO EN ROCKET LEAGUE 🚀 CONSEJOS PRO #1', category: 'rocketleague', thumbnail: 'https://i.ytimg.com/vi/2fkdWjtaxuo/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAGaSr7GuYhij6Yle1KL8kgB45a9w', src: 'https://www.youtube.com/embed/2fkdWjtaxuo?si=PiDLdDcf9hoILhk5', description: 'Lleva tu juego al siguiente nivel con estos trucos de Rocket League.' },
        
        { id: 4, title: 'Trailer GTA VI', category: 'valorant', thumbnail: 'https://img.youtube.com/vi/VQRLujxTm3c/maxresdefault.jpg', src: 'https://www.youtube.com/embed/VQRLujxTm3c?si=lsz2poNFYbwTZuFT', description: 'Estrategias efectivas para hacer crecer tu canal de YouTube.' },
        
        { id: 5, title: 'Como Crecer en Youtube', category: 'creadores', thumbnail: 'https://img.youtube.com/vi/xnnxUzZmKY0/maxresdefault.jpg', src: 'https://www.youtube.com/embed/xnnxUzZmKY0?si=lDgMsEkxnsahSKIm', description: 'Todo lo que necesitas saber sobre el nuevo agente y sus habilidades.' },
        
        { id: 6, title: 'Mejores trolleos en Valorant', category: 'valorant', thumbnail: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2015/04/95797-trollface.jpg?tf=3840x', src: 'https://www.youtube.com/embed/4TnAKurylA8?si=Hv-jy5E1zueUZOdy', description: 'Todo lo que necesitas saber sobre el nuevo agente y sus habilidades.' },
        
        { id: 7, title: '5 MEJORES CONSEJOS PARA MEJORAR EN VALORANT', category: 'valorant', thumbnail: 'https://i.ytimg.com/vi/OzEwtlgKBXw/maxresdefault.jpg', src: 'https://www.youtube.com/embed/OzEwtlgKBXw?si=NR6VayCHyktBpeOX', description: 'Todo lo que necesitas saber sobre como mejorar en valorant y mejores consejillos.' },

        { id: 8, title: 'EN el colectivo', category: 'creadores', thumbnail: 'https://ecomovilidad.net/wp-content/uploads/2010/13/nuevosbuses/IMG_8975.JPG', src: 'https://www.youtube.com/embed/CfrMEZppaXM?si=-gHj5XpJseROe3xV', description: 'Sin descripcion.' }
    ];

    const filteredVideos = selectedCategory
        ? videos.filter(video => video.category === selectedCategory)
        : videos;

    const recommendedVideos = selectedVideo
        ? videos.filter(video => video.category === selectedVideo.category && video.id !== selectedVideo.id).slice(0, 5)
        : [];

    const handleShare = () => {
        if (selectedVideo && navigator.share) {
            navigator.share({
                title: selectedVideo.title,
                text: selectedVideo.description,
                url: selectedVideo.src.replace("/embed/", "/watch?v="),
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
        } else if (selectedVideo) {
            const youtubeWatchUrl = selectedVideo.src.replace("/embed/", "/watch?v=");
            navigator.clipboard.writeText(youtubeWatchUrl).then(() => {
                alert("Enlace del video copiado al portapapeles: " + youtubeWatchUrl);
            }).catch(err => {
                console.error('Error al copiar el enlace: ', err);
                alert("No se pudo copiar el enlace. Por favor, cópialo manualmente: " + youtubeWatchUrl);
            });
        }
    };

    const buttonVariants = {
        hover: {
            scale: 1.1,
            boxShadow: "0px 0px 10px rgba(0,123,255,0.7)",
            transition: {
                duration: 0.2,
                yoyo: Infinity
            }
        }
    };

    return (
        <div className="font-['Roboto_Condensed',sans-serif] text-black m-0 p-0 min-h-screen flex flex-col bg-black">
            <Header />
            <MenuHamburguesaNormal />
            {selectedVideo ? (
                // ------------- PÁGINA DE DETALLES DEL VIDEO -------------
                <div className="flex-grow w-full max-w-screen-xl mt-[-1rem] mx-auto px-4 py-8 flex flex-col lg:flex-row">
                    {/* Columna Izquierda: Video y Detalles */}
                    <div className="lg:w-2/3 lg:pr-8">
                        <button
                            onClick={handleBackClick}
                            className="mb-[13px] inline-block px-3 py-1 rounded-lg font-bold text-lg transition transform hover:-translate-y-1 hover:shadow-lg bg-gradient-to-r from-[#005f99] to-[#1AA9FF] text-white hover:from-[#00487a] hover:to-[#007acc]"
                        >
                            Volver
                        </button>
                        {/* Contenedor del video para mantener aspect ratio */}
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
                            <iframe
                                ref={videoRef}
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-xl"
                                src={selectedVideo.src + "?autoplay=1"}
                                title={selectedVideo.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl lg:text-3xl font-bold mt-4 text-[white]">{selectedVideo.title}</h1>
                            <motion.button
                                onClick={handleShare}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg inline-flex items-center mt-4"
                                variants={buttonVariants}
                                whileHover="hover"
                                style={{marginBottom: '0.25rem'}}
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
                                Compartir
                            </motion.button>
                        </div>
                                   
                  <div className="flex items-center p-4 bg-gray-800 rounded-lg text-white mt-6">
                    <div className="w-full mt-[25px] pr-4">
                      <p className="text-sm whitespace-pre-wrap">
                        {selectedVideo.description || "No hay descripción disponible."}
                      </p>
                    </div>
                    <div className="w-1/3 flex flex-col items-center">
                      <div className="relative w-24 h-24">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="15.9155" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="100, 0" strokeLinecap="round" className="text-gray-700"/>
                          <circle cx="18" cy="18" r="15.9155" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray={`${videoProgress}, 100`} strokeLinecap="round" className="text-yellow-500"/>
                        </svg>
                        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold text-white">{Math.round(videoProgress)}%</span>
                      </div>
                      <p className="text-sm mt-2 text-center">Mira el video completo para obtener la recompensa</p>
                      {videoProgress === 100 && <p className="text-green-500 mt-2">¡Felicidades! Has visto el video completo.</p>}
                    </div>
  
                    
                  </div>
              
                    </div>

                    {/* Columna Derecha: Videos Recomendados */}
                    <div className="lg:w-1/3 mt-8 lg:mt-10 lg:pl-4">
                        <h2 className="text-xl text-white font-semibold mb-4 text-[wh]">Recomendados</h2>
                        <div className="space-y-4">
                            {recommendedVideos.map(recVideo => (
                                <div
                                    key={recVideo.id}
                                    className="flex items-start space-x-3 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors duration-150"
                                    onClick={() => handleVideoClick(recVideo)}
                                >
                                    <img
                                        src={recVideo.thumbnail || 'https://via.placeholder.com/120x68.png?text=Video'}
                                        alt={recVideo.title}
                                        className="w-32 h-18 object-cover rounded-md flex-shrink-0"
                                    />
                                    <div className="flex-grow">
                                        <h3 className="text-sm font-medium text-white leading-tight line-clamp-2">{recVideo.title}</h3>
                                        <p className="text-xs text-gray-400 mt-1">{recVideo.category}</p>
                                    </div>
                                </div>
                            ))}
                            {recommendedVideos.length === 0 && (
                                <p className="text-white text-gray-400">No hay más videos en esta categoría.</p>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                 // ------------- PÁGINA PRINCIPAL -------------
                <>
                    {!selectedCategory && (
                        <div className="w-full h-80 bg-cover bg-center relative mt-0">
                            <img src={Banner} alt="Contenido Banner" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center px-4">Contenido</h1>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
                        </div>
                    )}

                    <div className="relative flex flex-wrap items-center justify-center space-x-4 py-4 bg-black w-full">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                className={`rounded-full px-6 py-2 font-semibold ${
                                    selectedCategory === category.value ? 'bg-white text-black' : 'bg-[#333333] text-white'
                                } hover:bg-gray-400 focus:outline-none mb-2 sm:mb-0`}
                                onClick={() => handleCardClick(category.value)}
                            >
                                {category.name}
                            </button>
                        ))}
                        <button onClick={handleSearchClick} className="bg-gray-700 text-white rounded-full px-6 py-2 font-semibold hover:bg-gray-500 focus:outline-none mb-2 sm:mb-0">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>

                        {showSearchInput && (
                            <motion.div
                                className=" absolute top-[100%] right-[0%] w-full mx-auto overflow-hidden transition-all duration-300 ease-in-out bg-black"
                                style={{
                                    maxHeight: showSearchInput ? '50px' : '0',
                                    
                                }}
                            >
                                <div className="flex items-center rounded-md shadow-md w-11/12 mx-auto py-2 ">
                                    <i className="fa-solid fa-magnifying-glass text-gray-400 ml-2"></i>
                                    <input
                                        type="text"
                                        placeholder="Búsqueda..."
                                        className="flex-grow py-2 px-4 text-white bg-transparent focus:outline-none"
                                        ref={searchInputRef}
                                    />
                                    <button onClick={() => setShowSearchInput(false)} className="bg-gray-700 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-r">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <div className="w-11/12 max-w-screen-xl mx-auto mt-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {filteredVideos.map((video) => (
                                <div
                                    key={video.id}
                                    className="bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-200 group"
                                    onClick={() => handleVideoClick(video)}
                                >
                                    <div className="relative w-full" style={{paddingBottom: "56.25%"}}>
                                        <img
                                            src={video.thumbnail || 'https://via.placeholder.com/320x180.png?text=Video'}
                                            alt={video.title}
                                            className="absolute top-0 left-0 w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-200"></div>
                                    </div>
                                    <div className="p-3">
                                        <h3 className="text-md font-semibold text-white line-clamp-2">{video.title}</h3>
                                        <p className="text-gray-400 text-xs mt-1">{video.category}</p>
                                    </div>
                                </div>
                            ))}
                            {filteredVideos.length === 0 && (
                                <p className="col-span-full text-center text-white py-8">No hay videos en esta categoría.</p>
                            )}
                        </div>
                    </div>

                    <div className="mt-12 w-11/12 max-w-screen-xl mx-auto">
                        <RankingTable />
                    </div>
                </>
            )}

            <div className="mt-auto pt-20"> {/* mt-auto empuja el footer hacia abajo */}
                <Footer />
            </div>
        </div>
    );
};

export default Contenido;