import { motion } from "framer-motion";

const services = [
  {
    icon: "/lovable-uploads/b72bef5d-7070-4fc0-86bd-6932d3f0b4f1.png",
    title: "Custom Software Development",
    description: "Get custom software designed for your unique business needs. Automate processes, boost efficiency, and stay future-ready."
  },
  {
    icon: "/lovable-uploads/9021b316-1198-4845-a2ef-1400f0ae4abc.png",
    title: "IT Consulting & Advisory",
    description: "Got tech questions? We've got answers. Our experts provide practical solutions aligned with your goals."
  },
  {
    icon: "/lovable-uploads/88f4137c-53e1-45f0-91e1-e9d408be6f00.png",
    title: "Digital Transformation",
    description: "Simplify your operations with upgraded digital tools. Work smarter, please your customers, and stay ahead."
  },
  {
    icon: "/lovable-uploads/fbd0669f-0a37-4e99-a16e-7d6959c3556a.png",
    title: "Software Testing & QA",
    description: "Ensure your software works perfectly through thorough testing and troubleshooting."
  },
  {
    icon: "/lovable-uploads/8d7be412-8abf-4862-ac1a-450e819e9f2c.png",
    title: "Data Analysis & Reporting",
    description: "Transform complex data into simple insights for smarter decisions."
  },
  {
    icon: "/lovable-uploads/af0e82ab-db2e-43f1-902b-ce2ef3fcdf84.png",
    title: "IT Resource Management",
    description: "Maximize the value of your IT investments. Align people and technology for results."
  },
  {
    icon: "/lovable-uploads/4d848b18-b062-482e-8d1f-de3c3b57638c.png",
    title: "Technical Support",
    description: "Tech Trouble? No Problem. Keep your business running smoothly."
  },
  {
    icon: "/lovable-uploads/73b069b9-a71d-47a7-8068-96809805d4bc.png",
    title: "Customer Experience Solutions",
    description: "Create more efficient, better customer contact to build loyalty."
  },
  {
    icon: "/lovable-uploads/4c7dddfb-205e-46eb-861e-3cfc11a15d4d.png",
    title: "Infrastructure Management",
    description: "Ensure smooth, uninterrupted working on your servers and network."
  },
  {
    icon: "/lovable-uploads/c4121a6c-f059-4f11-97ac-9a7360157711.png",
    title: "Application Maintenance",
    description: "Helping keep your applications secure, up to date, and ready for change."
  },
  {
    icon: "/lovable-uploads/c75b09ee-6ee4-43fe-9350-53f3a541d442.png",
    title: "Cybersecurity & Risk Management",
    description: "Protect your business from cyber threats with state-of-the-art security."
  },
  {
    icon: "/lovable-uploads/6b0c5e68-3438-4141-8aaf-fc42ae05d310.png",
    title: "Compliance Support",
    description: "Ensure your business meets all regulatory requirements through expert guidance."
  },
  {
    icon: "/lovable-uploads/fa20076b-5883-4633-8aa1-4e984e06a91c.png",
    title: "Software Maintenance",
    description: "Maintain your software in fantastic running conditions with timely updates."
  },
  {
    icon: "/lovable-uploads/e9dc3a9d-4eb5-4bb4-8cdd-5af902113997.png",
    title: "Software Modernization",
    description: "Upgrade your legacy systems to modern standards. Make your software future-proof."
  },
  {
    icon: "/lovable-uploads/929eb487-796b-440d-99e3-207478a63c6b.png",
    title: "Software Consulting",
    description: "Get expert advice to make smart technology choices for your business."
  },
  {
    icon: "/lovable-uploads/67efc73a-3f76-4140-ba70-3e62583df30a.png",
    title: "MVP Development",
    description: "Launch the most crucial features of your product to validate the market."
  },
  {
    icon: "/lovable-uploads/28f75365-7c1f-422c-805d-c69791caca8b.png",
    title: "Application Development",
    description: "Develop intuitive products that make real problems go away."
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
          <p className="text-gray-600 max-w-3xl mx-auto mt-4">
            Our extensive experience and dedication to quality enables us to help businesses like yours utilize technology for lasting growth and success. Collaborate with us to create a robust IT infrastructure that enhances productivity and keeps you ahead of your competitors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
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