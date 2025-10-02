import { motion } from 'framer-motion'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import SectionHeader from '../ReUsable/SectionHeader'

const Message = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        dob: '',
        message: ''
    })
    const [selectedDate, setSelectedDate] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState('')

    const getCurrentTimestamp = () => {
        const now = new Date()
        return now.toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }

    const validateForm = () => {
        if (!formData.fullname || !formData.email || !formData.phone || !formData.dob) {
            setStatus('Error: Please fill in all required fields')
            return false
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            setStatus('Error: Please enter a valid email address')
            return false
        }
        return true
    }

    const showToast = (message, type) => {
        console.log(`${type.toUpperCase()}: ${message}`)
    }

    const handleDateChange = (date) => {
        setSelectedDate(date)
        if (date) {
            const formattedDate = date.toLocaleDateString('en-GB')
            setFormData({
                ...formData,
                dob: formattedDate
            })
        } else {
            setFormData({
                ...formData,
                dob: ''
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return

        setIsLoading(true)
        setStatus('')

        try {
            const timestamp = getCurrentTimestamp()
            const submissionData = {
                fullname: formData.fullname,
                email: formData.email,
                phone: formData.phone,
                dob: formData.dob,
                message: formData.message,
                timestamp
            }

            const GOOGLE_SCRIPT_URL = ''

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submissionData)
            })

            setStatus('Success: Your appointment request has been sent successfully!')
            showToast('Your appointment request has been sent successfully!', 'success')
            setFormData({
                fullname: '',
                email: '',
                phone: '',
                dob: '',
                message: ''
            })
            setSelectedDate(null)
        } catch (error) {
            const errorMessage =
                typeof error === 'string'
                    ? error
                    : error?.message || 'Something went wrong'
            setStatus(`Error: ${errorMessage}`)
            showToast(errorMessage, 'error')
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='h-100dvh p-4 md:py-20 py-10'>
            <div className='flex flex-col w-full max-w-4xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className='w-full'
                >
                    <div className='space-y-4 mb-6'>
                      <SectionHeader title="Send Us Message" />
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-5'>
                        {/* Full Name & Date of Birth Row */}
                        <div className='flex flex-col md:flex-row items-center gap-4 w-full'>
                            {/* Full Name */}
                            <div className='w-full md:w-1/2'>
                                <input
                                    type='text'
                                    id='fullname'
                                    name='fullname'
                                    value={formData.fullname}
                                    onChange={handleChange}
                                    required
                                    className='w-full px-4 py-4 border border-[#979595] bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#979595] focus:border-transparent font-heading text-sm sm:text-base placeholder:text-gray-400'
                                    placeholder='Full Name'
                                />
                            </div>

                            {/* Date of Birth */}
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
                                    className="w-full px-4 py-4 border border-[#979595] bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#979595] focus:border-transparent font-heading text-sm sm:text-base placeholder:text-gray-400"
                                    wrapperClassName="w-full"
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
                                className='w-full px-4 py-4 border border-[#979595] bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#979595] focus:border-transparent font-heading text-sm sm:text-base placeholder:text-gray-400'
                                placeholder='Email'
                            />
                        </div>

                        {/* Phone */}
                        <div className="w-full">
                            <input
                                type='tel'
                                id='phone'
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className='w-full px-4 py-4 border border-[#979595] bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#979595] focus:border-transparent font-heading text-sm sm:text-base placeholder:text-gray-400'
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
                                className='w-full px-4 py-4 border border-[#979595] bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#979595] focus:border-transparent font-heading text-sm sm:text-base resize-none placeholder:text-gray-400'
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
                        <div className="flex justify-center">
  <motion.button
    type="submit"
    disabled={isLoading}
    whileHover={{ scale: isLoading ? 1 : 1.02 }}
    whileTap={{ scale: isLoading ? 1 : 0.98 }}
    className="w-auto px-8 bg-[#49000B] text-white font-heading font-semibold items-center justify-center text-base sm:text-lg py-3 sm:py-4 rounded-lg hover:bg-[#5a0010] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
  >
    {isLoading ? "Submitting..." : "Book Appointment"}
  </motion.button>
</div>

                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Message