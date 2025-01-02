import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Testimonials from "@/components/Testimonials";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <Hero />
      <Brands />
      <Services />
      <Industries />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;