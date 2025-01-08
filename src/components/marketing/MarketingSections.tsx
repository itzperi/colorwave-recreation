import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MarketingSections = () => {
  const sections = [
    {
      title: "Strategic Marketing",
      description: "Growth and success can be unlocked through strategic marketing services personalized to the unique needs of your business.",
      link: "/services/strategic-marketing"
    },
    {
      title: "B2B Marketing",
      description: "Create campaigns that will foster longstanding business relationships. Help me reach those important clients to increase your business growth.",
      link: "/services/b2b-marketing"
    },
    {
      title: "Innovative Marketing",
      description: "Innovative marketing relies on modern technology and tools such as Artificial Intelligence, virtual reality (VR) technologies, augmented reality (AR) applications, and gamification to create up-to-date, original, and interactive campaigns that personalize experiences and maintain customer engagement.",
      link: "/services/innovative-marketing"
    },
    {
      title: "Targeted Marketing",
      description: "Specific marketing refers to the targeted strategy of your business; be it for the launch of products or events, maintaining customer loyalty, or disaster management, we are there to give a voice to your audience.",
      link: "/services/targeted-marketing"
    },
    {
      title: "Performance and Data-Driven Marketing",
      description: "It works with performance data-driven marketing in focusing on actual business results using targeted data-driven techniques.",
      link: "/services/performance-data-driven-marketing"
    },
    {
      title: "Communications",
      description: "Communication becomes blood, then oxygen leaves any reputable brand in everyday human life: oxygen because it is fresh, fluid, ever-present, while blood is for life and supplies nutrients.",
      link: "/services/communications"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Marketing Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of marketing services designed to help your business grow and succeed in today's competitive landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Link key={index} to={section.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingSections;
