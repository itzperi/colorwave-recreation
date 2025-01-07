import { motion } from "framer-motion";

const services = [
  {
    icon: "/lovable-uploads/b72bef5d-7070-4fc0-86bd-6932d3f0b4f1.png",
    title: "Custom Software Development",
    description: "Get custom software designed for your unique business needs. Automate processes, boost efficiency, and stay future-ready. Let's create your tailored solution."
  },
  {
    icon: "/lovable-uploads/9021b316-1198-4845-a2ef-1400f0ae4abc.png",
    title: "IT Consulting & Advisory",
    description: "Got tech questions? We’ve got answers. Our experts provide practical solutions aligned with your goals. Let’s plan your next move."
  },
  {
    icon: "/lovable-uploads/88f4137c-53e1-45f0-91e1-e9d408be6f00.png",
    title: "Digital Transformation",
    description: "Simplify your operations with upgraded digital tools. Work smarter, please your customers, and stay ahead. Start your upgrade now"
  },
  {
    icon: "/lovable-uploads/fbd0669f-0a37-4e99-a16e-7d6959c3556a.png",
    title: "Software Testing & QA",
    description: "Ensure your software works perfectly through thorough testing and troubleshooting. Deliver a seamless user experience every time. Let's perfect your product."
  },
  {
    icon: "/lovable-uploads/8d7be412-8abf-4862-ac1a-450e819e9f2c.png",
    title: "Data Analysis & Reporting",
    description: "Transform complex data into simple insights for smarter decisions. Unlock your data's full potential. Start making informed choices today"
  },
  {
    icon: "/lovable-uploads/af0e82ab-db2e-43f1-902b-ce2ef3fcdf84.png",
    title: "IT Resource Management",
    description: "Maximize the value of your IT investments. Align people and technology for results without overspending. Let's make every dollar count."
  },
  {
    icon: "/lovable-uploads/4d848b18-b062-482e-8d1f-de3c3b57638c.png",
    title: "Technical Support",
    description: "Tech Trouble? No Problem. Keep the business running and deal with your tech troubles in no time. Let's end the stress today"
  },
  {
    icon: "/lovable-uploads/73b069b9-a71d-47a7-8068-96809805d4bc.png",
    title: "Customer Experience Solutions",
    description: "Create more efficient, better customer contact to build loyalty. Get ahead of your competition so that your customers are satisfied. Let's improve it."
  },
  {
    icon: "/lovable-uploads/4c7dddfb-205e-46eb-861e-3cfc11a15d4d.png",
    title: "Infrastructure Management",
    description: "Ensure smooth, uninterrupted working on your servers and network. Let's focus growing your business; we'll take good care of the technology. Have smooth operation."
  },
  {
    icon: "/lovable-uploads/Hello.png",
    title: "Managed IT Support",
    description: "Work on growth, not on downtime. Maintain your system 24/7 using reliable IT management. Go back to running things now. From increased security to easy IT management, we'll help you get there. Let's take care of the technology."
  },
  {
    icon: "/lovable-uploads/c4121a6c-f059-4f11-97ac-9a7360157711.png",
    title: "Application Maintenance",
    description: "Helping keep your applications secure, up to date, and ready for change. Your tools grow with your business. Let's enable your applications."
  },
  {
    icon: "/lovable-uploads/c75b09ee-6ee4-43fe-9350-53f3a541d442.png",
    title: "Cybersecurity & Risk Management",
    description: "Protect your business from cyber threats with state-of-the-art security measures. Work confidently in a safe environment. Let's secure your assets today."
  },
  {
    icon: "/lovable-uploads/6b0c5e68-3438-4141-8aaf-fc42ae05d310.png",
    title: "Compliance Support",
    description: "Ensure that your business meets all the regulatory requirements through expert compliance guidance. Keep secure, avoid risks, and focus on growth. Let's keep you compliant."
  },
  {
    icon: "/lovable-uploads/fa20076b-5883-4633-8aa1-4e984e06a91c.png",
    title: "Software Maintenance",
    description: "Maintain your software in fantastic running conditions with timely updates and fixes. Get ahead by tools that work wonderfully day after day. Let's keep things on track."
  },
  {
    icon: "/lovable-uploads/e9dc3a9d-4eb5-4bb4-8cdd-5af902113997.png",
    title: "Software Modernization",
    description: "Upgrade your legacy systems to modern standards. Make your software faster, safer, and future-proof. Start your upgrade journey now."
  },
  {
    icon: "/lovable-uploads/929eb487-796b-440d-99e3-207478a63c6b.png",
    title: "Software Consulting",
    description: "Get expert advice to make smart technology choices for your business. We guide you toward better results and smoother processes. Let's find your path forward."
  },
  {
    icon: "/lovable-uploads/67efc73a-3f76-4140-ba70-3e62583df30a.png",
    title: "MVP Development",
    description: "We do this by launching the most crucial features of your product that will help validate the market, validate ideas, and build confidence in scaling up.Bring your vision into life."
  },
  {
    icon: "/lovable-uploads/28f75365-7c1f-422c-805d-c69791caca8b.png",
    title: "Application Development",
    description: "Develop intuitive products that make real problems go away. We develop applications-from mobile to desktop-that connect people and businesses. Let's create something amazing."
  },
  {
    icon: "/lovable-uploads/S1.png",
    title: "API Development",
    description: "Connect systems. Simplify processes with great APIs. Make data sharing easier and more secure. Let's improve your connectivity today."
  },
  {
    icon: "/lovable-uploads/S2.png",
    title: "Data Development",
    description: "Develop smart secure databases to handle your data. The decisions are easy, just as everything is perfectly organized. Let's make it simple for your data right now. "
  }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 px-5 py-5">IT Services</h2>
          <p className="text-gray-600 max-w-3xl mx-auto pz-5">
            Whether it's system integration, network security, cloud services, or software development, we make sure your business runs smoothly, effectively, and safely.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 pz-5">
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
