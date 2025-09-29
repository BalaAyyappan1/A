import React from 'react';
import { BoxIcon } from '../ReUsable/Images';
import { People1, People2, People3, PeopleBg } from '../ReUsable/Images';
import Align from '../ReUsable/Align';
import SectionHeader from '../ReUsable/SectionHeader';
const images = [
  { img: People1 },
  { img: People2 },
  { img: People3 },
];

const contents = [
  {
    name: 'V.Santhosh, Chennai',
    desc: 'It’s quite wonderful experience for me. I have any idea about this centre before I come here. Now I got some idea about my future. May be I will visit again. One more thing the Nadi Astrology explained me clearly and crisply. I and my family need his blessing and support for the rest of our lives.'
  },
  {
    name: 'Subramanian, Malaysia',
    desc: 'I am from Malaysia. We have seen the Nadi Astrology for our two children. It was amazing that from the thumb print they were able to identify the name, parents name, date of birth, Rasi, Nakshatra, Parents profession. They had predicted many things of the children. Which is yet to be seen. Hopefully all goes well.'
  },
  {
    name: 'Suresh Kondeti',
    desc: 'This is my first visit. Before I have not gone to any astrologer. In the beginning I could not believe the ‘Nadi’. But after interacting with the same time Nadi Reader. I started believing him. Whatever he said it was correct. I listened “Sukshma Nadi” I am very much happy after listening it.'
  },
];

const People = () => {
  return (

    <div id="testimonial" className="relative w-full">
      {/* Background */}
      <img
        src={PeopleBg}
        alt="People Background"
        className="absolute  w-full h-full object-cover z-0"
      />
      <Align>
        {/* Our Visitors Section */}
        <section className="relative z-10 flex flex-col items-center justify-center py-16">
<SectionHeader title="Our Visitors" />

          <div className="flex flex-wrap justify-center gap-8">
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
        </section>

        {/* What Our People Say Section */}
        <section className="relative z-10 flex flex-col items-center justify-center py-16">
          <img src={BoxIcon} alt="Box Icon" className="w-[40px] h-[24px] mb-4" />
          <h1 className="font-heading text-[#49000B] text-[32px] mb-10">What Our People Say</h1>

          <div className="flex flex-wrap justify-center gap-6">

            {contents.map((content, index) => (
              <div className='border-4 border-[#49000B]'>

                <div
                  key={index}
                  className="bg-[#FFE177] p-6 w-[300px] h-[400px] flex flex-col justify-between  rounded-xl shadow-md"
                >
                  <p className="text-[#49000B] italic mb-4">"{content.desc}"</p>
                  <h3 className="text-[#49000B] font-semibold text-center mt-4">- {content.name}</h3>
                </div>
              </div>
            ))}

          </div>
        </section>
      </Align>
    </div>
  );
};

export default People;
