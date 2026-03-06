import React from "react";
import { HeroSecond } from "./common/HeroSecond";

const ContactHero = () => {
  return (
    <section className="px-5">
      <HeroSecond text={"Contact Me"} subtitle={"For Any Project Knock Me"} />
      <div className="max-w-285 h-0.5 w-full bg-[#949494] mx-auto mb-20 "></div>
    </section>
  );
};

export default ContactHero;
