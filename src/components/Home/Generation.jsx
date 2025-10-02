import React from "react";
import { Image1, Image2, Sachi, Vanak } from "../ReUsable/Images";
import Align from "../ReUsable/Align";

const Generation = () => {
    return (
        <Align>
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 py-20">
                {/* Left Image */}
                <div className="flex-shrink-0">
                    <img src={Image1} alt="Astrology" className="w-full max-w-[250px] rounded-lg" />
                </div>

                {/* Center Content */}
                <div className="flex flex-col text-center md:text-left gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <h1 className="text-xl md:text-2xl font-bold leading-snug text-[#49000B]">
                            Welcome to Agaththiyar Kudil <br />
                            6th Generation Sivanadi Astrology Centre
                        </h1>
                        <img src={Vanak} alt="Vanak" className="w-12 h-12" />
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        The official website of <strong>Mr. A. Arul Prasath</strong> of Sri Agaththiyar Kudil Astrology
                        Centre, Vaitheeswarankoil, the most renowned Nadi Astrology centre in the world. We take pride
                        in being recognized as the oldest and most well-known Nadi astrological center, serving blessed
                        souls across the globe through four generations of this divine heritage.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        Today, under the guidance of <strong>Swami Sachthanandham</strong>, the tradition continues with
                        devotion and authenticity. The sacred Nadi leaves themselves have revealed that Mr. A. Arul
                        Prasath, his son, is destined to be the future traditional heir of this divine service. Carrying
                        forward the lineage of his forefathers, he shall uphold and expand this spiritual legacy for
                        generations to come.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex-shrink-0">
                    <img src={Image2} alt="Astrology Service" className="w-full max-w-[250px] rounded-lg" />
                </div>
            </div>

          

        </Align>

    );
};

export default Generation;
