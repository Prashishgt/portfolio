import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import MiniSkills from "@/components/MiniSkills";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MiniSkills />
      <Services />
      <Portfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
};

export default HomePage;
