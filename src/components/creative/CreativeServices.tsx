import { motion } from "framer-motion";

const services = [
  {
    icon: "/lovable-uploads/64d1e864-5c22-4eb8-8ee0-ad3945bb41c1.png",
    title: "Brand and Identity",
    description: "Your name is the face of your business. A strong brand identity contributes largely to trust, acceptance, and recognition."
  },
  {
    icon: "/lovable-uploads/64e8bed0-ec3b-4def-a5f3-54457f2e6ec3.png",
    title: "Business and Advertising",
    description: "We create presentations and advertising designs that leave a lasting impression, captivating your audience."
  },
  {
    icon: "/lovable-uploads/b1b642fb-86fd-47e6-a90e-c1f83b2ce4e5.png",
    title: "Packaging and Label",
    description: "We create packaging that serves as a powerful marketing tool, making your product stand out on shelves."
  },
  {
    icon: "/lovable-uploads/af89c7cd-6cd6-45fa-97be-87bc29b577c0.png",
    title: "Website & App",
    description: "We understand that your website and app are key to your digital presence, creating designs that connect."
  },
  {
    icon: "/lovable-uploads/8cede175-e477-4011-86fc-457c0f0191ba.png",
    title: "Social Media Design",
    description: "We create visuals and a unified brand identity that resonate with your audience and enhance your online presence."
  },
  {
    icon: "/lovable-uploads/34171f0d-c75f-4cb3-ae8e-f7cf41fc4f6a.png",
    title: "Illustration & Art",
    description: "We bring your ideas to life with imaginative and creative illustrations that connect with your audience."
  }
];

const CreativeServices = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Our Creative Services
        </motion.h2>
        
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
                <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
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

export default CreativeServices;