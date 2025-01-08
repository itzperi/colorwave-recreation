import Header from "@/components/Header";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const CustomizedCampaigns = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Customized Campaigns</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Create personalized strategies that speak directly to your target audience and drive results.
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
              <h2 className="text-3xl font-bold mb-6">Tailored Marketing Solutions</h2>
              <p className="text-gray-600 mb-4">
                Our customized campaigns are designed to meet your specific business needs and objectives. We create targeted strategies that resonate with your audience and drive meaningful engagement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  <span>Personalized content strategy</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  <span>Target audience analysis</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  <span>Custom campaign metrics</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/52f10db3-a233-4ba9-b476-f62188eb573a.png"
                alt="Customized Campaigns"
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

export default CustomizedCampaigns;