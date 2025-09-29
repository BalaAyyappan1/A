import { AsIcon, OfcImage, AIcon, RIcon, VIcon, ServiceLogo } from '../ReUsable/Images'
import Align from '../ReUsable/Align'

const contents = [
    {
        image: RIcon,
        title: 'Astrological Guidance',
    },
    {
        image: AIcon,
        title: 'Assured Privacy',
    },
    {
        image: AsIcon,
        title: 'Vedic Solutions'
    },
    {
        image: VIcon,
        title: 'Remedial Measures'
    }
]

const Generation = () => {
    return (
        <div className='bg-[#49000B] md:mt-20 mt-10 md:mb-20 mb-10'>
            <Align>
                <div className='flex flex-col space-y-10 py-10'>
                    <div className='flex lg:flex-row flex-col items-center justify-between gap-6 lg:gap-10'>
                        <div className='flex-shrink-0 w-full lg:w-[400px] order-2 lg:order-1'>
                            <img src={OfcImage} alt="Office" className='w-full h-auto object-cover' />
                        </div>
                        <div className='flex-1 text-[#FAF4DF] order-1 lg:order-2 text-center lg:text-left'>
                            <h1 className='text-xl md:text-2xl lg:text-[29px] font-semibold mb-4'>
                                GENERATIONS OF NADI HERITAGE
                            </h1>
                            <p className='text-sm md:text-[15px] leading-relaxed md:leading-[35px] mb-4'>
                                Greetings, Visitor.
                                This is the official website of Agaththiyar Kudil, Vaithiswarankoil, founded by Dr. Arulsiva Arumugam. The legacy is now carried forward by Shri A. Arul Prasath, a sixth-generation Maha Siva Sukshma Nadi Reader. Our center preserves the divine wisdom of Saint Agaththiyar, written on ancient palm leaves for the guidance of humanity. For decades, seekers from around the world have come here to understand their karma, receive remedies, and find spiritual clarity. Today, under Shri A. Arul Prasath's leadership, Agaththiyar Kudil continues this timeless service with devotion, compassion, and accuracy.
                            </p>
                            <h1 className='text-lg md:text-xl lg:text-[24px] font-semibold'>
                                OM AGATHEESAYA NAMAHA!!!
                            </h1>
                        </div>
                        <div className='flex-shrink-0 order-3 hidden lg:block'>
                            <img src={ServiceLogo} alt="Service Logo" className='w-20 lg:w-50 h-auto' />
                        </div>
                    </div>

                    {/* Desktop view */}
                    <div className='hidden md:flex flex-row justify-start gap-10'>
                        {contents.map((content, index) => (
                            <div key={index} className='flex flex-row items-center justify-start gap-4'>
                                <img src={content.image} alt={content.title} className='w-[50px] h-[50px]' />
                                <h1 className='text-[#FAF4DF] text-[20px]'>{content.title}</h1>
                            </div>
                        ))}
                    </div>

                    {/* Mobile scrollable view */}
                    <div className='md:hidden overflow-x-auto'>
                        <div className='flex flex-row gap-6 pb-2' style={{ minWidth: 'max-content' }}>
                            {contents.map((content, index) => (
                                <div key={index} className='flex flex-col items-center justify-center gap-2 flex-shrink-0 min-w-[120px]'>
                                    <img src={content.image} alt={content.title} className='w-[40px] h-[40px]' />
                                    <h1 className='text-[#FAF4DF] text-[16px] text-center whitespace-nowrap'>{content.title}</h1>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Align>
        </div>
    )
}

export default Generation