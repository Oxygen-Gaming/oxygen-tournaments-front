import React from "react";
import posterpremium4 from "@imgs/Recompensas_Premium4.jpg"
const CardVentajas = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <section className="bg-yellow-500  text-[black] rounded-lg flex flex-col items-center sm:flex-row sm:w-[80%] w-[90%] lg:h-[90vh] sm:h-[180vh] md:h-[60vh] border-[20px] border-yellow-500 shadow-[0_0_10px_10px_rgba(255,215,0,0.8)]">
                <div className="flex flex-col sm:w-[50%] lg:w-[60%] items-center justify-center lg:p-[33px] gap-[33px]">
                    <div className="w-full">
                        <h2 className="text-[45px] font-bold text-center">Ventajas Premium</h2>
                    </div>
                    <div className="w-full h-full flex flex-col justify-between items-center gap-[20px]">
                        <p className="text-[22px] sm:w-[90%] gap-[33px] text-center">
                            Al unirte a nuestro plan Premium, desbloquearás una experiencia única llena de beneficios exclusivos. 
                            Disfruta de contenido especial, soporte prioritario, descuentos exclusivos y mucho más. 
                            ¡No te quedes fuera de esta oportunidad de llevar tu experiencia al siguiente nivel!
                        </p>
                    </div>
                </div>
                <div className="sm:w-[50%] sm:h-[70%] lg:h-full lg:w-[40%] p-[2rem] hidden sm:flex">
                    <img className="w-full h-full rounded-[33px]" src={posterpremium4}/>
                </div> 
            </section>
        </div>  
        
    )
}

export default CardVentajas;