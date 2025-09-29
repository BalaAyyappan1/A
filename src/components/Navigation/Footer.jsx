import React from 'react'
import { motion } from 'framer-motion'
import { CompanyLogo } from '../ReUsable/Images'
import { navLinks } from '../../constants/Nav'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { PiClockFill } from "react-icons/pi";
import Align from '../ReUsable/Align';
import { FacebookIcon, YoutubeIcon, InstagramIcon } from '../ReUsable/Images';


const Socials = [
  {link:'#', icon: FacebookIcon,},
  {link:'#', icon: YoutubeIcon,},
  {link:'#', icon: InstagramIcon  ,},
]

const Footer = () => {
    const currentYear = new Date().getFullYear()
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
   
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className='bg-[#F8F2DE] flex flex-row items-center justify-center py-8 sm:py-10 md:py-12 lg:py-16'>
      <Align className='w-full px-4 sm:px-6 lg:px-8'>
        <motion.div 
          className='grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 xl:gap-16'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* Company Info Column - 35% width on large screens */}
          <motion.div 
            className='flex flex-col space-y-4 lg:space-y-6 lg:col-span-4'
            variants={itemVariants}
          >
            <motion.img 
              src={CompanyLogo} 
              alt="logo" 
              className='w-64 sm:w-72 md:w-80 lg:w-72 xl:w-80'
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <motion.p 
              className='font-heading text-sm sm:text-[15px] text-[#0E0E0E] leading-relaxed sm:leading-[25px]'
              variants={itemVariants}
            >
              Get your Nadi reading from the original Nadi family, guided by Shri A. Arul Ganesan (5th generation) and his son Arul Prasath (6th generation), renowned Maha Siva Sukshma Nadi Readers
            </motion.p>
            <motion.button 
              className='bg-[#49000B] text-white text-sm sm:text-[16px] px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-[#330008] transition-colors duration-300 w-fit'
              whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(73, 0, 11, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              Book Appointment
            </motion.button>

           <motion.div>
  {Socials.map((social, index) => (
    <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mr-4 last:mr-0 hover:opacity-80 transition-opacity"
    >
      <motion.img
        src={social.icon}
        alt="icons"
        className="w-10 h-10"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.3 }}
      />
    </a>
  ))}
</motion.div>




          </motion.div>
          
          {/* Navigation Links Column - 20% width on large screens */}
          <motion.div 
            className='flex flex-col space-y-4 lg:space-y-6 lg:col-span-3'
            variants={itemVariants}
          >
            <motion.h1 
              className='font-heading text-[#090909] text-lg sm:text-[20px] lg:text-xl font-semibold'
              variants={itemVariants}
            >
              Products
            </motion.h1>
            <motion.div 
              className='flex flex-col gap-2 sm:gap-3'
              variants={containerVariants}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.path}
                  className='text-[#0E0E0E] text-sm sm:text-[15px] hover:text-black duration-300 hover:pl-2 transition-all'
                  variants={linkVariants}
                  whileHover={{ x: 8, color: "#000000" }}
                  custom={index}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Contact Information Column - 45% width on large screens */}
          <motion.div 
            className='flex flex-col space-y-4 sm:space-y-6 lg:col-span-5'
            variants={itemVariants}
          >
            <motion.h1 
              className='font-heading text-[#090909] text-lg sm:text-[20px] lg:text-xl font-semibold'
              variants={itemVariants}
            >
              Contact Information
            </motion.h1>
            
            {/* Address */}
            <motion.div 
              className='flex flex-row items-start gap-3'
              variants={contactItemVariants}
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
              variants={contactItemVariants}
              whileHover={{ x: 4 }}
            >
              <PiClockFill className='text-black text-lg sm:text-[20px] flex-shrink-0' />
              <p className='font-heading text-sm sm:text-[15px] text-[#0E0E0E]'>Monday to Saturday</p>
            </motion.div>
            
            {/* Phone Numbers */}
            <motion.div 
              className='flex flex-row items-center gap-3'
              variants={contactItemVariants}
              whileHover={{ x: 4 }}
            >
              <FaPhoneAlt className='text-black text-lg sm:text-[20px] flex-shrink-0' />
              <p className='font-heading text-sm sm:text-[15px] text-[#0E0E0E] break-all sm:break-normal'>
                +91 96007 78983 | +91 9600775851
              </p>
            </motion.div>

            {/* Contact Row */}
            <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6'>
              {/* WhatsApp */}
              <motion.div 
                className='flex flex-row items-center gap-3'
                variants={contactItemVariants}
                whileHover={{ x: 4 }}
              >
                <IoLogoWhatsapp className='text-black text-lg sm:text-[20px] flex-shrink-0' />
                <p className='font-heading text-sm sm:text-[15px] text-[#0E0E0E]'>+91 96007 78983</p>
              </motion.div>
              
              {/* Email */}
              <motion.div 
                className='flex flex-row items-center gap-3'
                variants={contactItemVariants}
                whileHover={{ x: 4 }}
              >
                <GrMail className='text-black text-lg sm:text-[20px] flex-shrink-0' />
                <p className='font-heading text-sm sm:text-[15px] text-[#0E0E0E] break-all sm:break-normal'>
                  agarulprasath@gmail.com
                </p>
              </motion.div>
            </div>
          </motion.div>
          
        </motion.div>

       <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className='border-t border-[#0E0E0E] border-opacity-20 mt-8 pt-6 text-center text-sm text-[#0E0E0E]'
    >
      Copyright © {currentYear} Agaththiyar Kudil | All Rights Reserved | Terms and Conditions | Privacy Policy
    </motion.div>
      </Align>
    </div>
  )
}

export default Footer