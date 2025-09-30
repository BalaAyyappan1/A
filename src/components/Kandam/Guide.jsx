import { BGFrmaeD, BGFrmaeM } from "../ReUsable/Images";
import { Thiru } from "../ReUsable/Images";
const Contents = [
    { name: 'Kandams 2 to 12 provide future predictions up to the end of life from the date of reading. ' },
    { name: 'Special Kandams like Sivanadi Thulliam and Sivanadi Sukshmam offer detailed readings (higher fees apply).' },
    { name: 'A special Kandam is available for political success, along with Gnanakandam, Prasana Kandam, and Disabukthi Santhi Kandam.' },
    { name: 'We have no other branches. Enquiries only via phone: +91 91 96007 78983' },
]
const Guide = () => {
    return (
        <div className="py-20">
              <div className="relative bg-[#49000B] lg:h-[539px] h-[943px] flex items-center justify-center overflow-hidden ">
            {/* Background Frame */}
            <img
                src={BGFrmaeD}
                alt="Service Frame Background"
                className="absolute inset-0 w-full h-full object-cover z-0 lg:block hidden"
            />
            <img
                src={BGFrmaeM}
                alt="Service Frame Background"
                className="absolute inset-0 w-full h-full object-cover z-0 lg:hidden block"
            />
            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between w-full h-full lg:pl-14 pl-5 lg:pr-0 pr-5 py-25 lg:py-15">
                <div className="flex flex-col items-start gap-10 md:gap-6">
                    <div className="text-[#FFE177] md:text-[18px] lg:text-[28px] leading-snug max-w-full text-center md:text-left">
                        Guidelines for Nadi Readings, Kandams & Appointments
                    </div>
                    <div className="flex flex-col gap-5">
                        {Contents.map((item, index) => (
                            <div key={index} className="bg-[#FFE177] text-[#49000B] px-5 py-1 text-[12px] rounded-lg lg:text-[14px] leading-[25px] max-w-full">
                                {item.name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute md:bottom-15 bottom-70 left-1/2 transform -translate-x-1/2 text-[#FFE177] text-[12px] lg:text-[28px]">
                    OM AGATHEESAYA NAMAHA!!!
                </div>
                <div className="flex flex-row items-center">
                    <img
                        src={Thiru}
                        alt=""
                        className="absolute w-[250px] bottom-0 right-0 lg:w-[300px] object-contain mr-auto mb-auto"
                    />
                </div>
            </div>
        </div>
        </div>
      
    );
};
export default Guide;