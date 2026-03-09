import Fotter from "../components/Fotter";
import Hero from "../components/Hero";
import HomepageAbout from "../components/HomepageAbout";
import HomepageContact from "../components/HomepageContact";
import HomepageWork from "../components/HomepageWork";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import SwiperServices from "../components/SwiperServices";
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <>

    
      <Navbar />
      <Hero />
      <HomepageAbout/>
      <SwiperServices />
      <Project />
      <HomepageWork/>
      <Testimonials/>
      <HomepageContact/>
      <Fotter/>
    </>
  );
};

export default HomePage;
