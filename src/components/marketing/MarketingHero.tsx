import { motion } from "framer-motion";

const MarketingHero = () => {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/lovable-uploads/2cd8be13-9eab-4e32-a456-4d5b360cc11c.png")' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4 py-32 text-white"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Digital Presence with Expert Marketing Solutions
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Elevate your brand with data-driven strategies and innovative marketing approaches that deliver measurable results.
        </p>
        <button className="bg-raastas-light text-white px-8 py-3 rounded-lg hover:bg-raastas-accent transition-colors">
          Get Started →
        </button>
      </motion.div>
    </div>
  );
};

export default MarketingHero;