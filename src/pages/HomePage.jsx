import Swiper from "swiper";
import AboutUs from "../components/AboutUs";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SwiperServices from "../components/SwiperServices";
import Project from "../components/Project";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Fotter from "../components/Fotter";

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
      <Contact/>
      <Fotter/>
    </>
  );
};

export default HomePage;
