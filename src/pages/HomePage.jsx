import Contact from "../components/Contact";
import Fotter from "../components/Fotter";
import Hero from "../components/Hero";
import HomepageAbout from "../components/HomepageAbout";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import SwiperServices from "../components/SwiperServices";
import Testimonials from "../components/Testimonials";
import Work from "../components/Work";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomepageAbout/>
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
