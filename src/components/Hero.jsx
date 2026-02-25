import { Button } from "./Button";
import { RightArrow } from "./common/Icons";

const Hero = () => {
  return (
    <section>
      <h1 className="text-[32px] sm:text-[36.22px] md:text-[45px] lg:text-[60px] text-white max-w-[448.22px] md:max-w-140 lg:max-w-157.5 w-full mx-auto text-center font-bold font-syne mt-10 sm:mt-15.75 lg:mt-25 leading-[120%] px-5 lg:px-0">
        Adaptive UI Design for Your Brand
      </h1>
      <div className="flex justify-center">
        <Button text={"Explore works"} icon={<RightArrow />} />
      </div>
    </section>
  );
};

export default Hero;
