import { motion } from 'framer-motion'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { GrMail } from 'react-icons/gr'
import { IoLogoWhatsapp } from 'react-icons/io'
import { PiClockFill } from 'react-icons/pi'
import { Arul, Award } from '../ReUsable/Images'

const Bank = () => {
    return (
        <div className='relative px-4 sm:px-6 lg:px-8'>
            {/* Top Container */}
            <div className='flex flex-col sm:flex-row max-w-5xl mx-auto bg-[#FFE177] justify-around rounded-2xl overflow-hidden relative z-10'>
                <img src={Arul} alt='Arul' className='w-full sm:w-1/3 object-cover sm:rounded-l-2xl' />
                <div className='w-full sm:w-1/2 text-[#49000B] flex flex-col justify-center p-6 sm:p-4'>
                    {/* Guruji Name - Single Line */}
                    <div className='mb-2'>
                        <span className='text-[18px] sm:text-[20px] md:text-[24px] font-semibold'>
                            Guruji A.ARUL PRASATH
                        </span>
                    </div>

                    {/* Agaththiyar Kudil - Second Line */}
                    <div className='mb-3'>
                        <span className='text-[14px] sm:text-[16px] md:text-[18px]'>
                            Agaththiyar Kudil
                        </span>
                    </div>

                    {/* Description with Award Image Inline */}
                    <p className="text-[12px] sm:text-[14px] mb-4 leading-relaxed">
                        The Original Hereditary Nadi Family of Vaitheeswaran kovil{" "}
                        <img
                            src={Award}
                            alt="award"
                            className="w-10 h-10 sm:w-12 sm:h-12 inline-block mx-2 align-middle"
                        />
                        6th Generation in Divine Service
                    </p>

                    {/* Contact - Clickable */}
                    <div className='text-[12px] sm:text-[14px] font-medium'>
                        Contact:
                        <a
                            href='tel:+919600778983'
                            className='ml-1 hover:underline'
                        >
                            +91 96007 78983
                        </a>
                        {' | '}
                        <a
                            href='mailto:agarulprasath@gmail.com'
                            className='hover:underline break-all'
                        >
                            agarulprasath@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Container - Positioned slightly below */}
            <motion.div
                style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)" }}
                className='flex flex-col bg-white border border-[#49000B] max-w-[1300px] mx-auto rounded-lg px-4 sm:px-6 lg:px-8  sm:pt-20 sm:pb-10 space-y-4 sm:space-y-6 -mt-10 mb-10 relative z-0'
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
                    <p className='font-heading text-sm sm:text-[15px] text-[#0E0E0E] leading-relaxed sm:leading-[22px]'>
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
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
                    whileHover={{ x: 4 }}
                >
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-black text-lg sm:text-[20px] flex-shrink-0" />
                        <a
                            href="tel:+919600778983"
                            className="font-heading text-sm sm:text-[15px] text-[#0E0E0E] whitespace-nowrap"
                        >
                            +91 96007 78983
                        </a>
                    </div>
                    <span className="text-[#0E0E0E] hidden sm:inline">|</span>
                    <a
                        href="tel:+919600775851"
                        className="font-heading text-sm sm:text-[15px] text-[#0E0E0E] whitespace-nowrap sm:ml-0 ml-9"
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



       <div className='bg-[#FFE177] flex flex-col items-start max-w-[1300px] mx-auto justify-center px-4 md:px-10 py-8 md:py-15 rounded-[20px] mb-10'>

    <motion.h1 className='font-heading text-[#49000B] text-lg text-start sm:text-[20px] lg:text-xl font-semibold'>
        Bank Details
    </motion.h1>

    <div className='bg-[#FAEBB5] flex flex-col md:flex-row items-start justify-between w-full mt-6 p-4 rounded-md'>
        
        {/* Bank Details - Left Side */}
        <div className='text-[#49000B] text-sm sm:text-base leading-relaxed md:w-2/3'>
            <p><strong>Name:</strong> ARUL PRASATH</p>
            <p><strong>Account number:</strong> 151018239192</p>
            <p><strong>Bank Name:</strong> INDUSIND BANK</p>
            <p><strong>Branch Code:</strong> 001048</p>
            <p><strong>IFSC:</strong> INDB0001048</p>
            <p><strong>Swift Code:</strong> INDBINBB</p>
            <p><strong>Branch:</strong> MAYILADUTHURAI</p>
            <p><strong>State:</strong> TAMIL NADU</p>
            <p><strong>Country:</strong> India</p>
            <p><strong>G-PAY:</strong> 9600778983</p>
        </div>

        {/* QR Code Placeholder - Right Side */}
        <div className='md:w-1/3 flex items-center justify-center mt-6 md:mt-0'>
            <div className='w-90 h-60 bg-white border-2 border-dashed border-gray-400 flex items-center justify-center'>
                <span className='text-xs text-gray-500'>QR Code Here</span>
            </div>
        </div>
    </div>

</div>

        </div>
    )
}

export default Bank