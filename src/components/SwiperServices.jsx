import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Next, Prev, Swipersvg } from "./common/Icons";
import { ReviewData } from "./common/Helper";

const SwiperServices = () => {
  return (
    <section className="mb-25 px-5">
      <div className="mb-10.75 max-w-118 mx-auto">
        <h2 className="font-syne mb-3.5 font-bold text-[24px] sm:text-[32px] md:text-4xl lg:text-[55px] text-medium-white  text-center ">
          Services
        </h2>
        <p className=" text-center text-[16px] text-[#707070]">
          Services I provide to make a greater impact on your company
        </p>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            520: { slidesPerView: 1 },
            700: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          className="text-medium-white text-center mx-auto"
        >
          
            {ReviewData.map((item,index) =>
            <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center  px-6 bg-[#232323] rounded-3xl py-[43.68px]">
              {item.svg}
              <h4 className="text-orange-dark text-3xl mt-4.5">{item.name}</h4>
              <p className="text-[16px] mt-6 text-ffff">
                {item.review}
              </p>
            </div>
          </SwiperSlide>
          )}
        </Swiper>
       
      </div>
    </section>
  );
};

export default SwiperServices;
