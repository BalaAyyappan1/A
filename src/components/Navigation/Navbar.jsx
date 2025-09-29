import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CompanyLogo } from '../ReUsable/Images'
import { navLinks } from '../../constants/Nav'


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Get current path on mount and when location changes
  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  const handleLinkClick = (path) => {
    setActiveLink(path)
    setIsMenuOpen(false) // Close mobile menu when link is clicked
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.div
      className='bg-[#FFE177] shadow-[0px_4px_4px_0px_#00000040] w-full relative z-50'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Main navbar container */}
      <div className='flex flex-row justify-between items-center h-[106px] px-4'>
        {/* Logo */}
        <motion.img
          src={CompanyLogo}
          alt="Company Logo"
          className='w-60 sm:w-72 md:w-80'
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        />

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center'>
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.path}
              onClick={() => handleLinkClick(link.path)}
              className={`
                relative text-[14px] xl:text-[16px] font-heading px-3 xl:px-5 py-1 rounded-full transition-all duration-300
                ${activeLink === link.path
                  ? 'text-[#FFE177] bg-[#49000B]'
                  : 'text-[#793A00] hover:text-[#5a2a00]'
                }
              `}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                
                ease: "easeOut"
              }}

            >
              {link.name}
              {/* Active state background animation */}
              {activeLink === link.path && (
                <motion.div
                  className="absolute inset-0 bg-[#793A00] rounded-full -z-10"
                  layoutId="activeBackground"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
              {/* Hover effect for non-active links */}
              {activeLink !== link.path && (
                <motion.div
                  className="absolute inset-0 bg-[#793A00] bg-opacity-10 rounded-full -z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <motion.button
          className='lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50 gap-1'
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Top line */}
          <motion.span
            className="block h-0.5 w-6 bg-[#793A00] origin-center"
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 4 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          
          {/* Middle line */}
          <motion.span
            className="block h-0.5 w-6 bg-[#793A00] origin-center"
            animate={{
              opacity: isMenuOpen ? 0 : 1,
              scale: isMenuOpen ? 0 : 1
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          
          {/* Bottom line */}
          <motion.span
            className="block h-0.5 w-6 bg-[#793A00] origin-center"
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -4 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu - Expands within navbar container */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden border-t border-[#793A00] border-opacity-20"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ overflow: 'hidden' }}
          >
            <div className="flex flex-col py-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`
                    relative text-[16px] font-heading px-6 py-3 transition-all duration-300 border-b border-[#793A00] border-opacity-10 last:border-b-0
                    ${activeLink === link.path
                      ? 'text-[#FFE177] bg-[#793A00]'
                      : 'text-[#793A00] hover:bg-[#793A00] hover:bg-opacity-10'
                    }
                  `}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
              
                >
                  {link.name}
                  {/* Active indicator for mobile */}
                  {activeLink === link.path && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFE177]"
                      layoutId="mobileActiveIndicator"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30
                      }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar