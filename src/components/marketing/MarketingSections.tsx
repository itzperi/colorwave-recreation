import { motion } from "framer-motion";

const MarketingSections = () => {
  const sections = [
    {
      title: "Strategic Marketing",
      description: "Growth and success can be unlocked through strategic marketing services personalized to the unique needs of your business. From B2B to B2C, we conceptualize customized campaigns according to your goals. Further leverage the insights, research into the market, and branding strategies to achieve more tangible and sustainable achievements. Ready for more? Let's make it happen!",
      services: [
        {
          icon: "/lovable-uploads/7b5df6a5-eebe-429d-a2f8-126a4a41ba57.png",
          title: "B2B Marketing",
          description: "Create campaigns that will foster longstanding business relationships. Help me reach those important clients to increase your business growth."
        },
        {
          icon: "/lovable-uploads/90dd2ef8-fdb5-457f-97cf-80603daa34d4.png",
          title: "B2C Marketing",
          description: "Focus your efforts on the right consumer audience with the appropriate strategy. Let's write B2C campaigns to customers who will convert into sales."
        },
        {
          icon: "/lovable-uploads/989b7975-db23-4503-82e3-1e42b855ba2a.png",
          title: "Market Research",
          description: "Understand your consumer and competitor edge. Let's sit together for an analytical review of data for understanding strategic marketing and business decisions."
        }
      ]
    },
    {
      title: "Innovative Marketing",
      description: "Innovative marketing relies on modern technology and tools such as Artificial Intelligence, virtual reality (VR) technologies, augmented reality (AR) applications, and gamification to create up-to-date, original, and interactive campaigns that personalize experiences and maintain customer engagement. We design such cutting-edge tactics that make your brand ahead of the competition and help visibility. You want to make innovations and fire up the raison d'etre? Let's develop your brand's future.",
      services: [
        {
          icon: "/lovable-uploads/d7783e04-215f-4a12-b779-3d7bb0d38f30.png",
          title: "AI Marketing",
          description: "Allow contemporary techniques to be included in intelligent AIs to organize a complete personalization campaign as well as automation and always ensure customer engagement is at an all-time high."
        },
        {
          icon: "/lovable-uploads/a8854b21-250e-4aa0-aaa6-f6fad5fc1472.png",
          title: "Chatbot Marketing",
          description: "Talk with your customers and give answers and accessible transactions within the best effective use of a chat-bot to get through them any time you want."
        },
        {
          icon: "/lovable-uploads/f8ef87fa-d03f-42b9-af65-0c4931343998.png",
          title: "Virtual Reality Marketing",
          description: "Building immersive and interactive experiences beyond the promises of bringing your audience into action as active parts of your organization in terms of brand engagement-they happen by coming in virtual reality."
        }
      ]
    },
    {
      title: "Targeted Marketing",
      description: "Specific marketing refers to the targeted strategy of your business; be it for the launch of products or events, maintaining customer loyalty, or disaster management, we are there to give a voice to your audience. Making possible and long-lasting successful events and strengthening bonds with your brand so found will, however, need to be customized to your brand.",
      services: [
        {
          icon: "/lovable-uploads/3bfd031b-d366-498f-bdf2-9ffc21a055b4.png",
          title: "Event Marketing",
          description: "Organize and promote memorable events of every type-from exhibitions to webinars-give your audience a real show and leave an everlasting memory."
        },
        {
          icon: "/lovable-uploads/0ac6a20b-47b6-44c8-a745-b90c74ef17df.png",
          title: "Experiential Marketing",
          description: "Make or bring memories strong and emotional with your audience, have them experience once-in-a-lifetime experiences that would lead to the ultimate sealing of their brand."
        },
        {
          icon: "/lovable-uploads/5f257e48-5bbe-441d-aabe-7fcdde89c618.png",
          title: "Seasonal Marketing",
          description: "Season waves create engaging and brilliant marketing avenues with which traffic will come to your doorstep and help with visibility for the brand. Let's package your brand for such times of the year"
        }
      ]
    },
    {
      title: "Performance and Data-Driven marketing",
      description: "It works with performance data-driven marketing in focusing on actual business results using targeted data-driven techniques. By performance metrics, we help businesses drive leads, sales, and other key goals. What our approach ensures is having every decision influenced by actionable insights, which allow you to optimize and grow with precision. Do you want to maximize the ROI and scale your business efficiently? Let's leverage data for your marketing goals.",
      services: [
        {
          icon: "/lovable-uploads/91523538-ccf8-4762-97ba-223ee64ce64f.png",
          title: "Performance Marketing",
          description: "Deliver tangible results focused on campaigns that do yield results but targeted at specific performance metrics such as leads, conversions, and sales. Let us defy logic today."
        },
        {
          icon: "/lovable-uploads/3f62546b-d7af-4b9c-b900-903964d1d0d9.png",
          title: "Conversion Rate Optimization (CRO)",
          description: "To improve and optimize the user experience on the site; better operation will produce even more conversions. Convert more visitors into new customers with proven strategies."
        }
      ]
    },
    {
      title: "Communications",
      description: "Communication becomes blood, then oxygen leaves any reputable brand in everyday human life: oxygen because it is fresh, fluid, ever-present, while blood is for life and supplies nutrients. So our communications will carry that message through every possible means that may lead to that point. Let us help you build your brand voice and create those long-lived relationships for success with your audience",
      services: [
        {
          icon: "/lovable-uploads/730d71d9-bb3a-411c-b898-dd3bfb8a18b9.png",
          title: "Integrated Communications",
          description: "Align all communications across platforms for maximum efficiency in mutual connections."
        },
        {
          icon: "/lovable-uploads/d0522009-f643-4739-8a94-875cbf3cece8.png",
          title: "Online Reputation Management",
          description: "Secure and replenish the online space of your brand to ensure it is perceived positively across all digital platforms."
        }
      ]
    }
  ];

  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">{section.title}</h2>
            <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
              {section.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.services.map((service, serviceIndex) => (
                <motion.div
                  key={serviceIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: serviceIndex * 0.1 }}
                  className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white"
                >
                  <div className="flex items-start space-x-4">
                    <img src={service.icon} alt={service.title} className="w-8 h-8" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MarketingSections;