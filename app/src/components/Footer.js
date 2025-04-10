import React from 'react';

const Footer = () => {
  return (
    <div id="contenido_footer" className="flex flex-col items-center justify-center gap-6 bg-[#1a191d] px-8 py-6 w-full lg:h-[520px]">
      <div id="arriba_footer" className="flex flex-col items-center w-full gap-8 md:gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-[20vh] lg:mb-[100px]">
          <div className="menus_footer flex flex-col gap-4 min-w-[200px] text-center lg:text-left">
              <span className="text-[#1AA9FF] font-bold text-xl lg:text-[22px] md:text-[35px]">OXYGENGAMING</span>
              <div className="info_footer flex flex-col gap-3">
                  <a href="/competition" className="text-[#b0b0b0] font-bold transition-colors duration-300 hover:text-[#1AA9FF] md:text-[25px] lg:text-[18px]">COMPETICIONES</a>
                  <a href="/content" className="text-[#b0b0b0] font-bold transition-colors duration-300 hover:text-[#1AA9FF] md:text-[25px] lg:text-[18px]">CONTENIDO</a>
                  <a href="/missions" className="text-[#b0b0b0] font-bold transition-colors duration-300 hover:text-[#1AA9FF]  md:text-[25px] lg:text-[18px]">MISIONES</a>
                  <a href="/rewards" className="text-[#b0b0b0] font-bold transition-colors duration-300 hover:text-[#1AA9FF] md:text-[25px] lg:text-[18px]">RECOMPENSAS</a>
                  <a href="/perfil" className="text-[#b0b0b0] font-bold transition-colors duration-300 hover:text-[#1AA9FF] md:text-[25px] lg:text-[18px]">MI CUENTA</a>
                  
              </div>
          </div>

          

          <div className="menus_footer flex flex-col gap-4 min-w-[200px] text-center lg:text-left">
              <span className="text-[#1AA9FF] font-bold text-xl lg:text-[22px] md:text-[35px]">POLÍTICAS</span>
              <div className="info_footer flex flex-col gap-3">
                  <a href="https://oxygengaming.es/aviso-legal/" className="text-[#b0b0b0] font-bold transition-colors duration-300 hover:text-[#1AA9FF] md:text-[25px] lg:text-[18px]">AVISO LEGAL</a>
                  <a href="https://oxygengaming.es/politica-de-privacidad/" className="text-[#b0b0b0] font-bold transition-colors duration-300 hover:text-[#1AA9FF] md:text-[25px] lg:text-[18px]">PRIVACIDAD</a>
                  <a href="https://oxygengaming.es/politica-de-cookies/" className="text-[#b0b0b0] font-bold transition-colors duration-300 hover:text-[#1AA9FF] md:text-[25px] lg:text-[18px]">COOKIES</a>
              </div>
          </div>

          <div id="redes_sociales" className="flex flex-col items-center text-center">
              <a href="https://oxygengaming.es/">
                  <img id="logo_footer" src="https://oxygengaming.es/wp-content/uploads/2025/03/Logo_Blue.png" alt="Oxygen Gaming Logo" className="w-[200px] mb-3.5"/>
              </a>
              <div className="social-links flex gap-4 md:gap-6 lg:gap-8">
                <a href="https://twitter.com/GamingOxygen" target="_blank" rel="noreferrer noopener" className="flex justify-center items-center text-white bg-[#222] border-2 border-[#1AA9FF] w-10 h-10 rounded-full transition-all duration-300 hover:text-[#1AA9FF] text-[20px] md:w-[70px] md:h-[70px] md:text-[30px] lg:w-[50px] lg:h-[50px] lg:text-[20px]">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com/GamingOxygen" target="_blank" rel="noreferrer noopener" className="flex justify-center items-center text-white bg-[#222] border-2 border-[#1AA9FF] w-10 h-10 rounded-full transition-all duration-300 hover:text-[#e4405f] text-[20px] md:w-[70px] md:h-[70px] md:text-[30px] lg:w-[50px] lg:h-[50px] lg:text-[20px]">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.tiktok.com/@oxygengaming.tv?lang=es" target="_blank" rel="noreferrer noopener" className="flex justify-center items-center text-white bg-[#222] border-2 border-[#1AA9FF] w-10 h-10 rounded-full transition-all duration-300 hover:text-[#69c9d0] text-[20px] md:w-[70px] md:h-[70px] md:text-[30px] lg:w-[50px] lg:h-[50px] lg:text-[20px]">
                    <i className="fab fa-tiktok"></i>
                </a>
                <a href="https://discord.gg/Udsstfpeze" target="_blank" rel="noreferrer noopener" className="flex justify-center items-center text-white bg-[#222] border-2 border-[#1AA9FF] w-10 h-10 rounded-full transition-all duration-300 hover:text-[#7289da] text-[20px] md:w-[70px] md:h-[70px] md:text-[30px] lg:w-[50px] lg:h-[50px] lg:text-[20px]">
                    <i className="fab fa-discord"></i>
                </a>
              </div>
          </div>
      </div>
    </div>

    
  );
};
export default Footer;
