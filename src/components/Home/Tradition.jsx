import React from 'react'
import { T1, T2, T3, T4, TadBg } from '../ReUsable/Images'
import SectionHeader from '../ReUsable/SectionHeader'
import DiamondLine from '../ReUsable/DiamondLine'

const imageSet1 = [
  { name: 'Sarguruji Sri Samy Sachthanandham', title: 'Great Grand Father', image: T1 },
  { name: 'Dr. Arulsiva Arumugam', title: 'Grand Father', image: T2 },
]

const imageSet2 = [
  { name: 'Shri A. Arul Ganesan', gen: '5th generation Maha Siva Sukshma Nadi Reader', image: T3 },
  { name: 'Shri A. Arul Prasath', gen: '6th generation Traditional Nadi Reader', image: T4 },
]

const PersonCard = ({ person, index }) => (
  <div className="flex flex-col items-center text-center bg-[#FFE177] backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl shadow-lg">
    <img
      src={person.image}
      alt={person.name}
      loading={index < 2 ? "eager" : "lazy"}
      decoding="async"
      className="w-full h-auto object-cover mb-2 sm:mb-3 md:mb-4"
    />
    <h3 className="text-[12px] sm:text-base md:text-lg font-semibold text-black">{person.name}</h3>
    <p className="text-[10px] sm:text-sm text-black">{person.title || person.gen}</p>
  </div>
)

const Tradition = () => {
  return (
    <div className="relative py-8 sm:py-12 md:py-16">
      {/* Background - Optimized */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${TadBg})` }}
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <SectionHeader title="Led by Tradition and Experience" />
          <div className="flex justify-center mt-4">
            <DiamondLine color="#49000B" thickness={3} diamondSize={20} />
          </div>
        </div>

        {/* First row */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto">
          {imageSet1.map((person, index) => (
            <PersonCard key={`set1-${index}`} person={person} index={index} />
          ))}
        </div>

        {/* Second row */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {imageSet2.map((person, index) => (
            <PersonCard key={`set2-${index}`} person={person} index={index + 2} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tradition