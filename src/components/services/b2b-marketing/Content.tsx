import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const B2BMarketingContent = () => {
  const services = [
    {
      title: "Customized Campaigns",
      description: "Create personalized strategies that speak directly to your target audience.",
      image: "/lovable-uploads/52f10db3-a233-4ba9-b476-f62188eb573a.png"
    },
    {
      title: "Lead Nurturing",
      description: "Help potential customers move from initial interest to loyal clients. We help build trust and maintain relationships through consistent, targeted messaging that nurtures leads effectively.",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png"
    },
    {
      title: "Greater Credibility",
      description: "Build trust with industry-specific content and testimonials that your audience will relate to. Get your business position as a trusted partner in your field",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png"
    },
    {
      title: "Account-Based Marketing (ABM)",
      description: "Focus your efforts on high-value accounts with personalized outreach for better results. Turn business relationships into growth opportunities!",
      image: "/lovable-uploads/9f659de8-659a-495c-920a-e9de0d778968.png"
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

export default B2BMarketingContent;