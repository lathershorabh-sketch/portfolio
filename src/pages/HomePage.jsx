import Swiper from "swiper";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SwiperServices from "../components/SwiperServices";
import Project from "../components/Project";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <SwiperServices />
      <Project />
      <Work />
      <Testimonials/>
    </>
  );
};

export default HomePage;
