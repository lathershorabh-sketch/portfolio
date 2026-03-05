import { HeroSecond } from "./common/HeroSecond";
import LinearGradient from "../assets/images/LinearGradient.png";

const Hero2 = () => {
  return (
    <section>
      <HeroSecond text={"My works"} subtitle={"Showcase About Works"} />
      <div className="hidden lg:absolute -left-45 -top-15 w-200 h-full -z-10">
        <img src={LinearGradient} alt="linear-gradient" />
      </div>
    </section>
  );
};

export default Hero2;
