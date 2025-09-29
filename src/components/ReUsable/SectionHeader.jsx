import { BoxIcon } from "../ReUsable/Images";

const SectionHeader = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={BoxIcon}
        alt="Box Icon"
        className="w-[40px] h-[24px] mb-4"
      />
      <h1 className="font-heading text-[#49000B] md:text-[32px] text-[20px] mb-10">
        {title}
      </h1>
    </div>
  );
};

export default SectionHeader;
