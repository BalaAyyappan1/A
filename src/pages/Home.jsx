import { useEffect } from 'react'
import Service from '../components/Home/Service'
import Why from '../components/Home/Why'
import Tradition from '../components/Home/Tradition'
import People from '../components/Home/People'
import Blogs from '../components/Home/Blogs'
import Message from '../components/Home/Message'
import StatsSection from '../components/Home/Stats'
import Generation from '../components/Home/Generation'
import { Sachi, Frame, HeroHome, HeroHomeM } from '../components/ReUsable/Images'
import FrameL from '../components/Home/FrameL'
import Hero from '../components/Home/Hero'
import Top from '../components/Home/Top'


const Home = ({ scrollTo }) => {
  useEffect(() => {
    if (scrollTo) {
      const section = document.getElementById(scrollTo)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [scrollTo])

  return (
    <div>
      <Top />
<Hero />
      <Service />
      <Why />
      <StatsSection />
      <Generation />
      <div className="bg-[#FFE177] flex flex-col md:flex-row items-center  md:items-center justify-center w-full min-h-[301px] p-6 md:p-10 gap-6">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <img src={Sachi} alt="Swami Sachidanandham" className="w-32 md:w-48 lg:w-56 h-auto object-contain" />
        </div>

        {/* Right Text */}
        <div className="flex flex-col justify-center text-center md:text-left max-w-3xl">
          <p className="text-lg md:text-xl font-medium mb-3 leading-relaxed text-black">
            “உண்மையான ஆன்மிக வழிகாட்டுதல் என்பது விதியை மாற்றுவதல்ல; அதை ஞானத்தோடு வாழ்வதே”
          </p>
          <p className="text-lg md:text-xl font-medium mb-4 leading-relaxed text-black">
            “True spiritual guidance is not in changing destiny, but in understanding and living it with wisdom”
          </p>
          <p className="text-sm md:text-base font-semibold text-right text-black">
            – Swami Sachidanandham
          </p>
        </div>
      </div>
      <Tradition />
     <FrameL />
      <People id="testimonial" />
      <Blogs id="blog" />
      <Message />
    </div>
  )
}

export default Home
