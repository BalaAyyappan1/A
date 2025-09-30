import { Thumb } from "../ReUsable/Images"


const contents = [
    {
        title: "Send Your Thumb Impression",
        desc: "Male :Right Thumb ,Female : Left Thumb",
    },
    {
        title: "Find Your Palm Leaf",
        desc: "We search our palm leaf bundles to match your thumb impression. If it is available the reading is scheduled. ",
    },
    {
        title: "Scheduling Your Reading",
        desc: "We'll fix a convenient date and time between 8:00 AM to 6:00 PM.",
    },
    {
        title: "Reading Process",
        desc: "The Reading will be done  through  voice or video call",
    },
    {
        title: "Payment",
        desc: "Once you are satisfied with the reading, you can pay via Bank Transfer, Google Pay, or Paytm.",
    },
]

const Details = () => {
    return (
        <div className="relative py-10 md:py-20 px-4">
            <div className='bg-[#FFE177] max-w-3xl mx-auto p-4 md:p-5 md:mb-0 mb-4 rounded-[12px] shadow-xl relative z-10'>
                <h1 className="text-[20px] md:text-[24px] text-center mb-3 md:mb-5 text-black font-semibold">Online Prediction Details</h1>
                <img src={Thumb} alt='Thumb' className="w-full h-auto" />
            </div>

            <div className="bg-[#FFE177] max-w-5xl mx-auto px-4 md:px-10 py-8 md:py-15 rounded-[12px] -mt-0 md:-mt-20 pt-10 md:pt-32">
                <div>
                    <h1 className="text-[20px] md:text-[24px] text-start text-black mb-6 md:mb-10 font-semibold">How We Read Your Palm Leaf</h1>

                    {contents.map((item, index) => (
                        <div key={index} className="flex gap-3 md:gap-4">
                            {/* Timeline Column */}
                            <div className="flex flex-col items-center">
                                {/* Circle with Tick */}
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#49000B] bg-[#49000B] text-[#FFE177] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="#FFE177" strokeWidth="3">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>

                                {/* Connecting Line (don't show after last item) */}
                                {index < contents.length - 1 && (
                                    <div className="w-0.5 flex-1 bg-[#49000B] my-1"></div>
                                )}
                            </div>

                            {/* Content Column */}
                            <div className="flex-1 pb-6 md:pb-10">
                                <h1 className="text-[16px] md:text-[20px] text-start text-black font-semibold mb-1">{item.title}</h1>
                                <p className="text-[14px] md:text-[16px] text-start text-black leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}

                    <a
                        href="/contact"
                        className="block w-full bg-[#49000B] text-[#FFE177] py-3 md:py-4 px-5 text-[14px] md:text-[16px] rounded-lg font-semibold hover:bg-[#6B0010] transition-colors mt-4 text-center"
                    >
                        Book Appointment
                    </a>


                </div>
            </div>
        </div>
    )
}

export default Details