import { S1, S3, S4, S5, S2 } from "../ReUsable/Images"
import SectionHeader from "../ReUsable/SectionHeader"

const contents = [
  { name: 'Nadi Astrology', image: S1 },
  { name: 'Our Tradition', image: S2 },
  { name: 'Kandams/chapter', image: S3 },
  { name: 'Online Prediction', image: S4 },
  { name: 'Poojas & Homams', image: S5 },
]

const Service = () => {
  return (
    <div className='h-100dvh w-full bg-[#FFE177] py-16 px-6'>
      <SectionHeader title="Our   Services" />
      <div className="container mx-auto flex flex-col items-center justify-center gap-6 max-w-4xl" >
        
        {/* First row - 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full  justify-center">
          {contents.slice(0, 3).map((item, index) => (
            <div key={index} className="flex flex-col items-center ">
              <img
                src={item.image}
                alt={item.name}
                className="w-48 border-2 rounded-t-xl border-[#49000B]"
              />
              <p className="w-48 bg-[#49000B] rounded-b-xl text-white text-center py-4 px-2 text-sm font-semibold mt-[-4px]">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* Second row - 2 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl justify-center">
          {contents.slice(3, 5).map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-48 border-2 rounded-t-xl border-[#49000B]"
              />
              <p className="w-48 bg-[#49000B] rounded-b-xl text-white text-center py-4 px-2 text-md font-semibold mt-[-4px]">
                {item.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Service
