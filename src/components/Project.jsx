import Phantazia from "../assets/Images/Phantazia.png";
import Puzzle from "../assets/Images/Puzzle.png";
import LinearGradient from "../assets/Images/LinearGradient.png";

const Project = () => {
  return (
    <section className="relative mb-15 px-5 xl:px-0">
      <h2 className="font-syne font-bold text-[24px] sm:text-[32px] md:text-4xl lg:text-[55px] text-medium-white text-center mb-10 lg:mb-15.75">
        My Projects Highlight
      </h2>
      <div className="flex flex-col md:flex-row gap-15 md:gap-6 items-center max-w-285 w-full justify-center md:justify-between mx-auto ">
        <div>
          <img
            className="max-w-90 lg:max-w-120 w-full h-auto object-contain"
            src={Phantazia}
            alt="phantazia"
          />
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-11 my-3 md:my-9">
            <h4 className="text-white text-lg lg:text-2xl">
              Phantazia (Women Empowerment){" "}
            </h4>
            <span className="w-15 h-0.5 bg-amber-600 block"></span>
          </div>
          <div className="text-[16px] lg:text-[20px] ">
            <div className="flex gap-7 justify-center md:justify-start">
              <p className="text-ffff ">Client:</p>
              <p className="text-white">Self Project</p>
            </div>
            <div className="flex gap-7 mt-1 justify-center md:justify-start">
              <p className="text-ffff">Work:</p>
              <p className="text-white">Branding</p>
              <p className="text-white">Logo design</p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="max-w-90 lg:max-w-120 w-full h-99.5 lg:h-133"
            src={Puzzle}
            alt="puzzle"
          />
          <div className="flex items-center gap-11 mt-9 mb-9">
            <h4 className="text-white text-lg lg:text-2xl">
              Tetris game with C++
            </h4>
            <span className="w-15 h-0.5 bg-amber-600 block"></span>
          </div>
          <div className="text-[16px] lg:text-[20px]">
            <div className="flex gap-7 justify-center md:justify-start">
              <p className="text-ffff">Client:</p>
              <p className="text-white">Self Project</p>
            </div>
            <div className="flex justify-center md:justify-start gap-7 mt-1">
              <p className="text-ffff">Work:</p>
              <p className="text-white">Game dev using Raylib library</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="absolute -top-100 -left-150 -z-50"
          src={LinearGradient}
          alt="linear-gradient"
        />
      </div>
      <button className="text-orange-dark border py-6 px-10 rounded-[39px] mt-10 flex justify-center mx-auto">
        Load more works
      </button>
    </section>
  );
};

export default Project;
