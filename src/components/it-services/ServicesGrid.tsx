import { motion } from "framer-motion";

const services = [
  {
    icon: "/lovable-uploads/6dbd3fa1-99d3-4243-b904-34d11d028d11.png",
    title: "Custom Software Development",
    description: "Get custom software designed for your unique business needs. Automate processes, boost efficiency, and stay future-ready."
  },
  {
    icon: "/lovable-uploads/7d88d850-ba42-4d9f-86b1-2fbc859505d7.png",
    title: "IT Consulting & Advisory",
    description: "Got tech questions? We've got answers. Our experts provide practical solutions aligned with your goals."
  },
  {
    icon: "/lovable-uploads/6ebb0de0-ba23-470c-89db-388ac3f6c42c.png",
    title: "Digital Transformation",
    description: "Simplify your operations with upgraded digital tools. Work smarter, please your customers, and stay ahead."
  },
  // ... Add all other services with their respective icons
  {
    icon: "/lovable-uploads/23cbff75-2f14-4427-82b6-b58a4d0d60ff.png",
    title: "Software Testing & QA",
    description: "Ensure your software works perfectly through thorough testing and troubleshooting. Deliver a seamless user experience every time."
  },
  {
    icon: "/lovable-uploads/a6b6b733-ab9d-441d-9163-d31002dc04d7.png",
    title: "Data Analysis & Reporting",
    description: "Transform complex data into simple insights for smarter decisions. Unlock your data's full potential."
  },
  {
    icon: "/lovable-uploads/2cb559c4-2e06-418d-a2fa-7b83d87acf04.png",
    title: "IT Resource Management",
    description: "Maximize the value of your IT investments. Align people and technology for results without overspending."
  },
  {
    icon: "/lovable-uploads/352dd909-3af5-4e1c-aa21-88eb33c15d33.png",
    title: "Technical Support",
    description: "Tech Trouble? No Problem. Keep the business running and deal with your tech troubles in no time."
  },
  {
    icon: "/lovable-uploads/7a833953-7d9f-4249-b661-e8a0e1f07bcb.png",
    title: "Customer Experience Solutions",
    description: "Create more efficient, better customer contact to build loyalty. Get ahead of your competition so that your customers are satisfied."
  },
  {
    icon: "/lovable-uploads/16e4a4e4-f39d-4cc0-9630-e27d206856c4.png",
    title: "Infrastructure Management",
    description: "Ensure smooth, uninterrupted working on your servers and network."
  },
  {
    icon: "/lovable-uploads/f418294f-ed3e-4979-8173-588b7f031dc1.png",
    title: "Application Maintenance",
    description: "Helping keep your applications secure, up to date, and ready for change."
  },
  {
    icon: "/lovable-uploads/d2a2dad2-e31f-4373-b96f-b30be6ae5481.png",
    title: "Cybersecurity & Risk Management",
    description: "Protect your business from cyber threats with state-of-the-art security measures."
  },
  {
    icon: "/lovable-uploads/a8b1c73a-c266-4cc8-bd8f-d3d8ae64486a.png",
    title: "Compliance Support",
    description: "Ensure that your business meets all the regulatory requirements through expert compliance guidance."
  },
  {
    icon: "/lovable-uploads/c4e6d751-1b06-40ef-a3b5-766f5aa55861.png",
    title: "Software Maintenance",
    description: "Maintain your software in fantastic running conditions with timely updates and fixes."
  },
  {
    icon: "/lovable-uploads/efbd7c41-6a68-4a24-aeea-252601bc85eb.png",
    title: "Software Modernization",
    description: "Upgrade your legacy systems to modern standards. Make your software faster, safer, and future-proof."
  },
  {
    icon: "/lovable-uploads/24f636f6-5e79-405b-8063-24ffa7a4a885.png",
    title: "Software Consulting",
    description: "Get expert advice to make smart technology choices for your business."
  },
  {
    icon: "/lovable-uploads/d29314d9-5a68-488b-b9b9-f2a5e94521e0.png",
    title: "MVP Development",
    description: "We do this by launching the most crucial features of your product that will help validate the market."
  },
  {
    icon: "/lovable-uploads/1186c029-8b3a-484d-ab5b-fdc26fec5927.png",
    title: "Application Development",
    description: "Develop intuitive products that make real problems go away."
  },
  {
    icon: "/lovable-uploads/4b1b4fc5-2ff5-47bb-996b-f4941ae90398.png",
    title: "Data Development",
    description: "Develop smart secure databases to handle your data. The decisions are easy, just as everything is perfectly organized."
  }
];

const ServicesGrid = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">IT Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether it's system integration, network security, cloud services, or software development, we make sure your business runs smoothly, effectively, and safely.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-full h-full object-contain"
                    loading="lazy" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;