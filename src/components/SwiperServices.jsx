import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Next, Prev, Swipersvg } from "./common/Icons";

const SwiperServices = () => {
  return (
    <section className="mb-25">
      <div className="mb-10.75 max-w-118 mx-auto">
        <h2 className="font-syne mb-3.5 font-bold text-[24px] sm:text-[32px] md:text-4xl lg:text-[55px] text-medium-white  text-center ">
          Services
        </h2>
        <p className=" text-center text-[16px] text-[#707070]">
          Services I provide to make a greater impact on your company
        </p>
      </div>
      <div>
        <button className="swiper-button-prev relative left-0 top-1/2 transform -translate-y-1/2 z-10">
          <Prev />
        </button>
        <Swiper
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          loop={true}
          className="text-medium-white text-center  mx-auto"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center  px-6 bg-[#232323] rounded-3xl py-[43.68px]">
              <Swipersvg />
              <h4 className="text-orange-dark text-3xl mt-4.5">Web Design</h4>
              <p className="text-[16px] mt-6 text-ffff">
                Worked with companies, creating user-friendly, innovative
                solutions for real-world challenges.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center  px-6 bg-[#232323] rounded-3xl py-[43.68px]">
              <Swipersvg />
              <h4 className="text-orange-dark text-3xl mt-4.5">Web Design</h4>
              <p className="text-[16px] mt-6 text-ffff">
                Worked with companies, creating user-friendly, innovative
                solutions for real-world challenges.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center  px-6 bg-[#232323] rounded-3xl py-[43.68px]">
              <Swipersvg />
              <h4 className="text-orange-dark text-3xl mt-4.5">Web Design</h4>
              <p className="text-[16px] mt-6 text-ffff">
                Worked with companies, creating user-friendly, innovative
                solutions for real-world challenges.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col justify-center items-center  px-6 bg-[#232323] rounded-3xl py-[43.68px]">
              <Swipersvg />
              <h4 className="text-orange-dark text-3xl mt-4.5">Web Design</h4>
              <p className="text-[16px] mt-6 text-ffff">
                Worked with companies, creating user-friendly, innovative
                solutions for real-world challenges.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center  px-6 bg-[#232323] rounded-3xl py-[43.68px]">
              <Swipersvg />
              <h4 className="text-orange-dark text-3xl mt-4.5">Web Design</h4>
              <p className="text-[16px] mt-6 text-ffff">
                Worked with companies, creating user-friendly, innovative
                solutions for real-world challenges.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center  px-6 bg-[#232323] rounded-3xl py-[43.68px]">
              <Swipersvg />
              <h4 className="text-orange-dark text-3xl mt-4.5">Web Design</h4>
              <p className="text-[16px] mt-6 text-ffff">
                Worked with companies, creating user-friendly, innovative
                solutions for real-world challenges.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="swiper-button-next relative right-0 top-1/2 transform -translate-y-1/2 z-10">
          <Next />
        </button>
      </div>
    </section>
  );
};

export default SwiperServices;
