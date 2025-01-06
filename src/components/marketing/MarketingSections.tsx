import { motion } from "framer-motion";

// Neuromarketing Section
const NeuroMarketingSection = () => {
  const services = [
    {
      icon: "/lovable-uploads/2ebdd986-410e-4ca7-90a6-e1d622383135.png",
      title: "Neuromarketing Consultation",
      description: "Get the benefit of experts' insights into how to apply neuroscience in your marketing strategies for improved results."
    },
    {
      icon: "/lovable-uploads/48d69a05-c7f0-4e25-a426-ddbb5b613149.png",
      title: "Neuromarketing Research",
      description: "Apply the latest research methodologies and understand consumer behavior to design a better marketing strategy."
    },
    {
      icon: "/lovable-uploads/8269aebb-8212-4c38-8f35-b65285d8f11b.png",
      title: "Neuro Optimization",
      description: "Make your campaigns efficient with neuro-optimized campaigns to reach better results."
    },
    {
      icon: "/lovable-uploads/63a43ba4-a302-430d-9946-0d912fdf4fdd.png",
      title: "Neuro-Advertising",
      description: "Design advertisements creating a better appeal to the consumers' innermost truths, tapping deep into their subconscious to present or sell your product."
    },
    {
      icon: "/lovable-uploads/495dc087-8424-4a92-b954-7f0e43458af4.png",
      title: "Neuro-branding",
      description: "Connect the brand to the emotional side of the audience by applying neuroscientific principles."
    },
    {
      icon: "/lovable-uploads/6702460b-b9ac-494d-9e47-a1370fab37f9.png",
      title: "Neuro-Designing",
      description: "Prepare marketing pieces with efficient better marketing efforts appealing to the brains' decision-making processes."
    },
    {
      icon: "/lovable-uploads/2329ac09-5e2d-4843-98d2-a09d4248d519.png",
      title: "Neuro Testing",
      description: "Test your campaigns with neuroscience tools to understand emotional reactions and tweak your campaigns."
    },
    {
      icon: "/lovable-uploads/a87a71de-4969-4b74-bb73-4a4e4b4cb396.png",
      title: "Neuro Sales",
      description: "Use neuromarketing techniques to perfect the sales process and at the same time achieve conversion improvement and growth."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-4">Neuromarketing</h2>
        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
          Neuromarketing integrates with modern neuroscience to contribute to understanding consumer behaviors for improving marketing activities. 
          With sophisticated techniques, we will assist you in delivering emotionally resonant campaigns targeting a mass audience. With that brain data, 
          we formulate very optimized experiences which translate into great conversions and solid brand bonding. Are you ready to meet your audience at 
          their subconscious? Discover the nuances of neuromarketing that take your brand higher and sell more.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
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
      </motion.div>
    </div>
  );
};

// Digital Marketing Section
const DigitalMarketingSection = () => {
  const services = [
    {
      icon: "/lovable-uploads/7d973fdc-ee5a-4475-b728-8caf2e3c8a6e.png",
      title: "Search Engine Optimization (SEO)",
      description: "SEO increases your visibility to attract visitors to your website who are searching for relevantes keywords. Let's help you rank higher and gain more customers."
    },
    {
      icon: "/lovable-uploads/3e92ca25-f334-429f-9fd4-4513a81e941d.png",
      title: "Pay-Per-Click Advertising (PPC)",
      description: "PPC brings instant traffic and web exposure with different kinds of targeted advertising either on Google or social media platforms. Let's set your ads up to give you the best return on investment"
    },
    // Add more digital marketing services here
  ];

  return (
    <div className="py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-4">Digital Marketing</h2>
        <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
          Digital Marketing plays the key role of visibility on the brand and growth in business. This has followed total marketing strategies, 
          from Search Engine Optimization (SEO) to Pay-Per-Click (PPC). There are many different channels that could be adapted to improve brand 
          engagement and boost revenues. We understand the digital touch points continually evolving and thus touch on the marks important to your 
          brand target audience. Do you need to go ahead in a digital world or have some tangible results? Let's go together to take your brand to the next level.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
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
      </motion.div>
    </div>
  );
};

const MarketingSections = () => {
  return (
    <>
      <NeuroMarketingSection />
      <DigitalMarketingSection />
    </>
  );
};

export default MarketingSections;