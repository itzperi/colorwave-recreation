import { motion } from "framer-motion";
import { 
  Database, Code, Smartphone, Server, Shield, Users,
  Settings, Terminal, FileCode, BarChart, Network, Lock,
  MonitorSmartphone, Cog, Download, FileJson, Api, HardDrive
} from "lucide-react";

const ITServices = () => {
  const services = [
    {
      icon: <Code />,
      title: "Custom Software Development",
      description: "Get custom software designed for your unique business needs. Automate processes, boost efficiency, and stay future-ready. Let's create your tailored solution."
    },
    {
      icon: <Users />,
      title: "IT Consulting & Advisory",
      description: "Got tech questions? We've got answers. Our experts provide practical solutions aligned with your goals. Let's plan your next move."
    },
    {
      icon: <Smartphone />,
      title: "Digital Transformation",
      description: "Simplify your operations with upgraded digital tools. Work smarter, please your customers, and stay ahead. Start your upgrade now."
    },
    {
      icon: <Terminal />,
      title: "Software Testing & QA",
      description: "Ensure your software works perfectly through thorough testing and troubleshooting. Deliver a seamless user experience every time. Let's perfect your product."
    },
    {
      icon: <BarChart />,
      title: "Data Analysis & Reporting",
      description: "Transform complex data into simple insights for smarter decisions. Unlock your data's full potential. Start making informed choices today."
    },
    {
      icon: <Settings />,
      title: "IT Resource Management",
      description: "Maximize the value of your IT investments. Align people and technology for results without overspending. Let's make every dollar count."
    },
    {
      icon: <Server />,
      title: "Technical Support",
      description: "Tech Trouble? No Problem. Keep the business running and deal with your tech troubles in no time. Let's end the stress today."
    },
    {
      icon: <Users />,
      title: "Customer Experience Solutions",
      description: "Create more efficient, better customer contact to build loyalty. Get ahead of your competition so that your customers are satisfied. Let's improve it."
    },
    {
      icon: <Network />,
      title: "Infrastructure Management",
      description: "Ensure smooth, uninterrupted working on your servers and network. Let's focus growing your business, we'll take good care of the technology. Have smooth operation."
    },
    {
      icon: <Cog />,
      title: "Managed IT Support",
      description: "Work on growth, not on downtime. Maintain your system 24/7 using reliable IT management. Go back to running things now. From increased security to easy IT management, we'll help you get there. Let's take care of the technology."
    },
    {
      icon: <MonitorSmartphone />,
      title: "Application Maintenance",
      description: "Helping keep your applications secure, up to date, and ready for change. Your tools grow with your business. Let's enable your applications."
    },
    {
      icon: <Shield />,
      title: "Cybersecurity & Risk Management",
      description: "Protect your business from cyber threats with state-of-the-art security measures. Work confidently in a safe environment. Let's secure your assets today."
    },
    {
      icon: <Lock />,
      title: "Compliance Support",
      description: "Ensure that your business meets all the regulatory requirements through expert compliance guidance. Keep secure, avoid risks, and focus on growth. Let's keep you compliant."
    },
    {
      icon: <Download />,
      title: "Software Maintenance",
      description: "Maintain your software in fantastic running conditions with timely updates and fixes. Get ahead by tools that work wonderfully day after day. Let's keep things on track."
    },
    {
      icon: <FileCode />,
      title: "Software Modernization",
      description: "Upgrade your legacy systems to modern standards. Make your software faster, safer, and future-proof. Start your upgrade journey now."
    },
    {
      icon: <Settings />,
      title: "Software Consulting",
      description: "Get expert advice to make smart technology choices for your business. We guide you toward better results and smoother processes. Let's find your path forward."
    },
    {
      icon: <Database />,
      title: "MVP Development",
      description: "We do this by launching the most crucial features of your product that will help validate the market, validate ideas, and build confidence in scaling up.Bring your vision into life."
    },
    {
      icon: <FileJson />,
      title: "Application Development",
      description: "Develop intuitive products that make real problems go away. We develop applications-from mobile to desktop-that connect people and businesses. Let's create something amazing."
    },
    {
      icon: <Api />,
      title: "API Development",
      description: "Connect systems. Simplify processes with great APIs. Make data sharing easier and more secure. Let's improve your connectivity today."
    },
    {
      icon: <HardDrive />,
      title: "Data Development",
      description: "Develop smart secure databases to handle your data. The decisions are easy, just as everything is perfectly organized. Let's make it simple for your data right now."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section className="relative">
      {/* Hero Section */}
      <div 
        className="min-h-screen bg-cover bg-center relative"
        style={{ 
          backgroundImage: `url('/lovable-uploads/29495d47-d464-4a6a-b453-72f50e4f74f5.png')`
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Whether it's system integration, network security, cloud services, or software development, 
              we make sure your business runs smoothly, effectively, and safely.
            </p>
            <p className="text-gray-300">
              Our extensive experience and dedication to quality enable us to help businesses like yours utilize 
              technology for lasting growth and success. Collaborate with us to create a robust IT infrastructure 
              that enhances productivity and keeps you ahead of your competitors.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our IT Services
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-purple-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ITServices;