import React, { useState } from "react";
import Align from '../ReUsable/Align'
import { PoojaBanner, PoojaImage } from '../ReUsable/Images'
import SectionHeader from '../ReUsable/SectionHeader'
import { Poojas } from '../../data/Poojas'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Homam = () => {
    const [showAll, setShowAll] = useState(false);

    // Show first 12 items if not expanded
    const visiblePoojas = showAll ? Poojas : Poojas.slice(0, 12);
    return (
        <div className="relative">
            <img
                src={PoojaBanner}
                alt="People Background"
                className="absolute  w-full h-full object-cover -z-10"
            />
            <Align className="relative z-10 py-20 ">
                <SectionHeader title="Poojas & Homam" />
                {/* Section 1 */}
                <div className="w-full">
                    {/* Fixed heading alignment and responsive styling */}
                    <div className="bg-[#49000B] text-[#FFE177] flex items-center justify-center font-heading h-12 sm:h-[47px] rounded-xl">
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold px-4 text-center">
                            What is Poojas & Homams ?
                        </h2>
                    </div>

                    {/* Responsive layout with 50/50 split on large screens */}
                    <div
                        className={`p-4 sm:p-6 flex flex-col-reverse gap-4 sm:gap-6 
                lg:flex-row lg:items-center lg:gap-8 
               
                bg-[#FFE177] rounded-[10px]`}
                    >
                        {/* Text content - 50% on large screens */}
                        <div className="flex-1 lg:flex-[1] order-2 lg:order-none">
                            <p className="text-sm sm:text-base md:text-start text-center  leading-relaxed font-heading text-black">
                                Poojas are sacred rituals offered to deities with devotion, with chanting of mantras, lighting of lamps, and offering flowers, fruits, and prayers. They bring peace of mind, spiritual upliftment, and divine blessings in daily life. Homam is a ritual performed by offering objects in fire . This is also commonly called a sacrifice. This is considered an important ritual in Hinduism. Homam is a way of worshipping deities, receiving blessings, and warding off evil spirits. Homam is a ritual performed in a fire pit (homakunda) In this, ghee, rice, herbal ingredients, etc. are placed on fire and mantras are recited. This fire is considered a bridge between gods and humans. At Agaththiyarkudil, we perform traditional Poojas and Homams with complete Vedic discipline, helping devotees receive blessings for prosperity, peace, and spiritual growth.
                            </p>
                        </div>

                        {/* Image - 50% on large screens */}
                        <div className="flex-shrink order-1 lg:order-none w-full lg:flex-[1]">
                            <img
                                src={PoojaImage}
                                alt="What is Poojas & Homams ?"
                                className="md:w-full w-100 sm:h-100 lg:h-72 xl:h-92 object-contain rounded-xl"
                            />
                        </div>

                    </div>
                </div>
                {/* Section 2 */}

                <div className="w-full py-20">
                    {/* Fixed heading alignment and responsive styling */}
                    <div className="bg-[#49000B] text-[#FFE177] flex items-center justify-center font-heading h-12 sm:h-[47px] rounded-xl">
                        <h2 className="text-base sm:text-lg md:text-xl font-semibold px-4 text-center">
                            Poojas & Homams
                        </h2>
                    </div>
                    <div className="relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 mt-6">
                            {visiblePoojas.map((pooja, index) => (
                                <div
                                    key={index}
                                    className="bg-[#FFE177] rounded-xl p-4 flex flex-col items-center relative pb-8"
                                >
                                    <img
                                        src={pooja.img}
                                        alt={pooja.title}
                                        className="w-full h-40 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-[#49000B] font-semibold text-[12px] mb-2 text-center">
                                        {pooja.title}
                                    </h3>
                                    <a
                                        href="/book-appointment"
                                        className="
    absolute 
    -bottom-3 sm:-bottom-4     /* Slightly more space on larger screens */
    left-1/2 
    -translate-x-1/2 
    bg-[#49000B] 
    text-[#FFE177] 
    px-3 py-1 sm:px-4 sm:py-2 /* Smaller padding on mobile, bigger on desktop */
    rounded-full 
    text-[11px] sm:text-[13px] md:text-[14px] font-medium 
    shadow-lg 
    hover:scale-105 
    transition-transform
whitespace-nowrap
  "
                                    >
                                        Book Appointment
                                    </a>

                                </div>
                            ))}
                        </div>



                        {/* View More Button (only if there are more than 12 items) */}
                        {Poojas.length > 12 && (
                            <div className="flex justify-center mt-20">
                                <button
                                    onClick={() => setShowAll(!showAll)}
                                    className="flex items-center gap-2 text-[#793A00] cursor-pointer text-[20px] font-medium hover:text-[#7A0011] transition-colors"
                                >
                                    {showAll ? (
                                        <>
                                            View Less <FiChevronUp size={25} />
                                        </>
                                    ) : (
                                        <>
                                            View More <FiChevronDown size={25} />
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>




                </div>


            </Align>
        </div>
    )
}

export default Homam