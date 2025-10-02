import React from 'react'
import { motion } from 'framer-motion'

const Topbar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }} // start 50px above, invisible
      animate={{ y: 0, opacity: 1 }}   // animate to normal position, fully visible
      transition={{ duration: 0.8, ease: "easeOut" }} // animation timing
      className='flex items-center justify-center text-white bg-[#49000B] h-[73px] text-[10px] font-heading md:text-[16px] shadow-[0px_4px_4px_0px_#00000040]'
    >
      Contact Us : +91 96007 78983 | +91 9600775851 | Whatsapp :+91 96007 78983 | agarulprasath@gmail.com
    </motion.div>
  )
}

export default Topbar
