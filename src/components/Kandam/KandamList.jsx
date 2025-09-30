import React from 'react'
import { Kandams } from '../../data/Kandams'
import Align from '../ReUsable/Align'

const KandamList = () => {
  return (
    <Align>
      <div className="w-full py-5 pb-10">
        <div className="relative">
          {/* Grid layout with responsive breakpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {Kandams.map((pooja, index) => (
              <div
                key={index}
                className={`
                  relative bg-[#FFE177] border border-black p-4 flex flex-col 
                  h-full shadow-sm overflow-hidden  w-full
                  min-h-[500px] md:min-h-[500px] lg:min-h-[540px] xl:min-h-[600px] 2xl:min-h-[640px] 
             
                `}
              >
                {/* Background only for index 14 */}
                {index === 14 && (
                  <div
                    className="absolute inset-0 bg-center bg-cover scale-110 opacity-40"
                    style={{ backgroundImage: `url(${pooja.image})` }}
                  ></div>
                )}

                {/* Number */}
                <h1 className="text-start text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-[#212529] relative z-10">
                  {pooja.no}
                </h1>

                {/* Image */}
                <img
                  src={pooja.image}
                  alt={pooja.title}
                  className="w-full h-60 sm:h-48 md:h-56 lg:h-60 xl:h-64 object-contain rounded-lg mb-4 relative z-10"
                />

                {/* Title */}
                <h3 className="text-[#49000B] font-semibold text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] mb-2 text-start relative z-10">
                  {pooja.title}
                </h3>

                {/* Description */}
                <p className="text-[#49000B] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] text-start flex-grow leading-snug relative z-10">
                  {pooja.desc}
                </p>

                {/* Button */}
                <a
                  href="/contact"
                  className="
                    bg-[#601511]
                    text-[#FFE177]
                    w-full
                    py-2
                    text-center
                    rounded-full
                    text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]
                    font-medium
                    shadow-md
                    mt-auto
                    hover:scale-105
                    transition-transform
                    whitespace-nowrap
                    relative z-10
                  "
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Align>
  )
}

export default KandamList
