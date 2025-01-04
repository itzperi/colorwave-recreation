import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center relative"
      style={{ 
        backgroundImage: `url('/lovable-uploads/29495d47-d464-4a6a-b453-72f50e4f74f5.png')`
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Whether it's system integration, network security, cloud services, or software development, 
            we make sure your business runs smoothly, effectively, and safely.
          </p>
          <p className="text-gray-300">
            Our extensive experience and dedication to quality enable us to help businesses like yours utilize 
            technology for lasting growth and success. Collaborate with us to create a robust IT infrastructure 
            that enhances productivity and keeps you ahead of your competitors.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;