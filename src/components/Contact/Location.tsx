import React from 'react'
import Align from '../ReUsable/Align'
import { motion } from 'framer-motion'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { GrMail } from 'react-icons/gr'
import { IoLogoWhatsapp } from 'react-icons/io'
import { PiClockFill } from 'react-icons/pi'

const Location = () => {
    return (
        <Align>
            <div className="mt-12 w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.566907963522!2d78.16188188119729!3d12.135146749727895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA4JzA2LjUiTiA3OMKwMDknNDIuNCJF!5e0!3m2!1sen!2sin!4v1740576140352!5m2!1sen!2sin"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

            </div>

            <motion.div
                style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
                className='flex flex-col bg-white  rounded-lg px-5 py-5 space-y-4 sm:space-y-6 lg:col-span-5 mt-10 mb-10'

            >
                <motion.h1
                    className='font-heading text-[#090909] text-lg sm:text-[20px] lg:text-xl font-semibold'

                >
                    Contact Information
                </motion.h1>

                {/* Address */}
                <motion.div
                    className='flex flex-row items-start gap-3'

                    whileHover={{ x: 4 }}
                >
                    <FaLocationDot className='text-black text-lg sm:text-[20px] mt-1 flex-shrink-0' />
                    <p className='font-heading text-sm sm:text-[15px] text-[#0E0E0E] leading-relaxed sm:leading-[22px] md:max-w-xl'>
                        Mr. A. Arul Prasath, 18, Milladi Street, Nagai District, Railway station Road,
                        VaitheeswaranKoil, Mayiladurai - 609 117,
                        Tamilnadu, South India.
                    </p>
                </motion.div>

                {/* Working Hours */}
                <motion.div
                    className='flex flex-row items-center gap-3'

                    whileHover={{ x: 4 }}
                >
                    <PiClockFill className='text-black text-lg sm:text-[20px] flex-shrink-0' />
                    <p className='font-heading text-sm sm:text-[15px] text-[#0E0E0E]'>Monday to Saturday</p>
                </motion.div>

                {/* Phone Numbers */}
               <motion.div
  className="flex flex-row items-center gap-3"
  whileHover={{ x: 4 }}
>
  <FaPhoneAlt className="text-black text-lg sm:text-[20px] flex-shrink-0" />
  <a
    href="tel:+919600778983"
    className="font-heading text-sm sm:text-[15px] text-[#0E0E0E] whitespace-nowrap"
  >
    +91 96007 78983
  </a>
  <span className="text-[#0E0E0E]">|</span>
  <a
    href="tel:+919600775851"
    className="font-heading text-sm sm:text-[15px] text-[#0E0E0E] whitespace-nowrap"
  >
    +91 96007 75851
  </a>
</motion.div>

{/* Contact Row */}
<div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
  {/* WhatsApp */}
  <motion.div
    className="flex flex-row items-center gap-3"
    whileHover={{ x: 4 }}
  >
    <IoLogoWhatsapp className="text-black text-lg sm:text-[20px] flex-shrink-0" />
    <a
      href="https://wa.me/919600778983"
      target="_blank"
      rel="noopener noreferrer"
      className="font-heading text-sm sm:text-[15px] text-[#0E0E0E] whitespace-nowrap"
    >
      +91 96007 78983
    </a>
  </motion.div>

  {/* Email */}
  <motion.div
    className="flex flex-row items-center gap-3"
    whileHover={{ x: 4 }}
  >
    <GrMail className="text-black text-lg sm:text-[20px] flex-shrink-0" />
    <a
      href="mailto:agarulprasath@gmail.com"
      className="font-heading text-sm sm:text-[15px] text-[#0E0E0E] break-words"
    >
      agarulprasath@gmail.com
    </a>
  </motion.div>
</div>

            </motion.div>
        </Align>
    )
}

export default Location