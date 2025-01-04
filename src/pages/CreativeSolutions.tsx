import Header from "@/components/Header";
import CreativeHero from "@/components/creative/CreativeHero";
import CreativeServices from "@/components/creative/CreativeServices";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

const CreativeSolutions = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <CreativeHero />
      <Brands />
      <CreativeServices />
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default CreativeSolutions;