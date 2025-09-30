import React from "react";
import { ServiceSFrame, Pic1, ServiceMFrame, BottomLastImage } from "../ReUsable/Images";
import Align from "../ReUsable/Align";

const Blessing = () => {
    
    return (
        <Align>
 <div className="relative pt-10 pb-20">
           

            {/* Main Content Section */}
            <div className="relative bg-[#49000B] lg:h-[203px] flex items-center justify-center max-w-7xl mx-auto rounded-[10px]">
                {/* Background Frame */}
                <img
                    src={ServiceSFrame}
                    alt="Service Frame Background"
                    className="absolute inset-0 w-full h-full object-cover rounded-[10px] z-0 lg:block hidden"
                />

                <img
                    src={ServiceMFrame}
                    alt="Service Frame Background"
                    className="absolute inset-0 w-full h-full object-cover rounded-[10px] z-0 lg:hidden block"
                />

                {/* Foreground Content */}
                <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:justify-center w-full h-full px-4 md:pb-0 pb-5">
                    <div className="flex flex-col items-center gap-4 md:gap-6 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                        

                        <p className="text-[#FFE177] md:text-[18px] lg:text-[20px] leading-snug max-w-full text-center ">
                           Blessing to you,<br />
                 
                        </p>
                        <p className="text-[#FFE177] md:text-[18px] lg:text-[20px] leading-snug max-w-full text-center ">   OM AGATHEESAYA NAMAHA!!!</p>
                    </div>

                    <div className="flex flex-row items-center -mt-9 md:-mt-0 lg:ml-auto">
                        <img
                            src={Pic1}
                            alt=""
                            className="w-[250px] lg:w-[300px] object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Left Decoration */}
            <div className="absolute lg:-bottom-0 right-0 -z-20">
                <img src={BottomLastImage} alt="" className="w-32 md:w-100 lg:w-100 lg:block hidden" />
            </div>
        </div>
        </Align>
       
    );
};

export default Blessing;