import React, { useRef } from 'react'
import { B3, B2, B1 } from '../ReUsable/Images'
import SectionHeader from '../ReUsable/SectionHeader'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const content = [
  { image: B1, serve: 'Service', title: 'Agaththiyar Kudil’s Journey in Serving Food to Seekers - October 2024 to Feb 2025', time: 'April 1, 2024' },
  { image: B2, serve: 'Pooja', title: 'Group Pooja - October 2024 to Feb 2025', time: 'May 14, 2024' },
  { image: B3, serve: 'Pooja', title: 'Komatha Pooja at Agaththiyar Kudil - October 2024 to Feb 2025', time: 'July 20, 2024' },
]

const Blogs = () => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth"
      })
    }
  }

  return (
    <div id="blog" className="py-10 px-4 md:px-10 bg-[#F8F8F8] min-h-screen">
      <SectionHeader title="Latest Blogs" />

      {/* Desktop & Tablet (Grid) */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-8">
        {content.map((item, index) => (
          <div 
            key={index} 
            className="bg-white h-[430px] border rounded-xl border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <img 
              src={item.image} 
              alt={item.serve} 
              className="w-full h-48 sm:h-56 md:h-48 object-cover" 
            />
            <div className="p-4 flex flex-col flex-1">
              <div className="mb-3">
                <span className="inline-block bg-[#49000B] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                  {item.serve}
                </span>
              </div>
              <h3 className="text-black text-base sm:text-lg mb-3">{item.title}</h3>
              <div className="mt-auto">
                <p className="text-[#656565] text-sm">{item.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile (Horizontal Scroll) */}
      <div className="sm:hidden mt-8">
        <div 
          ref={scrollRef} 
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {content.map((item, index) => (
            <div 
              key={index} 
              className="bg-white min-w-[280px] max-w-[300px] h-[430px] border rounded-xl border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex-shrink-0 flex flex-col"
            >
              <img 
                src={item.image} 
                alt={item.serve} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4 flex flex-col flex-1">
                <div className="mb-3">
                  <span className="inline-block bg-[#49000B] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    {item.serve}
                  </span>
                </div>
                <h3 className="text-black text-base mb-3">{item.title}</h3>
                <div className="mt-auto">
                  <p className="text-[#656565] text-sm">{item.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <button 
            onClick={() => scroll("left")} 
            className="p-3 bg-white text-black rounded-2xl border border-gray-300 transition cursor-pointer "
          >
            <FaChevronLeft />
          </button>
          <button 
            onClick={() => scroll("right")} 
            className="p-3 bg-white text-black rounded-2xl border border-gray-300 transition cursor-pointer"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blogs
