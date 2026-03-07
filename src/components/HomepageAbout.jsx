import { Button } from "./Button";
import LinearGradient from "../assets/images/LinearGradient.png";
const HomepageAbout = () => {
  return (
    <section className="relative mt-10 md:mt-15 lg:mt-[118.66px] mb-10 md:mb-24.5 flex flex-col md:flex-row items-center justify-center lg:justify-between max-w-285  mx-auto px-5 gap-10 md:gap-6">
      <div className="w-full md:max-w-155">
        <h2 className="relative font-syne font-bold text-[24px] sm:text-[32px] md:text-4xl lg:text-[55px] text-medium-white w-full lg:max-w-145  leading-[120%] text-center md:text-left">
          Let’s get know about me closer
        </h2>
        <p className="text-[#A8A8A8] w-full lg:max-w-160 mt-1.5 md:mt-3 lg:mt-5 text-center md:text-left">
          Hey I'm Sourabh Lather, a passionate branding professional and UI
          designer with extensive experience in startups. I excel at crafting
          innovative, user-centric solutions that elevate brands and drive
          impactful results.
        </p>
        <div className="flex justify-center md:justify-start text-white hover:text-black ">
          <Button text={"Discover More About Me"} />
        </div>
      </div>
      <div className="max-w-100.75 md:max-w-95 lg:max-w-110 w-full ">
        <img
          className=" inline-block rounded-3xl overflow-hidden transition-all duration-500 ease-out hover:scale-105 hover:drop-shadow-[0_20px_30px_rgba(0,388,0,0.485)]"
          src="./src/assets/Images/SourabhLather.jpeg"
          alt="sourabh-lather"
        />
      </div>
      <div className="absolute -left-130 -top-30 w-full h-full -z-10">
        <img src={LinearGradient} alt="linear-gradient" />
      </div>
    </section>
  );
};

export default HomepageAbout;
