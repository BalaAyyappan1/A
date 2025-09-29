import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ReUsable/SectionHeader";
import { NadiImage, HistoryImage, LegacyImage } from "../ReUsable/Images";
import Align from "../ReUsable/Align";

const content = [
  {
    title: "What is naadi jothidam?",
    content:
      "Living in favorable and unfavorable situations is part of life, but smiling through them is the art of life. With this spirit, we warmly welcome you all. Naadi Astrology, a divine science written by enlightened Rishis on palm leaves, offers sharp and accurate predictions for the destined. Our forefathers have served Kings, Chieftains, and generations with these sacred insights, and we continue this tradition with dedication. Today, Naadi Astrology guides people worldwide, beyond race and language, to live joyously and successfully. With more than 80% of seekers finding their Naadi records, we feel honored to serve you through this holy tradition.",
    image: NadiImage,
  },
  {
    title: "History Of Agathiyar Kudil",
    content:
      "Agathiyar Kudil, nestled in the serene village of Thiruvannamalai, Tamil Nadu, is a beacon of ancient wisdom and spiritual heritage. This sacred abode is dedicated to Sage Agathiyar, one of the revered Saptarishis in Hindu tradition, who is believed to have composed the profound Naadi scriptures. These palm-leaf manuscripts contain detailed astrological readings and life predictions for individuals, transcending time and geography. The Kudil serves as a sanctuary for seekers from around the world, offering them a chance to connect with their destiny through the age-old practice of Naadi astrology. With its rich history and spiritual significance, Agathiyar Kudil continues to be a place of pilgrimage and enlightenment for those in search of knowledge and guidance.",
    image: HistoryImage,
  },
  {
    title: "Carrying Forward the Sacred Legacy of Nadi Astrology",
    content:
      "Shri A. Arul Prasath is a devoted Traditional Maha Siva Sukshma Nadi Reader and the sixth-generation astrologer in the sacred lineage of Saint Agaththiyar. Trained under his father, Shri A. Arul Ganesan, he continues the divine tradition of Nadi reading with dedication and precision. He guides seekers worldwide with profound insights into karma, helping them find clarity, peace, and solutions to life's challenges. Known for his compassionate approach and accurate readings, he carries forward the wisdom preserved in the ancient palm leaves. At Agaththiyar Kudil, he works to make these teachings accessible to people across the globe. With faith and devotion, he ensures this spiritual legacy thrives for generations to come.",
    image: LegacyImage,
  },
];

const About = () => {
  return (
    <div className="md:py-20 py-10">
      <Align>
        <SectionHeader title="About Us" />

        <section className="space-y-6 sm:space-y-8 lg:space-y-10">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full"
            >
              {/* Title */}
              <div className="bg-[#49000B] text-[#FFE177] flex items-center justify-center font-heading h-12 sm:h-[47px] rounded-xl">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold px-4 text-center">
                  {item.title}
                </h2>
              </div>

              {/* Content & Image */}
              <div
                className={`p-4 sm:p-6 flex flex-col-reverse gap-4 sm:gap-6 
                  lg:flex-row lg:items-center lg:gap-8 
                  ${index === 1 ? "lg:flex-row-reverse" : ""} 
                  bg-[#FFE177] rounded-[10px]`}
              >
                {/* Text */}
                <div className="flex-1 lg:flex-[1] order-2 lg:order-none">
                  <p className="text-sm sm:text-base md:text-start text-center leading-relaxed font-heading text-black">
                    {item.content}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-shrink order-1 lg:order-none w-full lg:flex-[1]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="md:w-full w-100 sm:h-100 lg:h-72 xl:h-92 object-contain rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </Align>
    </div>
  );
};

export default About;
