import React from 'react'
import { PayHero, PayMobileHero } from '../components/ReUsable/Images'
import SectionHeader from '../components/ReUsable/SectionHeader'
import Bank from '../components/Payment/Bank'

const Payment = () => {
  return (
    <div>
<div className="relative">
        <img src={PayHero} alt="Poojas" className="w-full h-full md:block hidden" />
        <img src={PayMobileHero} alt="Poojas" className="w-full h-[70dvh] md:hidden" />

        <a
          href="https://www.AgaththiyarKudil.com"
          className="bg-[#F4951F] rounded-tl-xl py-2 px-5 text-[16px] md:text-[20px] font-medium text-[#612C32] absolute bottom-0 right-0 text-center"
        >
          www.AgaththiyarKudil.com
        </a>
      </div>
      <div className="md:h-[80px] h-[40px]"></div>

      <SectionHeader title="Online Payment" />
      <Bank />
    </div>
  )
}

export default Payment