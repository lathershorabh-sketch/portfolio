import React from "react";
import Navbar from "../components/Navbar";
import ContactHero from "../components/ContactHero";
import ContactForm from "../components/ContactForm";
import Fotter from "../components/Fotter";

const Contactpage = () => {
  return (
    <section>
      <Navbar />
      <ContactHero />
      <ContactForm />
      <Fotter />
    </section>
  );
};

export default Contactpage;
