import { TestimonialsSvg } from "./common/Icons";

const Testimonials = () => {
  return (
    <section className="mt-10 md:mt-20 lg:mt-30 mb-0 lg:mb-20 max-w-285 w-full mx-auto flex flex-col lg:flex-row justify-center lg:justify-between px-5 xl:px-0 gap-6">
      <div className="max-w-217 w-full mx-auto lg:mx-0">
        <h2 className="font-syne font-bold text-[24px] sm:text-[32px] md:text-4xl lg:text-[55px] text-medium-white mb-4 lg:mb-10 text-center lg:text-left">
          Testimonials
        </h2>
        <p className="text-ffff text-center lg:text-left">
          Collaborating with Shubhangi has been a truly rewarding experience. As
          a highly skilled branding professional, her ability to develop
          innovative and compelling solutions for real-world challenges is
          second to none. Her extensive work with startups has equipped her with
          a unique understanding of building brands from the ground up, bringing
          fresh, strategic insights to every project. Shubhangi's creativity and
          attention to detail consistently exceed expectations, and she always
          goes the extra mile to ensure outstanding results. I wholeheartedly
          recommend Shubhangi to anyone seeking a branding expert who can
          elevate a brand to new heights.
        </p>
      </div>
      <div className="mt-0 lg:-mt-17 mx-auto lg:mx-0">
        <TestimonialsSvg />
      </div>
    </section>
  );
};

export default Testimonials;
