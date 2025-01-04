import { motion } from "framer-motion";

const services = [
  {
    title: "Digital Marketing Strategy",
    description: "Comprehensive digital strategies tailored to your business goals",
    icon: "/lovable-uploads/34171f0d-c75f-4cb3-ae8e-f7cf41fc4f6a.png"
  },
  {
    title: "Search Engine Optimization",
    description: "Boost your online visibility and organic traffic",
    icon: "/lovable-uploads/384f3453-667d-40e8-bbef-516a16fc39c4.png"
  },
  {
    title: "Social Media Marketing",
    description: "Engage your audience across all social platforms",
    icon: "/lovable-uploads/62a845f7-9a6c-44f9-987e-7b1c3ac303fd.png"
  },
  {
    title: "Content Marketing",
    description: "Create valuable content that resonates with your audience",
    icon: "/lovable-uploads/64d1e864-5c22-4eb8-8ee0-ad3945bb41c1.png"
  }
];

const MarketingServices = () => {
  return (
    <div className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-4">Our Marketing Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          We offer comprehensive marketing solutions to help your business grow and succeed in the digital landscape.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MarketingServices;