import React from 'react'
import { Arul, TopF, ServiceLogo } from '../ReUsable/Images'
import DiamondLine from '../ReUsable/DiamondLine'
import Align from '../ReUsable/Align'

const Top = () => {
    return (
        <div className='relative py-20'>
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url(${TopF})` }}
                aria-hidden="true"
            />
            <Align>
 <div className='relative flex flex-col sm:flex-row max-w-5xl mx-auto bg-[#FFE177] border border-black    justify-around rounded-2xl   z-10'>
                <div>
                    <img src={ServiceLogo} alt='' className='absolute bg-[#2A000A] rounded-[20px] -top-15 -left-15 w-40 z-10 lg:block hidden' />
                </div>
                <img src={Arul} alt='Arul' className='w-full sm:w-1/3 object-cover sm:rounded-l-2xl' />
                <div className='w-full sm:w-1/2 text-[#49000B] flex flex-col justify-center space-y-5 p-6 sm:p-4'>
                    {/* Guruji Name - Single Line */}
                     <div className='mb-2'>
                    <span className='text-[16px] sm:text-[20px] md:text-[24px] font-semibold'>
                        Guruji A.ARUL PRASATH
                    </span>
                </div>
                {/* Agaththiyar Kudil - Second Line */}
                <div className='mb-3'>
                    <span className='text-[12px] sm:text-[16px] md:text-[18px]'>
                        Agaththiyar Kudil
                    </span>
                </div>
                    <div className='mt-6'>
                        <DiamondLine color="#000000" thickness={2} diamondSize={13} />

                    </div>
                    {/* Description with Award Image Inline */}
                    <p className="text-[12px] sm:text-[14px] mb-4 leading-relaxed">
                        The Original Hereditary Nadi Family of Vaitheeswaran kovil{" "}
                        <img
                            src={ServiceLogo}
                            alt="award"
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#2A000A] rounded-full inline-block mx-2 align-middle"
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
                        <br className='block sm:hidden' />
                        <a
                            href='mailto:agarulprasath@gmail.com'
                            className='hover:underline break-all'
                        >
                            agarulprasath@gmail.com
                        </a>
                    </div>
                </div>
            </div>
            </Align>
           
        </div>
    )
}

export default Top