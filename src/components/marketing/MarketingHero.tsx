import { motion } from "framer-motion";

const MarketingHero = () => {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/lovable-uploads/1372620a-990a-46e6-9b9a-01660333bee9.png")' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4 py-32 text-white"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Full-Service Marketing Agency:<br />
          Achieve Real Business Growth<br />
          with Trusted Expertise
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Looking for expert marketing services? We combine creativity, proven strategies, and a deep understanding of your goals to help you achieve real business growth. Partner with us to turn your ideas into positive impactful success
        </p>
        <button className="bg-[#6366F1] text-white px-8 py-3 rounded-lg hover:bg-[#4F46E5] transition-colors">
          Let's Get Started →
        </button>
      </motion.div>
    </div>
  );
};

export default MarketingHero;