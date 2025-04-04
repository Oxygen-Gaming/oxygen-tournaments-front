import React from "react";

const CardVentajas = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <section className="bg-yellow-500  text-[black] rounded-lg flex flex-row w-[80%] h-[90vh] border-[20px] border-yellow-500 shadow-[0_0_10px_10px_rgba(255,215,0,0.8)]">
                <div className="flex flex-col w-[70%] items-center justify-center p-[33px] gap-[33px]">
                    <div className="w-full"> {/* Text on the right */}
                        <h2 className="text-[45px] font-bold ">Ventajas de unirte a OxyClub</h2>
                    </div>

                    <div className="w-full h-full flex flex-col justify-between">
                     <p className="text-[25px] w-[90%] gap-[33px]">
                            Al unirte a nuestro plan Premium, desbloquearás una experiencia única llena de beneficios exclusivos. 
                            Disfruta de contenido especial, soporte prioritario, descuentos exclusivos y mucho más. 
                            ¡No te quedes fuera de esta oportunidad de llevar tu experiencia al siguiente nivel!
                        </p>
                     
                            
                        <buttom className="px-6 py-3 w-[30%] text-center bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Saber Mas</buttom>

                    </div>

                </div>
                <div className=" w-[50%] h-full p-[2rem]">
                    <img className="w-full h-full border-[5px] rounded-[33px] bg-[black] border-[black]"/>
                </div> 
            </section>
        </div>  
        
    )
}

export default CardVentajas;