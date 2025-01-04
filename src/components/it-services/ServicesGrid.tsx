import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Software Development",
    description: "Get custom software designed for your unique business needs. Automate processes, boost efficiency, and stay future-ready.",
    icon: "/lovable-uploads/fd0e5d9f-8d22-4096-badb-e989c3ca3f22.png"
  },
  {
    title: "IT Consulting & Advisory",
    description: "Got tech questions? We've got answers. Our experts provide practical solutions aligned with your goals.",
    icon: "/lovable-uploads/ec109d9c-26a1-4970-a8bb-d931efa8be1b.png"
  },
  {
    title: "Digital Transformation",
    description: "Simplify your operations with upgraded digital tools. Work smarter, please your customers, and stay ahead.",
    icon: "/lovable-uploads/34171f0d-c75f-4cb3-ae8e-f7cf41fc4f6a.png"
  },
  {
    title: "Software Testing & QA",
    description: "Ensure your software works perfectly through thorough testing and troubleshooting. Deliver a seamless user experience every time.",
    icon: "/lovable-uploads/64d1e864-5c22-4eb8-8ee0-ad3945bb41c1.png"
  },
  {
    title: "Data Analysis & Reporting",
    description: "Transform complex data into simple insights for smarter decisions. Unlock your data's full potential.",
    icon: "/lovable-uploads/96b118a2-83e2-4095-a55d-455d4f561a63.png"
  },
  {
    title: "IT Resource Management",
    description: "Maximize the value of your IT investments. Align people and technology for results without overspending.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Technical Support",
    description: "Tech Trouble? No Problem. Keep the business running and deal with your tech troubles in no time.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Customer Experience Solutions",
    description: "Create more efficient, better customer contact to build loyalty. Get ahead of your competition so that your customers are satisfied.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Infrastructure Management",
    description: "Ensure smooth, uninterrupted working on your servers and network. We'll take good care of the technology.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Managed IT Support",
    description: "Work on growth, not on downtime. Maintain your system 24/7 using reliable IT management.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Application Maintenance",
    description: "Helping keep your applications secure, up to date, and ready for change.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Cybersecurity & Risk Management",
    description: "Protect your business from cyber threats with state-of-the-art security measures.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Compliance Support",
    description: "Ensure that your business meets all the regulatory requirements through expert compliance guidance.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Software Maintenance",
    description: "Maintain your software in fantastic running conditions with timely updates and fixes.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Software Modernization",
    description: "Upgrade your legacy systems to modern standards. Make your software faster, safer, and future-proof.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Software Consulting",
    description: "Get expert advice to make smart technology choices for your business.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "MVP Development",
    description: "Launch the most crucial features of your product that will help validate the market.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Application Development",
    description: "Develop intuitive products that make real problems go away.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "API Development",
    description: "Connect systems. Simplify processes with great APIs.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
  },
  {
    title: "Data Development",
    description: "Develop smart secure databases to handle your data.",
    icon: "/lovable-uploads/ebd16fdb-78a7-4e2a-a918-fd84d21a87ce.png"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row items-start gap-4">
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

export default ServicesGrid;
