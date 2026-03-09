import Fotter from "../components/Fotter";
import Navbar from "../components/Navbar";
import WorkGallery from "../components/WorkGallery";
import WorkHero from "../components/WorkHero";

const WorkPage = () => {
  return (
    <section>
      <Navbar />
      <WorkHero/>
      <WorkGallery />
      <Fotter />
    </section>
  );
};

export default WorkPage;
