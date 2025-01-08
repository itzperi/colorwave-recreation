import { motion } from "framer-motion";

const StrategicMarketingHero = () => {
  return (
    <div 
      className="relative min-h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url('/lovable-uploads/1082b8e8-094e-48cd-8d04-728b1304c320.png')`
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 py-32 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Strategic Marketing Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Nimais understands the struggle of connecting with your audience in a meaningful way. Our
            neuromarketing consultation taps into the latest consumer behavior insights, helping you craft
            campaigns that speak to emotions and drive engagement. We ensure your brand stands out
            and creates lasting connections, ultimately boosting your ROI.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            We care about your success and offer actionable insights to help you strengthen your brand's
            position. With Nimais, you'll optimize your marketing strategies and reach customers on a
            deeper level. Don't settle for ordinary results—contact Nimais and start transforming your
            brand today.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
            Book a Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default StrategicMarketingHero;