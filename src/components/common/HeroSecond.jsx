export const HeroSecond = ({ text, subtitle }) => {
  return (
    <div className="max-w-285 text-center xl:text-start mx-auto mb-6 lg:mb-20">
      <h2 className=" mx-auto xl:mx-0 text-[32px] sm:text-[36.22px] md:text-[45px] lg:text-[60px] text-white max-w-[448.22px] md:max-w-140 lg:max-w-157.5 w-full font-bold font-syne mt-5 md:mt-10 lg:mt-25  px-5 xl:px-0 mb-1 lg:mb-10">
        {text}
      </h2>
      <p className="text-medium-black font-rubik px-5 xl:px-0">{subtitle}</p>
    </div>
  );
};
