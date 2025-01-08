import Header from "@/components/Header";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Industries from "@/components/Industries";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const AccountBasedMarketing = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Account-Based Marketing</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Target and engage high-value accounts with personalized marketing strategies.
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
              <h2 className="text-3xl font-bold mb-6">Strategic Account-Based Marketing</h2>
              <p className="text-gray-600 mb-4">
                Our ABM strategies focus on identifying and targeting high-value accounts with personalized campaigns.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  <span>Account identification and targeting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  <span>Personalized content creation</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  <span>Multi-channel engagement</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png"
                alt="Account-Based Marketing"
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

export default AccountBasedMarketing;