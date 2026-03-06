import React from "react";
import { HeroSecond } from "./common/HeroSecond";

const AboutHero = () => {
  return (
    <section className="px-5">
      <HeroSecond text={"About Me"} subtitle={"Little Brief About Myself"} />
      <div className="max-w-285 h-0.5 w-full bg-[#949494] mx-auto mb-10 lg:mb-20"></div>
    </section>
  );
};

export default AboutHero;
