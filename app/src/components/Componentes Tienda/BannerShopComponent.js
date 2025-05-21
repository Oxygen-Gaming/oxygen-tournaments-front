import React from "react";
import Banner from "@imgs/Banner_Tienda.webp";

const BannerShop = () => {
    return (
        <main
        className="flex items-center max-[320px]:h-[100vh] landscape:min-[568px]:h-[100vh] md:h-[80vh] px-16 relative overflow-hidden mt-[20px] lg:mt-0 pt-7"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <div className="hidden lg:block absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#1AA9FF] z-10 "></div>


      </main>
    )
}

export default BannerShop;