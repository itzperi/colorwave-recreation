import Header from "@/components/Header";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const GreaterCredibility = () => {
  return (
    <div className="min-h-screen bg-raastas-purple">
      <Header />
      <div 
        className="bg-cover bg-center min-h-[60vh] relative"
        style={{ 
          backgroundImage: `url('/lovable-uploads/384f3453-667d-40e8-bbef-516a16fc39c4.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Greater Credibility</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Build trust and establish your brand as a trusted authority in your industry.
            </p>
          </motion.div>
        </div>
      </div>
      <Brands />
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Building Trust & Authority</h2>
              <p className="text-gray-600 mb-4">
                We help establish your brand as a trusted authority through strategic content and relationship building.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  <span>Thought leadership content</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  <span>Case studies and testimonials</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  <span>Industry expertise showcase</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png"
                alt="Greater Credibility"
                className="rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <Contact />
      <Industries />
      <Footer />
    </div>
  );
};

export default GreaterCredibility;