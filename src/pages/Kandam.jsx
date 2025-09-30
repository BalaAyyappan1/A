import React from 'react'
import SectionHeader from '../components/ReUsable/SectionHeader'
import ServiceFrame from '../components/ReUsable/ServiceFrame'
import KandamList from '../components/Kandam/KandamList'
import Guide from '../components/Kandam/Guide'
import { KandamHero, KandamHeroM } from '../components/ReUsable/Images'

const Kandam = () => {
  return (
    <div>
       <div className="relative">
              <img src={KandamHero} alt="Poojas" className="w-full h-full md:block hidden" />
              <img src={KandamHeroM} alt="Poojas" className="w-full h-[70dvh] md:hidden" />
      
              <a
                href="https://www.AgaththiyarKudil.com"
                className="bg-[#F4951F] rounded-tl-xl py-2 px-5 text-[16px] md:text-[20px] font-medium text-[#612C32] absolute top-0 right-0 text-center"
              >
                www.AgaththiyarKudil.com
              </a>
            </div>
       <div className="md:h-[80px] h-[40px]"></div>
      <SectionHeader title="Our Services" />
      <ServiceFrame />
       <div className="md:h-[80px] h-[40px]"></div>
      <SectionHeader title="Kandams/Chapter List" />
      <KandamList />
      <Guide />
    </div>
  )
}

export default Kandam