import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CompanyLogo } from '../ReUsable/Images'
import { navLinks } from '../../constants/Nav'


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    setActiveLink(window.location.pathname)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLinkClick = (path) => {
    setActiveLink(path)
    setIsMenuOpen(false)
    setOpenDropdown(null)
    setIsMobileDropdownOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setIsMobileDropdownOpen(false)
  }

  const toggleDropdown = (linkName) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName)
  }

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen)
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
        <a href="/">
          <motion.img
            src={CompanyLogo}
            alt="Company Logo"
            className='w-60 sm:w-72 md:w-80'
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          />
        </a>
        
        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center'>
          {navLinks.map((link, index) => (
            <div key={index} className="relative" ref={link.hasDropdown ? dropdownRef : null}>
              {link.hasDropdown ? (
                // Dropdown link
                <>
                  <motion.button
                    onClick={() => toggleDropdown(link.name)}
                    className={`
                      relative text-[14px] xl:text-[16px] font-heading px-3 xl:px-5 py-1 rounded-full transition-all duration-300 flex items-center gap-1
                      ${activeLink.startsWith(link.path)
                        ? 'text-[#FFE177] bg-[#49000B]'
                        : 'text-[#793A00] hover:text-[#5a2a00]'
                      }
                    `}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {link.name}
                    <motion.svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      animate={{ rotate: openDropdown === link.name ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path d="M6 8L2 4h8L6 8z" />
                    </motion.svg>
                    
                    {activeLink.startsWith(link.path) && (
                      <motion.div
                        className="absolute inset-0 bg-[#793A00] rounded-full -z-10"
                        layoutId="activeBackground"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                    
                    {!activeLink.startsWith(link.path) && (
                      <motion.div
                        className="absolute inset-0 bg-[#793A00] bg-opacity-10 rounded-full -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {openDropdown === link.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden min-w-[200px]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.dropdownItems.map((item, idx) => (
                          <motion.a
                            key={idx}
                            href={item.path}
                            onClick={() => handleLinkClick(item.path)}
                            className={`
                              block px-4 py-3 text-[14px] font-heading transition-colors
                              ${activeLink === item.path
                                ? 'bg-[#793A00] text-[#FFE177]'
                                : 'text-[#793A00] hover:bg-[#FFE177]'
                              }
                            `}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            {item.name}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                // Regular link
                <motion.a
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
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {link.name}
                  
                  {activeLink === link.path && (
                    <motion.div
                      className="absolute inset-0 bg-[#793A00] rounded-full -z-10"
                      layoutId="activeBackground"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {activeLink !== link.path && (
                    <motion.div
                      className="absolute inset-0 bg-[#793A00] bg-opacity-10 rounded-full -z-10"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              )}
            </div>
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
          <motion.span
            className="block h-0.5 w-6 bg-[#793A00] origin-center"
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 4 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-[#793A00] origin-center"
            animate={{ opacity: isMenuOpen ? 0 : 1, scale: isMenuOpen ? 0 : 1 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-[#793A00] origin-center"
            animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -4 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
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
                <div key={index}>
                  {link.hasDropdown ? (
                    <>
                      <motion.button
                        onClick={toggleMobileDropdown}
                        className={`
                          w-full text-left relative text-[16px] font-heading px-6 py-3 transition-all duration-300 border-b border-[#793A00] border-opacity-10 flex justify-between items-center
                          ${isMobileDropdownOpen || activeLink.startsWith(link.path)
                            ? 'text-[#793A00] bg-[#793A00] bg-opacity-10'
                            : 'text-[#793A00]'
                          }
                        `}
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                      >
                        {link.name}
                        <motion.svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          animate={{ rotate: isMobileDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path d="M8 10.667L4 6.667h8L8 10.667z" />
                        </motion.svg>
                      </motion.button>

                      <AnimatePresence>
                        {isMobileDropdownOpen && (
                          <motion.div
                            className="bg-[#FFE177] bg-opacity-50"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ overflow: 'hidden' }}
                          >
                            {link.dropdownItems.map((item, idx) => (
                              <motion.a
                                key={idx}
                                href={item.path}
                                onClick={() => handleLinkClick(item.path)}
                                className={`
                                  block text-[15px] font-heading pl-10 pr-6 py-3 transition-all duration-300 border-b border-[#793A00] border-opacity-10 relative
                                  ${activeLink === item.path
                                    ? 'text-[#FFE177] bg-[#793A00]'
                                    : 'text-[#793A00] hover:bg-[#793A00] hover:bg-opacity-10'
                                  }
                                `}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.05 }}
                              >
                                <span className="mr-2">•</span>
                                {item.name}
                                {activeLink === item.path && (
                                  <motion.div
                                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFE177]"
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                  />
                                )}
                              </motion.a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.a
                      href={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className={`
                        block relative text-[16px] font-heading px-6 py-3 transition-all duration-300 border-b border-[#793A00] border-opacity-10
                        ${activeLink === link.path
                          ? 'text-[#FFE177] bg-[#793A00]'
                          : 'text-[#793A00] hover:bg-[#793A00] hover:bg-opacity-10'
                        }
                      `}
                      initial={{ x: -30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                    >
                      {link.name}
                      {activeLink === link.path && (
                        <motion.div
                          className="absolute left-0 top-0 bottom-0 w-1 bg-[#FFE177]"
                          layoutId="mobileActiveIndicator"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Navbar