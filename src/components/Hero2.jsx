import { HeroSecond } from "./common/HeroSecond";
import LinearGradient from "../assets/images/LinearGradient.png";

const Hero2 = () => {
  return (
    <section className="px-5 xl:px-0">
      <HeroSecond text={"My works"} subtitle={"Showcase About Works"} />
      <div className="hidden lg:absolute -left-45 -top-15 w-200 h-full -z-10">
        <img src={LinearGradient} alt="linear-gradient" />
      </div>
      <div className="max-w-285 h-0.5 w-full bg-[#949494] mx-auto mb-20 "></div>
    </section>
  );
};

export default Hero2;
