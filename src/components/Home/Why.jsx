import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../ReUsable/SectionHeader";
import { NadiImage, HistoryImage, LegacyImage, WhyTBG, WhyTBG1 } from "../ReUsable/Images";
import Align from "../ReUsable/Align";


const content = [
  {
    content:
      "Agaththiyar Kudil was founded by Dr. Arulsiva Arumugam, a revered Nadi astrologer known for his sanctity and accurate predictions. He introduced the divine science of Nadi astrology to seekers around the world. His son, Shri A. Arul Ganesan, a fifth-generation Maha Siva Sukshma Nadi Reader, carried this sacred tradition with devotion and guidance. Today, his grandson, Arul Prasath, represents the 6th generation, continuing the legacy with dedication and spiritual insight. With Agaththiyar's wisdom, he helps seekers understand their karma, find remedies, and move towards peace and clarity.",
    image: LegacyImage,
  },
  {
    title: "Carrying Forward the Sacred Legacy of Nadi Astrology",
    content:
      "Agaththiyar Kudil, located in Vaithiswarankoil, is a sacred center preserving the wisdom of Saint Agaththiyar. Founded by Dr. Arulsiva Arumugam and carried forward by Shri A. Arul Ganesan, the legacy now continues with his son, Arul Prasath, the 6th-generation Maha Siva Sukshma Nadi Reader. For generations, our family has guided seekers to understand their karma and discover life's true purpose. Through accurate and compassionate readings, we offer remedies for peace, clarity, and spiritual growth, upholding this timeless tradition with devotion and authenticity.",
    image: HistoryImage,
  },
];

const Why = () => {
  return (
    <div className="relative overflow-hidden py-20">
      {/* Top Left Background */}
      <div className="absolute top-0 left-0 -z-10">
        <img src={WhyTBG} alt="" className="w-[300px]" />
      </div>

      {/* Bottom Center Background */}
      <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 -z-10">
        <img src={WhyTBG1} alt="" className="w-[250px]" />
      </div>


      {/* Right Side Background */}
      <div className="absolute top-1/2 -right-30 -translate-y-1/2 -z-10">
        <img src={WhyTBG1} alt="" className="w-[250px]" />
      </div>


      <div className="absolute -bottom-50 right-0 -z-10">
        <img src={WhyTBG} alt="" className="w-[400px] rotate-180" />
      </div>
      <Align>
        <SectionHeader title="Agaththiyar Kudil" />

        <section className="space-y-1 sm:space-y-1 lg:space-y-10 md:mt-10 z-10">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full"
            >
              {/* Content & Image */}
              <div
                className={`flex flex-col gap-4 sm:gap-6 
                  lg:items-center lg:justify-between lg:gap-8
                  ${index === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
              >
                {/* Text */}
                <div className="flex-1 order-2 lg:order-none">
                  <p className="text-sm sm:text-base md:text-start text-center leading-[35px] font-heading text-black">
                    {item.content}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1 order-1 lg:order-none">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full md:h-99 object-contain rounded-xl"
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

export default Why;