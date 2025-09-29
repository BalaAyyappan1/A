import AboutUs from "../components/About/AboutUs";
import Generation from "../components/About/Generation";
import Gallery from "../components/About/Gallery";
import { AboutHero, AboutMobileHero } from "../components/ReUsable/Images";

const About = () => {
  return (
    <div>
      <div className="relative">
        <img src={AboutHero} alt="Poojas" className="w-full h-full md:block hidden" />
        <img src={AboutMobileHero} alt="Poojas" className="w-full h-[70dvh] md:hidden" />

        <a
          href="https://www.AgaththiyarKudil.com"
          className="bg-[#F4951F] rounded-tl-xl py-2 px-5 text-[16px] md:text-[20px] font-medium text-[#612C32] absolute bottom-0 right-0 text-center"
        >
          www.AgaththiyarKudil.com
        </a>
      </div>
      <AboutUs />
      <Generation />
      <Gallery />
    </div>
  )
}

export default About