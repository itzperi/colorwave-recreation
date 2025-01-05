import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Software Development",
    description: "Get custom software designed for your unique business needs. Automate processes, boost efficiency, and stay future-ready.",
    icon: "/lovable-uploads/682e2628-8982-457e-bcd5-14da6e1ba702.png"
  },
  {
    title: "IT Consulting & Advisory",
    description: "Got tech questions? We've got answers. Our experts provide practical solutions aligned with your goals.",
    icon: "/lovable-uploads/99ca5c73-8827-4813-9d69-f24a676ca62a.png"
  },
  {
    title: "Digital Transformation",
    description: "Simplify your operations with upgraded digital tools. Work smarter, please your customers, and stay ahead.",
    icon: "/lovable-uploads/7611591d-2dc5-44c8-bca3-eb95ee9c626c.png"
  },
  {
    title: "Software Testing & QA",
    description: "Ensure your software works perfectly through thorough testing and troubleshooting. Deliver a seamless user experience every time.",
    icon: "/lovable-uploads/caf6ecaf-ef05-4f31-bfb6-7f76a23f4ede.png"
  },
  {
    title: "Data Analysis & Reporting",
    description: "Transform complex data into simple insights for smarter decisions. Unlock your data's full potential.",
    icon: "/lovable-uploads/16b28162-ea63-4db8-86d7-020cf2d01327.png"
  },
  {
    title: "IT Resource Management",
    description: "Maximize the value of your IT investments. Align people and technology for results without overspending.",
    icon: "/lovable-uploads/8e842680-8995-49db-bad7-74ca00c00755.png"
  },
  {
    title: "Technical Support",
    description: "Tech Trouble? No Problem. Keep the business running and deal with your tech troubles in no time.",
    icon: "/lovable-uploads/1fffd19f-74c1-4c42-8a88-c8d37ff34b96.png"
  },
  {
    title: "Customer Experience Solutions",
    description: "Create more efficient, better customer contact to build loyalty. Get ahead of your competition so that your customers are satisfied.",
    icon: "/lovable-uploads/e933190d-6bb7-4cbf-9723-32a76850ddf0.png"
  },
  {
    title: "Infrastructure Management",
    description: "Ensure smooth, uninterrupted working on your servers and network. Let's focus growing your business, we'll take good care of the technology.",
    icon: "/lovable-uploads/37ca6f9f-6fca-4f6e-b3c0-6ce632895d94.png"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our IT Services</h2>
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
                  <img src={service.icon} alt={service.title} className="w-full h-full object-contain" />
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