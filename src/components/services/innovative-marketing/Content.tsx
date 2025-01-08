import { motion } from "framer-motion";

const InnovativeMarketingContent = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Innovative Marketing Strategies</h2>
            <p className="text-gray-600 mb-4">
              Our innovative marketing solutions leverage cutting-edge technologies and creative approaches to help your business stand out in today's digital landscape.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="text-purple-600">→</span>
                <span>AI-Powered Marketing Solutions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">→</span>
                <span>Virtual Reality Campaigns</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600">→</span>
                <span>Interactive Content Experiences</span>
              </li>
            </ul>
          </div>
          <div>
            <img 
              src="/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png"
              alt="Innovative Marketing"
              className="rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InnovativeMarketingContent;