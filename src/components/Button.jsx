export const Button = ({ text, icon }) => {
  return (
    <button className="group tracking-[0.82px] bg-[#FF9142] hover:bg-white rounded-[22.35px] md:rounded-4xl text-white hover:text-black transition-all duration-300 ease-linear  hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] text-[12px] md:text-[14px] lg:text-[14px] flex items-center py-[12.10px] lg:py-4.5 gap-1.5 md:gap-3 pl-5 lg:pl-8 pr-[16.6px] lg:pr-7 mt-5 lg:mt-[47.31px] font-rubik">
      {text}
      {icon}
    </button>
  );
};

