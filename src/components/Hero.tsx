import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div 
      className="bg-cover bg-center min-h-screen relative"
      style={{ 
        backgroundImage: `url('/lovable-uploads/384f3453-667d-40e8-bbef-516a16fc39c4.png')`
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Boost Marketing with<br />Neuromarketing Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            We specialize in advanced neuromarketing research to decode consumer behavior, enabling businesses to develop powerful, data-informed marketing strategies.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-8 mt-6"
          >
            <span className="text-raastas-light">Neuroscience</span>
            <span className="text-raastas-light">•</span>
            <span className="text-raastas-light">Engagement</span>
            <span className="text-raastas-light">•</span>
            <span className="text-raastas-light">Growth</span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Marketing Agency Card */}
          <div className="p-8 rounded-lg bg-opacity-10 bg-white backdrop-blur-lg border border-white/10 hover:border-raastas-light/50 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">Marketing Agency</h3>
              <p className="text-gray-300">
                Boost your business with our neuromarketing-powered Marketing services. We provide SEO, consumer insights, data-driven campaigns, and a full range of marketing solutions.
              </p>
            </div>
            <a href="#" className="text-raastas-light hover:text-raastas-accent transition-colors">
              Explore →
            </a>
          </div>

          {/* Creative Solutions Card */}
          <div className="p-8 rounded-lg bg-opacity-10 bg-white backdrop-blur-lg border border-white/10 hover:border-raastas-light/50 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">Creative Solutions</h3>
              <p className="text-gray-300">
                Elevate your brand with our creative solutions, blending the science of behavior and the art of design to influence decisions and drive engagement.
              </p>
            </div>
            <a href="#" className="text-raastas-light hover:text-raastas-accent transition-colors">
              Explore →
            </a>
          </div>

          {/* IT Services Card */}
          <div className="p-8 rounded-lg bg-opacity-10 bg-white backdrop-blur-lg border border-white/10 hover:border-raastas-light/50 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white mb-2">IT Services</h3>
              <p className="text-gray-300">
                From concept to deployment, we provide end-to-end software development for internal applications or market-ready products.
              </p>
            </div>
            <a href="#" className="text-raastas-light hover:text-raastas-accent transition-colors">
              Explore →
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
