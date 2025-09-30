import React from 'react'
import { PoojaHero, PoojaMobileHero } from '../components/ReUsable/Images'
import Homam from '../components/Poojas/Homam'

const Poojas = () => {
  return (
    <div>
       <div className="md:h-[80px] h-[40px]"></div>

      <div className="relative">
        <img src={PoojaHero} alt="Poojas" className="w-full h-full md:block hidden" />
        <img src={PoojaMobileHero} alt="Poojas" className="w-full h-[70dvh] md:hidden" />

        <a
          href="https://www.AgaththiyarKudil.com"
          className="bg-[#F4951F] rounded-tl-xl py-2 px-5 text-[16px] md:text-[20px] font-medium text-[#612C32] absolute bottom-0 right-0 text-center"
        >
          www.AgaththiyarKudil.com
        </a>
      </div>


      <Homam />

    </div>
  )
}

export default Poojas