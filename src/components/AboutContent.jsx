import SourabhLather from "../assets/Images/SourabhLather.jpeg";
import sorb from "../assets/Images/sorb.jpeg";
const AboutContent = () => {
  return (
    <section>
      <div className="max-w-250 w-full mx-auto mb-10 lg:mb-20">
        <div className="text-white max-w-230 w-full gap-5 flex flex-col md:flex-row justify-center lg:justify-between mb-10 md:mb-6 px-5 lg:px-0">
          <h3 className="text-center md:text-start mx-auto md:mx-0 max-w-100 text-[24px] sm:text-[28px] md:text-[38px] lg:text-[48px] w-full leading-[119%] font-bold font-syne">
            My Mission is to make design easier.
          </h3>
          <p className="text-center md:text-start md:max-w-80 lg:max-w-100 text-[10px] sm:text-[14px] md:text-[18px] lg:text-[20px]">
            Create custom Designs with AARON that convert more visitors than any
            website.With lots of unique design, you can easily select a logo
            without hassle. Create custom landing logos with AARONN that convert
            more visitors than any website.With lots of revision, you can easily
            build a logo without porblem.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between px-5 xl:px-0 gap-10 md:gap-5">
          <img
            className="max-w-95 mx-auto md:mx-0  rounded-3xl w-full h-95 object-cover"
            src={SourabhLather}
            alt="Sourabh Lather"
          />
          <img
            className="max-w-130 rounded-3xl mx-auto md:mx-0 w-full h-80 object-cover mt-0 md:mt-15"
            src={sorb}
            alt="Sorb"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
