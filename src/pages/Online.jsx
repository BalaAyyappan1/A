
import SectionHeader from "../components/ReUsable/SectionHeader"
import ServiceFrame from "../components/ReUsable/ServiceFrame"
import Details from "../components/Online/Details"
import Blessing from "../components/Online/Blessing"
import { OnlineHero, OnlineHeroM } from "../components/ReUsable/Images"

const Online = () => {
  return (
    <div >
      <div className="relative">
                    <img src={OnlineHero} alt="Poojas" className="w-full h-full md:block hidden" />
                    <img src={OnlineHeroM} alt="Poojas" className="w-full h-[70dvh] md:hidden" />
            
                    {/* <a
                      href="https://www.AgaththiyarKudil.com"
                      className="bg-[#F4951F] rounded-tl-xl py-2 px-5 text-[13px] md:text-[17px] font-medium text-[#612C32] absolute bottom-13 right-0 text-center"
                    >
                      www.AgaththiyarKudil.com
                    </a> */}
                  </div>
      <div className="md:h-[80px] h-[40px]"></div>
      <SectionHeader title="Our Services" />
      <ServiceFrame />
      <Details />
      <Blessing />

    </div>
  )
}

export default Online