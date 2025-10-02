import React, { useRef } from 'react';
import { BoxIcon, Quotes } from '../ReUsable/Images';
import { People1, People2, People3, PeopleBg } from '../ReUsable/Images';
import Align from '../ReUsable/Align';
import SectionHeader from '../ReUsable/SectionHeader';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  { img: People1 },
  { img: People2 },
  { img: People3 },
];

const contents = [
  {
    name: 'V.Santhosh, Chennai',
    desc: 'Its quite wonderful experience for me. I have any idea about this centre before I come here. Now I got some idea about my future. May be I will visit again. One more thing the Nadi Astrology explained me clearly and crisply. I and my family need his blessing and support for the rest of our lives.'
  },
  {
    name: 'Subramanian, Malaysia',
    desc: 'I am from Malaysia. We have seen the Nadi Astrology for our two children. It was amazing that from the thumb print they were able to identify the name, parents name, date of birth, Rasi, Nakshatra, Parents profession. They had predicted many things of the children. Which is yet to be seen. Hopefully all goes well.'
  },
  {
    name: 'Suresh Kondeti',
    desc: "This is my first visit. Before I have not gone to any astrologer. In the beginning I could not believe the 'Nadi'. But after interacting with the same time Nadi Reader. I started believing him. Whatever he said it was correct. I listened 'Sukshma Nadi' I am very much happy after listening it."
  },
];

const People = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="testimonial" className="relative w-full overflow-hidden">
      {/* Background */}
      <img
        src={PeopleBg}
        alt="People Background"
        className="absolute w-full h-full object-cover z-0"
      />
      <Align>
        {/* Our Visitors Section */}
        <section className="relative z-10 flex flex-col items-center justify-center py-16">
          <SectionHeader title="Our Visitors" />

          {/* Desktop Grid */}
          <div className="hidden sm:flex flex-wrap justify-center gap-8">
            {images.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={item.img}
                  alt={`Client ${index + 1}`}
                  className="bg-[#FFE177] p-4 w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] rounded-2xl object-cover"
                />
              </div>
            ))}
          </div>

          {/* Mobile Scroll */}
          <div className="sm:hidden w-full px-4">
            <div
              ref={scrollRef1}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2"
            >
              {images.map((item, index) => (
                <div key={index} className="flex-shrink-0 snap-center">
                  <img
                    src={item.img}
                    alt={`Client ${index + 1}`}
                    className="bg-[#FFE177] p-4 w-[250px] h-[250px] rounded-2xl object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Nav buttons */}
            <div className="flex justify-center items-center space-x-6 mt-4">
              <button
                onClick={() => scroll(scrollRef1, "left")}
                className="p-3 bg-[#49000B] text-white rounded-full shadow-md hover:bg-[#660015] transition"
                aria-label="Scroll left"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => scroll(scrollRef1, "right")}
                className="p-3 bg-[#49000B] text-white rounded-full shadow-md hover:bg-[#660015] transition"
                aria-label="Scroll right"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </section>

        {/* What Our People Say Section */}
        <section className="relative z-10 flex flex-col items-center justify-center py-16">
          <SectionHeader title="What Our People Say" />
          
          {/* Desktop Grid */}
          <div className="hidden sm:flex flex-wrap justify-center gap-6">
            {contents.map((content, index) => (
              <div key={index} className="relative w-[350px] h-[450px] flex items-center justify-center">
                {/* Corner borders */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#49000B] -z-10"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#49000B] -z-10"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#49000B] -z-10"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#49000B] -z-10"></div>

                {/* Inner content */}
                <div className="bg-[#FFE177] p-6 w-[350px] h-[450px] flex flex-col justify-between rounded-xl shadow-md">
                  <p className="text-[#49000B] italic mb-4">"{content.desc}"</p>
                  <div className="flex flex-col space-y-10 items-center">
                    <img src={Quotes} alt='Quotes' className='w-5'/>
                    <h3 className="text-[#49000B] font-semibold text-center">- {content.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Scroll */}
          <div className="sm:hidden w-full px-4">
            <div
              ref={scrollRef2}
              className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-2"
            >
              {contents.map((content, index) => (
                <div key={index} className="flex-shrink-0 relative w-[300px] h-[420px] flex items-center justify-center snap-center">
                  {/* Corner borders */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#49000B] -z-10"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#49000B] -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#49000B] -z-10"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#49000B] -z-10"></div>

                  {/* Inner content */}
                  <div className="bg-[#FFE177] p-6 w-[300px] h-[420px] flex flex-col justify-between rounded-xl shadow-md">
                    <p className="text-[#49000B] md:text-[20px] text-[13px] italic mb-4">"{content.desc}"</p>
                    <div className="flex flex-col space-y-8 items-center">
                      <img src={Quotes} alt='Quotes' className='w-5'/>
                      <h3 className="text-[#49000B] font-semibold text-center">- {content.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Nav buttons */}
            <div className="flex justify-center items-center space-x-6 mt-4">
              <button
                onClick={() => scroll(scrollRef2, "left")}
                className="p-3 bg-[#49000B] text-white rounded-full shadow-md hover:bg-[#660015] transition"
                aria-label="Scroll left"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => scroll(scrollRef2, "right")}
                className="p-3 bg-[#49000B] text-white rounded-full shadow-md hover:bg-[#660015] transition"
                aria-label="Scroll right"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </section>
      </Align>
    </div>
  );
};

export default People;