import React from 'react'
import { Kandams } from '../../data/Kandams'
import Align from '../ReUsable/Align'

const KandamList = () => {
  return (
    <Align>
      <div className="w-full py-16">
        <div className="relative">
          {/* Grid layout with equal height cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
            {Kandams.map((pooja, index) => (
              <div
                key={index}
                className="bg-[#FFE177] border border-black  p-4 flex flex-col h-full min-h-[420px] md:min-h-[460px] xl:min-h-[630px] shadow-sm"
              >
                {/* Number */}
                <h1 className="text-start text-[16px] md:text-[18px] text-[#212529]">
                  {pooja.no}
                </h1>

                {/* Image */}
                <img
                  src={pooja.image}
                  alt={pooja.title}
                  className="w-full h-52 md:h-60 lg:h-64 object-contain rounded-lg mb-4"
                />

                {/* Title */}
                <h3 className="text-[#49000B] font-semibold text-[15px] md:text-[17px] mb-2 text-start">
                  {pooja.title}
                </h3>

                {/* Description */}
                <p className="text-[#49000B] text-[11px] sm:text-[12px] md:text-[14px] text-start flex-grow leading-snug">
                  {pooja.desc}
                </p>

                {/* Button */}
                <a
                  href="/book-appointment"
                  className="
                    bg-[#601511]
                    text-[#FFE177]
                    w-full
                    py-2
                    text-center
                    rounded-full
                    text-[12px] sm:text-[13px] md:text-[14px]
                    font-medium
                    shadow-md
                    mt-auto
                    hover:scale-105
                    transition-transform
                    whitespace-nowrap
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
