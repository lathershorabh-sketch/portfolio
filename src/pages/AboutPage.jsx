import AboutContent from "../components/AboutContent";
import AboutGallery from "../components/AboutGallery";
import AboutHero from "../components/AboutHero";
import Fotter from "../components/Fotter";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <section>
      <Navbar />
      <AboutHero />
      <AboutContent />
      <AboutGallery />
      <Fotter />
    </section>
  );
};

export default AboutPage;
