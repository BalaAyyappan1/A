import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { GrMail } from 'react-icons/gr'
import { IoLogoWhatsapp } from 'react-icons/io'
import { PiClockFill } from 'react-icons/pi'
import { BGCFrame } from '../ReUsable/Images'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Forms = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        dob: '',
        message: ''
    });
    const [selectedDate, setSelectedDate] = useState(null); // Added state for DatePicker
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState('');

    const getCurrentTimestamp = () => {
        const now = new Date();
        return now.toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const validateForm = () => {
        if (!formData.fullname || !formData.email || !formData.phone || !formData.dob) {
            setStatus('Error: Please fill in all required fields');
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('Error: Please enter a valid email address');
            return false;
        }
        return true;
    };

    const showToast = (message) => {
        console.log(`${type.toUpperCase()}: ${message}`);
    };

    // Handle DatePicker change
    const handleDateChange = (date) => {
        setSelectedDate(date);
        if (date) {
            // Format date as DD/MM/YYYY
            const formattedDate = date.toLocaleDateString('en-GB');
            setFormData({
                ...formData,
                dob: formattedDate
            });
        } else {
            setFormData({
                ...formData,
                dob: ''
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true);
        setStatus('');

        try {
            const timestamp = getCurrentTimestamp();
            const submissionData = {
                fullname: formData.fullname,
                email: formData.email,
                phone: formData.phone,
                dob: formData.dob,
                message: formData.message,
                timestamp
            };

            const GOOGLE_SCRIPT_URL = '';

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submissionData)
            });

            setStatus('Success: Your appointment request has been sent successfully!');
            showToast('Your appointment request has been sent successfully!', 'success');
            setFormData({
                fullname: '',
                email: '',
                phone: '',
                dob: '',
                message: ''
            });
            setSelectedDate(null); // Reset DatePicker
        } catch (error) {
            const errorMessage =
                typeof error === 'string'
                    ? error
                    : error?.message || 'Something went wrong';
            setStatus(`Error: ${errorMessage}`);
            showToast(errorMessage, 'error');
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className='relative min-h-screen py-10 sm:py-16 lg:py-20'>
            {/* Background Image */}
            <div className='absolute inset-0 w-full h-full z-[-1]'>
                <img src={BGCFrame} alt='' className='w-full h-full object-cover lg:block hidden' />
            </div>

            {/* Content Container */}
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
                    {/* Left Side - Contact Information */}
                    <div className='flex flex-col space-y-8 sm:space-y-10 lg:space-y-12'>
                        {/* Header Section */}
                        <div className='space-y-4'>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className='font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000]'
                            >
                                Get In Touch
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className='font-heading text-sm sm:text-base text-[#636377] leading-relaxed max-w-xl'
                            >
                                With deep devotion and commitment, we offer Nadi predictions to seekers around the world. Many of our clients have shared that our readings closely reflect and align with real events in their lives, reinforcing the divine accuracy of this ancient wisdom.
                            </motion.p>
                        </div>

                        {/* Visit Us Section */}
                        <div className='space-y-3'>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className='font-heading text-2xl sm:text-3xl font-semibold text-[#090909]'
                            >
                                Visit Us
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className='font-heading text-sm sm:text-base text-[#636377]'
                            >
                                Mr. A. Arul Prasath, <br />
                                Sri Arul Siva Arumugam Nadi Astrology Center, <br />
                                S/O A. Arul Ganesan
                            </motion.p>
                        </div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className='flex flex-col space-y-4 sm:space-y-5'
                        >
                            {/* Address */}
                            <motion.div
                                className='flex flex-row items-start gap-3'
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
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
                                transition={{ duration: 0.2 }}
                            >
                                <PiClockFill className='text-black text-lg sm:text-[20px] flex-shrink-0' />
                                <p className='font-heading text-sm sm:text-[15px] text-[#0E0E0E]'>Monday to Saturday</p>
                            </motion.div>

                            {/* Phone Numbers */}
                            <motion.div
                                className='flex flex-row flex-wrap items-center gap-2 sm:gap-3'
                                whileHover={{ x: 4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <FaPhoneAlt className='text-black text-lg sm:text-[20px] flex-shrink-0' />
                                <a
                                    href='tel:+919600778983'
                                    className='font-heading text-sm sm:text-[15px] text-[#0E0E0E] whitespace-nowrap hover:underline'
                                >
                                    +91 96007 78983
                                </a>
                                <span className='text-[#0E0E0E]'>|</span>
                                <a
                                    href='tel:+919600775851'
                                    className='font-heading text-sm sm:text-[15px] text-[#0E0E0E] whitespace-nowrap hover:underline'
                                >
                                    +91 96007 75851
                                </a>
                            </motion.div>

                            {/* Contact Row */}
                            <div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6'>
                                {/* WhatsApp */}
                                <motion.div
                                    className='flex flex-row items-center gap-3'
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <IoLogoWhatsapp className='text-black text-lg sm:text-[20px] flex-shrink-0' />
                                    <a
                                        href='https://wa.me/919600778983'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='font-heading text-sm sm:text-[15px] text-[#0E0E0E] whitespace-nowrap hover:underline'
                                    >
                                        +91 96007 78983
                                    </a>
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    className='flex flex-row items-center gap-3'
                                    whileHover={{ x: 4 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <GrMail className='text-black text-lg sm:text-[20px] flex-shrink-0' />
                                    <a
                                        href='mailto:agarulprasath@gmail.com'
                                        className='font-heading text-sm sm:text-[15px] text-[#0E0E0E] break-all hover:underline'
                                    >
                                        agarulprasath@gmail.com
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Form */}
                    <div className='flex flex-col w-full'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className='w-full'
                        >
                            <div className='space-y-4 mb-6'>
                                <h2 className='font-heading text-lg sm:text-xl font-bold text-[#090909]'>
                                    Fill Out this Form For Appointments/Enquiries
                                </h2>
                            </div>

                            <form onSubmit={handleSubmit} className='space-y-5'>
                                {/* Full Name & Phone Row */}
                                <div className='flex flex-col md:flex-row gap-4 w-full'>
                                    {/* Full Name */}
                                    <div className='w-full md:w-1/2'>
                                        <input
                                            type='text'
                                            id='fullname'
                                            name='fullname'
                                            value={formData.fullname}
                                            onChange={handleChange}
                                            required
                                            className='w-full px-4 py-4 border border-[#FF9933] bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent font-heading text-sm sm:text-base placeholder:text-gray-400'
                                            placeholder='Full Name'
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className='w-full md:w-1/2'>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={handleDateChange}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="Date of Birth"
                                            maxDate={new Date()}
                                            showYearDropdown
                                            scrollableYearDropdown
                                            yearDropdownItemNumber={100}
                                            className="block w-full px-4 py-4 border border-[#FF9933] bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent font-heading text-sm sm:text-base placeholder:text-gray-400"
                                            wrapperClassName="w-full"   // ✅ this applies to wrapper
                                        />

                                    </div>
                                </div>

                                {/* Email */}
                                <div className='w-full'>
                                    <input
                                        type='email'
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-4 border border-[#FF9933] bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent font-heading text-sm sm:text-base placeholder:text-gray-400'
                                        placeholder='Email'
                                    />
                                </div>

                                {/* Date of Birth - FIXED */}
                                <div className="w-full">
                                    <input
                                        type='tel'
                                        id='phone'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-4 py-4 border border-[#FF9933] bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent font-heading text-sm sm:text-base placeholder:text-gray-400'
                                        placeholder='Phone/Whatsapp number'
                                    />
                                </div>


                                {/* Message */}
                                <div className='w-full'>
                                    <textarea
                                        id='message'
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className='w-full px-4 py-4 border border-[#FF9933] bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9933] focus:border-transparent font-heading text-sm sm:text-base resize-none placeholder:text-gray-400'
                                        placeholder='Message/Query'
                                    ></textarea>
                                </div>

                                {/* Status Message */}
                                {status && (
                                    <div className={`text-sm font-heading p-3 rounded-lg ${status.includes('Success') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {status}
                                    </div>
                                )}

                                {/* Submit Button */}
                                <motion.button
                                    type='submit'
                                    disabled={isLoading}
                                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                                    className='w-full sm:w-auto px-8 bg-[#49000B] text-white font-heading font-semibold text-base sm:text-lg py-3 sm:py-4 rounded-lg hover:bg-[#5a0010] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300'
                                >
                                    {isLoading ? 'Submitting...' : 'Book Appointment'}
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forms