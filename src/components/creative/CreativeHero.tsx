import { motion } from "framer-motion";

const CreativeHero = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center relative"
      style={{ 
        backgroundImage: `url('/lovable-uploads/62a845f7-9a6c-44f9-987e-7b1c3ac303fd.png')`
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
            Creative Solutions
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Every successful brand thrives on creative innovation, and we are here to deliver just that. 
            Our Creative Solutions services are designed to elevate your business with striking, engaging 
            designs that leave a lasting impression.
          </p>
          <button className="bg-[#9b87f5] text-white px-8 py-3 rounded-lg hover:bg-[#7E69AB] transition-colors">
            Let's Get Started
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CreativeHero;