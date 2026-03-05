import Puzzle from "../assets/Images/Puzzle.png";
import SourabhLather from "../assets/Images/SourabhLather.jpeg";
import sorb from "../assets/Images/sorb.jpeg";
import GalleryContent from "../assets/Images/GalleryContent.png";
import penpal from "../assets/Images/penpal.png";
import farmer from "../assets/Images/faemer.png";
import lavalamp from "../assets/Images/lavalamp.png";
import cyberpunk from "../assets/Images/cyberpunk.jpg";
import phantazia from "../assets/Images/phantazia.png";
const Gallery = () => {
  return (
    <section className="mb-10 lg:mb-40">
      <div className="flex flex-wrap  mx-auto max-w-285 gap-10 sm:gap-20 lg:gap-6 justify-center xl:justify-between  mb-5 px-5 xl:px-0">
        <div className="text-center">
          <div>
            <div className="max-w-65 xl:max-w-75 w-full">
              <img className="w-full" src={Puzzle} alt="Puzzle" />
            </div>
            <div className="text-center mt-1">
              <p className="text-white text-xl lg:text-3xl mb-0 lg:mb-2.5">
                C++
              </p>
              <p className="text-white text-2xl lg:text-3xl">Tetris Game</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block mt-5">
          <div>
            <div className="text-white max-w-90 xl:max-w-100 w-full gap-5 flex justify-center lg:justify-between mb-6">
              <h3 className="max-w-50 text-[20px] md:text-2xl xl:text-[32px] w-full leading-[119%]">
                My Mission is to make design easier.
              </h3>
              <p className="max-w-50 text-[10px]">
                Create custom Designs with AARON that convert more visitors than
                any website.With lots of unique design, you can easily select a
                logo without hassle. Create custom landing logos with AARONN
                that convert more visitors than any website.With lots of
                revision, you can easily build a logo without porblem.
              </p>
            </div>
            <div className="flex justify-center lg:justify-between">
              <img
                className="max-w-40 rounded-3xl w-full h-45 object-cover"
                src={SourabhLather}
                alt="Sourabh Lather"
              />
              <img
                className="max-w-55 rounded-3xl w-full h-38 object-cover mt-7"
                src={sorb}
                alt="Sorb"
              />
            </div>
          </div>
          <div className="text-center mt-1">
            <p className="text-white text-xl lg:text-3xl mb-0 lg:mb-2.5">C++</p>
            <p className="text-white text-2xl lg:text-3xl">Tetris Game</p>
          </div>
        </div>
        <div className="max-w-75 xl:max-w-85  object-cover rounded-3xl mt-0 sm:mt-12">
          <div>
            <img
              className="w-full h-full"
              src={GalleryContent}
              alt="Gallery Content"
            />
          </div>
          <div className="text-center mt-1">
            <p className="text-white text-xl lg:text-3xl mb-0 lg:mb-2.5">C++</p>
            <p className="text-white text-2xl lg:text-3xl">Tetris Game</p>
          </div>
        </div>
        <div className="block lg:hidden">
          <div>
            <div className="text-white max-w-100 w-full gap-3 md:gap-5 flex justify-center lg:justify-between mb-6">
              <h3 className="max-w-50 text-[20px] md:text-[32px] w-full leading-[119%]">
                My Mission is to make design easier.
              </h3>
              <p className="max-w-50 text-[10px]">
                Create custom Designs with AARON that convert more visitors than
                any website.With lots of unique design, you can easily select a
                logo without hassle. Create custom landing logos with AARONN
                that convert more visitors than any website.With lots of
                revision, you can easily build a logo without porblem.
              </p>
            </div>
            <div className="flex justify-center lg:justify-between">
              <img
                className="max-w-40 rounded-3xl w-full h-45 object-cover"
                src={SourabhLather}
                alt="Sourabh Lather"
              />
              <img
                className="max-w-55 rounded-3xl w-full h-38 object-cover mt-7"
                src={sorb}
                alt="Sorb"
              />
            </div>
          </div>
          <div className="text-center mt-1">
            <p className="text-white text-xl lg:text-3xl mb-0 lg:mb-2.5">C++</p>
            <p className="text-white text-2xl lg:text-3xl">Tetris Game</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center md:justify-between gap-10 md:gap-0 mx-auto max-w-270 mt-15 lg:mt-30 px-5 xl:px-0">
        <div>
          <img
            className="max-w-78 lg:max-w-92 rounded-[70px] mx-auto lg:mx-0 w-full transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_20px_30px_rgba(255,255,255,0.7)]"
            src={penpal}
            alt="Penpal"
          />
          <p className="text-white mt-2 md:mt-15 text-[18px] text-center">
            convolutional Neural Network{" "}
          </p>
          <p className="text-white text-[24px] text-center">Penpal</p>
        </div>
        <div>
          <img
            className="max-w-80 lg:max-w-95 mx-auto lg:mx-0 object-cover transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_10px_20px_rgba(249,115,22,0.7)]"
            src={farmer}
            alt="Farmer"
          />
          <p className="text-white mt-2 md:mt-15 text-[18px] text-center">
            App Design{" "}
          </p>
          <p className="text-white text-[24px] text-center">Krishi-Haat</p>
        </div>
      </div>
      <div className="mt-15 lg:mt-30 flex flex-wrap justify-center xl:justify-between mx-auto gap-10 xl:gap-0 max-w-285 px-5 lg:px-0">
        <div>
          <img
            className="max-w-89 w-full object-cover h-85 rounded-2xl transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_20px_30px_rgba(168,85,247,0.7)]"
            src={lavalamp}
            alt="Lavalamp"
          />
          <p className="text-white mt-2 lg:mt-15 text-[18px] text-center">
            Blob Design{" "}
          </p>
          <p className="text-white text-[24px] text-center">Lava Lamp</p>
        </div>
        <div className="max-w-90 w-full object-contain">
          <img
            className=" w-full object-cover h-85 rounded-2xl  transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_20px_30px_rgba(34,197,94,0.6)]"
            src={cyberpunk}
            alt="Cyberpunk "
          />
          <p className="text-white mt-2 lg:mt-15 text-[18px] text-center">
            Figma{" "}
          </p>
          <p className="text-white text-[24px] text-center">CyberPunk</p>
        </div>
        <div>
          <img
            className="max-w-85 w-full object-cover h-85 rounded-2xl hover:scale-105 transition-all duration-300 hover:drop-shadow-[0_20px_30px_rgba(212,176,123,0.5)]"
            src={phantazia}
            alt="phantazia"
          />
          <p className="text-white  mt-2 lg:mt-15 text-[18px] text-center">
            Branding{" "}
          </p>
          <p className="text-white text-[24px] text-center">Phantazia</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
