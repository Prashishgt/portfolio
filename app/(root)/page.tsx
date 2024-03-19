import Hero from "@/components/Hero";
import MiniSkills from "@/components/MiniSkills";
import Services from "@/components/Services";
import Navbar from "@/components/common/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MiniSkills />
      <Services />
    </>
  );
};

export default HomePage;
