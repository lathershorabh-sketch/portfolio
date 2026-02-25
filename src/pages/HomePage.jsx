import Swiper from "swiper";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SwiperServices from "../components/SwiperServices";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <SwiperServices />
    </>
  );
};

export default HomePage;
