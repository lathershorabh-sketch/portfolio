import { galleryImgs } from "./common/Helper";
const HomepageWork = () => {
  return (
    <section className="mb-0 lg:mb-20">
      <h2 className="font-syne font-bold text-[24px] sm:text-[32px] md:text-4xl lg:text-[55px] text-medium-white text-center mb-0 lg:mb-10">
        Work Experience
      </h2>
      <div className="flex flex-wrap items-center max-w-285 mx-auto gap-6 justify-center lg:justify-between px-5 xl:px-0 mb-10 lg:mb-0">
        {galleryImgs.map((obj, index) => (
          <div key={index} className="">
            <img src={obj.img} alt={obj.alt} className={obj.className} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomepageWork;
