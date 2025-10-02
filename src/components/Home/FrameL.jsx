import React from 'react'
import {Frame} from '../ReUsable/Images'

const FrameL = () => {
  return (
    <div className="relative bg-[#49000B] lg:h-[103px] flex items-center justify-center overflow-hidden">
      {/* Background Frame - Add loading optimization */}
      <img
        src={Frame}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ willChange: 'auto' }}
      />
      
      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4 py-5 md:py-0">
        <p className="text-[#FFE177] md:text-[18px] lg:text-[20px] leading-snug max-w-full text-center">
          THE POWER TO TRANSFORM YOUR DESTINY LIES WITHIN - NADI ASTROLOGY UNLOCKS IT
        </p>
      </div>
    </div>
  )
}

export default FrameL