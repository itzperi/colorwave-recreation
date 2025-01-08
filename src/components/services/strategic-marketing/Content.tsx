import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const StrategicMarketingContent = () => {
  const services = [
    {
      title: "Expert Neuromarketing Insights",
      description: "Gain insights from specialists on applying neuroscience to your marketing efforts for better outcomes.",
      image: "/lovable-uploads/d05d3723-0231-4670-b83c-f84b575b67f7.png"
    },
    {
      title: "The Brain's Role in Consumer Behavior",
      description: "Understanding how the brain works is key to shaping consumer behavior from how people perceive your brand to their purchasing decisions.",
      quote: "Our strategies are not just data-driven; they're brain-driven.",
      image: "/lovable-uploads/63a868a6-b273-48ff-af18-0984b9bcd4de.png"
    },
    {
      title: "Differentiated Marketing Strategies",
      description: "Engaging consultants to customize personal marketing strategies for your brand vis-a-vis objectives and audience psyche.",
      subpoints: [
        "Create advertisements that would engage the audience and optimize digital content.",
        "Refine messages to be mighty and memorable."
      ],
      image: "/lovable-uploads/63a868a6-b273-48ff-af18-0984b9bcd4de.png"
    },
    {
      title: "Insights Into Behavior and Emotion",
      description: "Translating audience emotion, cognitive patterns, and shadowy subconscious behaviors into actionable insights.",
      subDescription: "Discover what captures their attention, trust, and makes them ready to act on behalf of your brand. These can give you a competitive edge in your market.",
      image: "/lovable-uploads/63a868a6-b273-48ff-af18-0984b9bcd4de.png"
    },
    {
      title: "Optimized Data-Driven",
      description: "Combine neuromarketing with analytics and improve campaigns. Use metrics, such as:",
      bulletPoints: [
        "Attention span",
        "Emotional responses",
        "Engagement patterns",
        "Use data-informed changes to maximize ROI"
      ],
      image: "/lovable-uploads/63a868a6-b273-48ff-af18-0984b9bcd4de.png"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.quote && (
                <p className="text-purple-600 font-semibold italic mb-4">
                  "{service.quote}"
                </p>
              )}
              {service.subpoints && (
                <ul className="space-y-2 mb-4">
                  {service.subpoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {service.bulletPoints && (
                <ul className="space-y-2 mb-4">
                  {service.bulletPoints.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-600 rounded-full" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              {service.subDescription && (
                <p className="text-gray-600">{service.subDescription}</p>
              )}
              <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1">
              <img
                src={service.image}
                alt={service.title}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StrategicMarketingContent;