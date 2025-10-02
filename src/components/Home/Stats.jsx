import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { WhyTBG } from '../ReUsable/Images';

const stats = [
    { title: '10,000+', subtitle: 'Vedic Remedies & Astrological Insights Provider' },
    { title: '25+', subtitle: 'Years of Expertise in Vedic Astrology' },
    { title: '1500+', subtitle: 'Homas, Poojas & Remedies Performed' },
    { title: '1000+', subtitle: 'Expert Consultations' },
    { title: '1L+', subtitle: 'Lives Touched' },
];

const StatsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });

    return (
        <div className='relative'>
            <div className="absolute -bottom-70 right-0 -z-10">
                <img src={WhyTBG} alt="" className="w-[500px] rotate-100" />
            </div>
            <section className="bg-[#FFE177] border-t py-4 md:py-5 lg:py-7 flex flex-col items-center px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#49000B] text-center mb-8 md:mb-12">
                    Why Choose Agaththiyarkudil?
                </h2>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="w-full max-w-8xl"
                >
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className={`px-4 py-6 text-center flex flex-col items-center justify-start
                                ${stats.length % 2 !== 0 && index === stats.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''}
                            `}
                            >
                                <h3 className="text-3xl md:text-4xl font-bold text-[#49000B] mb-3">
                                    {stat.title}
                                </h3>
                                <p className="text-sm md:text-base text-[#49000B] leading-[140%] max-w-[280px]">
                                    {stat.subtitle}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>



    );
};

export default StatsSection;