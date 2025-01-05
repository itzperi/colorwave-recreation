import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url('/lovable-uploads/ca9abf27-4fe3-45a1-9e2a-0603a348f8db.png')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      <div className="container mx-auto px-4 relative z-10 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT services
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover the full potential of your business and enhance your operations with our top-notch IT services. Our skilled team focuses on delivering creative and tailored IT solutions that help your organization succeed in a constantly changing tech environment.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#6366F1] text-white px-8 py-3 rounded-lg hover:bg-[#4F46E5] transition-colors"
          >
            Let's Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;