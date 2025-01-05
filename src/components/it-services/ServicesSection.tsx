import { motion } from "framer-motion";

const services = [
  {
    icon: "/lovable-uploads/5bb7cebf-4b6f-4156-8cbe-971a6989f5f9.png",
    title: "Custom Software Development",
    description: "Get custom software designed for your unique business needs. Automate processes, boost efficiency, and stay future-ready. Let's create your tailored solution."
  },
  {
    icon: "/lovable-uploads/52d6937a-3978-4ee9-a1e0-124926fb26a3.png",
    title: "IT Consulting & Advisory",
    description: "Got tech questions? We've got answers. Our experts provide practical solutions aligned with your goals. Let's plan your next move."
  },
  // ... Add all other services with their respective icons
];

const ServicesSection = () => {
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
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Our extensive experience and dedication to quality enables us to help businesses like yours utilize technology for lasting growth and success. Collaborate with us to create a robust IT infrastructure that enhances productivity and keeps you ahead of your competitors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <img src={service.icon} alt={service.title} className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;