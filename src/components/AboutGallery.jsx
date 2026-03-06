import skills from "../assets/Images/skills.png";
const AboutGallery = () => {
  return (
    <section className="text-white font-rubik mb-10 lg:mb-25">
      <div className="text-center px-5 lg:px-0">
        <h3 className="text-[18px] sm:text-[24px] lg:text-[32px]">
          I'm currently looking to join{" "}
          <span className="text-[#FD6F00] ">cross-functional </span> a team
        </h3>
        <p className="text-[12px] sm:text-[18px] lg:text-[24px]">
          that values improving people's lives through accessible design{" "}
        </p>
      </div>
      <div className="max-w-255 mx-auto w-full object-fill mt-10 lg:mt-15 px-5">
        <img className="w-full lg:h-170" src={skills} alt="Skills" />
      </div>
    </section>
  );
};

export default AboutGallery;
