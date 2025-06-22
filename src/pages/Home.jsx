import Hero1 from "../components/Hero1";
import HeroGradient from "../components/HeroGradient";
import NosServices from "../components/NosServices";
import Footer from "../components/Footer";
import AutomationToolsSection from "../components/Workflows";
import AuditHeroSection from "../components/HeroAudit";

const Home = () => {
  return (
    <>
      <Hero1 />
      <AutomationToolsSection />
      <AuditHeroSection />
      <HeroGradient />
      <NosServices />
      <Footer />
    </>
  );
};

export default Home;
