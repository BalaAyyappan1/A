import React from 'react'
import { HeroHomeM, HeroHome, T2, Pic2, WhatsappIcon } from '../ReUsable/Images'

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Background Images */}
      <img
        src={HeroHome}
        alt="Poojas"
        className="w-full h-auto object-cover hidden md:block"
      />
      <img
        src={HeroHomeM}
        alt="Poojas"
        className="w-full h-[80dvh] object-cover md:hidden"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex md:items-center items-start md:justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-4 md:py-6">
        <div className="w-full flex flex-col items-start justify-start gap-3 sm:gap-4 md:gap-6">
          {/* Left Card Section */}
          <div className=" bg-[#3C0911]/80 text-white rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-3 sm:gap-4 md:gap-6 w-full lg:max-w-3xl">
            <div className="flex flex-col sm:flex-row sm:items-center items-start gap-3 sm:gap-4 md:gap-6 w-full">
              {/* Founder Section */}
              <div className="flex md:flex-col flex-row gap-4 items-center sm:items-start text-center sm:text-left flex-shrink-0">
                <img
                  src={T2}
                  alt="Founder"
                  className="border bg-white border-black w-20 sm:w-24 md:w-32 lg:w-36 rounded"
                />
                <div className='text-left flex flex-col gap-1'>
                     <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mt-2">FOUNDER</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">Agaththiyar Kudil</p>
                    </div>
               
              </div>
              
              {/* Text Section */}
              <div className="flex-1 min-w-0">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold">
                  Dr. Arul Siva Arumugam S
                </h1>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2 leading-relaxed">
                  Dr. Arulsiva Arumugam, a revered Nadi astrologer, introduced the
                  sacred science of Nadi astrology to seekers worldwide with accuracy
                  and compassion. His legacy lives on through his grandson, Arul
                  Prasath, the 6th generation of Agaththiyar Kudil.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className=" block absolute bottom-0 right-0">
            <img
              src={Pic2}
              alt="Founder Image"
              className="w-100 xl:w-[400px] 2xl:w-[600px] rounded-lg shadow-lg object-cover"
            />
          </div>


         <div className='absolute bottom-5 right-5'>
  <a
    href="https://wa.me/919600778983" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <img 
      src={WhatsappIcon} 
      alt="WhatsApp Icon" 
      className='w-16 cursor-pointer hover:scale-105 transition-transform duration-300' 
    />
  </a>
</div>

        </div>
      </div>
    </div>
  )
}

export default Hero