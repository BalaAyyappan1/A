import React from "react";
import { ServiceLogo, ServiceSFrame, Pic1, Pic2, ServiceMFrame, TopL, BotL } from "./Images";

const ServiceFrame = () => {
    
    return (
        <div className="relative ">
            {/* Top Left Decoration */}
            <div className="absolute lg:-top-75 left-0 -z-20">
                <img src={TopL} alt="" className="w-40 md:w-80 lg:w-80 lg:block hidden" />
            </div>

            {/* Main Content Section */}
            <div className="relative bg-[#49000B] lg:h-[303px] flex items-center justify-center overflow-hidden">
                {/* Background Frame */}
                <img
                    src={ServiceSFrame}
                    alt="Service Frame Background"
                    className="absolute inset-0 w-full h-full object-cover z-0 lg:block hidden"
                />

                <img
                    src={ServiceMFrame}
                    alt="Service Frame Background"
                    className="absolute inset-0 w-full h-full object-cover z-0 lg:hidden block"
                />

                {/* Foreground Content */}
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full px-4 py-5 md:py-0">
                    <div className="flex lg:flex-row flex-col items-center gap-4 md:gap-6">
                        <img
                            src={Pic1}
                            alt=""
                            className="w-[250px] lg:w-[300px] object-contain"
                        />

                        <p className="text-[#FFE177] md:text-[18px] lg:text-[20px] leading-snug max-w-full text-center md:text-left">
                            SHREE MAHAGANAPATHITHUNAI<br />
                            OM NAMONARAYANAYA !GURUJIARUMUGAMKAPPU !!<br />
                            SRI AGASTHIYA MAHASIVA SOOKSHMA VAKKIYA NADI <br /> JOTHIDA NILAYAM
                        </p>
                    </div>

                    <div className="flex flex-row items-center mt-4 md:mt-0">
                        <img
                            src={Pic2}
                            alt=""
                            className="w-[250px] lg:w-[300px] object-contain mr-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Left Decoration */}
            <div className="absolute lg:-bottom-57 left-0 -z-20">
                <img src={BotL} alt="" className="w-32 md:w-60 lg:w-60 lg:block hidden" />
            </div>
        </div>
    );
};

export default ServiceFrame;